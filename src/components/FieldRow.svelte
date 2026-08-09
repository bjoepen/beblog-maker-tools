<script lang="ts">
  import AppIcon from './AppIcon.svelte';
  import type { IconName } from './iconTypes';
  export let label: string;
  export let value: string;
  export let unit = '';
  export let icon: IconName = 'ruler';
  export let inputMode: 'decimal' | 'numeric' = 'decimal';
</script>

<label class="field-row">
  <span class="field-label"><span class="field-icon"><AppIcon name={icon} size={20} /></span>{label}</span>
  <span class="input-unit-group">
    <input bind:value {inputMode} aria-label={label} />
    {#if unit}<span class="unit-box">{unit}</span>{/if}
  </span>
</label>
