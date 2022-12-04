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
    name: 'Sidebar',
    url: '/sidebar',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'NPM',
    url: 'https://www.npmjs.com/package/stroopwafels',
    target: '_blank',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/bmehder/stroopwafels',
    target: '_blank',
    children: [
      { name: 'Svelte', url: 'https://svelte.dev', target: '_blank' },
      { name: 'SvelteKit', url: 'https://kit.svelte.dev', target: '_blank' },
    ],
  },
]
