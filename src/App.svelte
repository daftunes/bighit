<script>
  import { fly } from "svelte/transition";
  import Lotto from "./lib/Lotto.svelte";
  import Glass from "./lib/Glass.svelte";

  const items = Array.from({ length: 40 }, (_, index) => index + 1);

  let isLoaded = false;

  window.addEventListener("load", () => {
    isLoaded = true;
  });
</script>

{#if isLoaded}
  <div class="main">
    {#each items as item}
      <Glass
        --left={`${Math.ceil(Math.random() * 100)}%`}
        --delay={`${Math.ceil(Math.random() * 15)}s`}
        --size={`${Math.ceil(Math.random() * 120 + 20)}px`}
        --top={`-${Math.ceil(Math.random() * 400) + window.innerHeight}px`}
        --rotate={`-${Math.ceil(Math.random() * 700) + 300}deg`}
      />
    {/each}
    <div class="lto" in:fly={{ delay: 500 }}>
      <Lotto />
    </div>
  </div>
{/if}

<style>
  .main {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(
      60deg,
      #e5ac52 0%,
      #95636b 46%,
      #1f2152 100%
    );
    overflow: hidden;
  }
  .lto {
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
</style>
