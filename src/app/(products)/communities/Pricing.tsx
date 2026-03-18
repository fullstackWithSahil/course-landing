"use client";
import { useClerk, useUser } from "@clerk/nextjs";
import { CheckCircle, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Pricing() {
    const router = useRouter();
    const { isSignedIn } = useUser();
    const { openSignIn } = useClerk();

    async function handleProTier() {
        if (!isSignedIn) {
            const newLocal = "/communities/redirect";
            //redirect to sign in which will redirect to dodo url after you signIn
            return openSignIn({ forceRedirectUrl: newLocal });
        } else {
            router.push("/communities/redirect");
        }
    }
    return (
        <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Free Plan */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Free</h3>
                <div className="mb-6">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-slate-300 text-lg">/month</span>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                    Perfect for getting started with your community.
                </p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                        <X className="w-5 h-5 text-red-400 shrink-0" />
                        <span>No tiered members</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <X className="w-5 h-5 text-red-400 shrink-0" />
                        <span>Limited server capacity</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                        <span>Images & files (30 day retention)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                        <span>Basic community features</span>
                    </li>
                </ul>
                <a
                    href={"https://app.buisnesstools.in/onboarding"}
                    className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 border border-white/30"
                >
                    Get Started Free
                </a>
            </div>

            {/* Pro Plan */}
            <div className="bg-linear-to-br from-teal-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-teal-400/50 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-teal-400 to-blue-400 text-white px-4 py-1 rounded-full text-sm font-bold">
                    POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="mb-6">
                    <span className="text-4xl font-bold">$20 per month</span>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                    Scale your community with advance features and massive
                    scale.
                </p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                        <span>Tiered members system</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                        <span>Unlimited members</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                        <span>Images & files (lifetime month retention)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                        <span>Priority support & onboarding</span>
                    </li>
                </ul>
                <button
                    onClick={handleProTier}
                    className="w-full bg-white hover:bg-slate-100 text-teal-600 font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg"
                >
                    Upgrade to Pro
                </button>
            </div>

            {/* Custom Plan */}
            <div className="bg-linear-to-br from-teal-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-teal-400/50 relative">
                <h3 className="text-2xl font-bold mb-4">Custom</h3>
                <div className="mb-6">
                    <span className="text-4xl font-bold">Custom</span>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                    Scale your community massive scale with custome features.
                </p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                        <span>Tiered members system</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                        <span>Unlimited members</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                        <span>Images & files (6 month retention)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-300 shrink-0" />
                        <span>Priority support & onboarding</span>
                    </li>
                </ul>
                <a
                    href="mailto:sales@buisnesstools.in"
                    className="w-full bg-white hover:bg-slate-100 text-teal-600 font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg"
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
}
