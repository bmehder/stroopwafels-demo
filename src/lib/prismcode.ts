export const code = {
  viewportCode: `
    // Viewport
    <section
      id="prism"
      use:viewport={{ rootMargin: '32px' }}
      on:enterViewport={() => console.log('Enter viewport')}
      on:exitViewport={() => console.log('Exit viewport')}
    >...`,
  wpRestApiCode: `
    // TypeScript
    import type { RequestEvent } from '@sveltejs/kit'
    import type { WP_REST_API_Posts } from 'wp-types'
  
    /** @type {import('./$types').PageLoad} */
    export async function load({ fetch }: RequestEvent) {
      const BASE_URL = 'https://example.com/wp-json/wp/v2/'
  
      const response = await fetch(BASE_URL + 'posts')
      const posts: WP_REST_API_Posts = await response.json()
  
      return { posts }
    }`,
  clickOutsideCode: `
    // ClickOutside
    <div use:clickOutside={() => console.log('clicked outside')}>`,
}
