// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://buisnesstools.com',
    integrations: [starlight({
        title: 'buisnesstools',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
        sidebar: [
            {
                label: 'Email',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Getting started', slug: 'email/getting-started' },
                ],
            },
            {
                label: 'sahil', 
                items: [{ autogenerate: { directory: 'sahil' } }],
            },
        ],
        customCss: ['./src/styles/global.css'],
    }), react()],
    vite: {
        plugins: [tailwindcss()],
    },
});