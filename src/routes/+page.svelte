<script src="ts">
  import { code } from '$lib/prismcode'

  import { clickOutside } from 'stroopwafels/clickoutside'
  import Sveltetube from 'stroopwafels/Sveltetube.svelte'
  import Prism from 'stroopwafels/Prism/Prism.svelte'
  import Tabs from 'stroopwafels/Tabs.svelte'
  import Tooltip from 'stroopwafels/Tooltip.svelte'
  import Modal from 'stroopwafels/Modal.svelte'
  import Dialogue from 'stroopwafels/Dialogue.svelte'

  let isOpen = false
</script>

<svelte:head>
  <title>Home - Stroopwafels Component Library</title>
  <meta
    name="description"
    content="A demo site to show and test a collection of Svelte Components, Svelte actions, and a stylesheet."
  />
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

<section id="modal">
  <div class="grid auto">
    <div class="auto-format">
      <h2>Click Outside</h2>
      <div>
        <button use:clickOutside={() => console.log('clicked outside')}
          >Click Outside</button
        >
      </div>
    </div>
    <div class="auto-format">
      <h2>Modal</h2>
      <div>
        <button on:click={() => (isOpen = true)}>Open Modal</button>
      </div>
      <Modal
        {isOpen}
        on:closemodal={() => (isOpen = false)}
        --background="var(--white)"
        --color="var(--black)"
        --closeBackground="var(--light)"
        --closeColor="var(--white)"
      >
        <div class="auto-format">
          <h2>I am a Modal!</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, quae
            nostrum labore quas dolorum voluptatem officia, qui delectus aliquam
            harum corporis laboriosam quibusdam ducimus ipsam sed sunt recusandae!
            Modi facilis illum vero rem sunt ipsa perferendis deleniti molestias ex
            impedit delectus debitis, asperiores velit recusandae beatae voluptatem
            cum omnis, quia earum molestiae repellendus? Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Adipisci, quae nostrum labore quas dolorum
            voluptatem officia, qui delectus aliquam harum corporis laboriosam
            quibusdam ducimus ipsam sed sunt recusandae! Modi facilis illum vero rem
            sunt ipsa perferendis deleniti molestias ex impedit delectus debitis,
            asperiores velit recusandae beatae voluptatem cum omnis, quia earum
            molestiae repellendus?
          </p>
        </div>
      </Modal>
    </div>
  </div>
</section>

<section id="tabs" class="full-bleed">
  <div class="grid auto">
    <div class="auto-format">
      <h2>Tooltip</h2>
      <p>
        Lorem ipsum dolor sit amet, <Tooltip
          message="I'm a tooltip!"
          --background="var(--light)"
          --color="var(--white)">consectetur</Tooltip
        > adipisicing elit. Totam, eos ipsum neque deserunt atque quae inventore necessitatibus
        consequatur hic minus, exercitationem perferendis qui aut error ipsam distinctio
        veritatis. Dicta officiis facilis similique, ipsa tempora voluptatibus eligendi
        dolorum, saepe ipsum tenetur sequi veniam inventore exercitationem nam ratione
        in numquam quo eveniet pariatur iure debitis, deserunt hic molestias quod. Deleniti
        amet rem, eligendi, voluptate reiciendis voluptatibus aliquam non exercitationem
        modi eveniet fugiat, nihil autem saepe.
      </p>
    </div>
    <div class="auto-format">
      <h2>Tabs</h2>
      <Tabs --color="var(--light)" />
    </div>
  </div>
</section>

<section id="dialogue" class="grid auto">
  <div>
    <h2>Dialogue</h2>
    <Dialogue --background="transparent" />
  </div>
  <div />
</section>

<style>
  #tabs {
    padding-bottom: calc(var(--spacing) * 2);
  }
</style>
