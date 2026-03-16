import { Check } from "lucide-react";
import Link from "next/link";

export default function PricingCard({
	title,
	price,
	features,
	highlighted = false,
	isAnnual = false,
}: {
	title: string;
	price: string;
	features: string[];
	highlighted?: boolean;
	isAnnual?: boolean; // New prop to indicate billing frequency
}) {
		// Calculate pricing based on billing frequency
	const calculatePrice = () => {
		if (price === "2 per student") return price;
		
		const numericPrice = parseFloat(price);
		if (isNaN(numericPrice)) return price;
		
		if (isAnnual) {
			// Apply 25% discount for annual billing
			const discountedPrice = numericPrice * 0.75;
			const annualPrice = discountedPrice * 12;
			return {
				monthly: discountedPrice.toFixed(0),
				annual: annualPrice.toFixed(0),
				originalMonthly: numericPrice,
				savings: (numericPrice * 0.25 * 12).toFixed(0)
			};
		}
		
		return numericPrice.toFixed(0);
	};
	const pricingData = calculatePrice();
	
	return (
		<div
			className={`p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 relative ${
				highlighted
					? "bg-blue-600 text-white ring-4 ring-blue-200"
					: "bg-white"
			}`}
		>
			{isAnnual && highlighted && (
				<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
					<span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
						Save 25%
					</span>
				</div>
			)}
			<h3 className="text-2xl font-bold mb-2">{title}</h3>
			<div>
				<p className="text-4xl font-extrabold">
					${typeof pricingData=="string"? pricingData : pricingData.monthly}
					{price != "2 per student"&&<span className="text-lg font-normal">/month</span>}
				</p>
				{typeof pricingData != "string" && isAnnual && (
					<div className="mt-2">
						<p className="text-sm opacity-75">
							<span className="line-through">
								${pricingData.originalMonthly}/month
							</span>
						</p>
						<p className="text-sm font-semibold">
							${pricingData.annual} billed annually
						</p>
						<p className="text-xs opacity-75">
							Save ${pricingData.savings} per year
						</p>
					</div>
				)}
			</div>
			<ul className="space-y-4 my-8">
				{features.map((feature, index) => (
					<li key={index} className="flex items-center gap-3">
						<Check
							size={24}
							className={
								highlighted ? "text-white" : "text-green-500"
							}
						/>
						<span className="text-lg">{feature}</span>
					</li>
				))}
			</ul>
			<div className="pb-2 sm:pt-4 space-y-3">
				<Link
					href={"/onboarding"}
					className={`w-full flex items-center justify-center cursor-pointer py-3 rounded-lg font-semibold text-lg transition ${
						highlighted
						? "bg-white text-blue-600 hover:bg-gray-100"
						: "bg-blue-600 text-white hover:bg-blue-700"
					}`}
				>
					Get Started
				</Link>
			</div>
		</div>
	);
}