<script lang="ts">
  import ToolHeader from '../../components/ToolHeader.svelte';
  import ResultRow from '../../components/ResultRow.svelte';
  import FormulaDisclosure from '../../components/FormulaDisclosure.svelte';
  import FieldRow from '../../components/FieldRow.svelte';
  import { calculateVolumetricFlow } from '../../core/calculations/volumetricFlow';
  import { parseDecimal, formatNumber } from '../../core/formatting/numbers';

  let lineWidth = '0,45';
  let layerHeight = '0,20';
  let printSpeed = '150';
  let maxVolumetricFlow = '18';

  function reset() {
    lineWidth = '0,45'; layerHeight = '0,20'; printSpeed = '150'; maxVolumetricFlow = '18';
  }

  $: parsed = {
    lineWidth: parseDecimal(lineWidth),
    layerHeight: parseDecimal(layerHeight),
    printSpeed: parseDecimal(printSpeed),
    maxVolumetricFlow: parseDecimal(maxVolumetricFlow)
  };
  $: valid = Object.values(parsed).every((v) => Number.isFinite(v) && v > 0);
  $: result = valid ? calculateVolumetricFlow(parsed) : null;
</script>

<ToolHeader title="Volumenstrom" description="Benötigten Materialfluss und die daraus mögliche maximale Druckgeschwindigkeit abschätzen." icon="flow3d" onReset={reset} />

<div class="tool-grid">
  <section class="panel">
    <h2>Eingaben</h2>
    <div class="field-grid">
      <FieldRow label="Linienbreite" bind:value={lineWidth} unit="mm" icon="nozzle" />
      <FieldRow label="Schichthöhe" bind:value={layerHeight} unit="mm" icon="layers" />
      <FieldRow label="Druckgeschwindigkeit" bind:value={printSpeed} unit="mm/s" icon="speed" />
      <FieldRow label="Max. Volumenstrom" bind:value={maxVolumetricFlow} unit="mm³/s" icon="flow3d" />
    </div>
    {#if !valid}<p class="validation">Bitte nur Werte größer als 0 eingeben.</p>{/if}
    {#if result && !result.withinLimit}<p class="validation">Der benötigte Volumenstrom liegt über dem eingetragenen Hotend-/Filament-Limit.</p>{/if}
  </section>

  <section class="panel result-panel">
    <h2>Ergebnisse</h2>
    <ResultRow label="Benötigter Volumenstrom" value={result ? formatNumber(result.requiredVolumetricFlow, 2) : '—'} unit="mm³/s" icon="flow3d" emphasize />
    <ResultRow label="Max. Druckgeschwindigkeit" value={result ? formatNumber(result.maxPrintSpeed, 1) : '—'} unit="mm/s" icon="speed" />
    <ResultRow label="Auslastung des Limits" value={result ? formatNumber(result.utilizationPercent, 1) : '—'} unit="%" icon="gauge" />
    <ResultRow label="Bewertung" value={result ? (result.withinLimit ? 'im Limit' : 'Limit überschritten') : '—'} icon={result?.withinLimit ? 'check' : 'delta'} />
  </section>
</div>

<FormulaDisclosure>
  <div class="formula-layout">
    <div>
      <p>Für eine schnelle Werkstattabschätzung wird der extrudierte Querschnitt als Linienbreite × Schichthöhe angenähert.</p>
      <code class="formula-box">Q = b · h · v</code>
      <code class="formula-box">vmax = Qmax / (b · h)</code>
      <p class="formula-note">Die reale Extrusionsgeometrie ist nicht perfekt rechteckig. Das Werkzeug dient deshalb der praxisnahen Abschätzung und ersetzt keinen Kalibrierdruck.</p>
    </div>
    <dl class="formula-legend">
      <div><dt>Q</dt><dd>Volumenstrom [mm³/s]</dd></div>
      <div><dt>b</dt><dd>Linienbreite [mm]</dd></div>
      <div><dt>h</dt><dd>Schichthöhe [mm]</dd></div>
      <div><dt>v</dt><dd>Druckgeschwindigkeit [mm/s]</dd></div>
    </dl>
  </div>
</FormulaDisclosure>
