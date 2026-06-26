// @ts-check
import { defineConfig } from 'astro/config';
<<<<<<< HEAD
import vercel from '@astrojs/vercel';


 

// https://astro.build/config
export default defineConfig({
   output: 'server',
  adapter: vercel(),

=======

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
>>>>>>> dc43b6306cfd7168c943ed7efc01193aa023f6a2
});