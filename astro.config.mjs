// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://trywhiteowl.com",
    integrations: [
        starlight({
            title: "whitewowl",
            social: [
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/withastro/starlight",
                },
            ],
            sidebar: [
                {
                    label: "Uploading a course",
                    items: [
                        {
                            label: "Getting started",
                            slug: "docs/course/getting-started",
                        },
                        { label: "Editing", slug: "docs/course/editing" },
                        { label: "Common questions", slug: "docs/course/questions" },
                    ],
                },
                {
                    label: "Email templates",
                    items: [
                        {
                            label: "Getting started",
                            slug: "docs/email/getting-started",
                        },
                    ],
                },
                {
                    label: "Payments",
                    items: [
                        { label: "Overview", slug: "docs/payments/getting-started" },
                        { label: "Dodo payments", slug: "docs/payments/dodo" },
                        { label: "Razorpay", slug: "docs/payments/razorpay" },
                    ],
                },
            ],
            customCss: ["./src/styles/global.css"],
        }),
        react(),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
