<script lang="ts">
  import type { ActionData } from './$types'
  import { enhance } from '$app/forms'

  import Spinner from './Spinner.svelte'

  export let form: ActionData

  let disabled = false

  $: form?.response && (disabled = false)
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
  {#if form?.response}
    <p>The form submitted successfully. 😀</p>
    <pre>{JSON.stringify(form, null, 2)}</pre>
  {:else}
    <form method="POST" on:submit={() => (disabled = true)} use:enhance>
      <div>
        <label for="name">Name</label>
        <input
          name="name"
          type="text"
          maxlength="100"
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
          name="message"
          rows="6"
          minlength="5"
          maxlength="400"
          placeholder="Enter your message..."
          required
          aria-required="true"
        />
      </div>
      <button {disabled}>
        {#if disabled}
          <p>The form is submitting...</p>
          <Spinner />
        {:else}
          Submit Form
        {/if}
      </button>
    </form>
  {/if}
</section>

<style>
  form {
    --valid: 1px solid hsl(143, 89%, 50%);
    --placeholder: 0.7;
    --max-width: 50%;

    gap: var(--spacing);
  }

  form,
  form div {
    display: flex;
    flex-direction: column;
  }

  form div {
    gap: var(--spacing-half);
  }

  input,
  textarea {
    padding: var(--spacing-half);
  }

  input:valid,
  textarea:valid {
    outline: var(--valid);
  }

  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    opacity: var(--placeholder);
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-half);
  }

  button:hover:not(:disabled) {
    background-color: var(--dark);
  }

  :disabled {
    background-color: var(--dark);
    border-radius: var(--radius);
    font-weight: normal;
    text-transform: none;
    user-select: none;
    cursor: not-allowed;
  }

  @media (min-width: 769px) {
    form {
      max-width: var(--max-width);
    }
  }
</style>
