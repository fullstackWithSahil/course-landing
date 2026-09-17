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
                        {label:"getting started",slug:"docs/apis/getting-started"},
                        {
                            label: "Courses",
                            items: [
                                {label:"list courses",slug:"docs/apis/courses/list"},
                                {label:"edit metadata",slug:"docs/apis/courses/edit"},
                            ],
                            collapsed:true
                        },
                        {
                            label: "Communities",
                            items: [
                                {label:"list communities",slug:"docs/apis/communities/list"},
                                {label:"create channel",slug:"docs/apis/communities/channel"},
                                {label:"list members",slug:"docs/apis/communities/members"},
                                {label:"Ban member",slug:"docs/apis/communities/ban"},
                                {label:"UnBan member",slug:"docs/apis/communities/unban"},
                            ],
                            collapsed:true
                        },
                        {
                            label: "Digital products",
                            items: [
                                {label:"list products",slug:"docs/apis/digital/list"},
                                {label:"Edit metadata",slug:"docs/apis/digital/edit"},
                                {label:"Get folder structure",slug:"docs/apis/digital/folder-structure"},
                                {label:"Create folder",slug:"docs/apis/digital/folders"},
                                {label:"Create file",slug:"docs/apis/digital/files"},
                            ],
                            collapsed:true
                        },
                        {
                            label: "Email",
                            items: [
                                {label:"list templates",slug:"docs/apis/email/template"},
                                {label:"create templates",slug:"docs/apis/email/create-template"},
                                {label:"deleting templates",slug:"docs/apis/email/deleting-template"},
                                {label:"send email",slug:"docs/apis/email/send-email"},
                                {label:"send templates",slug:"docs/apis/email/send-template"},
                            ],
                            collapsed:true
                        },
                        {
                            label: "Lists",
                            items: [
                                {label:"Getting list",slug:"docs/apis/lists/getting-list"},
                                {label:"Creating list",slug:"docs/apis/lists/create-list"},
                                {label:"Deleting list",slug:"docs/apis/lists/deleting-list"},
                            ],
                            collapsed:true
                        }, 
                        {
                            label: "Leads",
                            items: [
                                {label:"list leads",slug:"docs/apis/leads/getting-leads"},
                                {label:"create leads",slug:"docs/apis/leads/create-leads"},
                                {label:"updating leads",slug:"docs/apis/leads/updating-leads"},
                                {label:"deleting leads",slug:"docs/apis/leads/deleting-leads"},
                            ],
                            collapsed:true
                        }, 
                        {
                            label: "Students",
                            items: [
                                {label:"list students",slug:"docs/apis/students/getting-students"},
                                {label:"creating students",slug:"docs/apis/students/creating-students"},
                                {label:"banned students",slug:"docs/apis/students/baned-students"},
                                {label:"banning students",slug:"docs/apis/students/banning"},
                                {label:"unbanning students",slug:"docs/apis/students/unbanning"},
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
