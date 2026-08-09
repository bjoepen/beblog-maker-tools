<script lang="ts">
  import ToolHeader from '../../components/ToolHeader.svelte';
  import ResultRow from '../../components/ResultRow.svelte';
  import FormulaDisclosure from '../../components/FormulaDisclosure.svelte';
  import { calculateTimingBelt } from '../../core/calculations/timingBelt';
  import { parseDecimal, formatNumber } from '../../core/formatting/numbers';

  let centerDistance = '150';
  let pitch = '3';
  let z1 = '20';
  let z2 = '40';

  $: parsed = {
    centerDistance: parseDecimal(centerDistance),
    pitch: parseDecimal(pitch),
    pulleyTeeth1: parseDecimal(z1),
    pulleyTeeth2: parseDecimal(z2)
  };
  $: valid = Object.values(parsed).every((v) => Number.isFinite(v) && v > 0);
  $: result = valid ? calculateTimingBelt(parsed) : null;
</script>

<ToolHeader title="Zahnriemen" description="Wirklänge eines geschlossenen Zahnriemens bei ungekreuzter Riemenführung." />

<div class="tool-grid">
  <section class="panel">
    <h2>Eingaben</h2>
    <div class="field-grid">
      <label>Achsabstand <span><input bind:value={centerDistance} inputmode="decimal" /> mm</span></label>
      <label>Zahnteilung <span><input bind:value={pitch} inputmode="decimal" /> mm</span></label>
      <label>Zähnezahl Z1 <span><input bind:value={z1} inputmode="decimal" /></span></label>
      <label>Zähnezahl Z2 <span><input bind:value={z2} inputmode="decimal" /></span></label>
    </div>
    {#if !valid}<p class="validation">Bitte nur Werte größer als 0 eingeben.</p>{/if}
  </section>

  <section class="panel result-panel">
    <h2>Ergebnis</h2>
    <ResultRow label="Theoretische Wirklänge" value={result ? formatNumber(result.theoreticalPitchLength, 3) : '—'} unit="mm" emphasize />
    <ResultRow label="Theoretische Riemenzähne" value={result ? formatNumber(result.theoreticalBeltTeeth, 3) : '—'} />
    <ResultRow label="Empfohlene Riemenzähne" value={result ? String(result.recommendedBeltTeeth) : '—'} />
    <ResultRow label="Wirklänge des empfohlenen Riemens" value={result ? formatNumber(result.recommendedPitchLength, 3) : '—'} unit="mm" />
    <ResultRow label="Abweichung" value={result ? formatNumber(result.deviation, 3) : '—'} unit="mm" />
  </section>
</div>

<FormulaDisclosure>
  <p>Die Berechnung nutzt die übliche Näherung der Wirklänge auf der Wirklinie für zwei Zahnscheiben bei ungekreuzter Führung.</p>
  <code>Lw = 2a + t/2 · (z1 + z2) + t² · (z1 − z2)² / (4π²a)</code>
</FormulaDisclosure>
