<script lang="ts">
  import ToolHeader from '../../components/ToolHeader.svelte';
  import ResultRow from '../../components/ResultRow.svelte';
  import FormulaDisclosure from '../../components/FormulaDisclosure.svelte';
  import FieldRow from '../../components/FieldRow.svelte';
  import { calculateEstlcamAxis, calibrateEstlcamTravel } from '../../core/calculations/estlcamAxis';
  import { parseDecimal, formatNumber } from '../../core/formatting/numbers';

  let driveType: 'belt' | 'spindle' = 'belt';
  let axis = 'X';
  let steps = '200';
  let microstepping = '16';
  let pitch = '3';
  let pulleyTeeth = '20';
  let lead = '5';

  let calibrationEnabled = false;
  let commandedDistance = '100';
  let measuredDistance = '100';
  let currentTravel = '60';

  function reset() {
    driveType = 'belt'; axis = 'X'; steps = '200'; microstepping = '16'; pitch = '3'; pulleyTeeth = '20'; lead = '5';
    calibrationEnabled = false; commandedDistance = '100'; measuredDistance = '100'; currentTravel = '60';
  }

  $: motorSteps = parseDecimal(steps);
  $: micro = parseDecimal(microstepping);
  $: drive = driveType === 'belt'
    ? { type: 'belt' as const, pitch: parseDecimal(pitch), pulleyTeeth: parseDecimal(pulleyTeeth) }
    : { type: 'spindle' as const, lead: parseDecimal(lead) };
  $: driveValues = drive.type === 'belt' ? [drive.pitch, drive.pulleyTeeth] : [drive.lead];
  $: valid = [motorSteps, micro, ...driveValues].every((v) => Number.isFinite(v) && v > 0);
  $: result = valid ? calculateEstlcamAxis({ fullStepsPerRevolution: motorSteps, microstepping: micro, drive }) : null;

  $: calibrationValues = [parseDecimal(currentTravel), parseDecimal(commandedDistance), parseDecimal(measuredDistance)];
  $: calibrationValid = calibrationValues.every((v) => Number.isFinite(v) && v > 0);
  $: calibration = calibrationEnabled && calibrationValid
    ? calibrateEstlcamTravel({
        currentTravelPerRevolution: calibrationValues[0],
        commandedDistance: calibrationValues[1],
        measuredDistance: calibrationValues[2]
      })
    : null;
</script>

<ToolHeader
  title="Estlcam Achsberechnung"
  description="Schritte je Umdrehung und Weg je Umdrehung exakt für Estlcam bestimmen und bei Bedarf kalibrieren."
  icon="axis"
  onReset={reset}
/>

<div class="tool-grid">
  <section class="panel">
    <div class="panel-heading-row">
      <h2>Achse & Antrieb</h2>
      <div class="segmented compact">
        <button class:active={driveType === 'belt'} on:click={() => driveType = 'belt'}>Zahnriemen</button>
        <button class:active={driveType === 'spindle'} on:click={() => driveType = 'spindle'}>Spindel</button>
      </div>
    </div>

    <label class="select-row">
      <span>Estlcam-Achse</span>
      <select bind:value={axis}><option>X</option><option>Y</option><option>Z</option></select>
    </label>

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
    <p class="eyebrow">Direkt in Estlcam</p>
    <h2>Grundeinstellungen Achse {axis}</h2>
    <ResultRow label="Schritte je Umdrehung" value={result ? formatNumber(result.stepsPerRevolution, 0) : '—'} unit="Steps/U" icon="motor" emphasize />
    <ResultRow label="Weg je Umdrehung" value={result ? formatNumber(result.travelPerRevolution, 6) : '—'} unit="mm/U" icon="axis" emphasize />
    <ResultRow label="Kontrollwert: Schritte pro mm" value={result ? formatNumber(result.stepsPerMillimeter, 6) : '—'} unit="Steps/mm" icon="number" />
    <ResultRow label="Theoretische Wegauflösung" value={result ? formatNumber(result.theoreticalResolution, 6) : '—'} unit="mm/Step" icon="ruler" />
  </section>
</div>

<section class="panel estlcam-entry-panel">
  <div class="controller-heading">
    <div>
      <p class="eyebrow">Eintragen in Estlcam 11</p>
      <h2>Einstellungen → CNC Steuerung → Steuerung</h2>
    </div>
  </div>
  <div class="controller-grid">
    <div>
      <h3>Achse {axis}</h3>
      <code>Schritte je Umdrehung = {result ? formatNumber(result.stepsPerRevolution, 0) : '—'}<br />Weg je Umdrehung = {result ? formatNumber(result.travelPerRevolution, 6) : '—'} mm</code>
    </div>
    <div>
      <h3>Danach wichtig</h3>
      <p class="status-note">Nach Änderungen in den Grundeinstellungen auf <strong>„Steuerung programmieren“</strong> klicken, sonst übernimmt Estlcam die neuen Werte nicht.</p>
    </div>
  </div>
</section>

<section class="panel calibration-panel">
  <div class="panel-heading-row">
    <div><p class="eyebrow">Optional</p><h2>Verfahrweg kalibrieren</h2></div>
    <button class:active={calibrationEnabled} class="calibration-toggle" type="button" on:click={() => calibrationEnabled = !calibrationEnabled}>
      {calibrationEnabled ? 'Kalibrierung aktiv' : 'Kalibrierung öffnen'}
    </button>
  </div>

  {#if calibrationEnabled}
    <p class="profile-note">Die Kalibrierung korrigiert <strong>„Weg je Umdrehung“</strong>, während „Schritte je Umdrehung“ unverändert bleibt. Für eine genaue Messung möglichst einen langen Verfahrweg verwenden.</p>
    <div class="field-grid calibration-grid">
      <FieldRow label="Aktueller Weg je Umdrehung" bind:value={currentTravel} unit="mm/U" icon="axis" />
      <FieldRow label="Sollweg / Fahrbefehl" bind:value={commandedDistance} unit="mm" icon="target" />
      <FieldRow label="Gemessener Istweg" bind:value={measuredDistance} unit="mm" icon="ruler" />
    </div>
    {#if !calibrationValid}<p class="validation">Bitte nur Werte größer als 0 eingeben.</p>{/if}

    <div class="calibration-result">
      <ResultRow label="Abweichung" value={calibration ? formatNumber(calibration.relativeErrorPercent, 3) : '—'} unit="%" icon="delta" />
      <ResultRow label="Korrekturfaktor" value={calibration ? formatNumber(calibration.correctionFactor, 6) : '—'} icon="number" />
      <ResultRow label="Neuer Wert: Weg je Umdrehung" value={calibration ? formatNumber(calibration.correctedTravelPerRevolution, 6) : '—'} unit="mm/U" icon="check" emphasize />
    </div>
    <p class="status-note">Nach dem Eintragen des korrigierten Werts erneut <strong>„Steuerung programmieren“</strong> und den Verfahrweg nochmals prüfen.</p>
  {/if}
</section>

<FormulaDisclosure>
  <div class="formula-layout single">
    <div>
      <p><strong>Schritte je Umdrehung</strong> = Motorschritte/U × Microstepping.</p>
      <p><strong>Weg je Umdrehung</strong> = Spindelsteigung bzw. beim Zahnriemen Zahnteilung × Zähnezahl der Riemenscheibe.</p>
      <p><strong>Kalibrierung:</strong> neuer Weg/U = aktueller Weg/U × Istweg ÷ Sollweg.</p>
      <p>Die zusätzlichen Steps/mm sind nur ein Kontrollwert; Estlcam selbst erwartet in den Grundeinstellungen die beiden Werte „Schritte je Umdrehung“ und „Weg je Umdrehung“.</p>
    </div>
  </div>
</FormulaDisclosure>
