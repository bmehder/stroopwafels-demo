<script src="ts">
  import Sveltetube from 'stroopwafels/Sveltetube.svelte'
  import Prism from 'stroopwafels/Prism/Prism.svelte'
  import Tabs from 'stroopwafels/Tabs.svelte'
  import { viewport } from 'stroopwafels/viewport'
</script>

<svelte:head>
  <title>Stroopwafels Component Library</title>
</svelte:head>

<section id="sveltetube">
  <div>
    <h2>SvelteTube</h2>
    <div class="grid auto-col">
      <Sveltetube radius="1.5rem" shadow="0 5px 10px rgba(0,0,0,0.24)" />
      <Sveltetube
        id="AdNJ3fydeao"
        radius="1.5rem"
        shadow="0 5px 10px rgba(0,0,0,0.24)"
      />
    </div>
  </div>
</section>

<section
  id="prism"
  use:viewport={{ rootMargin: '32px' }}
  on:enterViewport={() => console.log('Enter viewport')}
  on:exitViewport={() => console.log('Exit viewport')}
>
  <div>
    <h2>Prism</h2>
    <div>
      <Prism
        code={`
    // TypeScript
    import type { RequestEvent } from '@sveltejs/kit'
    import type { WP_REST_API_Posts } from 'wp-types'
  
    /** @type {import('./$types').PageLoad} */
    export async function load({ fetch }: RequestEvent) {
      const BASE_URL = 'https://example.com/wp-json/wp/v2/'
  
      const response = await fetch(BASE_URL + 'posts')
      const posts: WP_REST_API_Posts = await response.json()
  
      return { posts }
    }`}
      />
      <h2>Actions</h2>
      <div>
        <Prism
          code={`
    // Viewport
    <section
      id="prism"
      use:viewport={{ rootMargin: '32px' }}
      on:enterViewport={() => console.log('Enter viewport')}
      on:exitViewport={() => console.log('Exit viewport')}
    >...`}
        />
      </div>
    </div>
  </div>
</section>

<section id="tabs">
  <div>
    <h2>Tabs</h2>
    <div>
      <Tabs --color="var(--light)" />
    </div>
  </div>
</section>

<style>
  section > div {
    max-width: 1100px;
    margin-inline: auto;
  }

  /* Component style overrides */
  #sveltetube :global(div div) {
    gap: 3rem;
  }
  #sveltetube h2 {
    margin-bottom: 0.5rem;
  }
  #prism :global(div > div > div) {
    margin: 0;
  }
  #tabs :global(aside) {
    margin-block: 0;
  }
  #tabs :global(h2) {
    margin-block: 1.5rem 0.5rem;
  }
</style>
