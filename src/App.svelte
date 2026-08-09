<script lang="ts">
  import { TOOL_DEFINITIONS, type ToolId } from './app/toolRegistry';
  import TimingBeltTool from './tools/timing-belt/TimingBeltTool.svelte';
  import AxisScalingTool from './tools/axis-scaling/AxisScalingTool.svelte';
  import FeedsSpeedsTool from './tools/feeds-speeds/FeedsSpeedsTool.svelte';
  import VolumetricFlowTool from './tools/volumetric-flow/VolumetricFlowTool.svelte';
  import FilamentCostTool from './tools/filament-cost/FilamentCostTool.svelte';
  import DimensionalCorrectionTool from './tools/dimensional-correction/DimensionalCorrectionTool.svelte';
  import FastenerFinderTool from './tools/fastener-finder/FastenerFinderTool.svelte';
  import ThreadDrillTool from './tools/thread-drill/ThreadDrillTool.svelte';
  import BoltCircleTool from './tools/bolt-circle/BoltCircleTool.svelte';
  import BrandMark from './components/BrandMark.svelte';
  import AppIcon from './components/AppIcon.svelte';
  import type { IconName } from './components/iconTypes';

  let selectedTool: ToolId = 'timing-belt';
  const categories = ['Antrieb', 'CNC', '3D-Druck', 'Werkstatt'] as const;

  const toolIcon = (tool: ToolId): IconName => {
    if (tool === 'timing-belt') return 'belt';
    if (tool === 'axis-scaling') return 'axis';
    if (tool === 'feeds-speeds') return 'feeds';
    if (tool === 'volumetric-flow') return 'flow3d';
    if (tool === 'filament-cost') return 'filament';
    if (tool === 'dimensional-correction') return 'caliper';
    if (tool === 'fastener-finder') return 'bolt';
    if (tool === 'thread-drill') return 'thread';
    return 'bolt-circle';
  };
</script>

<div class="app-shell">
  <aside class="sidebar">
    <div class="brand"><BrandMark size={54} /><div class="brand-copy"><strong>BeBlog Maker Tools</strong><span>Technik verstehen. Projekte bauen.</span></div></div>
    <nav class="tool-navigation" aria-label="Werkzeuge">
      {#each categories as category}
        <div class="nav-group"><p>{category}</p>{#each TOOL_DEFINITIONS.filter((tool) => tool.category === category) as tool}<button class:active={selectedTool === tool.id} on:click={() => selectedTool = tool.id} title={tool.description}><span class="tool-icon"><AppIcon name={toolIcon(tool.id)} size={21} /></span><span>{tool.title}</span></button>{/each}</div>
      {/each}
    </nav>
    <section class="about-card"><div class="about-title"><AppIcon name="info" size={19} /><strong>Über BeBlog Maker Tools</strong></div><p>Praxisnahe Rechner und Hilfsmittel für Maker, CNC, 3D-Druck und Werkstatt.</p><a href="https://blog.beblog.de/" target="_blank" rel="noreferrer">blog.beblog.de <AppIcon name="external" size={15} /></a></section>
    <div class="sidebar-footer"><span>0.1.2</span><span>Build 004 · Workshop Essentials</span></div>
  </aside>
  <main class="workspace">
    {#if selectedTool === 'timing-belt'}<TimingBeltTool />
    {:else if selectedTool === 'axis-scaling'}<AxisScalingTool />
    {:else if selectedTool === 'feeds-speeds'}<FeedsSpeedsTool />
    {:else if selectedTool === 'volumetric-flow'}<VolumetricFlowTool />
    {:else if selectedTool === 'filament-cost'}<FilamentCostTool />
    {:else if selectedTool === 'dimensional-correction'}<DimensionalCorrectionTool />
    {:else if selectedTool === 'fastener-finder'}<FastenerFinderTool />
    {:else if selectedTool === 'thread-drill'}<ThreadDrillTool />
    {:else}<BoltCircleTool />{/if}
    <footer class="workspace-footer">BeBlog Maker Tools 0.1.2 · Build 004 · <a href="https://blog.beblog.de/" target="_blank" rel="noreferrer">Bernds Maker Blog</a></footer>
  </main>
</div>
