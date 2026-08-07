import LeadmagnetImg from "@/assets/leadMagnet.png"

export const resources = [
    {
        id: 1,
        title: "The Complete Guide to Launching Your First Online Course",
        description:
            "A step-by-step roadmap covering everything from course ideation to your first sale. Learn how to validate your idea, structure content, and market effectively.",
        color: "indigo",
        topics: [
            "Course idea validation",
            "Content structuring",
            "Pricing strategies",
            "Launch marketing tactics",
        ],
        image:LeadmagnetImg
    },
    // {
    // 	id: 2,
    // 	title: "10 Proven Email Sequences That Convert Browsers into Students",
    // 	description:
    // 		"Copy-and-paste email templates used by successful course creators to nurture leads and drive enrollment. Includes welcome sequences, launch campaigns, and re-engagement emails.",
    // 	icon: "✉️",
    // 	color: "purple",
    // 	topics: [
    // 		"Welcome sequence templates",
    // 		"Launch email campaigns",
    // 		"Cart abandonment emails",
    // 		"Re-engagement strategies",
    // 	],
    // },
    // {
    // 	id: 3,
    // 	title: "Building a Thriving Community: The Ultimate Playbook",
    // 	description:
    // 		"Discover how to create engaged communities that keep members coming back. Strategies for fostering connections, managing discussions, and monetizing your community.",
    // 	icon: "👥",
    // 	color: "teal",
    // 	topics: [
    // 		"Community engagement tactics",
    // 		"Moderation best practices",
    // 		"Member retention strategies",
    // 		"Monetization models",
    // 	],
    // },
    // {
    // 	id: 4,
    // 	title: "Pricing Psychology: How to Price Your Courses for Maximum Revenue",
    // 	description:
    // 		"Master the art and science of pricing. Learn psychological triggers, tiered pricing strategies, and how to position your courses as premium offerings.",
    // 	icon: "💰",
    // 	color: "pink",
    // 	topics: [
    // 		"Pricing psychology principles",
    // 		"Tiered pricing models",
    // 		"Competitor analysis",
    // 		"Value positioning",
    // 	],
    // },
    // {
    // 	id: 5,
    // 	title: "Content Creation Toolkit: Templates & Checklists",
    // 	description:
    // 		"Ready-to-use templates for course outlines, lesson scripts, student worksheets, and promotional materials. Save hours with these proven frameworks.",
    // 	icon: "🎨",
    // 	color: "orange",
    // 	topics: [
    // 		"Course outline templates",
    // 		"Lesson script frameworks",
    // 		"Student worksheet templates",
    // 		"Marketing material templates",
    // 	],
    // },
    // {
    // 	id: 6,
    // 	title: "SEO for Course Creators: Get Found on Google",
    // 	description:
    // 		"A beginner-friendly guide to SEO specifically for course creators. Learn how to optimize your course pages, blog content, and landing pages to attract organic traffic.",
    // 	icon: "🔍",
    // 	color: "cyan",
    // 	topics: [
    // 		"Keyword research basics",
    // 		"On-page SEO optimization",
    // 		"Content marketing strategies",
    // 		"Link building for educators",
    // 	],
    // },
];

export type colortTypes =
    | "indigo"
    | "purple"
    | "teal"
    | "pink"
    | "orange"
    | "cyan";

export const getColorClasses = (color: colortTypes) => {
    const colors = {
        indigo: {
            bg: "bg-indigo-50",
            border: "border-indigo-200",
            icon: "bg-indigo-100",
            iconText: "text-indigo-600",
            button: "bg-indigo-600 hover:bg-indigo-700",
        },
        purple: {
            bg: "bg-purple-50",
            border: "border-purple-200",
            icon: "bg-purple-100",
            iconText: "text-purple-600",
            button: "bg-purple-600 hover:bg-purple-700",
        },
        teal: {
            bg: "bg-teal-50",
            border: "border-teal-200",
            icon: "bg-teal-100",
            iconText: "text-teal-600",
            button: "bg-teal-600 hover:bg-teal-700",
        },
        pink: {
            bg: "bg-pink-50",
            border: "border-pink-200",
            icon: "bg-pink-100",
            iconText: "text-pink-600",
            button: "bg-pink-600 hover:bg-pink-700",
        },
        orange: {
            bg: "bg-orange-50",
            border: "border-orange-200",
            icon: "bg-orange-100",
            iconText: "text-orange-600",
            button: "bg-orange-600 hover:bg-orange-700",
        },
        cyan: {
            bg: "bg-cyan-50",
            border: "border-cyan-200",
            icon: "bg-cyan-100",
            iconText: "text-cyan-600",
            button: "bg-cyan-600 hover:bg-cyan-700",
        },
    } as const;
    return colors[color] || colors.indigo;
};
