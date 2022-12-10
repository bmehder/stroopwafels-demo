export const prerender = false

import type { RequestEvent } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions: Actions = {
  default: async ({ request }: RequestEvent) => {
    console.log('action')

    const formData = await request.formData()

    const response = {
      name: formData.get('name') ?? '',
      email: formData.get('email') ?? '',
      message: formData.get('message') ?? '',
    }

    if (response.name && response.email && response.message) {
      return { response, success: true }
    } else {
      return { response, success: false }
    }
  },
}
