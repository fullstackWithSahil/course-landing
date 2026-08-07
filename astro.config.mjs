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
                    label: "API docs",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: "Overview", slug: "docs/api/overview" },
                        { label: "Create keys", slug: "docs/api/create" },
                        { label: "Email api", slug: "docs/api/email" },
                        { label: "Leads api", slug: "docs/api/leads" },
                        { label: "Common errors", slug: "docs/api/errors" },
                    ],
                },
                {
                    label: "Blogging",
                    items: [
                        { label: "Overview", slug: "docs/blogging/getting-started" },
                        { label: "Concepts", slug: "docs/blogging/concepts" },
                        { label: "Markdown", slug: "docs/blogging/markdown" },
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
