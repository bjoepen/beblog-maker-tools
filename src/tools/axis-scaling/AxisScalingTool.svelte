<script lang="ts">
  import ToolHeader from '../../components/ToolHeader.svelte';
  import ResultRow from '../../components/ResultRow.svelte';
  import FormulaDisclosure from '../../components/FormulaDisclosure.svelte';
  import FieldRow from '../../components/FieldRow.svelte';
  import { calculateAxisScaling } from '../../core/calculations/axisScaling';
  import { parseDecimal, formatNumber } from '../../core/formatting/numbers';

  let driveType: 'belt' | 'spindle' = 'belt';
  let axis = 'X';
  let steps = '200';
  let microstepping = '16';
  let pitch = '3';
  let pulleyTeeth = '20';
  let lead = '5';

  function reset() {
    driveType = 'belt'; axis = 'X'; steps = '200'; microstepping = '16'; pitch = '3'; pulleyTeeth = '20'; lead = '5';
  }

  $: motorSteps = parseDecimal(steps);
  $: micro = parseDecimal(microstepping);
  $: drive = driveType === 'belt'
    ? { type: 'belt' as const, pitch: parseDecimal(pitch), pulleyTeeth: parseDecimal(pulleyTeeth) }
    : { type: 'spindle' as const, lead: parseDecimal(lead) };
  $: driveValues = drive.type === 'belt' ? [drive.pitch, drive.pulleyTeeth] : [drive.lead];
  $: valid = [motorSteps, micro, ...driveValues].every((v) => Number.isFinite(v) && v > 0);
  $: result = valid ? calculateAxisScaling({ fullStepsPerRevolution: motorSteps, microstepping: micro, drive }) : null;
</script>

<ToolHeader title="Achsskalierung" description="Steps/mm für GRBL, grblHAL und LinuxCNC aus Motor und Mechanik berechnen." icon="axis" onReset={reset} />

<div class="tool-grid">
  <section class="panel">
    <div class="panel-heading-row">
      <h2>Eingaben</h2>
      <div class="segmented compact">
        <button class:active={driveType === 'belt'} on:click={() => driveType = 'belt'}>Zahnriemen</button>
        <button class:active={driveType === 'spindle'} on:click={() => driveType = 'spindle'}>Spindel</button>
      </div>
    </div>
    <div class="field-grid">
      <FieldRow label="Motorschritte / U" bind:value={steps} unit="Steps" icon="motor" />
      <FieldRow label="Microstepping" bind:value={microstepping} unit="1/x" icon="number" />
      {#if driveType === 'belt'}
        <FieldRow label="Zahnteilung" bind:value={pitch} unit="mm" icon="ruler" />
        <FieldRow label="Riemenscheibe" bind:value={pulleyTeeth} unit="Zähne" icon="belt" />
      {:else}
        <FieldRow label="Spindelsteigung" bind:value={lead} unit="mm/U" icon="spindle" />
      {/if}
    </div>
    {#if !valid}<p class="validation">Bitte nur Werte größer als 0 eingeben.</p>{/if}
  </section>

  <section class="panel result-panel">
    <h2>Physikalisches Ergebnis</h2>
    <ResultRow label="Weg pro Motorumdrehung" value={result ? formatNumber(result.travelPerRevolution, 6) : '—'} unit="mm" icon="axis" />
    <ResultRow label="Microsteps pro Umdrehung" value={result ? formatNumber(result.microstepsPerRevolution, 0) : '—'} icon="motor" />
    <ResultRow label="Steps / Impulse pro mm" value={result ? formatNumber(result.stepsPerMillimeter, 6) : '—'} icon="number" emphasize />
    <ResultRow label="Theoretische Wegauflösung" value={result ? formatNumber(result.theoreticalResolution, 6) : '—'} unit="mm/Step" icon="ruler" />
  </section>
</div>

<section class="panel controller-panel">
  <div class="controller-heading">
    <div><p class="eyebrow">Zielsysteme</p><h2>Direkt übertragbare Einstellwerte</h2></div>
    <label class="axis-select">Achse <select bind:value={axis}><option>X</option><option>Y</option><option>Z</option><option>A</option></select></label>
  </div>
  <div class="controller-grid">
    <div><h3>GRBL / grblHAL</h3><code>${axis === 'X' ? '100' : axis === 'Y' ? '101' : axis === 'Z' ? '102' : '10x'} = {result ? result.stepsPerMillimeter.toFixed(6) : '—'}</code></div>
    <div><h3>LinuxCNC</h3><code>STEP_SCALE = {result ? result.stepsPerMillimeter.toFixed(6) : '—'}<br />position-scale = {result ? result.stepsPerMillimeter.toFixed(6) : '—'}</code></div>
  </div>
</section>

<FormulaDisclosure>
  <div class="formula-layout single">
    <div><p>Steps/mm = (Motorschritte/U × Microstepping) ÷ Weg pro Umdrehung.</p><p>Beim Zahnriemen ist der Weg pro Umdrehung Teilung × Zähnezahl der Riemenscheibe. Bei einer Spindel entspricht er der Steigung.</p></div>
  </div>
</FormulaDisclosure>
