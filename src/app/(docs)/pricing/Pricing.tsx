"use client";
import { useState } from "react";
import PricingCard from "./PricingCard";
import BillingToggle from "./BillingToggle";

export default function Pricing() {
    const [isAnnualBilling, setIsAnnualBilling] = useState(false);

    return (
        <section id="pricing" className="py-20 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Choose the Plan That&apos;s Right for You
                </h2>

                {/* Subtitle */}
                <p className="text-xl text-center text-gray-600 mb-8">
                    Get started with our flexible pricing options
                </p>

                {/* Billing Toggle */}
                <BillingToggle
                    isAnnual={isAnnualBilling}
                    onToggle={setIsAnnualBilling}
                />

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <PricingCard
                        title="Basic"
                        price="60"
                        features={[
                            "5 course",
                            "1000 students",
                            "100 Emails per day",
                            // "Basic analytics",
                            "Custom domain",
                            "3GB video size",
                        ]}
                        isAnnual={isAnnualBilling}
                    />
                    <PricingCard
                        title="Pro"
                        price="120"
                        features={[
                            "15 courses",
                            "5000 students",
                            "50000 Emails per month",
                            // "Advanced analytics",
                            "Priority support",
                            "Custom domain",
                            "Unlimited video size",
                        ]}
                        highlighted={true}
                        isAnnual={isAnnualBilling}
                    />
                    <PricingCard
                        title="Pay as you go"
                        price="2 per student"
                        features={[
                            "Unlimited courses",
                            "Unlimited students",
                            "Unlimited emails",
                            // "Full analytics suite",
                            "24/7 support",
                            // "Multiple domains",
                            "bring your own domain",
                        ]}
                        isAnnual={isAnnualBilling}
                    />
                </div>
            </div>
        </section>
    );
}
