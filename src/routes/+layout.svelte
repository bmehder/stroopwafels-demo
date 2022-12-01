<script>
  import { page } from '$app/stores'
  import { pages } from '$lib/pages'
  import Loading from '$lib/Loading.svelte'

  import 'stroopwafels/app.css'
  import Header from 'stroopwafels/Header/Header.svelte'
  import Slider from 'stroopwafels/Slider/Slider.svelte'
  import BackToTop from 'stroopwafels/BackToTop.svelte'
  import Footer from 'stroopwafels/Footer.svelte'
</script>

<Loading />

<div class="wrapper">
  <Header
    --width="1100px"
    --padding="2rem"
    items={pages}
    logo={`<img src="/stroopwafel.png" alt="stroopwafel" /><div>Svelte Stroopwafels<br><small> Component Library</small></div>`}
  />

  {#if $page.route.id === '/'}
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
    overflow: auto;
  }

  /* Logo */
  :global(nav h1) {
    font-size: 1.2rem;
  }
  :global(nav h1 a:hover) {
    text-decoration: none;
  }
  :global(nav h1 a div),
  :global(header i) {
    color: var(--white);
  }
  :global(nav h1 a div small) {
    color: var(--light);
  }
  :global(nav img) {
    width: 4rem;
  }
  :global(nav h1 a) {
    display: flex;
    align-items: center;
    gap: calc(var(--spacing) / 2);
  }

  /* Slider text */
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
