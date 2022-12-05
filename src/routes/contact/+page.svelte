<script lang="ts">
  import { enhance } from '$app/forms'
  import type { ActionData } from './$types'
  import { isSubmittingForm } from './store'

  export let form: ActionData

  let name = ''
  let email = ''
  let message = ''

  $: isValidated = name !== '' && email !== '' && message !== ''

  $: form?.response && ($isSubmittingForm = false)

  $: console.log(isValidated)
</script>

<h1 class="section">Contact</h1>

<section>
  {#if form?.response}
    <pre>{JSON.stringify(form, null, 2)}</pre>
  {:else}
    <form method="POST" use:enhance>
      <input
        bind:value={name}
        name="name"
        type="text"
        placeholder="Enter your name..."
        required
      />
      <input
        bind:value={email}
        name="email"
        type="email"
        placeholder="Enter your email..."
        required
      />
      <textarea
        bind:value={message}
        rows="5"
        name="message"
        placeholder="Enter your message..."
        required
      />
      <button
        disabled={!isValidated}
        class:isSubmittingForm={$isSubmittingForm}
        on:click={() => ($isSubmittingForm = true)}
        >{$isSubmittingForm
          ? 'Submitting Form. Patience!'
          : 'Submit Message'}</button
      >
    </form>
  {/if}
</section>

<style>
  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
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
  @media (min-width: 769px) {
    form {
      max-width: 50%;
    }
  }
</style>
