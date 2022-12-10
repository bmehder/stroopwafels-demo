<script lang="ts">
  import { enhance } from '$app/forms'
  import type { ActionData } from './$types'
  import { isSubmittingForm } from './store'

  export let form: ActionData

  let formElement: HTMLFormElement | undefined

  $: form?.response && ($isSubmittingForm = false)
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
    <p>The submission was not successful. Please try again. 💩</p>
    <pre>{JSON.stringify(form, null, 2)}</pre>
  {:else}
    <form bind:this={formElement} method="POST" use:enhance>
      <div>
        <label for="name">Name</label>
        <input
          name="name"
          type="text"
          placeholder="John Doe"
          required
          aria-required="true"
        />
      </div>
      <div>
        <label for="email">Email</label>
        <input
          name="email"
          type="email"
          placeholder="johndoe@email.com"
          required
          aria-required="true"
        />
      </div>
      <div>
        <label for="message">Message</label>
        <textarea
          rows="5"
          name="message"
          placeholder="Enter your message..."
          required
          minlength="5"
          aria-required="true"
        />
      </div>
      <button
        on:click={() => formElement?.checkValidity() && ($isSubmittingForm = true)}
      >
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
  form div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  input,
  textarea {
    padding: calc(var(--spacing) / 2);
  }
  textarea {
    font-family: inherit;
  }

  input:valid,
  textarea:valid {
    border: 2px solid hsl(143, 89%, 35%);
    outline: none;
  }

  @media (min-width: 769px) {
    form {
      max-width: 50%;
    }
  }
</style>
