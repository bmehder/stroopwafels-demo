<script lang="ts">
  import { enhance } from '$app/forms'

  import Spinner from './Spinner.svelte'

  export let isSubmitted = false
</script>

<form method="POST" on:submit={() => (isSubmitted = true)} use:enhance>
  <div class="form-group">
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
  <div class="form-group">
    <label for="email">Email</label>
    <input
      name="email"
      type="email"
      placeholder="johndoe@email.com"
      required
      aria-required="true"
    />
  </div>
  <div class="form-group">
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
  <button class="form-submit" disabled={isSubmitted}>
    {#if isSubmitted}
      <p>The form is submitting...</p>
      <Spinner />
    {:else}
      Submit Form
    {/if}
  </button>
</form>

<style>
  form {
    --valid: 1px solid hsl(143, 89%, 50%);
    --placeholder: 0.7;
    --max-width: 50%;

    display: grid;
    gap: var(--spacing);
  }

  @media (min-width: 769px) {
    form {
      max-width: var(--max-width);
    }
  }

  .form-group {
    display: grid;
    gap: var(--half-spacing);
  }

  input,
  textarea {
    padding: var(--half-spacing);
  }

  input:valid,
  textarea:valid {
    outline: var(--valid);
  }

  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    opacity: var(--placeholder);
  }

  .form-submit {
    display: flex;
    justify-content: center;
    gap: var(--half-spacing);
  }

  .form-submit:hover,
  .form-submit:disabled {
    background-color: var(--dark);
  }

  .form-submit:disabled {
    font-weight: normal;
    text-transform: none;
    border-radius: var(--radius);
    user-select: none;
    cursor: not-allowed;
  }
</style>
