<script lang="ts">
  const {
    checked = $bindable(false),
    disabled = false
  }: { checked?: boolean; disabled?: boolean } = $props();
</script>

<input type="checkbox" {checked} {disabled} />

<style lang="scss">
  input[type='checkbox'] {
    /* disable native */
    -webkit-appearance: none;
    appearance: none;
    margin: 0;

    font: inherit;
    color: currentColor;
    width: 12px;
    height: 12px;
    border: 0.15em solid black;

    display: grid;
    place-content: center;
  }

  input[type='checkbox']::before {
    content: '';
    width: 0.85em;
    height: 0.85em;
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    background-color: black;
  }

  input[type='checkbox']:checked::before {
    transform: scale(1);
  }
</style>
