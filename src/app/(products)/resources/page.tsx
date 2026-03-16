import { colortTypes, getColorClasses, resources } from "./constants";
import { Sparkles, TrendingUp, Target, Gift } from "lucide-react";
import Card from "./Card";

export default function ResourcesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-24 px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
                </div>

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
                        <span className="text-sm font-semibold text-white flex items-center justify-center">
                            <Gift className="w-4 h-4 mr-2" />
                            Free Resources
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Free Ebooks & Guides for Course Creators
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
                        Download our proven frameworks, templates, and
                        strategies to grow your education business faster.
                    </p>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Everything You Need to Build a Successful Course
                        Business
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-12">
                        These aren't just generic PDFs. Each guide is packed
                        with actionable strategies, real examples, and
                        frameworks you can implement today.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Sparkles className="w-8 h-8 text-indigo-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                100% Free
                            </h3>
                            <p className="text-slate-600">
                                No credit card required. Just your email.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Target className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                Actionable
                            </h3>
                            <p className="text-slate-600">
                                Practical strategies you can use immediately.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-8 h-8 text-teal-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                Proven
                            </h3>
                            <p className="text-slate-600">
                                Strategies used by successful creators.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources Grid */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Choose Your Free Resource
                        </h2>
                        <p className="text-xl text-slate-600">
                            Download as many as you want. No limits.
                        </p>
                    </div>

                    <div>
                        {resources.map((resource) => {
                            const colors = getColorClasses(
                                resource.color as colortTypes,
                            );
                            return (
                                <Card
                                    key={resource.id}
                                    resource={resource}
                                    colors={colors}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
