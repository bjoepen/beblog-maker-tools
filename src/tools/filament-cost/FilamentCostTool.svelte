<script lang="ts">
  import ToolHeader from '../../components/ToolHeader.svelte';
  import ResultRow from '../../components/ResultRow.svelte';
  import FormulaDisclosure from '../../components/FormulaDisclosure.svelte';
  import FieldRow from '../../components/FieldRow.svelte';
  import { calculateFilamentFromLength, calculateFilamentFromWeight } from '../../core/calculations/filamentCost';
  import { parseDecimal, formatNumber } from '../../core/formatting/numbers';

  type Mode = 'length' | 'weight';
  let mode: Mode = 'length';
  let filamentDiameter = '1,75';
  let density = '1,24';
  let pricePerKg = '20';
  let lengthMeters = '10';
  let weightGrams = '30';

  const materials = [
    { label: 'PLA', density: '1,24' },
    { label: 'PETG', density: '1,27' },
    { label: 'ABS', density: '1,04' },
    { label: 'ASA', density: '1,07' }
  ];

  function reset() {
    mode = 'length'; filamentDiameter = '1,75'; density = '1,24'; pricePerKg = '20'; lengthMeters = '10'; weightGrams = '30';
  }

  $: base = {
    filamentDiameter: parseDecimal(filamentDiameter),
    density: parseDecimal(density),
    pricePerKg: parseDecimal(pricePerKg)
  };
  $: sourceValue = mode === 'length' ? parseDecimal(lengthMeters) : parseDecimal(weightGrams);
  $: valid = Object.values(base).every((v) => Number.isFinite(v) && v > 0) && Number.isFinite(sourceValue) && sourceValue > 0;
  $: result = !valid ? null : mode === 'length'
    ? calculateFilamentFromLength({ ...base, lengthMeters: sourceValue })
    : calculateFilamentFromWeight({ ...base, weightGrams: sourceValue });
</script>

<ToolHeader title="Filament & Kosten" description="Filamentlänge und Gewicht ineinander umrechnen und die Materialkosten abschätzen." icon="filament" onReset={reset} />

<div class="tool-grid">
  <section class="panel">
    <div class="panel-heading-row">
      <h2>Eingaben</h2>
      <div class="segmented compact" aria-label="Berechnungsrichtung">
        <button class:active={mode === 'length'} on:click={() => mode = 'length'} type="button">Länge → Gewicht</button>
        <button class:active={mode === 'weight'} on:click={() => mode = 'weight'} type="button">Gewicht → Länge</button>
      </div>
    </div>

    <div class="material-presets" aria-label="Materialprofile">
      {#each materials as material}
        <button type="button" class:active={density === material.density} on:click={() => density = material.density}>{material.label}</button>
      {/each}
    </div>

    <div class="field-grid">
      <FieldRow label="Filamentdurchmesser" bind:value={filamentDiameter} unit="mm" icon="ruler" />
      <FieldRow label="Materialdichte" bind:value={density} unit="g/cm³" icon="density" />
      <FieldRow label="Filamentpreis" bind:value={pricePerKg} unit="€/kg" icon="cost" />
      {#if mode === 'length'}
        <FieldRow label="Verwendete Filamentlänge" bind:value={lengthMeters} unit="m" icon="filament" />
      {:else}
        <FieldRow label="Verwendetes Filamentgewicht" bind:value={weightGrams} unit="g" icon="weight" />
      {/if}
    </div>
    {#if !valid}<p class="validation">Bitte nur Werte größer als 0 eingeben.</p>{/if}
    <p class="helper-note">Materialdichten sind editierbare Richtwerte. Für genaue Kosten die Herstellerangabe des konkreten Filaments verwenden.</p>
  </section>

  <section class="panel result-panel">
    <h2>Ergebnisse</h2>
    <ResultRow label="Materialkosten" value={result ? formatNumber(result.materialCost, 2) : '—'} unit="€" icon="cost" emphasize />
    <ResultRow label="Filamentlänge" value={result ? formatNumber(result.lengthMeters, 2) : '—'} unit="m" icon="filament" />
    <ResultRow label="Filamentgewicht" value={result ? formatNumber(result.weightGrams, 1) : '—'} unit="g" icon="weight" />
    <ResultRow label="Materialvolumen" value={result ? formatNumber(result.volumeCm3, 2) : '—'} unit="cm³" icon="volume" />
  </section>
</div>

<FormulaDisclosure>
  <div class="formula-layout">
    <div>
      <p>Aus Filamentdurchmesser und Länge wird zunächst das Volumen des Filamentstrangs bestimmt. Mit der Materialdichte folgt daraus das Gewicht.</p>
      <code class="formula-box">V = π · (d / 2)² · l</code>
      <code class="formula-box">m = V · ρ</code>
      <code class="formula-box">Kosten = m / 1000 · Preis/kg</code>
    </div>
    <dl class="formula-legend">
      <div><dt>d</dt><dd>Filamentdurchmesser</dd></div>
      <div><dt>l</dt><dd>Filamentlänge</dd></div>
      <div><dt>ρ</dt><dd>Materialdichte [g/cm³]</dd></div>
      <div><dt>m</dt><dd>Filamentmasse [g]</dd></div>
    </dl>
  </div>
</FormulaDisclosure>
