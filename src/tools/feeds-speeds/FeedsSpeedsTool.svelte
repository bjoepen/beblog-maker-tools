<script lang="ts">
  import ToolHeader from '../../components/ToolHeader.svelte';
  import ResultRow from '../../components/ResultRow.svelte';
  import FormulaDisclosure from '../../components/FormulaDisclosure.svelte';
  import FieldRow from '../../components/FieldRow.svelte';
  import { calculateFeedsSpeeds } from '../../core/calculations/feedsSpeeds';
  import { parseDecimal, formatNumber } from '../../core/formatting/numbers';

  let diameter = '6';
  let cuttingSpeed = '200';
  let flutes = '2';
  let chipLoad = '0,05';

  function reset() {
    diameter = '6'; cuttingSpeed = '200'; flutes = '2'; chipLoad = '0,05';
  }

  $: parsed = {
    toolDiameter: parseDecimal(diameter),
    cuttingSpeed: parseDecimal(cuttingSpeed),
    flutes: parseDecimal(flutes),
    chipLoad: parseDecimal(chipLoad)
  };
  $: valid = Object.values(parsed).every((v) => Number.isFinite(v) && v > 0);
  $: result = valid ? calculateFeedsSpeeds(parsed) : null;
</script>

<ToolHeader title="Drehzahl & Vorschub" description="Schnelle Grundberechnung für Fräsparameter – bewusst ohne Materialdatenbank." icon="feeds" onReset={reset} />

<div class="tool-grid">
  <section class="panel">
    <h2>Eingaben</h2>
    <div class="field-grid">
      <FieldRow label="Werkzeugdurchmesser" bind:value={diameter} unit="mm" icon="ruler" />
      <FieldRow label="Schnittgeschwindigkeit" bind:value={cuttingSpeed} unit="m/min" icon="speed" />
      <FieldRow label="Schneidenzahl" bind:value={flutes} unit="Z" icon="number" />
      <FieldRow label="Zahnvorschub" bind:value={chipLoad} unit="mm" icon="feed" />
    </div>
    {#if !valid}<p class="validation">Bitte nur Werte größer als 0 eingeben.</p>{/if}
  </section>

  <section class="panel result-panel">
    <h2>Ergebnisse</h2>
    <ResultRow label="Spindeldrehzahl" value={result ? formatNumber(result.spindleSpeed, 0) : '—'} unit="1/min" icon="speed" emphasize />
    <ResultRow label="Vorschubgeschwindigkeit" value={result ? formatNumber(result.feedRate, 0) : '—'} unit="mm/min" icon="feed" />
  </section>
</div>

<FormulaDisclosure>
  <div class="formula-layout single">
    <div><code class="formula-box">n = (vc × 1000) / (π × d)</code><code class="formula-box">vf = n × z × fz</code><p>Die Ergebnisse sind rechnerische Ausgangspunkte. Maschinen-, Werkzeug- und Materialgrenzen müssen in der Praxis zusätzlich berücksichtigt werden.</p></div>
  </div>
</FormulaDisclosure>
