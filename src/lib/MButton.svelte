<script>
  export let clickFn;
  export let back = undefined;
</script>

<button on:click={clickFn} class:back>
  <slot />
</button>

<style>
  button {
    font-family: "Inconsolata", monospace;
    color: #E5AC52;
    background-color: #694C6A;
    border: 1px;
    border-style: solid;
    border-color: #95626A;
    border-radius: 0.2rem;
    padding: 10px;
    width: 13rem;
    margin: 0.5rem;
    cursor: pointer;
  }

  button:hover {
    background-color: #E5AC52;
    color: white;
  }
  button:active {
    background-color: #E5AC52;
    box-shadow: #63d9f6;
  }

  .back {
    width: auto;
    background-color: #95626A;
    color: white;
  }
</style>
