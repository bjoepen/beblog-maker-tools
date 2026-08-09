<script lang="ts">
  export let title = 'Berechnungsgrundlagen';
  export let open = true;
</script>

<details class="formula-disclosure" {open}>
  <summary>{title}<span class="chevron">⌃</span></summary>
  <div class="formula-content"><slot /></div>
</details>
