<script lang="ts">
  import { browser } from '$app/environment'

  export let id: string
  export let left = 100
  export let top = 100

  type Position = {
    top: number
    left: number
  }

  let isMoving = false
  let component: HTMLDivElement
  let position: Position = { top, left }

  const onMousedown = (): void => {
    isMoving = true
  }

  const onMousemove = (evt: MouseEvent) => {
    if (!isMoving) return

    left += evt.movementX
    top += evt.movementY
  }

  const onMouseup = () => {
    top = component?.getBoundingClientRect().top + scrollY
    left = component?.getBoundingClientRect().left + scrollX

    browser && localStorage.setItem(id, JSON.stringify({ top, left }))

    isMoving = false
  }

  const getPosition = (node: HTMLDivElement) => {
    position = browser && JSON.parse(localStorage.getItem(id)!)
    top = position?.top ?? top
    left = position?.left ?? left
  }
</script>

<div
  bind:this={component}
  use:getPosition
  on:mousedown={onMousedown}
  style="top: {top}px; left: {left}px;"
>
  <slot />
</div>

<svelte:window on:mouseup={onMouseup} on:mousemove={onMousemove} />

<style>
  div {
    position: absolute;
    margin: 0;
    padding: 0.5rem;
    background: var(--background, var(--white));
    color: var(--color, var(--black));
    box-sizing: border-box;
    box-shadow: var(--shadow);
    user-select: none;
    cursor: move;
    border: none;
  }
</style>
