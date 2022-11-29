<script lang="ts">
  import type { WP_REST_API_Post } from 'wp-types'

  export let post: WP_REST_API_Post

  const src = post._embedded?.['wp:featuredmedia'][0].source_url
</script>

<div class="card">
  <a href="/blog/{post.slug}" data-sveltekit-prefetch
    ><img {src} loading="lazy" alt={post.title.rendered} /></a
  >
  <div class="content">
    <h2>
      <a href="/blog/{post.slug}" data-sveltekit-prefetch
        >{@html post.title.rendered}</a
      >
    </h2>
    <div class="clamp">{@html post.excerpt.rendered}</div>
  </div>
</div>

<style>
  .card {
    box-shadow: var(--shadow);
  }
  .content {
    padding: var(--spacing);
  }
  .clamp {
    --numberOfLines: 4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--numberOfLines);
    overflow: hidden;
  }
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
</style>
