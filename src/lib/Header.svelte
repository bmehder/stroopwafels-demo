<script>
  import { clickOutside } from 'stroopwafels/clickoutside'
  import DarkMode from 'stroopwafels/DarkMode.svelte'
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

<header use:clickOutside={() => console.log('clicked outside')}>
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
        <DarkMode --width="2rem" />
      </div>
    </nav>
  </div>
</header>

<style>
  header {
    background-color: #323232;
    color: white;
    overflow: hidden;
  }
  header > div {
    max-width: 1100px;
    margin-inline: auto;
    padding-block: 1.5rem;
    padding-inline: 2rem;
  }
  @media (min-width: 1100px) {
    header > div {
      padding-inline: 0;
    }
  }
  header h1 {
    margin: 0;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }

  nav div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    nav div {
      flex-direction: row;
    }
  }
</style>
