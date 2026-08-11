<script lang="ts">
  import ToolHeader from '../../components/ToolHeader.svelte';
  import ResultRow from '../../components/ResultRow.svelte';
  import FormulaDisclosure from '../../components/FormulaDisclosure.svelte';
  import { METRIC_FASTENERS, getMetricFastener, type MetricSize } from '../../core/calculations/fastenerReference';
  import { formatNumber } from '../../core/formatting/numbers';

  let size: MetricSize = 'M6';
  function reset() { size = 'M6'; }
  $: ref = getMetricFastener(size);
</script>

<ToolHeader title="Gewinde & Bohrungen" description="Kernloch und typische Durchgangsbohrungen für metrische Regelgewinde direkt nachschlagen." icon="thread" onReset={reset} />

<div class="tool-grid">
  <section class="panel">
    <h2>Gewinde auswählen</h2>
    <div class="field-grid">
      <label class="select-row"><span>Metrisches Regelgewinde</span><select bind:value={size}>{#each METRIC_FASTENERS as item}<option value={item.size}>{item.size} × {formatNumber(item.coarsePitch, 2)}</option>{/each}</select></label>
    </div>
    <div class="workshop-answer"><span>Zum Gewindeschneiden vorbohren mit</span><strong>Ø {formatNumber(ref.tapDrill, 1)} mm</strong></div>
  </section>

  <section class="panel result-panel">
    <h2>Bohrungswerte</h2>
    <ResultRow label="Kernloch / Gewindebohrer" value={formatNumber(ref.tapDrill, 1)} unit="mm" icon="drill" emphasize />
    <ResultRow label="Durchgangsloch fein" value={formatNumber(ref.clearanceFine, 1)} unit="mm" icon="hole" />
    <ResultRow label="Durchgangsloch normal" value={formatNumber(ref.clearanceNormal, 1)} unit="mm" icon="hole" />
    <ResultRow label="Durchgangsloch grob" value={formatNumber(ref.clearanceCoarse, 1)} unit="mm" icon="hole" />
    <ResultRow label="Regelgewindesteigung" value={formatNumber(ref.coarsePitch, 2)} unit="mm" icon="thread" />
  </section>
</div>

<FormulaDisclosure>
  <div class="formula-layout single"><div>
    <p>Die Kernlochwerte sind Werkstatt-Nennwerte für metrische Regelgewinde. Die drei Durchgangsreihen helfen bei der Auswahl zwischen enger, normaler und großzügiger Passung.</p>
    <p>Bei sicherheitskritischen Verbindungen, Sondergewinden, beschichteten Teilen oder festgelegten Toleranzen ist immer die konkrete Zeichnung bzw. Norm maßgeblich.</p>
  </div></div>
</FormulaDisclosure>
