<script lang="ts">
  import ToolHeader from '../../components/ToolHeader.svelte';
  import ResultRow from '../../components/ResultRow.svelte';
  import FormulaDisclosure from '../../components/FormulaDisclosure.svelte';
  import { calculateFeedsSpeeds } from '../../core/calculations/feedsSpeeds';
  import { parseDecimal, formatNumber } from '../../core/formatting/numbers';

  let diameter = '6';
  let cuttingSpeed = '200';
  let flutes = '2';
  let chipLoad = '0,05';

  $: parsed = {
    toolDiameter: parseDecimal(diameter),
    cuttingSpeed: parseDecimal(cuttingSpeed),
    flutes: parseDecimal(flutes),
    chipLoad: parseDecimal(chipLoad)
  };
  $: valid = Object.values(parsed).every((v) => Number.isFinite(v) && v > 0);
  $: result = valid ? calculateFeedsSpeeds(parsed) : null;
</script>

<ToolHeader title="Drehzahl & Vorschub" description="Schnelle Grundberechnung für Fräsparameter ohne Materialdatenbank." />

<div class="tool-grid">
  <section class="panel">
    <h2>Eingaben</h2>
    <div class="field-grid">
      <label>Werkzeugdurchmesser <span><input bind:value={diameter} inputmode="decimal" /> mm</span></label>
      <label>Schnittgeschwindigkeit <span><input bind:value={cuttingSpeed} inputmode="decimal" /> m/min</span></label>
      <label>Schneidenzahl <span><input bind:value={flutes} inputmode="decimal" /></span></label>
      <label>Zahnvorschub <span><input bind:value={chipLoad} inputmode="decimal" /> mm</span></label>
    </div>
    {#if !valid}<p class="validation">Bitte nur Werte größer als 0 eingeben.</p>{/if}
  </section>

  <section class="panel result-panel">
    <h2>Ergebnis</h2>
    <ResultRow label="Spindeldrehzahl" value={result ? formatNumber(result.spindleSpeed, 0) : '—'} unit="1/min" emphasize />
    <ResultRow label="Vorschubgeschwindigkeit" value={result ? formatNumber(result.feedRate, 0) : '—'} unit="mm/min" />
  </section>
</div>

<FormulaDisclosure>
  <code>n = (vc × 1000) / (π × d)</code>
  <code>vf = n × z × fz</code>
  <p>Die Werte sind rechnerische Ausgangspunkte. Maschinen-, Werkzeug- und Materialgrenzen müssen in der Praxis zusätzlich berücksichtigt werden.</p>
</FormulaDisclosure>
