<script lang="ts">
  import AppIcon from './AppIcon.svelte';
  import type { IconName } from './iconTypes';
  export let label: string;
  export let value: string;
  export let unit = '';
  export let emphasize = false;
  export let icon: IconName = 'ruler';
  export let subvalue = '';
</script>

<div class:emphasize class="result-row">
  <span class="result-label"><span class="result-icon"><AppIcon name={icon} size={20} /></span>{label}</span>
  <span class="result-value"><strong>{value}{#if unit}<small> {unit}</small>{/if}</strong>{#if subvalue}<small class="subvalue">{subvalue}</small>{/if}</span>
</div>
