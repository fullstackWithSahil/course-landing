"use client";
import Image from "next/image";
import consultancy from "@/assets/consultancy.png";
import { Input } from "../ui/input";
import { useState } from "react";
import { toast } from "sonner";
import sendDiscordMessage from "@/lib/discord";
import { Calendar, ArrowRight } from "lucide-react";

export default function Leadmagnet() {
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	function isValidEmail(email: string) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	}

	async function handleDownload() {
		if (!email) {
			toast.error("Please enter your email address.");
			return;
		}
		if (!isValidEmail(email)) {
			toast.error("Please enter a valid email address.");
			return;
		}
		
		setIsLoading(true);
		try {
			await sendDiscordMessage(`New consultancy booking request: ${email}`,"notification");
			toast.success("Thank you! We'll reach out shortly to schedule your free consultation.");
			setEmail("");
		} catch (error) {
			toast.error("Something went wrong. Please try again.");
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div id="consultancy" className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 py-16 px-6 relative overflow-hidden">
			{/* Background decorative elements */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
				<div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
			</div>

			<div className="max-w-6xl mx-auto relative z-10">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Image Section */}
					<div className="flex justify-center">
						<div className="relative">
							<div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl"></div>
							<Image 
								src={consultancy} 
								alt="Free Consultancy - Course Creation Expert" 
								height={400} 
								width={600}
								className="relative rounded-2xl shadow-2xl"
								priority
							/>
						</div>
					</div>

					{/* Content Section */}
					<div className="flex flex-col justify-center space-y-6">
						<div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
							<p className="text-sm font-semibold text-white flex items-center">
								<Calendar className="w-4 h-4 mr-2" />
								100% Free • No Credit Card Required
							</p>
						</div>

						<h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
							Don't Know Where to Start?
							<span className="block text-blue-200 mt-2">Let Us Help You</span>
						</h2>

						<p className="text-blue-100 text-lg leading-relaxed">
							We know starting your first online course can be overwhelming and scary. Book a free consultancy to get your feet wet and receive personalized guidance on launching successfully.
						</p>

						{/* Benefits */}
						<div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
							<p className="text-white font-semibold mb-2">✨ What you'll get:</p>
							<ul className="text-blue-100 space-y-1 text-sm">
								<li>• 30-minute strategy session with an expert</li>
								<li>• Custom course roadmap for your niche</li>
								<li>• Platform demo and best practices</li>
							</ul>
						</div>

						{/* Email Input */}
						<div className="space-y-3">
							<Input
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								type="email"
								placeholder="Enter your email address"
								className="h-12 text-base bg-white/95 border-white/50 focus:bg-white"
								onKeyDown={(e) => {
									if (e.key === 'Enter') {
										handleDownload();
									}
								}}
							/>
							<button
								onClick={handleDownload}
								disabled={isLoading}
								className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
							>
								{isLoading ? (
									"Booking..."
								) : (
									<>
										Book Your Free Consultancy
										<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
									</>
								)}
							</button>
						</div>

						<p className="text-blue-200 text-sm">
							🔒 We respect your privacy. No spam, ever.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}