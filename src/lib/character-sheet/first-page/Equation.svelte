<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { Operand } from '../types';

  import Operands from './Operands.svelte';

  const {
    children,
    operands,
    labels = 'bottom',
    renderEquals = true,
    extraPadding = true,
    maxWidth = '45px'
  }: {
    children: Snippet;
    operands: Operand[];
    labels?: 'bottom' | 'none';
    renderEquals?: boolean;
    extraPadding?: boolean;
    maxWidth?: string;
  } = $props();
</script>

<div class="flex-row" style="align-items: center;">
  {#if extraPadding}
    <div class="box-padding">
      {@render children?.()}
    </div>
  {:else}
    {@render children?.()}
  {/if}
  {#if renderEquals}
    <div class="equals" style={extraPadding ? 'padding-bottom: 15px;' : ''}>=</div>
  {/if}
  <Operands {operands} {labels} {maxWidth} />
</div>

<style lang="scss">
  .equals {
    white-space: nowrap;
    padding-left: 10px;
    padding-right: 10px;
  }

  .box-padding {
    padding-bottom: 20px;
  }
</style>
