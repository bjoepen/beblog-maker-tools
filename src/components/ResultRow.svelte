<script lang="ts">
  export let label: string;
  export let value: string;
  export let unit = '';
  export let emphasize = false;
</script>

<div class:emphasize class="result-row">
  <span>{label}</span>
  <strong>{value}{#if unit}<small> {unit}</small>{/if}</strong>
</div>
