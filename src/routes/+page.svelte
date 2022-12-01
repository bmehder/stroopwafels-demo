<script src="ts">
  import Sveltetube from 'stroopwafels/Sveltetube.svelte'
  import Prism from 'stroopwafels/Prism/Prism.svelte'
  import Tabs from 'stroopwafels/Tabs.svelte'
  import { viewport } from 'stroopwafels/viewport'
  import { clickOutside } from 'stroopwafels/clickoutside'
  import { code } from '$lib/prismcode'
</script>

<svelte:head>
  <title>Stroopwafels Component Library</title>
</svelte:head>

<section id="sveltetube">
  <div>
    <h2>SvelteTube</h2>
    <div class="grid auto auto-format">
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
    <div class="grid columns auto-format">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, eos ipsum
        neque deserunt atque quae inventore necessitatibus consequatur hic minus,
        exercitationem perferendis qui aut error ipsam distinctio veritatis. Dicta
        officiis facilis similique, ipsa tempora voluptatibus eligendi dolorum, saepe
        ipsum tenetur sequi veniam inventore exercitationem nam ratione in numquam
        quo eveniet pariatur iure debitis, deserunt hic molestias quod. Deleniti amet
        rem, eligendi, voluptate reiciendis voluptatibus aliquam non exercitationem
        modi eveniet fugiat, nihil autem saepe.
      </p>
      <Tabs --color="var(--light)" />
    </div>
  </div>
</section>

<style>
  #tabs .grid {
    align-items: start;
  }
</style>
