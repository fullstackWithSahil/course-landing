import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { BookOpen, Package, Users } from "lucide-react";

export default function Products() {
	return (
		<div className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
						Everything You Need to <span className="text-indigo-600">Monetize Your Expertise</span>
					</h2>
					<p className="text-xl text-slate-600 max-w-2xl mx-auto">
						From online courses to digital products and thriving communities—launch, manage, and scale your business all in one place.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{/* Courses Card */}
					<Card className="border-2 border-slate-200 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group">
						<CardHeader className="pb-4">
							<div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-500 transition-colors duration-300">
								<BookOpen className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
							</div>
							<CardTitle className="text-2xl font-bold text-slate-900">Online Courses</CardTitle>
							<CardDescription className="text-slate-600 text-base">
								Create engaging, video-based courses with interactive content that keeps students coming back.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-3 text-slate-700">
							<div className="flex items-start space-x-2">
								<span className="text-indigo-600 font-bold mt-1">•</span>
								<p>Unlimited video hosting with adaptive streaming</p>
							</div>
							<div className="flex items-start space-x-2">
								<span className="text-indigo-600 font-bold mt-1">•</span>
								<p>Quizzes, assignments, and certificates</p>
							</div>
							<div className="flex items-start space-x-2">
								<span className="text-indigo-600 font-bold mt-1">•</span>
								<p>Drip content scheduling for perfect pacing</p>
							</div>
							<div className="flex items-start space-x-2">
								<span className="text-indigo-600 font-bold mt-1">•</span>
								<p>Student progress tracking and analytics</p>
							</div>
						</CardContent>
						<CardFooter className="pt-6">
							<Link href={"/courses"} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
								Start Creating Courses
							</Link>
						</CardFooter>
					</Card>

					{/* Digital Products Card */}
					<Card className="border-2 border-slate-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group">
						<CardHeader className="pb-4">
							<div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors duration-300">
								<Package className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
							</div>
							<CardTitle className="text-2xl font-bold text-slate-900">
								Digital Products(coming soon)
							</CardTitle>
							<CardDescription className="text-slate-600 text-base">
								Sell ebooks, templates, guides, and downloadable resources with instant delivery.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-3 text-slate-700">
							<div className="flex items-start space-x-2">
								<span className="text-purple-600 font-bold mt-1">•</span>
								<p>Secure file hosting and instant downloads</p>
							</div>
							<div className="flex items-start space-x-2">
								<span className="text-purple-600 font-bold mt-1">•</span>
								<p>Product bundles and upsell funnels</p>
							</div>
							<div className="flex items-start space-x-2">
								<span className="text-purple-600 font-bold mt-1">•</span>
								<p>License key generation for software</p>
							</div>
							<div className="flex items-start space-x-2">
								<span className="text-purple-600 font-bold mt-1">•</span>
								<p>Automatic updates for versioned content</p>
							</div>
						</CardContent>
						<CardFooter className="pt-6">
							<Link href={"/digital-products"} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
								Launch Digital Products
							</Link>
						</CardFooter>
					</Card>

					{/* Communities Card */}
					<Card className="border-2 border-slate-200 hover:border-teal-400 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group">
						<CardHeader className="pb-4">
							<div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-teal-500 transition-colors duration-300">
								<Users className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
							</div>
							<CardTitle className="text-2xl font-bold text-slate-900">
                                Communities(Beta)
                            </CardTitle>
							<CardDescription className="text-slate-600 text-base">
								Build membership sites and private communities where your audience can connect and grow.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-3 text-slate-700">
							<div className="flex items-start space-x-2">
								<span className="text-teal-600 font-bold mt-1">•</span>
								<p>Discussion forums and member directories</p>
							</div>
							<div className="flex items-start space-x-2">
								<span className="text-teal-600 font-bold mt-1">•</span>
								<p>Tiered membership levels and recurring billing</p>
							</div>
							<div className="flex items-start space-x-2">
								<span className="text-teal-600 font-bold mt-1">•</span>
								<p>Live events and exclusive content feeds</p>
							</div>
							<div className="flex items-start space-x-2">
								<span className="text-teal-600 font-bold mt-1">•</span>
								<p>Email automation & marketing funnels</p>
							</div>
							<div className="flex items-start space-x-2">
								<span className="text-teal-600 font-bold mt-1">•</span>
								<p>Affiliate program & discount coupons</p>
							</div>
						</CardContent>
						<CardFooter className="pt-6">
							<Link href={"/communities"} className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
								Build Your Community
							</Link>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	);
}