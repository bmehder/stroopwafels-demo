<script>
  import '../app.css'
  import Loading from '$lib/Loading.svelte'
  import Header from 'stroopwafels/Header/Header.svelte'
  import Slider from 'stroopwafels/Slider/Slider.svelte'
  import BackToTop from 'stroopwafels/BackToTop.svelte'
  import Footer from 'stroopwafels/Footer.svelte'
  import { pages } from '$lib/pages'
  import { page } from '$app/stores'
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
  }
  main {
    max-width: 1100px;
    margin-inline: auto;
    padding-block: 1rem 3rem;
    padding-inline: 2rem;
  }
  @media (min-width: 1100px) {
    main {
      padding-inline: 0rem;
    }
  }

  :global(nav h1) {
    font-size: 1.2rem;
  }
  :global(nav h1 a:hover) {
    text-decoration: none !important;
  }
  :global(nav h1 a div) {
    color: var(--white);
  }
  :global(nav h1 a div small) {
    color: var(--light);
  }
  :global(img) {
    width: 4rem;
  }
  :global(nav h1 a) {
    display: flex;
    align-items: center;
    gap: calc(var(--spacing) / 2);
  }

  #slider :global(button) {
    border-radius: 0;
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
