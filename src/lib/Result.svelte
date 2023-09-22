<script>
  import { fly, fade } from "svelte/transition";
  import { onMount } from "svelte";
  export let temp;
  let isMounted = false
  onMount( ()=>{
    isMounted = true
  })
</script>

<div class="container" >
  {#if isMounted}
  <slot  />
  <span in:fade={{delay:700}} class="result" >{temp}</span>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    font-size: var(--result-font-size);
    font-weight: 800;
    gap: 1rem;
    color: var(--accent-dimmed-color);
    font-size: 3rem;
  }
  .container .result {
    width: auto;
    padding: 1rem;
    font-size: 2rem;
    border-radius: 5px;
    border-style: solid;
    color: var(--accent-color);
    border-color: var(--accent-color);
    word-wrap: break-word;
  }
</style>
