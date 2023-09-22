<script>
  import { onMount } from "svelte";
  // export let size = "20px";
  // export let left = "0px";
  // export let delay = "0s";
  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<div class="glass"><div class:glass-move={mounted} /></div>

<style>
  .glass {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .glass-move {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.18);
    animation: spin 5s linear infinite;
    bottom: -150px;
    left: var(--left);
    width: var(--size);
    height: var(--size);
    animation-delay: var(--delay);
    mix-blend-mode: screen;
  }
  @keyframes spin {
    0% {
      transform: translateY(0px) rotate(0deg);
      opacity: 1;
      width: var(--size);
      height: var(--size);
      border-radius: 0;
    }
    100% {
      transform: translateY(var(--top)) rotate(var(--rotate));
      opacity: 0;
      width: 0;
      height: 0;
      border-radius: 50%;
    }
  }
</style>
