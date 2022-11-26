<script>
  import Sveltetube from 'stroopwafels/Sveltetube.svelte'
</script>

<aside>
  <h2>The Sidebar</h2>
  <h3>Heading 1</h3>
  <Sveltetube />
  <h3>Heading 2</h3>
  <Sveltetube id="epH4QvLUXlY" />
  <h3>Heading 3</h3>
  <Sveltetube id="dwMUopOFdRE" />
</aside>

<style>
  aside {
    align-self: start;
    padding: 2rem;
    background-color: hsl(228, 19%, 85%);
  }
  :global(.dark) aside {
    background-color: #161616;
  }
  aside h2 {
    margin: 0;
  }
  aside h3 {
    margin-bottom: 0.5rem;
  }
</style>
