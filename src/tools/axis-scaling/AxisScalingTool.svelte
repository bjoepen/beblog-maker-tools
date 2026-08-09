<script lang="ts">
  import ToolHeader from '../../components/ToolHeader.svelte';
  import ResultRow from '../../components/ResultRow.svelte';
  import FormulaDisclosure from '../../components/FormulaDisclosure.svelte';
  import { calculateAxisScaling } from '../../core/calculations/axisScaling';
  import { parseDecimal, formatNumber } from '../../core/formatting/numbers';

  let driveType: 'belt' | 'spindle' = 'belt';
  let outputProfile: 'standard' | 'estlcam' = 'standard';
  let axis = 'X';
  let steps = '200';
  let microstepping = '16';
  let pitch = '3';
  let pulleyTeeth = '20';
  let lead = '5';

  $: motorSteps = parseDecimal(steps);
  $: micro = parseDecimal(microstepping);
  $: drive = driveType === 'belt'
    ? { type: 'belt' as const, pitch: parseDecimal(pitch), pulleyTeeth: parseDecimal(pulleyTeeth) }
    : { type: 'spindle' as const, lead: parseDecimal(lead) };
  $: driveValues = drive.type === 'belt' ? [drive.pitch, drive.pulleyTeeth] : [drive.lead];
  $: valid = [motorSteps, micro, ...driveValues].every((v) => Number.isFinite(v) && v > 0);
  $: result = valid ? calculateAxisScaling({ fullStepsPerRevolution: motorSteps, microstepping: micro, drive }) : null;
</script>

<ToolHeader title="Achsskalierung" description="Physikalische Achsskalierung mit zielsystemspezifischer Ausgabe." />

<div class="segmented" aria-label="Ausgabeprofil">
  <button class:active={outputProfile === 'standard'} on:click={() => outputProfile = 'standard'}>GRBL / LinuxCNC</button>
  <button class:active={outputProfile === 'estlcam'} on:click={() => outputProfile = 'estlcam'}>Estlcam</button>
</div>

<div class="tool-grid">
  <section class="panel">
    <h2>Eingaben</h2>
    <div class="segmented compact">
      <button class:active={driveType === 'belt'} on:click={() => driveType = 'belt'}>Zahnriemen</button>
      <button class:active={driveType === 'spindle'} on:click={() => driveType = 'spindle'}>Spindel</button>
    </div>
    <div class="field-grid">
      <label>Motorschritte/U <span><input bind:value={steps} inputmode="decimal" /></span></label>
      <label>Microstepping <span><input bind:value={microstepping} inputmode="decimal" /></span></label>
      {#if driveType === 'belt'}
        <label>Zahnteilung <span><input bind:value={pitch} inputmode="decimal" /> mm</span></label>
        <label>Riemenscheibe <span><input bind:value={pulleyTeeth} inputmode="decimal" /> Zähne</span></label>
      {:else}
        <label>Spindelsteigung <span><input bind:value={lead} inputmode="decimal" /> mm/U</span></label>
      {/if}
    </div>
    {#if !valid}<p class="validation">Bitte nur Werte größer als 0 eingeben.</p>{/if}
  </section>

  <section class="panel result-panel">
    <h2>Physikalisches Ergebnis</h2>
    <ResultRow label="Weg pro Motorumdrehung" value={result ? formatNumber(result.travelPerRevolution, 6) : '—'} unit="mm" />
    <ResultRow label="Microsteps pro Umdrehung" value={result ? formatNumber(result.microstepsPerRevolution, 0) : '—'} />
    <ResultRow label="Steps / Impulse pro mm" value={result ? formatNumber(result.stepsPerMillimeter, 6) : '—'} emphasize />
    <ResultRow label="Theoretische Wegauflösung" value={result ? formatNumber(result.theoreticalResolution, 6) : '—'} unit="mm/Step" />
  </section>
</div>

{#if outputProfile === 'standard'}
  <section class="panel controller-panel">
    <div class="controller-heading">
      <div><p class="eyebrow">Zielsystem</p><h2>GRBL / grblHAL & LinuxCNC</h2></div>
      <label class="axis-select">Achse <select bind:value={axis}><option>X</option><option>Y</option><option>Z</option><option>A</option></select></label>
    </div>
    <div class="controller-grid">
      <div><h3>GRBL / grblHAL</h3><code>${axis === 'X' ? '100' : axis === 'Y' ? '101' : axis === 'Z' ? '102' : '10x'} = {result ? result.stepsPerMillimeter.toFixed(6) : '—'}</code></div>
      <div><h3>LinuxCNC</h3><code>STEP_SCALE = {result ? result.stepsPerMillimeter.toFixed(6) : '—'}<br />position-scale = {result ? result.stepsPerMillimeter.toFixed(6) : '—'}</code></div>
    </div>
  </section>
{:else}
  <section class="panel estlcam-panel">
    <p class="eyebrow">Eigenes Zielprofil</p>
    <h2>Estlcam</h2>
    <p>Der Estlcam-Modus ist in Build 001 architektonisch vorbereitet, wird aber bewusst noch nicht mit einer ungesicherten Feldzuordnung befüllt.</p>
    <p class="status-note"><strong>Foundation-Regel:</strong> Erst nach Verifikation der realen Estlcam-Eingabefelder und Rechenlogik werden übertragbare Einstellwerte angezeigt.</p>
  </section>
{/if}

<FormulaDisclosure>
  <p>Standardprofil: Steps/mm = (Motorschritte/U × Microstepping) ÷ Weg pro Umdrehung.</p>
  <p>Beim Riemenantrieb ist der Weg pro Umdrehung Teilung × Zähnezahl der Riemenscheibe; bei einer Spindel entspricht er der Steigung.</p>
</FormulaDisclosure>
