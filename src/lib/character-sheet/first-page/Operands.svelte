<script lang="ts">
  import type { Operand } from '../types';

  const {
    operands,
    labels = 'bottom',
    maxWidth
  }: { operands: Operand[]; labels?: 'bottom' | 'none'; maxWidth: string } = $props();
</script>

<div class="flex-row">
  {#each operands as { name, ...rest }, index}
    <div class="flex-row">
      <div class="flex-column">
        {#if 'disabled' in rest}
          <input
            type="text"
            disabled
            value={operands[index].value}
            style={`max-width: ${maxWidth};`}
          />
        {:else}
          <input
            type="number"
            style={`max-width: ${maxWidth};`}
            value={operands[index].value}
            onchange={(e) => rest.setter(parseInt(e.currentTarget.value))}
          />
        {/if}
        {#if labels === 'bottom'}
          <div class="footer">
            {name}
          </div>
        {/if}
      </div>
      {#if index !== operands.length - 1}
        <div class={`plus plus-${labels} `}>+</div>
      {/if}
    </div>
  {/each}
</div>

<style lang="scss">
  .footer {
    font-size: $font-mini;
    text-align: center;
    width: 80%;
    max-width: 45px;
    word-spacing: 100px;
  }

  .plus-bottom {
    padding-top: 8px;
  }

  .plus {
    font-size: $font-medium;
    padding-left: 5px;
    padding-right: 5px;
    text-align: center;
  }

  .plus-top {
    padding-top: 25px;
  }

  .plus-bottom {
    padding-bottom: 2px;
  }

  .plus-none {
    padding-top: 8px;
  }
</style>
