import {
    Users,
    Play,
    BarChart3,
    Zap,
    Target,
    TrendingUp,
    Calendar,
    ArrowRight,
    Star,
    Sparkles,
    Code,
    Shield,
} from "lucide-react";
import Features from "./Features";
import { Badge } from "@/components/ui/badge";

export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-24 px-6 bg-linear-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
                </div>

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
                        <span className="text-sm font-semibold text-white">
                            Online Courses
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Create Courses That Students Actually Complete
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
                        Build engaging, video-based courses with a platform that
                        handles the tech so you can focus on teaching.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={"https://app.buisnesstools.in/onboarding"}    
                            className="bg-white hover:bg-slate-100 text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                        >
                            Start Creating Courses
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </a>
                        {/* <button className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 border-2 border-white/30 hover:border-white/50 inline-flex items-center justify-center">
							<Play className="w-5 h-5 mr-2" />
							Watch Demo
						</button> */}
                    </div>
                </div>
            </section>

            {/* The Problem Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        Tired of clunky course builders that force you to choose
                        between features and simplicity?
                    </h2>
                    <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                        <p className="text-xl leading-relaxed">
                            Most course platforms either overwhelm you with
                            complexity or limit what you can do.{" "}
                            <strong>
                                We believe you deserve both power and
                                simplicity.
                            </strong>
                        </p>
                        <p className="text-lg leading-relaxed">
                            With BusinessTools, you get a professional course
                            platform that's intuitive to use but powerful enough
                            to deliver exceptional learning experiences.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Everything you need to create, market, and sell
                            courses—
                            <strong>without the technical headaches.</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Features Grid */}
            <Features />

            {/* Course Builder Preview */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                                Intuitive Course Builder
                            </h2>
                            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                                Building a course shouldn't require a degree in
                                software engineering. Our drag-and-drop builder
                                makes it easy.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                                        <Zap className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">
                                            Simple Drag & Drop
                                        </h3>
                                        <p className="text-slate-600">
                                            Organize modules and lessons with an
                                            intuitive interface. No technical
                                            skills required.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                                        <Code className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">
                                            Custom Branding
                                        </h3>
                                        <p className="text-slate-600">
                                            Your course platform reflects your
                                            brand with custom colors, logos, and
                                            styling.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center shrink-0">
                                        <Shield className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">
                                            Content Protection
                                        </h3>
                                        <p className="text-slate-600">
                                            Secure video hosting with DRM
                                            protection, and access controls.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl aspect-square flex items-center justify-center">
                            <img
                                src="https://assets.buisnesstools.in/landingpage/course-builder.png"
                                alt="course-builder"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Student Experience */}
            <section className="py-20 px-6 bg-linear-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Your Students Get an Amazing Experience
                        </h2>
                        <p className="text-xl text-indigo-100 leading-relaxed">
                            A beautiful, distraction-free learning environment
                            that keeps students engaged
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Play className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                Seamless Video Playback
                            </h3>
                            <p className="text-indigo-100">
                                High-quality streaming that adapts to any device
                                or connection speed
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                Progress Dashboard
                            </h3>
                            <p className="text-indigo-100">
                                Students track their progress and see exactly
                                how far they've come
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                Mobile Optimized
                            </h3>
                            <p className="text-indigo-100">
                                Perfect experience on desktop, tablet, or
                                mobile—learn anywhere
                            </p>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 text-center">
                        <div className="flex items-center justify-center space-x-2 mb-6">
                            <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                            <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                            <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                            <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                            <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                        </div>
                        <p className="text-xl md:text-2xl text-white leading-relaxed italic mb-4">
                            "The platform is so intuitive that my students can
                            focus entirely on learning, not figuring out how to
                            navigate the course."
                        </p>
                        <p className="text-indigo-200">
                            — Sarah M., Course Creator
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing & Monetization */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Flexible Pricing That Grows With You
                        </h2>
                        <p className="text-xl text-slate-600">
                            Sell your courses your way with powerful pricing
                            options
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-xl p-6 border border-slate-200">
                            <div className="text-3xl mb-3">💰</div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                One-Time Payment
                            </h3>
                            <p className="text-slate-600 text-sm">
                                Sell lifetime access to your courses
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-slate-200">
                            <div className="text-3xl mb-3">🔄</div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                Subscriptions
                            </h3>
                            <p className="text-slate-600 text-sm">
                                Recurring monthly or annual memberships
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-slate-200">
                            <div className="text-3xl mb-3">📦</div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                Course Bundles
                            </h3>
                            <p className="text-slate-600 text-sm">
                                Package multiple courses at discounted rates
                            </p>
                        </div>
                        <div className="relative">
                            <Badge className="absolute z-20 right-10 top-2">
                                Coming soon
                            </Badge>
                            <div className="bg-white absolute rounded-xl p-6 border border-slate-200">
                                <div className="text-3xl mb-3">🎟️</div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    Payment Plans
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    Let students pay in installments
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marketing Tools */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Built-In Marketing Tools
                        </h2>
                        <p className="text-xl text-slate-600">
                            Grow your course business with powerful marketing
                            features
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                                    <Users className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                                        Landing Pages
                                    </h3>
                                    <p className="text-slate-600">
                                        Beautiful, high-converting sales pages
                                        for each course.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                                    <TrendingUp className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                                        Email Marketing
                                    </h3>
                                    <p className="text-slate-600">
                                        Built-in email automation to nurture
                                        leads and drive course sales.
                                    </p>
                                </div>
                            </div>

                            {/* <div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
									<Award className="w-6 h-6 text-teal-600" />
								</div>
								<div>
									<h3 className="text-lg font-bold text-slate-900 mb-1">Coupons & Promotions</h3>
									<p className="text-slate-600">
										Create discount codes, limited-time offers, and promotional campaigns.
									</p>
								</div>
							</div> */}
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center shrink-0">
                                    <BarChart3 className="w-6 h-6 text-pink-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                                        Analytics & Insights
                                    </h3>
                                    <p className="text-slate-600">
                                        Track sales, student engagement, and
                                        revenue with detailed analytics.
                                    </p>
                                </div>
                            </div>

                            {/* <div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
									<Zap className="w-6 h-6 text-orange-600" />
								</div>
								<div>
									<h3 className="text-lg font-bold text-slate-900 mb-1">Affiliate Program</h3>
									<p className="text-slate-600">
										Let others promote your courses and grow your reach with affiliate marketing.
									</p>
								</div>
							</div> */}

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                                    <Target className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                                        SEO Optimization
                                    </h3>
                                    <p className="text-slate-600">
                                        Every course page is optimized for
                                        search engines to help you get
                                        discovered. You can also start blogging
                                        throught our builtin CMS.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-linear-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Launch Your First Course?
                        </h2>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            Join thousands of creators who trust BusinessTools
                            to deliver exceptional learning experiences
                        </p>
                    </div>

                    <div className="text-center">
                        <p className="text-xl text-slate-300 mb-6">
                            Have questions about which plan is right for you?
                        </p>
                        <a
                            href="https://cal.com/buisnesstools/consultancy"
                            className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 border-2 border-white/30 hover:border-white/50 inline-flex items-center"
                        >
                            <Calendar className="w-5 h-5 mr-2" />
                            Book a Free Consultation
                        </a>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Your Knowledge Deserves a Professional Platform
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Stop fighting with complicated tools. Start teaching.
                    </p>
                    <a
                        href={"https://app.buisnesstools.in/onboarding"}
                        className="group bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center"
                    >
                        Create Your First Course
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                </div>
            </section>
        </div>
    );
}
