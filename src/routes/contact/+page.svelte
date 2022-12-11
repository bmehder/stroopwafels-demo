<script lang="ts">
  import type { ActionData } from './$types'
  import Form from './Form.svelte'
  import Success from './Success.svelte'

  export let form: ActionData

  let isSubmitted = false

  $: isResponse = !!form?.response
</script>

<svelte:head>
  <title>Contact - Stroopwafels Component Library</title>
  <meta
    name="description"
    content="A contact page with a progressively enhanced contact form using SvelteKit Form Actions."
  />
</svelte:head>

<h1 class="section">Contact</h1>

<section>
  {#if isResponse}
    <Success {form} />
  {:else}
    <Form bind:isSubmitted />
  {/if}
</section>
