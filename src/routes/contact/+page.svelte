<script lang="ts">
  import { enhance } from '$app/forms'
  import type { ActionData } from './$types'
  import { isSubmittingForm } from './store'

  export let form: ActionData

  $: form?.results && ($isSubmittingForm = false)
</script>

<h1 class="section">Contact</h1>

<section>
  {#if form?.results}
    {JSON.stringify(form)}
  {:else}
    <form method="POST" use:enhance>
      <input name="name" type="text" placeholder="Enter your name..." />
      <input name="email" type="email" placeholder="Enter your email..." />
      <textarea rows="5" name="message" placeholder="Enter your message..." />
      <button on:click={() => ($isSubmittingForm = true)}>Submit</button>
    </form>
  {/if}
  {#if $isSubmittingForm}
    <p>The form is submitting. Patience!</p>
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
  @media (min-width: 769px) {
    form {
      max-width: 50%;
    }
  }
</style>
