"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import LeadmagnetImg from "@/assets/leadMagnet.png";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import sendDiscordMessage from "@/lib/discord";

export default function Card({
	resource,
	colors,
}: {
	colors: {
		border: string;
		iconText: string;
		bg: string;
	};
	resource: {
		id: number;
		title: string;
		description: string;
		color: string;
		topics: string[];
	};
}) {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleDownload = async() => {
		try {
			if(isSubmitting) return;
			if (!email || !email.includes("@")) {
				toast.error("Please enter a valid email address");
				return;
			}
			setIsSubmitting(false);
			await sendDiscordMessage(`someone with email ${email} has requested the resourse ${resource.title}`,"notification");
			setIsSubmitting(true);
		} catch (error) {
			toast("There was an error downloading the book try again later")
		}
	};

	return (
		<div
			key={resource.id}
			className={`bg-white rounded-2xl p-8 border-2 ${colors.border} hover:shadow-xl transition-all duration-300 grid sm:grid-cols-3`}
		>
			<div>
				<Image src={LeadmagnetImg} alt="The ultimate tech guide"/>
			</div>
			<div>
				<div className="flex col-span-2 items-start space-x-4 mb-6">
					<div className="flex-1">
						<h3 className="text-2xl font-bold text-slate-900 mb-3">
							{resource.title}
						</h3>
						<p className="text-slate-600 leading-relaxed mb-4">
							{resource.description}
						</p>
					</div>
				</div>

				{/* Topics Covered */}
				<div className={`${colors.bg} rounded-xl p-4 mb-6`}>
					<p className="font-bold text-slate-900 mb-3 text-sm">
						What's Inside:
					</p>
					<ul className="space-y-2">
						{resource.topics.map((topic, index) => (
							<li
								key={index}
								className="flex items-center text-sm text-slate-700"
							>
								<CheckCircle
									className={`w-4 h-4 ${colors.iconText} mr-2 flex-shrink-0`}
								/>
								{topic}
							</li>
						))}
					</ul>
				</div>

				{/* Download Section */}
				<div className="flex flex-col sm:flex-row gap-3">
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter your email"
						className="flex-1 px-4 py-3 border-2"
					/>
				</div>
				<div className="flex">
					<Button 
						className="flex-1 w-full my-2" 
						onClick={handleDownload} 
						disabled={isSubmitting}
					>
						Submit
					</Button>
				</div>
			</div>
		</div>
	);
}
