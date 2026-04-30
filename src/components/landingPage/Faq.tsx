"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import faqImage from "@/assets/FAQ.png";

export default function Faq() {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <section className="py-20 bg-white md:grid md:grid-cols-3">
            <Image src={faqImage} alt="Faq" />
            <div className="max-w-3xl mx-auto px-4 col-span-2">
                <h2 className="text-3xl font-bold text-center mb-16">
                    Got Questions? We&apos;ve Got Answers
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isActive={activeFaq === index}
                            onClick={() =>
                                setActiveFaq(activeFaq === index ? null : index)
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

const FaqItem = ({
    question,
    answer,
    isActive,
    onClick,
}: {
    question: string;
    answer: string;
    isActive: boolean;
    onClick: () => void;
}) => (
    <div className="border rounded-lg overflow-hidden md:w-175">
        <button
            className="w-full text-left p-4 font-semibold flex justify-between items-center hover:bg-gray-50 transition"
            onClick={onClick}
        >
            {question}
            <ChevronDown
                className={`transform transition-transform ${
                    isActive ? "rotate-180" : ""
                }`}
            />
        </button>
        {isActive && (
            <div className="p-4 border-t bg-gray-50">
                <p className="text-gray-600">{answer}</p>
            </div>
        )}
    </div>
);

const faqs = [
    {
        question:
            "Do I need any technical knowledge or coding skills to use Buisnesstools.in?",
        answer: "Absolutely not! Buisnesstools.in is designed for educators and creators, not developers. We handle all the technical complexities – from website setup and hosting to secure video streaming and payment integration – so you can focus entirely on creating and teaching.",
    },
    {
        question: "How does payment processing work for my courses?",
        answer: "We seamlessly integrate with Razorpay, a leading payment gateway in India. This allows your students to make secure payments directly on your course website using various Indian payment methods, and the earnings go directly to you. Setting it up is straightforward and guided by our support team.",
    },
    {
        question: "Do you offer a free trial or a free tier to get started?",
        answer: "While we do not offer a free tier, we are confident in the value and comprehensive support our platform provides. We encourage you to book a personalized demo with our team to see Buisnesstools.in in action and understand how it perfectly fits your course creation needs before committing.",
    },
    {
        question: "Can I use my own domain name for my course website?",
        answer: "Yes, definitely! We encourage you to use your own custom domain name (e.g., yourinstitute.com, yourname.in) to build a strong, professional brand identity. Our team will assist you with the simple setup process.",
    },
    {
        question: "What kind of support can I expect?",
        answer: "We pride ourselves on being your dedicated technical partner. Our expert support team is available to assist you with any questions or challenges no matter how big or small, ensuring a smooth and successful online course journey. You can reach us via email, chat or phone.",
    },
    {
        question: "Is my course content and student data secure?",
        answer: "Yes, we do not sell your data to anyone and security is a top priority. Your course content is securely hosted, and student data is protected with industry-standard security measures. We ensure a reliable and safe environment for both you and your students.",
    },
    {
        question:
            "What if I already have students or courses on another platform?",
        answer: `We understand that migrating can seem daunting. Our team can guide you through the process of transferring your existing content and student data to Buisnesstools.in, making the transition as smooth as possible so you don't lose progress. contact us at +91 9867624595`,
    },
    {
        question:
            "How do I ensure my online course is professional and looks good?",
        answer: "We provide you with a personal web designer during the onboarding who will designe you a web designe according to your personal taste",
    },
];
