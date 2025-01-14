<script lang="ts" generics="T">
  let { header, items = $bindable() }: { header: string; items: T[] } = $props(); // eslint-disable-line no-undef
</script>

<div class="flex-column">
  <div class="header">{header}</div>
  <!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
  {#each items as _, index}
    <input type="text" bind:value={items[index]} />
  {/each}
</div>

<style lang="scss">
  .header {
    height: 20px;
    background-color: black;
    color: white;
    font-size: $font-medium;
    text-align: center;
    font-weight: bold;
  }

  input {
    border: none;
    width: 100%;
    border-bottom: 1px solid black;
    height: 30px;
  }
</style>
