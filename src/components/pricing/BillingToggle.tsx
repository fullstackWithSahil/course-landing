import React from "react";

interface BillingToggleProps {
	isAnnual: boolean;
	onToggle: (isAnnual: boolean) => void;
}

const BillingToggle: React.FC<BillingToggleProps> = ({ isAnnual, onToggle }) => {
	return (
		<div className="flex items-center justify-center mb-8">
			<div className="flex items-center bg-gray-100 rounded-full p-1">
				<button
					onClick={() => onToggle(false)}
					className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
						!isAnnual
							? "bg-white text-gray-900 shadow-sm"
							: "text-gray-500 hover:text-gray-700"
					}`}
				>
					Monthly
				</button>
				<button
					onClick={() => onToggle(true)}
					className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative ${
						isAnnual
							? "bg-white text-gray-900 shadow-sm"
							: "text-gray-500 hover:text-gray-700"
					}`}
				>
					Annual
					{/* Discount Badge */}
					<span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
						25% OFF
					</span>
				</button>
			</div>
		</div>
	);
};

export default BillingToggle;