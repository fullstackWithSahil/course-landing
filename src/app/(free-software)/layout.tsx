import { ReactNode } from "react";
import { CheckCircle, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.1141418a.png";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function layout({ children }: { children: ReactNode }) {
	return (
		<div className="grid grid-cols-5 min-h-screen bg-gray-50">
			<div className="bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 text-white p-6 shadow-lg">
				<div className="space-y-6">
					{/* Logo placeholder */}
					<div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
						<Image src={logo} alt="logo" />
					</div>

					<div className="text-center">
						<h2 className="text-2xl font-bold mb-3">
							Get Your Course Online Today!
						</h2>
					</div>

					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<CheckCircle className="w-5 h-5 text-green-300" />
							<span className="text-sm">
								Secure video hosting and streaming
							</span>
						</div>
						<div className="flex items-center space-x-2">
							<CheckCircle className="w-5 h-5 text-green-300" />
							<span className="text-sm">
								Email marketing and automation tools
							</span>
						</div>
						<div className="flex items-center space-x-2">
							<CheckCircle className="w-5 h-5 text-green-300" />
							<span className="text-sm">
								Student Management Tools
							</span>
						</div>
						<div className="flex items-center space-x-2">
							<CheckCircle className="w-5 h-5 text-green-300" />
							<span className="text-sm">Excellent Support</span>
						</div>
					</div>

					<Link className={buttonVariants()} href={"/onboarding"}>
						<span>Start Free Trial</span>
						<ArrowRight className="w-4 h-4" />
					</Link>

					<div className="text-center text-blue-100 text-sm">
						<div className="flex items-center justify-center space-x-1 mb-1">
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className="w-4 h-4 fill-current text-yellow-300"
								/>
							))}
						</div>
						<p>Trusted by 10,000+ educators</p>
					</div>
				</div>
			</div>
			{children}
		</div>
	);
}
