<script lang="ts">
  let { value = $bindable(), max }: { value: number; max: number } = $props();

  const increment = () => {
    if (value === max) {
      return;
    }

    value++;
  };

  const decrement = () => {
    if (value === -10) {
      return;
    }

    value--;
  };
</script>

<div class="flex-row">
  <button onclick={decrement} class="decrement">-</button>
  <div class="count">{value}</div>
  <button onclick={increment} class="increment">+</button>
</div>

<style lang="scss">
  .flex-row {
    padding-top: 2px;
    height: 32px;
  }

  button {
    border: 2px solid black;
    background-color: white;
    width: 46%;
  }

  .decrement {
    border-right: none;
  }

  .decrement:hover {
    background-color: red;
    opacity: 0.7;
  }

  .count {
    width: 8%;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    padding: 3px;
    padding-top: 4px;
    text-align: center;
  }

  .increment {
    border-left: none;
  }

  .increment:hover {
    background-color: green;
    opacity: 0.7;
  }
</style>
