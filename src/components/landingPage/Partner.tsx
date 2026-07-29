import {
    Headphones,
    Users,
    Lightbulb,
    TrendingUp,
    Shield,
    Zap,
} from "lucide-react";

export default function PartnerSection() {
    return (
        <div className="py-24 px-6 bg-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main heading */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-4 font-semibold text-sm">
                        More Than Software
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        We're Your{" "}
                        <span className="text-indigo-600">
                            Partner in Success
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Building a course business shouldn't feel like going it
                        alone. We combine powerful technology with hands-on
                        guidance to help you succeed at every step of your
                        journey.
                    </p>
                </div>

                {/* Three main pillars */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Exceptional Support */}
                    <div className="bg-linear-to-br from-indigo-50 to-white p-8 rounded-2xl border border-indigo-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                            <Headphones className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            Exceptional Customer Support
                        </h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Real humans, real solutions. Our support team treats
                            your success as their own mission, responding within
                            hours—not days.
                        </p>
                        <div className="space-y-2 text-sm text-slate-700">
                            <div className="flex items-center">
                                <span className="text-indigo-600 mr-2">✓</span>
                                <span>Email support</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-indigo-600 mr-2">✓</span>
                                <span>Average response time: 2 hours</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-indigo-600 mr-2">✓</span>
                                <span>Onboarding assistance included</span>
                            </div>
                        </div>
                    </div>

                    {/* Free Consultancy */}
                    <div className="bg-linear-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                            <Lightbulb className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            Free Strategy Consultancy
                        </h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Get expert advice on pricing, marketing, content
                            strategy, and growth—without paying consultant fees.
                        </p>
                        <div className="space-y-2 text-sm text-slate-700">
                            <div className="flex items-center">
                                <span className="text-purple-600 mr-2">✓</span>
                                <span>Monthly strategy sessions</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-purple-600 mr-2">✓</span>
                                <span>Course launch planning</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-purple-600 mr-2">✓</span>
                                <span>Marketing & pricing guidance</span>
                            </div>
                        </div>
                    </div>

                    {/* Partnership Approach */}
                    <div className="bg-linear-to-br from-teal-50 to-white p-8 rounded-2xl border border-teal-100 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-14 h-14 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
                            <Users className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            What We Actually Do For You
                        </h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            We don't just give you a login. We build your entire
                            course infrastructure so you can focus on teaching.
                        </p>
                        <div className="space-y-2 text-sm text-slate-700">
                            <div className="flex items-center">
                                <span className="text-teal-600 mr-2">✓</span>
                                <span>Done-for-you Course Landing Pages</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-teal-600 mr-2">✓</span>
                                <span>Secure Checkout & Payment Setup</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-teal-600 mr-2">✓</span>
                                <span>Complete Course Hosting & LMS</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats/Social Proof Section */}
                <div className="bg-linear-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white">
                    <div className="grid md:grid-cols-2 gap-8 text-center">
                        {/* <div className="space-y-2">
							<div className="flex items-center justify-center mb-2">
								<TrendingUp className="w-8 h-8 text-green-400" />
							</div>
							<p className="text-4xl font-bold">98%</p>
							<p className="text-slate-300">Customer Satisfaction</p>
						</div> */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-center mb-2">
                                <Zap className="w-8 h-8 text-yellow-400" />
                            </div>
                            <p className="text-4xl font-bold">&lt;2hrs</p>
                            <p className="text-slate-300">
                                Average Response Time
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-center mb-2">
                                <Shield className="w-8 h-8 text-blue-400" />
                            </div>
                            <p className="text-4xl font-bold">24/7</p>
                            <p className="text-slate-300">
                                Platform Monitoring
                            </p>
                        </div>
                        {/* <div className="space-y-2">
							<div className="flex items-center justify-center mb-2">
								<Users className="w-8 h-8 text-purple-400" />
							</div>
							<p className="text-4xl font-bold">5,000+</p>
							<p className="text-slate-300">Successful Creators</p>
						</div> */}
                    </div>

                    {/* <div className="mt-12 text-center border-t border-slate-700 pt-8">
						<p className="text-xl text-slate-300 mb-6 italic">
							"This isn't just a platform—it's like having a co-founder who actually cares about your success."
						</p>
						<div className="flex items-center justify-center space-x-3">
							<div className="w-12 h-12 bg-linear-to-br from-indigo-400 to-purple-400 rounded-full"></div>
							<div className="text-left">
								<p className="font-semibold">Sarah Mitchell</p>
								<p className="text-slate-400 text-sm">Course Creator, $250K+ Revenue</p>
							</div>
						</div>
					</div> */}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                        Ready to Experience the Difference?
                    </h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                        Join us and choose a partner, not just a platform.
                    </p>
                    <a
                        href={"https://app.buisnesstools.in/onboarding"}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                        Launch Your Course Website
                    </a>
                    {/* <p className="text-slate-500 text-sm mt-4">
						No credit card required • Setup in 5 minutes • Cancel anytime
					</p> */}
                </div>
            </div>
        </div>
    );
}
