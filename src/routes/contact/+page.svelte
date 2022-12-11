<script lang="ts">
  import { enhance } from '$app/forms'
  import type { ActionData } from './$types'

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
          rows="5"
          name="message"
          minlength="5"
          maxlength="400"
          placeholder="Enter your message..."
          required
          aria-required="true"
        />
      </div>
      <button {disabled}>
        {#if disabled}
          <div>
            <p>The form is submitting...</p>

            <svg viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="20" fill="none" stroke-width="5" />
            </svg>
          </div>
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
    border: 1px solid hsl(143, 89%, 35%);
    outline: none;
  }

  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    opacity: 0.7;
  }

  button:hover:not(:disabled) {
    background-color: hsl(23, 89%, 50%);
    transition: all 200ms;
    scale: 0.99;
  }

  :disabled {
    background-color: transparent;
    user-select: none;
    cursor: not-allowed;
  }

  button div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: var(--spacing);
    color: var(--black);
  }

  svg {
    animation: rotate 2s linear infinite;
    width: 50px;
    height: 50px;
  }

  svg circle {
    stroke: var(--dark);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }

  @media (min-width: 769px) {
    form {
      max-width: 50%;
    }
  }
</style>
