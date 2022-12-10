<script lang="ts">
  import { enhance } from '$app/forms'
  import type { ActionData } from './$types'
  import { isSubmittingForm } from './store'

  export let form: ActionData

  let name = ''
  let email = ''
  let message = ''

  $: disabled = !name || !email || !email.includes('@') || message.length < 5

  $: if (form?.response) {
    name = ''
    email = ''
    message = ''
    $isSubmittingForm = false
  }
</script>

<svelte:head>
  <title>Contact - Stroopwafels Component Library</title>
  <meta
    name="description"
    content="A contact page with a progressively enhanced contact form using SvelteKit Form Actions."
  />
</svelte:head>

<section id="contact">
  <h1>Contact</h1>
  {#if form?.success}
    <pre>{JSON.stringify(form, null, 2)}</pre>
  {:else if form && !form?.success}
    <p>The submission was not successful. Please try again.</p>
  {:else}
    <form method="POST" use:enhance>
      <input
        name="name"
        type="text"
        placeholder="Enter your name..."
        bind:value={name}
      />
      <input
        name="email"
        type="email"
        placeholder="Enter your email..."
        bind:value={email}
      />
      <textarea
        rows="5"
        name="message"
        placeholder="Enter your message..."
        bind:value={message}
      />
      <button on:click={() => ($isSubmittingForm = true)} {disabled}>
        {#if $isSubmittingForm}
          Submitting Form. Please Wait...
        {:else}
          Submit Form
        {/if}
      </button>
    </form>
  {/if}
</section>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
  }
  input,
  textarea {
    padding: calc(var(--spacing) / 2);
  }
  textarea {
    font-family: inherit;
  }
  :disabled {
    background: gray;
    cursor: not-allowed;
  }
  @media (min-width: 769px) {
    form {
      max-width: 50%;
    }
  }
</style>
