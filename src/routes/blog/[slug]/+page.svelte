<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData

  const post = data.post[0]
  const src = post._embedded?.['wp:featuredmedia'][0].source_url
</script>

<svelte:head>
  <title>{post.title.rendered}</title>
</svelte:head>

<section>
  <img {src} alt={post.title.rendered} />

  <h1>{@html post.title.rendered}</h1>

  <div class="auto-format">{@html post.content.rendered}</div>
</section>

<style>
  .auto-format :global(li):not(:last-child) {
    padding-bottom: 1rem;
  }
</style>
