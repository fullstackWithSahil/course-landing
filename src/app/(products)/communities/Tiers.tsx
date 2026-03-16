import { CheckCircle, Crown, Sparkles } from "lucide-react";
import React from "react";

export default function Tiers() {
	return (
		<div className="space-y-4">
			<div className="bg-white rounded-xl p-6 border-2 border-slate-200">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-xl font-bold text-slate-900">
						Basic Tier
					</h3>
					<span className="text-2xl font-bold text-teal-600">
						$9/mo
					</span>
				</div>
				<ul className="space-y-2 text-slate-600">
					<li className="flex items-center">
						<CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
						Access to community discussions
					</li>
					<li className="flex items-center">
						<CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
						Member directory
					</li>
					<li className="flex items-center">
						<CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
						Monthly Q&A sessions
					</li>
				</ul>
			</div>

			<div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-200">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-xl font-bold text-slate-900 flex items-center">
						Premium Tier
						<Crown className="w-5 h-5 text-teal-600 ml-2" />
					</h3>
					<span className="text-2xl font-bold text-teal-600">
						$29/mo
					</span>
				</div>
				<ul className="space-y-2 text-slate-700">
					<li className="flex items-center">
						<CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
						Everything in Basic, plus:
					</li>
					<li className="flex items-center">
						<CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
						Exclusive content library
					</li>
					<li className="flex items-center">
						<CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
						Weekly workshops
					</li>
					<li className="flex items-center">
						<CheckCircle className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0" />
						Direct messaging with creator
					</li>
				</ul>
			</div>

			<div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-xl font-bold text-slate-900 flex items-center">
						VIP Tier
						<Sparkles className="w-5 h-5 text-indigo-600 ml-2" />
					</h3>
					<span className="text-2xl font-bold text-indigo-600">
						$99/mo
					</span>
				</div>
				<ul className="space-y-2 text-slate-700">
					<li className="flex items-center">
						<CheckCircle className="w-4 h-4 text-indigo-600 mr-2 flex-shrink-0" />
						Everything in Premium, plus:
					</li>
					<li className="flex items-center">
						<CheckCircle className="w-4 h-4 text-indigo-600 mr-2 flex-shrink-0" />
						1-on-1 coaching sessions
					</li>
					<li className="flex items-center">
						<CheckCircle className="w-4 h-4 text-indigo-600 mr-2 flex-shrink-0" />
						Priority support
					</li>
					<li className="flex items-center">
						<CheckCircle className="w-4 h-4 text-indigo-600 mr-2 flex-shrink-0" />
						VIP badge & recognition
					</li>
				</ul>
			</div>
		</div>
	);
}
