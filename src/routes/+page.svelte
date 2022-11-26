<script src="ts">
  import Sveltetube from 'stroopwafels/Sveltetube.svelte'
  import Prism from 'stroopwafels/Prism/Prism.svelte'
  import Tabs from 'stroopwafels/Tabs.svelte'
  import { viewport } from 'stroopwafels/viewport'
  import { clickOutside } from 'stroopwafels/clickoutside'
  import { code } from './prismcode'
</script>

<svelte:head>
  <title>Stroopwafels Component Library</title>
</svelte:head>

<section id="sveltetube">
  <div>
    <h2>SvelteTube</h2>
    <div class="grid auto-col">
      <Sveltetube
        color="#eff0f4"
        radius="1.5rem"
        shadow="0 5px 10px rgba(0,0,0,0.24)"
      />
      <Sveltetube
        color="#eff0f4"
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
      <Prism code={code.wpRestApiCode} />
      <h2>Actions</h2>
      <div>
        <Prism code={code.viewportCode} />
        <Prism code={code.clickOutsideCode} />
        <button use:clickOutside={() => console.log('clicked outside')}
          >Click Outside</button
        >
      </div>
    </div>
  </div>
</section>

<section id="tabs">
  <div>
    <h2>Tabs</h2>
    <div>
      <Tabs --color="var(--light)" />
    </div>
  </div>
</section>

<style>
  #sveltetube h2 {
    margin-bottom: 0.5rem;
  }

  #tabs :global(h2) {
    margin-bottom: 0.5rem;
  }
</style>
