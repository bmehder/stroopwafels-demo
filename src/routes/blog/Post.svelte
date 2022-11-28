<script lang="ts">
  import type { WP_REST_API_Post } from 'wp-types'

  export let post: WP_REST_API_Post
</script>

<div class="container">
  <h2>
    <a href="/blog/{post.slug}" data-sveltekit-prefetch
      >{@html post.title.rendered}</a
    >
  </h2>
  <div class="clamp2">{@html post.excerpt.rendered}</div>
</div>

<style>
  .container {
    padding: var(--spacing);
    box-shadow: var(--shadow);
  }
  .clamp2 {
    --numberOfLines: 4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--numberOfLines);
    overflow: hidden;
  }
</style>
