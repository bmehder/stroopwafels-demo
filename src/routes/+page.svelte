<script src="ts">
  import Sveltetube from 'stroopwafels/Sveltetube.svelte'
  import Prism from 'stroopwafels/Prism/Prism.svelte'
  import Tabs from 'stroopwafels/Tabs.svelte'
  import { viewport } from 'stroopwafels/viewport'
  import { clickOutside } from 'stroopwafels/clickoutside'
  import { code } from '../lib/prismcode'
</script>

<svelte:head>
  <title>Stroopwafels Component Library</title>
</svelte:head>

<h1>Components</h1>

<section id="sveltetube">
  <div>
    <h2>SvelteTube</h2>
    <div class="grid auto">
      <Sveltetube
        color="#eff0f4"
        radius="1.5rem"
        shadow="0 5px 10px rgba(0,0,0,0.24)"
      />
      <Sveltetube
        id="AdNJ3fydeao"
        color="#eff0f4"
        radius="1.5rem"
        shadow="0 5px 10px rgba(0,0,0,0.24)"
      />
    </div>
  </div>
</section>

<section id="prism">
  <div>
    <h2>Prism</h2>
    <div>
      <Prism code={code.wpRestApiCodeJavaScript} />
      <Prism code={code.wpRestApiCodeTypeScript} />
    </div>
    <h2>Actions</h2>
    <div>
      <Prism code={code.viewportCode} />
      <Prism code={code.clickOutsideCode} />
    </div>
  </div>
</section>

<section id="click-outside">
  <div>
    <h2>Click Outside</h2>
    <div>
      <button use:clickOutside={() => console.log('clicked outside')}
        >Click Outside</button
      >
    </div>
  </div>
</section>

<section
  id="tabs"
  use:viewport={{}}
  on:enterViewport={() => console.log('Enter viewport')}
  on:exitViewport={() => console.log('Exit viewport')}
>
  <div>
    <h2>Tabs</h2>
    <div>
      <Tabs --color="var(--light)" />
    </div>
  </div>
</section>

<style>
  /* Hack */
  :global(header i) {
    color: white;
  }
</style>
