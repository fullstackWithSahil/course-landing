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
                {
                    label: "Api",
                    items: [
                        {label:"getting started",slug:"docs/apis/v1/getting-started"},
                        {
                            label: "Courses",
                            items: [
                                {label:"list courses",slug:"docs/apis/v1/courses/list"},
                                {label:"edit metadata",slug:"docs/apis/v1/courses/edit"},
                            ],
                            collapsed:true
                        },
                        {
                            label: "Communities",
                            items: [
                                {label:"list communities",slug:"docs/apis/v1/communities/list"},
                                {label:"create channel",slug:"docs/apis/v1/communities/channel"},
                                {label:"list members",slug:"docs/apis/v1/communities/members"},
                                {label:"Ban member",slug:"docs/apis/v1/communities/ban"},
                                {label:"UnBan member",slug:"docs/apis/v1/communities/unban"},
                            ],
                            collapsed:true
                        },
                        {
                            label: "Digital products",
                            items: [
                                {label:"list products",slug:"docs/apis/v1/digital/list"},
                                {label:"Edit metadata",slug:"docs/apis/v1/digital/edit"},
                                {label:"Get folder structure",slug:"docs/apis/v1/digital/folder-structure"},
                                {label:"Create folder",slug:"docs/apis/v1/digital/folders"},
                                {label:"Create file",slug:"docs/apis/v1/digital/files"},
                            ],
                            collapsed:true
                        },
                        {
                            label: "Email",
                            items: [
                                {label:"list templates",slug:"docs/apis/v1/email/template"},
                                {label:"create templates",slug:"docs/apis/v1/email/create-template"},
                                {label:"deleting templates",slug:"docs/apis/v1/email/deleting-template"},
                                {label:"send email",slug:"docs/apis/v1/email/send-email"},
                                {label:"send templates",slug:"docs/apis/v1/email/send-template"},
                            ],
                            collapsed:true
                        },
                        {
                            label: "Lists",
                            items: [
                                {label:"Getting list",slug:"docs/apis/v1/lists/getting-list"},
                                {label:"Creating list",slug:"docs/apis/v1/lists/create-list"},
                                {label:"Deleting list",slug:"docs/apis/v1/lists/deleting-list"},
                            ],
                            collapsed:true
                        }, 
                        {
                            label: "Leads",
                            items: [
                                {label:"list leads",slug:"docs/apis/v1/leads/getting-leads"},
                                {label:"create leads",slug:"docs/apis/v1/leads/create-lead"},
                                {label:"updating leads",slug:"docs/apis/v1/leads/updating-leads"},
                                {label:"deleting leads",slug:"docs/apis/v1/leads/deleting-lead"},
                            ],
                            collapsed:true
                        }, 
                        {
                            label: "Students",
                            items: [
                                {label:"list students",slug:"docs/apis/v1/students/getting-students"},
                                {label:"creating students",slug:"docs/apis/v1/students/creating-students"},
                                {label:"banned students",slug:"docs/apis/v1/students/banned-students"},
                                {label:"banning students",slug:"docs/apis/v1/students/banning"},
                                {label:"unbanning students",slug:"docs/apis/v1/students/unbanning"},
                            ],
                            collapsed:true
                        },
                    ]
                }
            ],
            customCss: ["./src/styles/global.css"],
        }),
        react(),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
