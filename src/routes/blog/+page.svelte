<script lang="ts">
  import type { PageData } from './$types'
  import Post from './Post.svelte'

  /** @type {import('./$types').PageData} */
  export let data: PageData
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Blog (auto-grid)</h1>

<div class="grid auto">
  {#each data.posts as post}
    <Post {post} />
  {/each}
</div>
