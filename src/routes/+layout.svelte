<script>
  import '../app.css'
  import Header from 'stroopwafels/Header/Header.svelte'
  import Slider from 'stroopwafels/Slider/Slider.svelte'
  import BackToTop from 'stroopwafels/BackToTop.svelte'
  import Footer from 'stroopwafels/Footer.svelte'
  import { page } from '$app/stores'
</script>

<div class="wrapper">
  <Header
    --width="1100px"
    items={[
      {
        name: 'NPM',
        url: 'https://www.npmjs.com/package/stroopwafels',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/bmehder/stroopwafels',
        children: [
          { name: 'Svelte', url: 'https://svelte.dev' },
          { name: 'SvelteKit', url: 'https://kit.svelte.dev' },
        ],
      },
    ]}
    logo="Stroopwafels Component Library"
  />

  {#if $page.route.id !== '/sidebar'}
    <div id="slider">
      <Slider --height="70vh" />
    </div>
  {/if}

  <main>
    <slot />
  </main>

  <Footer --padding="3rem" />
</div>

<BackToTop --background="var(--light)" />

<style>
  .wrapper {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }
  main {
    max-width: 1100px;
    margin-inline: auto;
    padding-inline: 2rem;
  }
  @media (min-width: 1100px) {
    main {
      padding-block: 2rem;
      padding-inline: 0rem;
    }
  }

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
</style>
