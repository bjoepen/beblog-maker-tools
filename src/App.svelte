<script lang="ts">
  import { TOOL_DEFINITIONS, type ToolId } from './app/toolRegistry';
  import TimingBeltTool from './tools/timing-belt/TimingBeltTool.svelte';
  import AxisScalingTool from './tools/axis-scaling/AxisScalingTool.svelte';
  import FeedsSpeedsTool from './tools/feeds-speeds/FeedsSpeedsTool.svelte';
  import BrandMark from './components/BrandMark.svelte';
  import AppIcon from './components/AppIcon.svelte';
  import type { IconName } from './components/iconTypes';

  let selectedTool: ToolId = 'timing-belt';
  const categories = ['Antrieb', 'CNC'] as const;

  const toolIcon = (tool: ToolId): IconName =>
    tool === 'timing-belt' ? 'belt' : tool === 'axis-scaling' ? 'axis' : 'feeds';
</script>

<div class="app-shell">
  <aside class="sidebar">
    <div class="brand">
      <BrandMark size={54} />
      <div class="brand-copy"><strong>BeBlog Maker Tools</strong><span>Technik verstehen. Projekte bauen.</span></div>
    </div>

    <nav class="tool-navigation" aria-label="Werkzeuge">
      {#each categories as category}
        <div class="nav-group">
          <p>{category}</p>
          {#each TOOL_DEFINITIONS.filter((tool) => tool.category === category) as tool}
            <button class:active={selectedTool === tool.id} on:click={() => selectedTool = tool.id} title={tool.description}>
              <span class="tool-icon"><AppIcon name={toolIcon(tool.id)} size={21} /></span><span>{tool.title}</span>
            </button>
          {/each}
        </div>
      {/each}
    </nav>

    <section class="about-card">
      <div class="about-title"><AppIcon name="info" size={19} /><strong>Über BeBlog Maker Tools</strong></div>
      <p>Praxisnahe Rechner und Hilfsmittel für Maker, CNC und Werkstatt.</p>
      <a href="https://blog.beblog.de/" target="_blank" rel="noreferrer">blog.beblog.de <AppIcon name="external" size={15} /></a>
    </section>

    <div class="sidebar-footer"><span>0.1.0</span><span>Build 002 · UI Refinement</span></div>
  </aside>

  <main class="workspace">
    {#if selectedTool === 'timing-belt'}
      <TimingBeltTool />
    {:else if selectedTool === 'axis-scaling'}
      <AxisScalingTool />
    {:else}
      <FeedsSpeedsTool />
    {/if}

    <footer class="workspace-footer">BeBlog Maker Tools 0.1.0 · Build 002 · <a href="https://blog.beblog.de/" target="_blank" rel="noreferrer">Bernds Maker Blog</a></footer>
  </main>
</div>
