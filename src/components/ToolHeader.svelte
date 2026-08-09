<script lang="ts">
  import AppIcon from './AppIcon.svelte';
  import type { IconName } from './iconTypes';
  export let title: string;
  export let description: string;
  export let icon: IconName;
  export let onReset: (() => void) | undefined = undefined;
</script>

<header class="tool-header">
  <div class="tool-heading-group">
    <div class="tool-heading-icon"><AppIcon name={icon} size={34} /></div>
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </div>
  {#if onReset}
    <button class="reset-button" on:click={onReset} type="button"><AppIcon name="reset" size={17} /> Zurücksetzen</button>
  {/if}
</header>
