import { Users, Target, Eye, Heart, Shield, Zap, TrendingUp, Code, Sparkles, ArrowRight, Calendar, Check } from "lucide-react";

export default function AboutUsPage() {
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
						<span className="text-sm font-semibold text-white">About Whiteowl</span>
					</div>
					<h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
						Your Education Business Deserves Better Than Generic
					</h1>
					<p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
						We're not just another SaaS platform. We're a Partner-as-a-Service committed to your success.
					</p>
				</div>
			</section>

			{/* The Problem */}
			<section className="py-20 px-6 bg-white">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
						Tired of clunky, cookie-cutter websites built with no-code platforms like Kajabi or Teachable?
					</h2>
					<div className="prose prose-lg max-w-none text-slate-700 space-y-4">
						<p className="text-xl leading-relaxed">
							These generic solutions don't just look outdated—<strong>they actively hurt your SEO and credibility.</strong>
						</p>
						<p className="text-lg leading-relaxed">
							At Whitewowl, we believe your expertise deserves a professional online presence that reflects the quality of your content.
						</p>
						<p className="text-lg leading-relaxed">
							We deliver <strong>hand-coded, SEO-optimized websites</strong> with designs personalized to your brand.
						</p>
					</div>

					<div className="mt-12 grid md:grid-cols-3 gap-6">
						<div className="text-center p-6 bg-slate-50 rounded-xl">
							<div className="text-4xl mb-3">❌</div>
							<p className="font-bold text-slate-900">No Templates</p>
						</div>
						<div className="text-center p-6 bg-slate-50 rounded-xl">
							<div className="text-4xl mb-3">❌</div>
							<p className="font-bold text-slate-900">No Compromises</p>
						</div>
						<div className="text-center p-6 bg-slate-50 rounded-xl">
							<div className="text-4xl mb-3">✅</div>
							<p className="font-bold text-slate-900">Built Specifically for You</p>
						</div>
					</div>
				</div>
			</section>

			{/* Comparison Visual */}
			<section className="py-16 px-6 bg-slate-50">
				<div className="max-w-6xl mx-auto">
					<div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 flex items-center justify-center aspect-video">
						<p className="text-white/60 text-center px-6 max-w-3xl">
							[Split-screen comparison image: Left side shows a generic Kajabi/Teachable template with stock photos, basic layout, and dated design elements (label: "Cookie-Cutter Platforms"). Right side shows a stunning custom-designed course platform with branded colors, modern UI, professional photography, smooth animations (label: "Whitewowl Custom Design"). Include subtle UI elements like course cards, navigation, and metrics.]
						</p>
					</div>
				</div>
			</section>

			{/* Who We Are */}
			<section className="py-20 px-6 bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
								Who We Are
							</h2>
							<div className="space-y-6 text-lg text-slate-700 leading-relaxed">
								<p>
									<strong className="text-slate-900">Whitewowl is a passionate two-person team</strong> with a big dream: empowering knowledge creators to build thriving online businesses.
								</p>
								<p>
									We understand that starting a course or community isn't just about learning software—<strong className="text-slate-900">it's about building a sustainable business.</strong> And that journey can feel overwhelming.
								</p>
								<p className="text-xl font-bold text-indigo-600">
									That's why we're not just another SaaS platform. We're a Partner-as-a-Service.
								</p>
							</div>
						</div>

						<div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl aspect-square flex items-center justify-center p-8">
							<p className="text-white/60 text-center">
								[Warm, friendly photo of the two founders working together. Modern home office in India with natural lighting. One person reviewing design mockups on a large monitor, another on a laptop with code visible. Include plants, books, coffee cups—create an approachable, passionate, hardworking vibe. Both should look focused but happy. Casual professional attire.]
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* We're With You */}
			<section className="py-20 px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
					<div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
				</div>

				<div className="max-w-5xl mx-auto relative z-10">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							We're With You Every Step of the Way
						</h2>
						<p className="text-xl text-indigo-100 leading-relaxed">
							We don't just hand you a website and disappear. From launch day forward, we're your dedicated partner.
						</p>
					</div>

					<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 mb-12">
						<p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
							Our exceptional support goes far beyond "how to use our software."
						</p>
						<p className="text-lg text-indigo-100 leading-relaxed">
							We're here to help you navigate the real challenges of running an online education business—from marketing strategy to pricing decisions to community management.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 mb-12">
						<div className="text-center">
							<div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
								<TrendingUp className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold mb-3">Marketing Strategy</h3>
							<p className="text-indigo-100">Launch and promote your courses effectively</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
								<Zap className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold mb-3">Pricing Decisions</h3>
							<p className="text-indigo-100">Maximize revenue while staying competitive</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
								<Users className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold mb-3">Community Management</h3>
							<p className="text-indigo-100">Build engaged, thriving communities</p>
						</div>
					</div>

					<div className="text-center">
						<div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/30">
							<p className="text-lg font-semibold mb-2">Every Whitewowl client gets:</p>
							<p className="text-2xl md:text-3xl font-bold">Free Consultancy & Resources</p>
							<p className="text-indigo-200 mt-2 italic">Because when you win, we win.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Mission, Vision, Values */}
			<section className="py-20 px-6 bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
							Our Mission, Vision & Values
						</h2>
						<p className="text-xl text-slate-600">
							What drives us every day
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-12 mb-16">
						{/* Mission */}
						<div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
							<div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
								<Target className="w-8 h-8 text-indigo-600" />
							</div>
							<h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
							<p className="text-slate-700 leading-relaxed">
								To help creators, technicians, and skilled professionals build successful education businesses without worrying about the tech.
							</p>
							<p className="text-slate-900 font-semibold mt-4">
								You focus on creating great content. We'll handle everything else.
							</p>
						</div>

						{/* Vision */}
						<div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
							<div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
								<Eye className="w-8 h-8 text-purple-600" />
							</div>
							<h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
							<p className="text-slate-700 leading-relaxed">
								To provide educators with all the tools they need to run their online business under one roof—so they can spend less time troubleshooting and more time doing what they love.
							</p>
						</div>

						{/* Values */}
						<div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
							<div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
								<Heart className="w-8 h-8 text-teal-600" />
							</div>
							<h3 className="text-2xl font-bold text-slate-900 mb-4">Our Values</h3>
							<div className="space-y-4">
								<div>
									<p className="font-bold text-slate-900 flex items-center">
										<Users className="w-5 h-5 text-teal-600 mr-2" />
										Partnership
									</p>
									<p className="text-slate-600 text-sm ml-7">Long-term relationships, not transactions</p>
								</div>
								<div>
									<p className="font-bold text-slate-900 flex items-center">
										<Shield className="w-5 h-5 text-teal-600 mr-2" />
										Trust
									</p>
									<p className="text-slate-600 text-sm ml-7">Your success is our success. Transparent and reliable.</p>
								</div>
								<div>
									<p className="font-bold text-slate-900 flex items-center">
										<Zap className="w-5 h-5 text-teal-600 mr-2" />
										Reliability
									</p>
									<p className="text-slate-600 text-sm ml-7">Here when you need us, with support that solves problems</p>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-indigo-100 text-center">
						<p className="text-xl md:text-2xl text-slate-800 leading-relaxed italic">
							"Building a successful education business is about more than just choosing the right software. It's about <strong>strategy, support, and having the right partner by your side.</strong>"
						</p>
					</div>
				</div>
			</section>

			{/* Hand-Coded Excellence */}
			<section className="py-20 px-6 bg-slate-50">
				<div className="max-w-6xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
								Hand-Coded, SEO-Optimized Excellence
							</h2>
							<p className="text-xl text-slate-700 mb-8 leading-relaxed">
								No templates. No compromises. Just a powerful platform built specifically for you.
							</p>

							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<Code className="w-6 h-6 text-indigo-600" />
									</div>
									<div>
										<h3 className="text-lg font-bold text-slate-900 mb-1">Custom-Built for Your Brand</h3>
										<p className="text-slate-600">
											Every line of code written with your unique needs, brand colors, and style in mind.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<TrendingUp className="w-6 h-6 text-purple-600" />
									</div>
									<div>
										<h3 className="text-lg font-bold text-slate-900 mb-1">SEO-Optimized from Day One</h3>
										<p className="text-slate-600">
											Lightning-fast load times, clean code, and SEO best practices to help you rank higher.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<Sparkles className="w-6 h-6 text-teal-600" />
									</div>
									<div>
										<h3 className="text-lg font-bold text-slate-900 mb-1">Professional Design</h3>
										<p className="text-slate-600">
											Beautiful, modern interfaces that reflect quality and convert visitors into students.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 aspect-square flex items-center justify-center">
							<p className="text-white/60 text-center">
								[Developer workspace showing clean, modern code on screen. Show React/Next.js code with colorful syntax highlighting in a dark theme IDE (like VS Code). Include both code editor and live preview window showing a beautiful course platform. Add developer tools, terminal, and maybe a second monitor. Professional desk setup with coffee, notebook, mechanical keyboard. Should feel technical but accessible.]
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Ready to Get Started - CTA Section */}
			<section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							Ready to Get Started?
						</h2>
						<p className="text-xl text-slate-300 leading-relaxed">
							Whether you're just starting out or ready to scale, we're here to support you.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 mb-12">
						{/* Just Starting */}
						<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
							<h3 className="text-2xl font-bold mb-4">Just Starting Out?</h3>
							<p className="text-slate-300 mb-6 leading-relaxed">
								Our pay-as-you-go plan lets you sell your knowledge without any upfront investment.
							</p>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center space-x-3">
									<Check className="w-5 h-5 text-green-400 flex-shrink-0" />
									<span>No monthly fees</span>
								</li>
								<li className="flex items-center space-x-3">
									<Check className="w-5 h-5 text-green-400 flex-shrink-0" />
									<span>Full platform access</span>
								</li>
								<li className="flex items-center space-x-3">
									<Check className="w-5 h-5 text-green-400 flex-shrink-0" />
									<span>Free consultancy included</span>
								</li>
							</ul>
							<button className="w-full bg-white hover:bg-slate-100 text-slate-900 font-bold py-4 px-6 rounded-lg transition-all duration-200">
								Start Free Today
							</button>
						</div>

						{/* Ready to Scale */}
						<div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 border border-indigo-400 shadow-2xl">
							<div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mb-4">
								Most Popular
							</div>
							<h3 className="text-2xl font-bold mb-4">Ready to Scale?</h3>
							<p className="text-indigo-100 mb-6 leading-relaxed">
								Pro plans for creators running multiple courses, communities, and teams—with advanced marketing tools.
							</p>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center space-x-3">
									<Check className="w-5 h-5 text-green-300 flex-shrink-0" />
									<span>Unlimited courses & students</span>
								</li>
								<li className="flex items-center space-x-3">
									<Check className="w-5 h-5 text-green-300 flex-shrink-0" />
									<span>Advanced marketing automation</span>
								</li>
								<li className="flex items-center space-x-3">
									<Check className="w-5 h-5 text-green-300 flex-shrink-0" />
									<span>Priority support & consultancy</span>
								</li>
							</ul>
							<button className="w-full bg-white hover:bg-slate-100 text-indigo-600 font-bold py-4 px-6 rounded-lg transition-all duration-200">
								View Pro Plans
							</button>
						</div>
					</div>

					<div className="text-center">
						<p className="text-xl text-slate-300 mb-6">Not sure where to begin?</p>
						<button className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 border-2 border-white/30 hover:border-white/50 inline-flex items-center mb-4">
							<Calendar className="w-5 h-5 mr-2" />
							Book a Free Consultancy Call
						</button>
						<p className="text-slate-400">
							We'll help you map out your path to success.
						</p>
					</div>
				</div>
			</section>

			{/* Final Statement */}
			<section className="py-16 px-6 bg-white">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
						Let's Build Something Great Together
					</h2>
					<button className="group bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center">
						Get Started Today
						<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
					</button>
				</div>
			</section>
		</div>
	);
}