<script>
  import Sveltetube from 'stroopwafels/Sveltetube.svelte'
</script>

<aside>
  <div>
    <h2>The Sidebar</h2>
    <h3>Heading 1</h3>
  </div>
  <Sveltetube />
  <h3>Heading 2</h3>
  <Sveltetube id="epH4QvLUXlY" />
  <h3>Heading 3</h3>
  <Sveltetube id="dwMUopOFdRE" />
</aside>

<style>
  aside {
    align-self: start;
    display: grid;
    gap: 1rem;
    padding: 2rem;
    background-color: hsl(228, 19%, 90%);
  }
  @media (min-width: 769px) {
    aside {
      margin-top: calc(var(--spacing) + 0.5rem);
    }
  }
  :global(.dark) aside {
    background-color: #161616;
  }
</style>
