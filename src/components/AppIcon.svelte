<script lang="ts">
  import type { IconName } from './iconTypes';
  export let name: IconName;
  export let size = 20;
</script>

<svg class="app-icon" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
  {#if name === 'brand'}
    <path d="M8.2 2.5v5.4L3.4 12.7V7.4L8.2 2.5Z" fill="currentColor" opacity=".98"/>
    <path d="M8.2 9.7 3.4 14.5v3.2l4.8-4.8V9.7Z" fill="currentColor" opacity=".78"/>
    <path d="M9.7 8.1a7 7 0 1 1-1.9 10.7v-4.2a3.9 3.9 0 1 0 1.9-3.35V8.1Z" fill="currentColor"/>
    <path d="M14.6 16.4v5.1M17.3 15.25v5.15" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" opacity=".8"/>
  {:else if name === 'belt'}
    <circle cx="7" cy="15.5" r="3" stroke="currentColor" stroke-width="1.6"/>
    <circle cx="17.4" cy="8.5" r="2.5" stroke="currentColor" stroke-width="1.6"/>
    <path d="M4.35 14.1 15.2 6.55M8.75 17.1l10.4-6.45" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
    <circle cx="7" cy="15.5" r=".8" fill="currentColor"/><circle cx="17.4" cy="8.5" r=".7" fill="currentColor"/>
  {:else if name === 'axis'}
    <path d="M5 18.5h14M5.5 19V5M7.5 16.5l9-9M13.5 7.5h3v3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="m7 7 1.5-1.5L10 7M17 17l1.5 1.5L20 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  {:else if name === 'feeds'}
    <path d="M5.1 17.2a8 8 0 1 1 13.8 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    <path d="m12 12 4.5-3.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
    <circle cx="12" cy="12" r="1.3" fill="currentColor"/>
    <path d="M7.2 9.1 5.9 8.3M16.8 9.1l1.3-.8M12 6.4V4.9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  {:else if name === 'reset'}
    <path d="M6.3 7.2A7 7 0 1 1 5 13" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
    <path d="M6.4 3.9v3.5H2.9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  {:else if name === 'info'}
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6"/><path d="M12 10.7v5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="7.6" r="1" fill="currentColor"/>
  {:else if name === 'external'}
    <path d="M13 5h6v6M19 5l-8 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 13v5H6V7h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  {:else if name === 'ruler'}
    <path d="m6.3 18.5-2.8-2.8L15.7 3.5l2.8 2.8L6.3 18.5Z" stroke="currentColor" stroke-width="1.5"/><path d="m8.5 14-1.3-1.3m3.4-.8L9.3 10.6m3.4-.8-1.3-1.3m3.4-.8-1.3-1.3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
  {:else if name === 'number'}
    <path d="M9.4 4 7.3 20M16.7 4l-2.1 16M4.7 9h14.6M3.9 15h14.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  {:else if name === 'check'}
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.5"/><path d="m8.2 12.1 2.3 2.3 5.2-5.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  {:else if name === 'delta'}
    <path d="m12 4 7.5 15H4.5L12 4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  {:else if name === 'driver'}
    <rect x="4.5" y="5" width="15" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 9h8M8 12h5M8 15h8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M7 3.5v2M12 3.5v2M17 3.5v2M7 19v1.5M12 19v1.5M17 19v1.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
  {:else if name === 'current'}
    <path d="M13.4 3.5 7.8 12h4.1l-1.3 8.5 5.6-9h-4.1l1.3-8Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  {:else if name === 'motor'}
    <rect x="5" y="6.5" width="11" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/><circle cx="10.5" cy="12" r="2.5" stroke="currentColor" stroke-width="1.5"/><path d="M16 10h3v4h-3M7.5 6.5V4.7m6 1.8V4.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  {:else if name === 'spindle'}
    <path d="M5 12h14M7 9.5v5M10 8.5v7M13 9.5v5M16 8.5v7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  {:else if name === 'speed'}
    <path d="M5.1 17.2a8 8 0 1 1 13.8 0" stroke="currentColor" stroke-width="1.5"/><path d="m12 12 4-3" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>
  {:else if name === 'feed'}
    <path d="M4 12h13M13 8l4 4-4 4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 7v10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity=".65"/>
  {:else if name === 'flow3d'}
    <path d="M6 7.5h12v3H6zM8 10.5v6.5m8-6.5v6.5M5 17h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="m10 14 2 2 2-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  {:else if name === 'nozzle'}
    <path d="M7 5h10l-2 7H9L7 5Zm3 7h4l-1 4h-2l-1-4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 16v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  {:else if name === 'layers'}
    <path d="m12 5 8 4-8 4-8-4 8-4Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="m5 12 7 3.5 7-3.5M5 15.5 12 19l7-3.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  {:else if name === 'gauge'}
    <path d="M5.1 17.2a8 8 0 1 1 13.8 0" stroke="currentColor" stroke-width="1.5"/><path d="m12 12 4.5-3.1" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>
  {:else if name === 'filament'}
    <circle cx="12" cy="12" r="7.5" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M18.2 16.2c2.1.5 2.4 2.1 1.5 3.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  {:else if name === 'density'}
    <path d="M7 5h10l2 5-7 9-7-9 2-5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8.5 10h7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
  {:else if name === 'cost'}
    <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/><path d="M14.8 8.1c-.7-.7-1.5-1-2.5-1-2 0-3.5 1.7-3.5 4.8s1.5 5 3.5 5c1 0 1.8-.3 2.5-1M7.5 11h5.8M7.5 13h5.3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
  {:else if name === 'weight'}
    <path d="M7 9h10l2 10H5L7 9Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="12" cy="7" r="2.5" stroke="currentColor" stroke-width="1.5"/>
  {:else if name === 'volume'}
    <path d="m12 4 7 4v8l-7 4-7-4V8l7-4Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="m5 8 7 4 7-4M12 12v8" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  {:else if name === 'caliper'}
    <path d="M5 5v12M5 8h11M9 8v5h8M17 10v7M5 17h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  {:else if name === 'target'}
    <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/>
  {:else if name === 'axisx'}
    <path d="M5 18 18 5M13 5h5v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 5l4 4m0-4L5 9" stroke="currentColor" stroke-width="1.3"/>
  {:else if name === 'axisy'}
    <path d="M12 19V5M8 9l4-4 4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 5l2 3 2-3" stroke="currentColor" stroke-width="1.3"/>
  {:else if name === 'axisz'}
    <path d="M5 18 18 5M13 5h5v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 5h5L5 9h5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
  {:else if name === 'bolt'}
    <path d="M8 4h8l2 3-2 3H8L6 7l2-3Zm4 6v10M9.5 13h5M9.5 16h5M9.5 19h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  {:else if name === 'wrench'}
    <path d="M14.8 5.2a4.2 4.2 0 0 0-5.1 5.2L4.6 15.5a2 2 0 1 0 2.8 2.8l5.1-5.1a4.2 4.2 0 0 0 5.2-5.1l-2.4 2.4-2.2-.6-.6-2.2 2.3-2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
  {:else if name === 'thread'}
    <path d="M5 6h14M7 9h10M5 12h14M7 15h10M5 18h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  {:else if name === 'drill'}
    <path d="M8 4h8l-1 4 1 2-2 2 1 2-2 2 1 2-2 2-2-2 1-2-2-2 1-2-2-2 1-2-1-4Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
  {:else if name === 'hole'}
    <circle cx="12" cy="12" r="7" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="2.5" stroke="currentColor" stroke-width="1.5"/>
  {:else if name === 'bolt-circle'}
    <circle cx="12" cy="12" r="7.5" stroke="currentColor" stroke-width="1.3" stroke-dasharray="2 2"/><circle cx="12" cy="4.5" r="1.4" fill="currentColor"/><circle cx="18.5" cy="15.75" r="1.4" fill="currentColor"/><circle cx="5.5" cy="15.75" r="1.4" fill="currentColor"/>
  {:else if name === 'angle'}
    <path d="M5 18h14M6 18 17 7M10 18a5 5 0 0 1 1.5-3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  {/if}
</svg>
