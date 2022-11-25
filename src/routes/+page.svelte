<script src="ts">
  import Slider from 'stroopwafels/Slider/Slider.svelte'
  import Sveltetube from 'stroopwafels/Sveltetube.svelte'
  import Prism from 'stroopwafels/Prism/Prism.svelte'
  import { viewport } from 'stroopwafels/viewport'
</script>

<svelte:head>
  <title>Stroopwafels Component Library</title>
</svelte:head>

<div id="slider">
  <Slider --height="90vh" />
</div>

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
      <h2>Viewport Action</h2>
      <div>
        <Prism
          code={`<section
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

<style>
  section {
    margin-top: 2rem;
  }
  section > div {
    max-width: 1100px;
    margin-inline: auto;
  }
  section div div {
    padding-block: 1.5rem;
  }

  /* Component style overrides */
  #slider :global(span) {
    background: linear-gradient(
      to right,
      var(--dark),
      var(--medium),
      var(--light),
      var(--dark)
    );
    background-size: 200%;
    white-space: nowrap;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: background-pan 32s linear infinite;
    text-shadow: none;
    filter: drop-shadow(1rem 1rem 2rem rgba(0, 0, 0, 0.24));
  }
  @media (max-width: 600px) {
    #slider :global(h2) {
      top: 50% !important;
    }
  }
  @keyframes background-pan {
    from {
      background-position: 0% center;
    }
    to {
      background-position: -200% center;
    }
  }
  #sveltetube :global(div div) {
    gap: 3rem;
  }
  #prism :global(div > div > div) {
    margin: 0;
  }
</style>
