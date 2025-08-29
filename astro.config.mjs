// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'BCR Docs',
      customCss: ['./src/styles/global.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
      sidebar: [
        { label: 'Mechanical', autogenerate: { directory: 'mechanical' } },
        { label: 'Electrical', autogenerate: { directory: 'electrical' } },
        { label: 'Programming', autogenerate: { directory: 'programming' } },
        { label: 'CAD',        autogenerate: { directory: 'cad' } },

      ],
      favicon: '/book.svg'
    }),
  ],

  server: {
    host: '0.0.0.0', // not just `true` — force IPv4 all-ifaces
    port: 4321,
    // helps HMR through the forwarded port
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
