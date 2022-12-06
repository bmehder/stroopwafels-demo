<script lang="ts">
  import Dragable from '$lib/Dragable.svelte'
</script>

<div class="section">
  <h1>Dragables</h1>
</div>

<div class="section">
  <Dragable
    id="1"
    top={100}
    left={100}
    --background="var(--dark)"
    --color="var(--white)"
    >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla deleniti ea
    voluptatum et! Molestiae magnam consectetur dolorem tempore suscipit sunt, quia
    odio cum sint corporis doloribus qui, voluptate illo veritatis sit? Aut omnis
    distinctio facilis vel eum sequi molestias odio consectetur quia ut et doloribus
    non, corporis placeat ea.
  </Dragable>
  <Dragable
    id="32"
    top={200}
    left={100}
    --background="var(--light)"
    --color="var(--white)">This is a Dragable.</Dragable
  >
  <Dragable
    id="42"
    top={350}
    left={400}
    --background="var(--medium)"
    --color="var(--white)"
    ><div style="width: calc(var(--spacing) * 18);">
      <img src="/slides/slider1.jpg" alt="" />
    </div></Dragable
  >
</div>
