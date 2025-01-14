<script lang="ts">
  const { headers }: { headers: [string, string, string, string] } = $props();

  const allHeaders = [...headers, 'Temporary Modifier'];
</script>

<div class="flex-row headers" style="flex-wrap: wrap;">
  <div class="flex-column">
    <div class="flex-row">
      <div class="title">Saving Throws</div>
      <div class="total">Total</div>
      {#each allHeaders as header}
        <div class="header">{header}</div>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .headers {
    align-items: center;
    padding-top: 10px;
  }

  .title {
    font-size: $font-medium;
    font-weight: bold;
    text-align: center;
    /* text-align: left; */
    width: 140px;
  }

  .total {
    padding-left: 10px;
    font-size: $font-medium;
    font-weight: bold;
    text-align: right;
    padding-top: 10px;
  }

  .header {
    font-size: $font-mini;
    text-align: center;
    max-width: 45px;
    word-spacing: 100px;
    padding-left: 30px;
    padding-right: 4px;
    padding-top: 10px;
  }
</style>
