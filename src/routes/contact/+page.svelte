<script lang="ts">
  import { enhance } from '$app/forms'
  import type { ActionData } from './$types'
  import { isSubmittingForm } from './store'

  export let form: ActionData

  $: form?.response && ($isSubmittingForm = false)
</script>

<h1 class="section">Contact</h1>

<section>
  {#if form?.response}
    <pre>{JSON.stringify(form, null, 2)}</pre>
  {:else}
    <form method="POST" use:enhance>
      <input name="name" type="text" placeholder="Enter your name..." required />
      <input name="email" type="email" placeholder="Enter your email..." required />
      <textarea
        rows="5"
        name="message"
        placeholder="Enter your message..."
        required
      />
      <button
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
  .isSubmittingForm {
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
