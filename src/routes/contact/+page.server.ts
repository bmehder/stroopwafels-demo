export const prerender = false

import type { Actions } from './$types'
import type { RequestEvent } from '@sveltejs/kit'

export const actions: Actions = {
  default: async ({ request }: RequestEvent) => {
    const formData = await request.formData()

    const response = {
      name: formData.get('name') ?? '',
      email: formData.get('email') ?? '',
      message: formData.get('message') ?? '',
    }

    return { response }
  },
}
