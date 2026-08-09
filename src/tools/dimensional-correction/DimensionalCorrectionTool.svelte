<script lang="ts">
  import ToolHeader from '../../components/ToolHeader.svelte';
  import ResultRow from '../../components/ResultRow.svelte';
  import FormulaDisclosure from '../../components/FormulaDisclosure.svelte';
  import FieldRow from '../../components/FieldRow.svelte';
  import { calculateAxisCorrection } from '../../core/calculations/dimensionalCorrection';
  import { parseDecimal, formatNumber } from '../../core/formatting/numbers';

  let targetX = '20'; let measuredX = '19,8';
  let targetY = '20'; let measuredY = '20';
  let targetZ = '20'; let measuredZ = '20,2';

  function reset() {
    targetX = '20'; measuredX = '19,8'; targetY = '20'; measuredY = '20'; targetZ = '20'; measuredZ = '20,2';
  }

  $: values = [targetX, measuredX, targetY, measuredY, targetZ, measuredZ].map(parseDecimal);
  $: valid = values.every((v) => Number.isFinite(v) && v > 0);
  $: x = valid ? calculateAxisCorrection({ target: values[0], measured: values[1] }) : null;
  $: y = valid ? calculateAxisCorrection({ target: values[2], measured: values[3] }) : null;
  $: z = valid ? calculateAxisCorrection({ target: values[4], measured: values[5] }) : null;

  const signed = (value: number) => `${value >= 0 ? '+' : ''}${formatNumber(value, 2)}`;
</script>

<ToolHeader title="Maßkorrektur" description="Aus Soll- und Istmaßen die erforderliche Skalierung für X, Y und Z bestimmen." icon="caliper" onReset={reset} />

<div class="tool-grid">
  <section class="panel">
    <h2>Eingaben</h2>
    <div class="dimension-table">
      <div class="dimension-head"><span>Achse</span><span>Sollmaß</span><span>Istmaß</span></div>
      <div class="dimension-axis"><strong>X</strong><FieldRow label="Sollmaß X" bind:value={targetX} unit="mm" icon="target" /><FieldRow label="Istmaß X" bind:value={measuredX} unit="mm" icon="caliper" /></div>
      <div class="dimension-axis"><strong>Y</strong><FieldRow label="Sollmaß Y" bind:value={targetY} unit="mm" icon="target" /><FieldRow label="Istmaß Y" bind:value={measuredY} unit="mm" icon="caliper" /></div>
      <div class="dimension-axis"><strong>Z</strong><FieldRow label="Sollmaß Z" bind:value={targetZ} unit="mm" icon="target" /><FieldRow label="Istmaß Z" bind:value={measuredZ} unit="mm" icon="caliper" /></div>
    </div>
    {#if !valid}<p class="validation">Soll- und Istmaße müssen größer als 0 sein.</p>{/if}
    <p class="helper-note">Vor einer dauerhaften Skalierung zuerst mechanische Ursachen, Extrusionskalibrierung und Messmethode prüfen.</p>
  </section>

  <section class="panel result-panel">
    <h2>Skalierungsfaktoren</h2>
    <ResultRow label="X-Achse" value={x ? formatNumber(x.scalePercent, 3) : '—'} unit="%" icon="axisx" emphasize subvalue={x ? `Korrektur ${signed(x.correctionPercent)} % · Abweichung ${signed(x.deviationMm)} mm` : ''} />
    <ResultRow label="Y-Achse" value={y ? formatNumber(y.scalePercent, 3) : '—'} unit="%" icon="axisy" emphasize subvalue={y ? `Korrektur ${signed(y.correctionPercent)} % · Abweichung ${signed(y.deviationMm)} mm` : ''} />
    <ResultRow label="Z-Achse" value={z ? formatNumber(z.scalePercent, 3) : '—'} unit="%" icon="axisz" emphasize subvalue={z ? `Korrektur ${signed(z.correctionPercent)} % · Abweichung ${signed(z.deviationMm)} mm` : ''} />
  </section>
</div>

<FormulaDisclosure>
  <div class="formula-layout">
    <div>
      <p>Die notwendige Skalierung ergibt sich aus dem Verhältnis von gewünschtem Sollmaß zum gemessenen Istmaß.</p>
      <code class="formula-box">Skalierung [%] = Sollmaß / Istmaß · 100</code>
      <p class="formula-note">Beispiel: 20,00 mm Sollmaß und 19,80 mm Istmaß ergeben rund 101,010 % Skalierung.</p>
    </div>
    <dl class="formula-legend">
      <div><dt>100 %</dt><dd>keine Skalierungsänderung</dd></div>
      <div><dt>&gt;100 %</dt><dd>Modell auf dieser Achse vergrößern</dd></div>
      <div><dt>&lt;100 %</dt><dd>Modell auf dieser Achse verkleinern</dd></div>
    </dl>
  </div>
</FormulaDisclosure>
