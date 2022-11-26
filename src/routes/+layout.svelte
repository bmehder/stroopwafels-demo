<script>
  import '../app.css'
  import Slider from 'stroopwafels/Slider/Slider.svelte'
  import Header from '$lib/Header.svelte'
</script>

<Header />

<div id="slider">
  <Slider --height="70vh" />
</div>

<main>
  <slot />
</main>

<style>
  main {
    padding: 2rem;
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
