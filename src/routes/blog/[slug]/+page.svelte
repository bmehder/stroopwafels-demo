<script lang="ts">
  import type { PageData } from './$types'

  /** @type {import('./$types').PageData} */
  export let data: PageData

  const post = data.post[0]
</script>

<h1>{@html post.title.rendered}</h1>
<div>{@html post.content.rendered}</div>
