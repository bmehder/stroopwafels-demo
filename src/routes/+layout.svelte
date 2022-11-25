<script>
  import '../app.css'
  import Slider from 'stroopwafels/Slider/Slider.svelte'
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</svelte:head>

<header>
  <div>
    <nav>
      <h1>Stroopwafels Component Library</h1>
      <div>
        <a href="https://www.npmjs.com/package/stroopwafels"
          ><i class="fa-brands fa-2x fa-npm" /></a
        >
        <a href="https://github.com/bmehder/stroopwafels"
          ><i class="fa-brands fa-2x fa-github" /></a
        >
      </div>
    </nav>
  </div>
</header>

<div id="slider">
  <Slider --height="70vh" />
</div>

<main>
  <slot />
</main>

<style>
  header {
    background-color: #323232;
    color: white;
  }
  header > div {
    max-width: 1100px;
    margin-inline: auto;
    padding-block: 1.5rem;
  }
  header h1 {
    margin: 0;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
  }
  a {
    color: white;
  }
  a:hover {
    color: var(--light);
  }
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
