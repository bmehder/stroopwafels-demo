<script>
  import { page } from '$app/stores'
  import { pages } from '$lib/pages'
  import Loading from '$lib/Loading.svelte'

  import 'stroopwafels/app.css'
  import '$lib/theme.css'
  import Header from 'stroopwafels/Header/Header.svelte'
  import Slider from 'stroopwafels/Slider/Slider.svelte'
  import BackToTop from 'stroopwafels/BackToTop.svelte'
  import Footer from 'stroopwafels/Footer.svelte'
</script>

<Loading />

<div class="wrapper">
  <Header
    --width="1100px"
    --padding="2rem"
    items={pages}
    logo={`<img src="/stroopwafel.png" alt="stroopwafel" /><div>Svelte Stroopwafels<br><small> Component Library</small></div>`}
  />

  {#if $page.route.id === '/'}
    <div id="slider">
      <Slider
        --height="70vh"
        color="white"
        slides={[
          {
            src: '/slides/slider1.jpg',
            text: 'An Interesting Title',
            options: {
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            },
          },
          {
            src: '/slides/slider2.jpg',
            text: 'Are You Not Impressed?',
            options: {
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            },
          },
          {
            src: '/slides/slider3.jpg',
            text: "You're a Tough Crowd.",
            options: {
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            },
          },
          {
            src: '/slides/slider4.jpg',
            text: 'Anyway, this is the last slide.',
            options: {
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            },
          },
        ]}
      />
    </div>
  {/if}

  <main>
    <slot />
  </main>

  <Footer --padding="3rem" />
</div>

<BackToTop --background="var(--light)" />
