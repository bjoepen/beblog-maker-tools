<script lang="ts">
  import ToolHeader from '../../components/ToolHeader.svelte';
  import ResultRow from '../../components/ResultRow.svelte';
  import FormulaDisclosure from '../../components/FormulaDisclosure.svelte';
  import FieldRow from '../../components/FieldRow.svelte';
  import { calculateBoltCircle } from '../../core/calculations/boltCircle';
  import { parseDecimal, formatNumber } from '../../core/formatting/numbers';

  let pcd = '80'; let holeCount = '6'; let startAngle = '0'; let centerX = '0'; let centerY = '0';
  function reset() { pcd='80'; holeCount='6'; startAngle='0'; centerX='0'; centerY='0'; }
  $: parsed = { pitchCircleDiameter: parseDecimal(pcd), holeCount: parseDecimal(holeCount), startAngleDeg: parseDecimal(startAngle), centerX: parseDecimal(centerX), centerY: parseDecimal(centerY) };
  $: valid = Number.isFinite(parsed.pitchCircleDiameter) && parsed.pitchCircleDiameter > 0 && Number.isInteger(parsed.holeCount) && parsed.holeCount >= 2 && Number.isFinite(parsed.startAngleDeg) && Number.isFinite(parsed.centerX) && Number.isFinite(parsed.centerY);
  $: result = valid ? calculateBoltCircle(parsed) : null;
</script>

<ToolHeader title="Lochkreis" description="Bohrungen gleichmäßig auf einem Teilkreis verteilen und X/Y-Koordinaten für Werkstatt, CAD oder CNC ablesen." icon="bolt-circle" onReset={reset} />

<div class="tool-grid">
  <section class="panel">
    <h2>Eingaben</h2>
    <div class="field-grid">
      <FieldRow label="Teilkreisdurchmesser" bind:value={pcd} unit="mm" icon="bolt-circle" />
      <FieldRow label="Anzahl Bohrungen" bind:value={holeCount} unit="Stk." icon="number" />
      <FieldRow label="Startwinkel" bind:value={startAngle} unit="°" icon="angle" />
      <FieldRow label="Mittelpunkt X" bind:value={centerX} unit="mm" icon="axisx" />
      <FieldRow label="Mittelpunkt Y" bind:value={centerY} unit="mm" icon="axisy" />
    </div>
    {#if !valid}<p class="validation">Teilkreisdurchmesser &gt; 0, mindestens 2 ganzzahlige Bohrungen und gültige Zahlen eingeben.</p>{/if}
  </section>

  <section class="panel result-panel">
    <h2>Grunddaten</h2>
    <ResultRow label="Radius" value={result ? formatNumber(result.radius, 3) : '—'} unit="mm" icon="ruler" />
    <ResultRow label="Winkelabstand" value={result ? formatNumber(result.angularPitch, 3) : '—'} unit="°" icon="angle" emphasize />
    {#if result}
      <div class="coordinate-table-wrap">
        <table class="coordinate-table"><thead><tr><th>#</th><th>Winkel</th><th>X [mm]</th><th>Y [mm]</th></tr></thead><tbody>
          {#each result.points as point}
            <tr><td>{point.index}</td><td>{formatNumber(point.angleDeg, 3)}°</td><td>{formatNumber(point.x, 3)}</td><td>{formatNumber(point.y, 3)}</td></tr>
          {/each}
        </tbody></table>
      </div>
    {/if}
  </section>
</div>

<FormulaDisclosure>
  <div class="formula-layout"><div>
    <p>Der Teilkreis wird in gleich große Winkel geteilt. Der Startwinkel 0° liegt auf der positiven X-Achse; positive Winkel laufen mathematisch gegen den Uhrzeigersinn.</p>
    <code class="formula-box">α = 360° / n</code>
    <code class="formula-box">x = x₀ + r · cos(φ)</code>
    <code class="formula-box">y = y₀ + r · sin(φ)</code>
  </div><dl class="formula-legend"><div><dt>n</dt><dd>Anzahl Bohrungen</dd></div><div><dt>r</dt><dd>Teilkreisradius</dd></div><div><dt>φ</dt><dd>Startwinkel + Bohrungsindex · α</dd></div></dl></div>
</FormulaDisclosure>
