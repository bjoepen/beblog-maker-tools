<script lang="ts">
  import { TOOL_DEFINITIONS, type ToolId } from './app/toolRegistry';
  import TimingBeltTool from './tools/timing-belt/TimingBeltTool.svelte';
  import AxisScalingTool from './tools/axis-scaling/AxisScalingTool.svelte';
  import FeedsSpeedsTool from './tools/feeds-speeds/FeedsSpeedsTool.svelte';

  let selectedTool: ToolId = 'timing-belt';
  const categories = ['Antrieb', 'CNC'] as const;
</script>

<div class="app-shell">
  <aside class="sidebar">
    <div class="brand">
      <div class="brand-mark">b</div>
      <div><strong>BeBlog</strong><span>Maker Tools</span></div>
    </div>

    <nav>
      {#each categories as category}
        <div class="nav-group">
          <p>{category}</p>
          {#each TOOL_DEFINITIONS.filter((tool) => tool.category === category) as tool}
            <button class:active={selectedTool === tool.id} on:click={() => selectedTool = tool.id} title={tool.description}>
              <span class="tool-icon">{tool.icon}</span><span>{tool.title}</span>
            </button>
          {/each}
        </div>
      {/each}
    </nav>

    <div class="sidebar-footer"><span>0.1.0</span><span>Build 001 · Foundation</span></div>
  </aside>

  <main class="workspace">
    {#if selectedTool === 'timing-belt'}
      <TimingBeltTool />
    {:else if selectedTool === 'axis-scaling'}
      <AxisScalingTool />
    {:else}
      <FeedsSpeedsTool />
    {/if}
  </main>
</div>
