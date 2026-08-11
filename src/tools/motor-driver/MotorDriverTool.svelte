<script lang="ts">
  import ToolHeader from '../../components/ToolHeader.svelte';
  import ResultRow from '../../components/ResultRow.svelte';
  import FormulaDisclosure from '../../components/FormulaDisclosure.svelte';
  import FieldRow from '../../components/FieldRow.svelte';
  import { DRIVER_PRESETS, calculateMotorDriverCompatibility, type DriverCurrentMode } from '../../core/calculations/motorDriverCompatibility';
  import { parseDecimal, formatNumber } from '../../core/formatting/numbers';

  let motorRatedCurrent = '2,0';
  let presetId = 'dm542t';
  let driverCurrentMode: DriverCurrentMode = 'rms';
  let driverMinCurrent = '0,71';
  let driverMaxCurrent = '3,20';
  let selectedDriverCurrent = '2,0';

  $: preset = DRIVER_PRESETS.find((entry) => entry.id === presetId);
  $: if (preset) {
    const minCurrent = driverCurrentMode === 'rms' ? preset.minRmsCurrent : preset.minPeakCurrent;
    const maxCurrent = driverCurrentMode === 'rms' ? preset.maxRmsCurrent : preset.maxPeakCurrent;
    driverMinCurrent = formatNumber(minCurrent, 2);
    driverMaxCurrent = formatNumber(maxCurrent, 2);
    const selected = parseDecimal(selectedDriverCurrent);
    if (!Number.isFinite(selected) || selected < minCurrent || selected > maxCurrent) {
      const motorTarget = driverCurrentMode === 'rms' ? parseDecimal(motorRatedCurrent) : parseDecimal(motorRatedCurrent) * Math.SQRT2;
      selectedDriverCurrent = formatNumber(Math.min(Math.max(motorTarget, minCurrent), maxCurrent), 2);
    }
  }

  function reset() {
    motorRatedCurrent = '2,0';
    presetId = 'dm542t';
    driverCurrentMode = 'rms';
    driverMinCurrent = '0,71';
    driverMaxCurrent = '3,20';
    selectedDriverCurrent = '2,0';
  }

  function switchCurrentMode(mode: DriverCurrentMode) {
    if (driverCurrentMode === mode) return;
    const previousMode = driverCurrentMode;
    const selected = parseDecimal(selectedDriverCurrent);
    driverCurrentMode = mode;
    if (Number.isFinite(selected) && selected > 0) {
      const converted = previousMode === 'rms' ? selected * Math.SQRT2 : selected / Math.SQRT2;
      selectedDriverCurrent = formatNumber(converted, 2);
    }
    if (preset) {
      driverMinCurrent = formatNumber(mode === 'rms' ? preset.minRmsCurrent : preset.minPeakCurrent, 2);
      driverMaxCurrent = formatNumber(mode === 'rms' ? preset.maxRmsCurrent : preset.maxPeakCurrent, 2);
    }
  }

  $: parsed = {
    motorRatedCurrent: parseDecimal(motorRatedCurrent),
    driverMinCurrent: parseDecimal(driverMinCurrent),
    driverMaxCurrent: parseDecimal(driverMaxCurrent),
    selectedDriverCurrent: parseDecimal(selectedDriverCurrent),
    driverCurrentMode
  };
  $: valid = [parsed.motorRatedCurrent, parsed.driverMinCurrent, parsed.driverMaxCurrent, parsed.selectedDriverCurrent]
    .every((value) => Number.isFinite(value) && value > 0)
    && parsed.driverMinCurrent <= parsed.driverMaxCurrent
    && parsed.selectedDriverCurrent >= parsed.driverMinCurrent
    && parsed.selectedDriverCurrent <= parsed.driverMaxCurrent;
  $: result = valid ? calculateMotorDriverCompatibility(parsed) : null;
  $: ratingLabel = driverCurrentMode === 'rms' ? 'RMS' : 'Peak';
</script>

<ToolHeader title="Motor & Treiber" description="Schrittmotor-Nennstrom und Treiberbereich vergleichen und die gewählte Stromstufe praxisnah bewerten." icon="driver" onReset={reset} />

<div class="tool-grid">
  <section class="panel">
    <h2>Motor & Treiber</h2>
    <label class="select-row">
      <span class="field-label">Treiberprofil</span>
      <select bind:value={presetId}>
        <option value="custom">Eigener / anderer Treiber</option>
        {#each DRIVER_PRESETS as driver}<option value={driver.id}>{driver.label}</option>{/each}
      </select>
    </label>
    {#if preset}
      <p class="profile-note">Herstellerprofil · {preset.voltageRange} · Strombereich nach STEPPERONLINE-Daten.</p>
    {:else}
      <p class="profile-note">Beim eigenen Treiber bitte Stromart und Strombereich exakt aus dem Datenblatt übernehmen.</p>
    {/if}

    <div class="field-grid"><FieldRow label="Motor-Nennstrom / Phase" bind:value={motorRatedCurrent} unit="A" icon="motor" /></div>

    <div class="panel-heading-row current-mode-row">
      <h2>Treiberstrom</h2>
      <div class="segmented compact" aria-label="Stromangabe">
        <button type="button" class:active={driverCurrentMode === 'rms'} on:click={() => switchCurrentMode('rms')}>RMS</button>
        <button type="button" class:active={driverCurrentMode === 'peak'} on:click={() => switchCurrentMode('peak')}>Peak</button>
      </div>
    </div>

    <div class="field-grid">
      <FieldRow label="Kleinste Stromstufe" bind:value={driverMinCurrent} unit={`A ${ratingLabel}`} icon="driver" readOnly={Boolean(preset)} />
      <FieldRow label="Größte Stromstufe" bind:value={driverMaxCurrent} unit={`A ${ratingLabel}`} icon="gauge" readOnly={Boolean(preset)} />
      <FieldRow label="Gewählte Stromstufe" bind:value={selectedDriverCurrent} unit={`A ${ratingLabel}`} icon="current" />
    </div>

    {#if !valid}<p class="validation">Bitte gültige positive Werte eingeben. Die gewählte Stromstufe muss innerhalb des eingetragenen Treiberbereichs liegen.</p>{/if}
  </section>

  <section class="panel result-panel">
    <h2>Bewertung</h2>
    {#if result}
      <div class="compatibility-card status-{result.status}">
        <span class="status-label">{result.status === 'pass' ? 'PASS' : result.status === 'warn' ? 'WARN' : 'FAIL'}</span>
        <strong>{result.headline}</strong>
        <p>{result.explanation}</p>
      </div>
    {/if}
    <ResultRow label="Motor-Nennstrom" value={result ? formatNumber(parsed.motorRatedCurrent, 2) : '—'} unit="A/Phase" icon="motor" />
    <ResultRow label="Gewählte Stufe, auf RMS bezogen" value={result ? formatNumber(result.normalizedSelectedRms, 2) : '—'} unit="A RMS" icon="current" subvalue={result ? `${formatNumber(result.utilizationPercent, 0)} % des Motor-Nennstroms` : ''} />
    <ResultRow label="Empfohlener Zielwert" value={result?.recommendedDisplayCurrent != null ? formatNumber(result.recommendedDisplayCurrent, 2) : '—'} unit={result?.recommendedDisplayCurrent != null ? `A ${ratingLabel}` : ''} icon="target" emphasize />
    <ResultRow label="Sicherer Treiberbereich" value={result ? `${formatNumber(result.normalizedMinRms, 2)}–${formatNumber(Math.min(result.normalizedMaxRms, parsed.motorRatedCurrent), 2)}` : '—'} unit={result ? 'A RMS' : ''} icon="gauge" />
  </section>
</div>

<FormulaDisclosure>
  <div class="formula-layout">
    <div>
      <p>Der Motor-Nennstrom wird als Phasenstrom betrachtet. Bei einem 2-Phasen-Schrittmotor wird dieser Wert nicht verdoppelt.</p>
      <code class="formula-box">I_target ≈ I_motor,rated</code>
      <p>Für Peak-Angaben verwendet das Werkzeug zur Vergleichbarkeit die übliche Näherung <strong>I_RMS = I_Peak / √2</strong>. Bei Herstellerprofilen werden die veröffentlichten RMS-/Peak-Bereiche verwendet.</p>
      <p class="formula-note">PASS/WARN/FAIL ist eine praxisorientierte BeBlog-Bewertung und keine Normfreigabe. Über dem Motor-Nennstrom liegende RMS-Einstellungen werden nicht empfohlen. Bei Erwärmung, Dauerbetrieb und abweichenden Treiberdefinitionen gilt immer das Herstellerdatenblatt.</p>
    </div>
    <dl class="formula-legend">
      <div><dt>PASS</dt><dd>passender, sicherer Strombereich</dd></div>
      <div><dt>WARN</dt><dd>funktioniert, aber nicht optimal</dd></div>
      <div><dt>FAIL</dt><dd>keine sichere Stromstufe verfügbar</dd></div>
      <div><dt>RMS</dt><dd>effektiver Stromwert für den Motorvergleich</dd></div>
    </dl>
  </div>
</FormulaDisclosure>
