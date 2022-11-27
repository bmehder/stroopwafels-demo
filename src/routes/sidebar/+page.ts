// Faking a long request to make the Loading bar show up

import type { RequestEvent } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }: RequestEvent) => {
  const BASE_URL = 'https://sprucehealthgroup.com/wp-json/wp/v2/'

  await fetch(BASE_URL + 'service?_embed')
}
