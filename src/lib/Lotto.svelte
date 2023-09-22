<script>
  import { fade } from "svelte/transition";
  import Result from "./Result.svelte";
  import MButton from "./MButton.svelte";
  import { pick_lucky_numbers as pick } from "./utils";
  let temp;
  let clicked = false;
  function showMe649() {
    temp = pick(49);
    clicked = true;
  }

  function showMeMax() {
    temp = pick(50);
    clicked = true;
  }

  function backFn() {
    temp = undefined;
    clicked = false;
  }
</script>

<div class="container">
  {#if !clicked}
    <div class="content">
      <p>First things first.</p>
      <p>Take a deep breath then,</p>
      <p>Close your eyes, and imagine that <power>you won.</power></p>
      Ready?
      <p>Let's pick lucky numbers!</p>
    </div>
    <div class="btn-container" out:fade={{ duration: 100 }}>
      <MButton clickFn={showMeMax}>for MAX</MButton>
      <MButton clickFn={showMe649}>for 649</MButton>
    </div>
  {:else}
    <div class="back">
      <MButton clickFn={backFn} back="back">back!</MButton>
    </div>
  {/if}
  {#if temp}
    <Result {temp}>
      <p in:fade={{delay:500}}>Good luck!</p>
    </Result>
  {/if}
</div>

<style>
  .container {
    width: var(--width);
    margin-bottom: 5rem;
    transition: all 0.5s;
    padding-top: 7rem;
    z-index: 1000;
    overflow: hidden;
    height: 100vh;
    /* mix-blend-mode: screen; */
  }
  .content {
    font-size: 2rem;
    color: var(--main-color);
    padding-bottom: 2rem;
  }
  .btn-container {
    display: flex;
    flex-direction: row;
    transition: all 0.5s;
  }
  power {
    color: var(--accent-color);
    font-weight: 800;
  }

  .back {
    position: fixed;
    top: 1rem;
    right: 1rem;
  }
</style>
