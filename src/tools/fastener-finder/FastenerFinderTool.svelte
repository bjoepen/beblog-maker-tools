<script lang="ts">
  import ToolHeader from '../../components/ToolHeader.svelte';
  import ResultRow from '../../components/ResultRow.svelte';
  import FormulaDisclosure from '../../components/FormulaDisclosure.svelte';
  import { METRIC_FASTENERS, getMetricFastener, getDriveLabel, getDriveSize, type MetricSize, type HeadType } from '../../core/calculations/fastenerReference';
  import { formatNumber } from '../../core/formatting/numbers';

  let size: MetricSize = 'M6';
  let headType: HeadType = 'hex-iso';
  function reset() { size = 'M6'; headType = 'hex-iso'; }
  $: ref = getMetricFastener(size);
  $: driveLabel = getDriveLabel(headType);
  $: driveSize = getDriveSize(ref, headType);
</script>

<ToolHeader title="Schrauben & Schlüsselweiten" description="Metrische Schraube wählen und sofort Werkzeug, Regelgewinde, Kernloch und Durchgangsbohrung sehen." icon="bolt" onReset={reset} />

<div class="tool-grid">
  <section class="panel">
    <h2>Schraube auswählen</h2>
    <div class="field-grid">
      <label class="select-row"><span>Gewindegröße</span><select bind:value={size}>{#each METRIC_FASTENERS as item}<option value={item.size}>{item.size}</option>{/each}</select></label>
      <label class="select-row"><span>Kopfform / Antrieb</span><select bind:value={headType}><option value="hex-iso">Sechskantkopf · ISO 4014/4017</option><option value="socket-cap">Zylinderkopf Innensechskant · ISO 4762</option></select></label>
    </div>
    <div class="workshop-answer">
      <span>In der Werkstatt brauchst du</span>
      <strong>{driveLabel} {formatNumber(driveSize, driveSize % 1 ? 1 : 0)} mm</strong>
    </div>
  </section>

  <section class="panel result-panel">
    <h2>Werkstattdaten</h2>
    <ResultRow label={driveLabel} value={formatNumber(driveSize, driveSize % 1 ? 1 : 0)} unit="mm" icon="wrench" emphasize />
    <ResultRow label="Regelgewinde" value={`${size} × ${formatNumber(ref.coarsePitch, 2)}`} unit="mm" icon="thread" />
    <ResultRow label="Kernloch" value={formatNumber(ref.tapDrill, 1)} unit="mm" icon="drill" />
    <ResultRow label="Durchgangsloch normal" value={formatNumber(ref.clearanceNormal, 1)} unit="mm" icon="hole" />
  </section>
</div>

<FormulaDisclosure>
  <div class="formula-layout single">
    <div>
      <p>Dieses Werkzeug ist bewusst ein Nachschlagewerk und kein Näherungsrechner. Die Werkzeuggröße hängt von der Kopfform und der zugrunde liegenden Norm ab.</p>
      <p><strong>Wichtig:</strong> Bei älteren DIN-Sechskantschrauben können einzelne Schlüsselweiten abweichen. Besonders M10, M12 und M14 sind typische Fälle. Angezeigt werden hier die aktuellen ISO-Werte für ISO 4014/4017.</p>
      <p>Für Zylinderkopfschrauben mit Innensechskant wird ISO 4762 zugrunde gelegt.</p>
    </div>
  </div>
</FormulaDisclosure>
