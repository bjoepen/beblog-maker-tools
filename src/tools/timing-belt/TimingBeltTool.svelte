<script lang="ts">
  import ToolHeader from '../../components/ToolHeader.svelte';
  import ResultRow from '../../components/ResultRow.svelte';
  import FormulaDisclosure from '../../components/FormulaDisclosure.svelte';
  import FieldRow from '../../components/FieldRow.svelte';
  import { calculateTimingBelt } from '../../core/calculations/timingBelt';
  import { parseDecimal, formatNumber } from '../../core/formatting/numbers';

  let centerDistance = '150';
  let pitch = '3';
  let z1 = '20';
  let z2 = '40';

  function reset() {
    centerDistance = '150'; pitch = '3'; z1 = '20'; z2 = '40';
  }

  $: parsed = {
    centerDistance: parseDecimal(centerDistance),
    pitch: parseDecimal(pitch),
    pulleyTeeth1: parseDecimal(z1),
    pulleyTeeth2: parseDecimal(z2)
  };
  $: valid = Object.values(parsed).every((v) => Number.isFinite(v) && v > 0);
  $: result = valid ? calculateTimingBelt(parsed) : null;
  $: deviationPercent = result && result.theoreticalPitchLength !== 0
    ? (result.deviation / result.theoreticalPitchLength) * 100
    : 0;
</script>

<ToolHeader title="Zahnriemen" description="Wirklänge und passende Zähnezahl für geschlossene Zahnriemen bei ungekreuzter Führung." icon="belt" onReset={reset} />

<div class="tool-grid">
  <section class="panel">
    <h2>Eingaben</h2>
    <div class="field-grid">
      <FieldRow label="Achsabstand (a)" bind:value={centerDistance} unit="mm" icon="axis" />
      <FieldRow label="Teilung (t)" bind:value={pitch} unit="mm" icon="ruler" />
      <FieldRow label="Zähnezahl Z1 (klein)" bind:value={z1} unit="–" icon="belt" />
      <FieldRow label="Zähnezahl Z2 (groß)" bind:value={z2} unit="–" icon="belt" />
    </div>
    {#if !valid}<p class="validation">Bitte nur Werte größer als 0 eingeben.</p>{/if}
  </section>

  <section class="panel result-panel">
    <h2>Ergebnisse</h2>
    <ResultRow label="Theoretische Wirklänge" value={result ? formatNumber(result.theoreticalPitchLength, 3) : '—'} unit="mm" icon="ruler" emphasize />
    <ResultRow label="Theoretische Riemenzähne" value={result ? formatNumber(result.theoreticalBeltTeeth, 3) : '—'} icon="number" />
    <ResultRow label="Empfohlene Riemenzähne" value={result ? String(result.recommendedBeltTeeth) : '—'} icon="check" />
    <ResultRow label="Wirklänge des empfohlenen Zahnriemens" value={result ? formatNumber(result.recommendedPitchLength, 3) : '—'} unit="mm" icon="ruler" />
    <ResultRow label="Abweichung" value={result ? `${result.deviation >= 0 ? '+' : ''}${formatNumber(result.deviation, 3)}` : '—'} unit="mm" icon="delta" subvalue={result ? `(${deviationPercent >= 0 ? '+' : ''}${formatNumber(deviationPercent, 2)} %)` : ''} />
  </section>
</div>

<FormulaDisclosure>
  <div class="formula-layout">
    <div>
      <p>Die theoretische Wirklänge eines <strong>geschlossenen Zahnriemens bei ungekreuzter Führung</strong> wird näherungsweise auf der Wirklinie berechnet:</p>
      <code class="formula-box">Lw = 2a + t/2 · (z1 + z2) + t² · (z1 − z2)² / (4π²a)</code>
    </div>
    <dl class="formula-legend">
      <div><dt>a</dt><dd>Achsabstand [mm]</dd></div>
      <div><dt>t</dt><dd>Teilung des Zahnriemens [mm]</dd></div>
      <div><dt>z1</dt><dd>Zähnezahl der ersten Zahnscheibe</dd></div>
      <div><dt>z2</dt><dd>Zähnezahl der zweiten Zahnscheibe</dd></div>
    </dl>
  </div>
</FormulaDisclosure>
