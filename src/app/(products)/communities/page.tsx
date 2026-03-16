import {
    Users,
    MessageCircle,
    Lock,
    TrendingUp,
    Zap,
    Calendar,
    Bell,
    Crown,
    Shield,
    Heart,
    Sparkles,
    ArrowRight,
    Award,
} from "lucide-react";
import Tiers from "./Tiers";
import Features from "./Features";
import Link from "next/link";
import Pricing from "./Pricing";

export default function CommunitiesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-24 px-6 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
                </div>

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
                        <span className="text-sm font-semibold text-white">
                            Communities (Beta)
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Build Thriving Communities That Your Members Love
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
                        Create membership sites and private communities where
                        your audience connects, grows, and stays engaged.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={"https://communities.buisnesstools.in/"}
                            className="bg-white hover:bg-slate-100 text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                        >
                            Start Building Community
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                        {/* <button className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 border-2 border-white/30 hover:border-white/50 inline-flex items-center justify-center">
							<Users className="w-5 h-5 mr-2" />
							See Examples
						</button> */}
                    </div>
                </div>
            </section>

            {/* The Problem Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        Tired of scattered communities across Facebook Groups,
                        Discord, and Slack?
                    </h2>
                    <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                        <p className="text-xl leading-relaxed">
                            Free platforms limit your control, dilute your
                            brand, and make monetization nearly impossible.{" "}
                            <strong>Your community deserves better.</strong>
                        </p>
                        <p className="text-lg leading-relaxed">
                            With BusinessTools, you get a branded community
                            platform that you own and control—where members
                            actually want to spend time.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Build{" "}
                            <strong>
                                membership sites, private communities, and
                                exclusive spaces
                            </strong>{" "}
                            that drive recurring revenue and lasting
                            relationships.
                        </p>
                    </div>

                    <div className="mt-12 grid md:grid-cols-3 gap-6">
                        <div className="text-center p-6 bg-slate-50 rounded-xl">
                            <div className="text-4xl mb-3">❌</div>
                            <p className="font-bold text-slate-900">
                                No Facebook Groups
                            </p>
                        </div>
                        <div className="text-center p-6 bg-slate-50 rounded-xl">
                            <div className="text-4xl mb-3">❌</div>
                            <p className="font-bold text-slate-900">
                                No Discord Chaos
                            </p>
                        </div>
                        <div className="text-center p-6 bg-slate-50 rounded-xl">
                            <div className="text-4xl mb-3">✅</div>
                            <p className="font-bold text-slate-900">
                                Your Branded Space
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Platform Preview */}
            <section className="py-16 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 flex items-center justify-center aspect-video">
                        <img
                            src={
                                "https://assets.buisnesstools.in/blog/kajabi-vs-buisnesstools/chat-ui.png"
                            }
                        />
                    </div>
                </div>
            </section>

            {/* Key Features Grid */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Everything You Need to Build a Thriving Community
                        </h2>
                        <p className="text-xl text-slate-600">
                            Powerful features that keep members engaged and
                            coming back
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
                            <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                                <MessageCircle className="w-8 h-8 text-teal-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                Discussion Forums
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Rich discussion threads with comments,
                                reactions, and nested replies. Keep
                                conversations organized by topic and category.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
                            <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6">
                                <Users className="w-8 h-8 text-cyan-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                Member Directories
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Searchable member profiles with bios, expertise,
                                and social links. Help members connect with the
                                right people.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        {/* <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
							<div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
								<Crown className="w-8 h-8 text-indigo-600" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 mb-3">Tiered Memberships</h3>
							<p className="text-slate-600 leading-relaxed">
								Create multiple membership levels with different access and pricing. Basic, Premium, VIP—your choice.
							</p>
						</div> */}

                        {/* Feature 4 */}
                        {/* <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
							<div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
								<Calendar className="w-8 h-8 text-purple-600" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 mb-3">Live Events & Meetups</h3>
							<p className="text-slate-600 leading-relaxed">
								Schedule virtual events, workshops, and Q&A sessions. Integrated calendar and RSVP system included.
							</p>
						</div> */}

                        {/* Feature 5 */}
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
                            <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
                                <Lock className="w-8 h-8 text-pink-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                Exclusive Content Feeds
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Share member-only updates, resources, and
                                announcements. Keep your most valuable content
                                protected.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        {/* <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
							<div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
								<BarChart3 className="w-8 h-8 text-orange-600" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 mb-3">Engagement Analytics</h3>
							<p className="text-slate-600 leading-relaxed">
								Track member activity, popular topics, and engagement trends. Know what's working and what needs attention.
							</p>
						</div> */}
                    </div>
                </div>
            </section>

            {/* Membership Levels */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                                Flexible Membership Tiers
                            </h2>
                            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
                                Create multiple membership levels to serve
                                different segments of your audience and maximize
                                revenue.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Zap className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">
                                            Recurring Billing
                                        </h3>
                                        <p className="text-slate-600">
                                            Monthly, quarterly, or annual
                                            subscriptions with automatic
                                            renewals and payment reminders.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Lock className="w-6 h-6 text-cyan-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">
                                            Content Gating
                                        </h3>
                                        <p className="text-slate-600">
                                            Control which content each
                                            membership tier can access. Premium
                                            members get premium content.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Crown className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-1">
                                            Member Perks
                                        </h3>
                                        <p className="text-slate-600">
                                            Assign special badges, roles, and
                                            privileges to different membership
                                            levels.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Tiers />
                    </div>
                </div>
            </section>

            {/* Engagement Features */}
            <section className="py-20 px-6 bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Keep Your Community Active & Engaged
                        </h2>
                        <p className="text-xl text-teal-100 leading-relaxed">
                            Built-in tools to nurture connections and drive
                            daily engagement
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Bell className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                Smart Notifications
                            </h3>
                            <p className="text-teal-100">
                                Members get notified about relevant discussions,
                                mentions, and new content
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                Reactions & Kudos
                            </h3>
                            <p className="text-teal-100">
                                Let members react to posts, give kudos, and
                                recognize valuable contributions
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                Gamification
                            </h3>
                            <p className="text-teal-100">
                                Award badges, points, and achievements to
                                encourage participation
                            </p>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">
                                    Member Onboarding
                                </h3>
                                <p className="text-teal-100 leading-relaxed">
                                    Welcome new members with automated
                                    onboarding sequences, intro prompts, and
                                    guided tours. First impressions matter.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">
                                    Moderation Tools
                                </h3>
                                <p className="text-teal-100 leading-relaxed">
                                    Built-in moderation features to maintain
                                    quality. Flag inappropriate content, ban
                                    troublemakers, and keep discussions healthy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integration Features */}
            <Features />

            {/* Success Stories */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Communities That Drive Real Results
                        </h2>
                        <p className="text-xl text-slate-600">
                            See what's possible when you own your community
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 border border-slate-200">
                            <div className="text-4xl font-bold text-teal-600 mb-2">
                                500+
                            </div>
                            <p className="text-slate-900 font-bold mb-2">
                                Active Members
                            </p>
                            <p className="text-sm text-slate-600">
                                Average community size after 6 months
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-8 border border-slate-200">
                            <div className="text-4xl font-bold text-cyan-600 mb-2">
                                85%
                            </div>
                            <p className="text-slate-900 font-bold mb-2">
                                Retention Rate
                            </p>
                            <p className="text-sm text-slate-600">
                                Members stay engaged month after month
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-8 border border-slate-200">
                            <div className="text-4xl font-bold text-indigo-600 mb-2">
                                3x
                            </div>
                            <p className="text-slate-900 font-bold mb-2">
                                Higher Revenue
                            </p>
                            <p className="text-sm text-slate-600">
                                Compared to one-time course sales
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Build Your Community?
                        </h2>
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            Stop relying on platforms you don't control. Build a
                            community that's truly yours.
                        </p>
                    </div>

                    <Pricing />

                    <div className="text-center">
                        <p className="text-xl text-slate-300 mb-6">
                            Want to discuss your community vision?
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

            {/* Why Own Your Community */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Why You Should Own Your Community
                        </h2>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <TrendingUp className="w-6 h-6 text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        Full Control & Ownership
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        No more worrying about algorithm changes
                                        or platform shutdowns. Your community,
                                        your rules, your data. Build a real
                                        asset that you control completely.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Sparkles className="w-6 h-6 text-cyan-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        Professional Brand Experience
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Create a premium experience that matches
                                        your brand. No Facebook ads, no
                                        distracting notifications from other
                                        groups—just your content and your
                                        community.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Zap className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        Recurring Revenue Model
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Build predictable, recurring revenue
                                        with membership subscriptions.
                                        Communities create more stable income
                                        than one-time course sales.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        Better Data & Insights
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Understand your members with detailed
                                        analytics. See who's engaged, what
                                        topics resonate, and how to
                                        grow—insights free platforms will never
                                        give you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 px-6 bg-slate-50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Stop Building on Borrowed Land
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Create a community platform that you own, control, and
                        monetize—starting today.
                    </p>
                    <button className="group bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-10 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center">
                        Launch Your Community
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                </div>
            </section>
        </div>
    );
}
