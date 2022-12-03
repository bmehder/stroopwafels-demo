<script>
  import Sveltetube from 'stroopwafels/Sveltetube.svelte'
</script>

<h1 class="section">Sidebar</h1>

<div class="grid sidebar">
  <slot />

  <aside class="auto-format">
    <div>
      <p>SvelteKit + Supabase</p>
      <Sveltetube id="6ZBxpXOrKpo" />
    </div>
    <div>
      <p>TypeScript</p>
      <Sveltetube id="Giu1uoiNbGk" />
    </div>
    <div>
      <p>CSS</p>
      <Sveltetube id="IbUHqvu_-lI" />
    </div>
  </aside>
</div>

<style>
  .sidebar {
    gap: calc(var(--spacing) * 2);
    align-items: start;
  }
  aside {
    padding-block: calc(var(--spacing) * 2);
    padding-inline: var(--spacing);
    /* background-color: hsl(228, 19%, 88%); */
    background-color: var(--dark);
    color: var(--white);
  }
  aside > div > p {
    padding-bottom: calc(var(--spacing) / 2);
    font-size: 1.25rem;
    font-weight: bold;
  }
  :global(main:has(.sidebar)) {
    padding-block-end: 0;
  }
  @media (min-width: 769px) {
    .sidebar {
      grid-template-columns: 2fr 1fr;
      max-width: 1100px;
      margin-inline: auto;
    }
    :global(main:has(.sidebar)) {
      padding-block-end: calc(var(--spacing) * 2);
    }
  }
</style>
