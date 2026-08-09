<script lang="ts">
  import AppIcon from './AppIcon.svelte';
  export let size = 48;
</script>
<div class="brand-symbol" style={`--brand-size:${size}px`} aria-label="BeBlog Maker Tools">
  <AppIcon name="brand" size={size - 6} />
</div>
