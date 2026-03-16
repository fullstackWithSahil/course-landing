import {
	Package,
	Download,
	Lock,
	TrendingUp,
	Zap,
	FileText,
	Shield,
	Sparkles,
	ArrowRight,
	CheckCircle,
	Key,
	RefreshCw,
	Layers,
	BarChart3,
	DollarSign,
	Calendar,
	Award,
	Upload,
	Globe,
} from "lucide-react";

export default function DigitalProductsPage() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative py-24 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
				<div className="absolute inset-0 opacity-20">
					<div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
				</div>

				<div className="max-w-5xl mx-auto relative z-10 text-center">
					<div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
						<span className="text-sm font-semibold text-white">
							Digital Products (coming soon)
						</span>
					</div>
					<h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
						Sell Digital Products Without the Tech Headaches
					</h1>
					<p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8">
						Sell ebooks, templates, guides, software, and
						downloadable resources with instant delivery and secure
						hosting.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-white hover:bg-slate-100 text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center">
							Start Selling Products
							<ArrowRight className="w-5 h-5 ml-2" />
						</button>
						<button className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 border-2 border-white/30 hover:border-white/50 inline-flex items-center justify-center">
							<Package className="w-5 h-5 mr-2" />
							See Examples
						</button>
					</div>
				</div>
			</section>

			{/* The Problem Section */}
			<section className="py-20 px-6 bg-white">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
						Tired of cobbling together payment processors, file
						hosts, and delivery systems?
					</h2>
					<div className="prose prose-lg max-w-none text-slate-700 space-y-4">
						<p className="text-xl leading-relaxed">
							Managing digital product sales shouldn't require
							juggling multiple tools and services.{" "}
							<strong>
								You deserve a simple, all-in-one solution.
							</strong>
						</p>
						<p className="text-lg leading-relaxed">
							With BusinessTools, you get secure file hosting,
							instant delivery, and complete sales management—all
							in one professional platform.
						</p>
						<p className="text-lg leading-relaxed">
							Focus on creating great products.{" "}
							<strong>We'll handle everything else.</strong>
						</p>
					</div>

					<div className="mt-12 grid md:grid-cols-3 gap-6">
						<div className="text-center p-6 bg-slate-50 rounded-xl">
							<div className="text-4xl mb-3">❌</div>
							<p className="font-bold text-slate-900">
								No Manual Delivery
							</p>
						</div>
						<div className="text-center p-6 bg-slate-50 rounded-xl">
							<div className="text-4xl mb-3">❌</div>
							<p className="font-bold text-slate-900">
								No Complex Setup
							</p>
						</div>
						<div className="text-center p-6 bg-slate-50 rounded-xl">
							<div className="text-4xl mb-3">✅</div>
							<p className="font-bold text-slate-900">
								Automated & Secure
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Product Types */}
			<section className="py-20 px-6 bg-slate-50">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
							Sell Any Type of Digital Product
						</h2>
						<p className="text-xl text-slate-600">
							From ebooks to software licenses—we've got you
							covered
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
							<div className="text-4xl mb-4">📚</div>
							<h3 className="text-lg font-bold text-slate-900 mb-2">
								Ebooks & Guides
							</h3>
							<p className="text-slate-600 text-sm">
								PDF guides, ebooks, workbooks, and written
								resources
							</p>
						</div>

						<div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
							<div className="text-4xl mb-4">🎨</div>
							<h3 className="text-lg font-bold text-slate-900 mb-2">
								Templates & Tools
							</h3>
							<p className="text-slate-600 text-sm">
								Design templates, spreadsheets, checklists, and
								productivity tools
							</p>
						</div>

						<div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
							<div className="text-4xl mb-4">💻</div>
							<h3 className="text-lg font-bold text-slate-900 mb-2">
								Software & Plugins
							</h3>
							<p className="text-slate-600 text-sm">
								Apps, plugins, code libraries, and digital tools
							</p>
						</div>

						<div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
							<div className="text-4xl mb-4">🎵</div>
							<h3 className="text-lg font-bold text-slate-900 mb-2">
								Audio & Media
							</h3>
							<p className="text-slate-600 text-sm">
								Music tracks, sound effects, video assets, and
								media files
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Key Features Grid */}
			<section className="py-20 px-6 bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
							Everything You Need to Sell Digital Products
						</h2>
						<p className="text-xl text-slate-600">
							Professional tools for effortless digital product
							sales
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Feature 1 */}
						<div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
							<div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
								<Download className="w-8 h-8 text-purple-600" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 mb-3">
								Instant Delivery
							</h3>
							<p className="text-slate-600 leading-relaxed">
								Customers receive download links immediately
								after purchase. No manual work, no
								delays—completely automated.
							</p>
						</div>

						{/* Feature 2 */}
						<div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
							<div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
								<Lock className="w-8 h-8 text-pink-600" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 mb-3">
								Secure File Hosting
							</h3>
							<p className="text-slate-600 leading-relaxed">
								Your files are protected with encryption and
								secure access controls. Only paying customers
								can download.
							</p>
						</div>

						{/* Feature 3 */}
						<div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
							<div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
								<Key className="w-8 h-8 text-indigo-600" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 mb-3">
								License Key Generation
							</h3>
							<p className="text-slate-600 leading-relaxed">
								Automatically generate unique license keys for
								software products with activation and validation
								systems.
							</p>
						</div>

						{/* Feature 4 */}
						<div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
							<div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
								<Layers className="w-8 h-8 text-teal-600" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 mb-3">
								Product Bundles
							</h3>
							<p className="text-slate-600 leading-relaxed">
								Create bundles that combine multiple products at
								a discounted price. Increase average order value
								effortlessly.
							</p>
						</div>

						{/* Feature 5 */}
						<div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
							<div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
								<RefreshCw className="w-8 h-8 text-orange-600" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 mb-3">
								Version Management
							</h3>
							<p className="text-slate-600 leading-relaxed">
								Update products and automatically notify
								customers. Version control keeps everyone on the
								latest release.
							</p>
						</div>

						{/* Feature 6 */}
						<div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
							<div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
								<Zap className="w-8 h-8 text-blue-600" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 mb-3">
								Upsell Funnels
							</h3>
							<p className="text-slate-600 leading-relaxed">
								Offer complementary products at checkout to
								maximize revenue per customer with smart
								upselling.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Product Management */}
			<section className="py-20 px-6 bg-slate-50">
				<div className="max-w-6xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
								Simple Product Management
							</h2>
							<p className="text-xl text-slate-700 mb-8 leading-relaxed">
								Upload, organize, and manage your digital
								products with an intuitive dashboard.
							</p>

							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<Upload className="w-6 h-6 text-purple-600" />
									</div>
									<div>
										<h3 className="text-lg font-bold text-slate-900 mb-1">
											Easy File Upload
										</h3>
										<p className="text-slate-600">
											Drag and drop files of any size.
											Support for PDFs, ZIPs, videos,
											audio, and more.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<Globe className="w-6 h-6 text-pink-600" />
									</div>
									<div>
										<h3 className="text-lg font-bold text-slate-900 mb-1">
											Beautiful Product Pages
										</h3>
										<p className="text-slate-600">
											Showcase your products with stunning
											sales pages that convert visitors
											into customers.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<Shield className="w-6 h-6 text-indigo-600" />
									</div>
									<div>
										<h3 className="text-lg font-bold text-slate-900 mb-1">
											Access Control
										</h3>
										<p className="text-slate-600">
											Set download limits, expiration
											dates, and access restrictions to
											protect your products.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 aspect-square flex items-center justify-center">
							<p className="text-white/60 text-center">
								We are currently working on this product.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing & Monetization */}
			<section className="py-20 px-6 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-white relative overflow-hidden">
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
					<div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
				</div>

				<div className="max-w-6xl mx-auto relative z-10">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							Flexible Pricing Options
						</h2>
						<p className="text-xl text-purple-100 leading-relaxed">
							Sell your way with powerful monetization features
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 mb-12">
						<div className="text-center">
							<div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
								<DollarSign className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold mb-3">
								One-Time Purchases
							</h3>
							<p className="text-purple-100">
								Sell products with lifetime access at a single
								price point
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
								<Layers className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold mb-3">
								Tiered Pricing
							</h3>
							<p className="text-purple-100">
								Offer basic, standard, and premium versions of
								your products
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
								<Package className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-xl font-bold mb-3">
								Bundle Deals
							</h3>
							<p className="text-purple-100">
								Package multiple products together at discounted
								rates
							</p>
						</div>
					</div>

					<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-2xl font-bold mb-4">
									Dynamic Discounting
								</h3>
								<p className="text-purple-100 leading-relaxed">
									Create coupon codes, limited-time offers,
									and promotional campaigns. Drive urgency and
									boost sales with smart pricing strategies.
								</p>
							</div>
							<div>
								<h3 className="text-2xl font-bold mb-4">
									Pay What You Want
								</h3>
								<p className="text-purple-100 leading-relaxed">
									Let customers choose their price with
									minimum thresholds. Perfect for launching
									new products or building goodwill.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Customer Experience */}
			<section className="py-20 px-6 bg-white">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
							Seamless Customer Experience
						</h2>
						<p className="text-xl text-slate-600">
							From purchase to download in seconds
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-12">
						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
									<Zap className="w-6 h-6 text-purple-600" />
								</div>
								<div>
									<h3 className="text-lg font-bold text-slate-900 mb-1">
										Instant Access
									</h3>
									<p className="text-slate-600">
										Customers get immediate download access
										after payment. No waiting, no manual
										approval.
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
									<FileText className="w-6 h-6 text-pink-600" />
								</div>
								<div>
									<h3 className="text-lg font-bold text-slate-900 mb-1">
										Purchase History
									</h3>
									<p className="text-slate-600">
										Customers can re-download products
										anytime from their account dashboard.
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
									<Award className="w-6 h-6 text-indigo-600" />
								</div>
								<div>
									<h3 className="text-lg font-bold text-slate-900 mb-1">
										Professional Receipts
									</h3>
									<p className="text-slate-600">
										Automated invoices and receipts sent via
										email for every purchase.
									</p>
								</div>
							</div>
						</div>

						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
									<RefreshCw className="w-6 h-6 text-teal-600" />
								</div>
								<div>
									<h3 className="text-lg font-bold text-slate-900 mb-1">
										Automatic Updates
									</h3>
									<p className="text-slate-600">
										When you update products, customers get
										notified and can download the latest
										version.
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
									<Download className="w-6 h-6 text-orange-600" />
								</div>
								<div>
									<h3 className="text-lg font-bold text-slate-900 mb-1">
										Multiple Download Options
									</h3>
									<p className="text-slate-600">
										Direct download, cloud storage sync, or
										email delivery—give customers choices.
									</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
									<Shield className="w-6 h-6 text-blue-600" />
								</div>
								<div>
									<h3 className="text-lg font-bold text-slate-900 mb-1">
										Secure Links
									</h3>
									<p className="text-slate-600">
										Unique, expiring download links prevent
										unauthorized sharing and piracy.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Analytics & Insights */}
			<section className="py-20 px-6 bg-slate-50">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
							Track Performance & Optimize Sales
						</h2>
						<p className="text-xl text-slate-600">
							Powerful analytics to grow your digital product
							business
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white rounded-xl p-8 border border-slate-200">
							<div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
								<BarChart3 className="w-8 h-8 text-purple-600" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 mb-3">
								Sales Analytics
							</h3>
							<p className="text-slate-600 leading-relaxed">
								Track revenue, conversion rates, and sales
								trends. Know what's selling and what's not.
							</p>
						</div>

						<div className="bg-white rounded-xl p-8 border border-slate-200">
							<div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
								<TrendingUp className="w-8 h-8 text-pink-600" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 mb-3">
								Customer Insights
							</h3>
							<p className="text-slate-600 leading-relaxed">
								Understand your customers with purchase history,
								lifetime value, and behavior data.
							</p>
						</div>

						<div className="bg-white rounded-xl p-8 border border-slate-200">
							<div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
								<Sparkles className="w-8 h-8 text-indigo-600" />
							</div>
							<h3 className="text-xl font-bold text-slate-900 mb-3">
								Product Performance
							</h3>
							<p className="text-slate-600 leading-relaxed">
								See which products are your best sellers and
								optimize your catalog accordingly.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							Ready to Sell Your Digital Products?
						</h2>
						<p className="text-xl text-slate-300 leading-relaxed mb-8">
							Join creators earning passive income with their
							digital products
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 mb-12">
						{/* Free Plan */}
						<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
							<h3 className="text-2xl font-bold mb-4">
								Start Free
							</h3>
							<div className="mb-6">
								<span className="text-4xl font-bold">
									Pay as you go
								</span>
							</div>
							<p className="text-slate-300 mb-6 leading-relaxed">
								Launch your digital product store without
								upfront costs.
							</p>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
									<span>Unlimited products</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
									<span>Secure file hosting</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
									<span>Instant delivery system</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
									<span>Free consultancy & support</span>
								</li>
							</ul>
							<button className="w-full bg-white hover:bg-slate-100 text-slate-900 font-bold py-4 px-6 rounded-lg transition-all duration-200">
								Start Selling Free
							</button>
						</div>

						{/* Pro Plan */}
						<div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 border border-purple-400 shadow-2xl">
							<div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mb-4">
								For Power Sellers
							</div>
							<h3 className="text-2xl font-bold mb-4">
								Pro Plans
							</h3>
							<div className="mb-6">
								<span className="text-4xl font-bold">
									Custom
								</span>
							</div>
							<p className="text-purple-100 mb-6 leading-relaxed">
								Advanced features for high-volume digital
								product sellers.
							</p>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
									<span>Everything in Free, plus:</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
									<span>Advanced analytics dashboard</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
									<span>Affiliate program management</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
									<span>Priority support</span>
								</li>
							</ul>
							<button className="w-full bg-white hover:bg-slate-100 text-purple-600 font-bold py-4 px-6 rounded-lg transition-all duration-200">
								View Pro Features
							</button>
						</div>
					</div>

					<div className="text-center">
						<p className="text-xl text-slate-300 mb-6">
							Questions about selling digital products?
						</p>
						<button className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 border-2 border-white/30"></button>
					</div>
				</div>
			</section>
		</div>
	);
}
