import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "Marketing Expert",
        content:
            "Buisnesstools didn't just give me software; they built my entire course site in 3 days. I launched and made $5k in my first week.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
        name: "David Chen",
        role: "Coding Instructor",
        content:
            "The done-for-you approach is a game changer. I focused on my content while they handled the tech. Best decision for my business.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    },
];

const logos = [
    "CreatorFlow",
    "EduStream",
    "Learnify",
    "Teachable Moments",
    "SkillShare Elite",
];

export default function TrustSection() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Logos Section */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
                        Trusted by creators from
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                        {logos.map((logo, i) => (
                            <span
                                key={i}
                                className="text-2xl font-bold text-slate-400"
                            >
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Join Hundreds of Successful Creators
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what creators
                        are saying about their experience with Buisnesstools.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group hover:shadow-md transition-shadow duration-300"
                        >
                            <Quote className="absolute top-6 right-8 w-12 h-12 text-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="flex items-center space-x-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 text-yellow-500 fill-yellow-500"
                                    />
                                ))}
                            </div>
                            <p className="text-slate-700 text-lg mb-6 relative z-10 italic">
                                "{t.content}"
                            </p>
                            <div className="flex items-center space-x-4">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full border-2 border-indigo-100"
                                />
                                <div>
                                    <p className="font-bold text-slate-900">
                                        {t.name}
                                    </p>
                                    <p className="text-sm text-slate-500">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
