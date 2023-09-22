# Wish you win the lottery ticket!

This app is to help you picking up 6(or 7) unique numbers between 1 to 49(or 50)

## Tools

[Svelte](https://svelte.dev) + javascript + CSS at front end

## Adding background effects on svelte objects

a little experiment with svelte object

```js
<div class="main">
  {#each items as item}
    <Glass
      --left={`${Math.ceil(Math.random() * 100)}%`}
      --delay={`${Math.ceil(Math.random() * 15)}s`}
      --size={`${Math.ceil(Math.random() * 120 + 20)}px`}
      --top={`-${Math.ceil(Math.random() * 400)+window.innerHeight}px`}
      --rotate={`-${Math.ceil(Math.random() * 700)+300}deg`}
    />
  {/each}
</div>
```

a good thing of svelte is that svelte dynamically pushes css values as props
and the children svelte components directly get the props as css values

```html
Glass svelte component

<style>
  .glass-move {
    left: var(--left);
    width: var(--size);
    height: var(--size);
    animation-delay: var(--delay);
  }
</style>
```

## Live demo

[Big hit](https://bighit.daftunes.xyz)
