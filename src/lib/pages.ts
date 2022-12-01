export const pages = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'NPM',
    url: 'https://www.npmjs.com/package/stroopwafels',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/bmehder/stroopwafels',
    children: [
      { name: 'Svelte', url: 'https://svelte.dev' },
      { name: 'SvelteKit', url: 'https://kit.svelte.dev' },
    ],
  },
]
