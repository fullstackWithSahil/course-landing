import { CheckCircle } from "lucide-react";
import { useState } from "react";
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
        image: any;
    };
}) {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleDownload = async () => {
        try {
            if (isSubmitting) return;
            if (!email || !email.includes("@")) {
                toast.error("Please enter a valid email address");
                return;
            }
            setIsSubmitting(false);
            await sendDiscordMessage(
                `someone with email ${email} has requested the resourse ${resource.title}`,
                "notification",
            );
            setIsSubmitting(true);
        } catch (error) {
            toast("There was an error downloading the book try again later");
        }
    };

    return (
        <div
            className={`bg-white rounded-2xl border-2 ${colors.border} p-6 md:p-8 hover:shadow-xl transition-all duration-300`}
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Image */}
                <div className="flex justify-center">
                    <img
                        src={resource.image.src}
                        alt={resource.title}
                        className="w-full max-w-xs lg:max-w-sm h-auto rounded-xl object-contain"
                    />
                </div>
    
                {/* Content */}
                <div className="lg:col-span-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                        {resource.title}
                    </h3>
    
                    <p className="text-slate-600 leading-7 mb-6">
                        {resource.description}
                    </p>
    
                    {/* Topics */}
                    <div className={`${colors.bg} rounded-xl p-5 mb-6`}>
                        <h4 className="font-semibold text-slate-900 mb-4">
                            What's Inside
                        </h4>
    
                        <ul className="space-y-3">
                            {resource.topics.map((topic, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle
                                        className={`w-5 h-5 ${colors.iconText} mt-0.5 flex-shrink-0`}
                                    />
    
                                    <span className="text-slate-700">
                                        {topic}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
    
                    {/* Email Form */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="flex-1 rounded-lg border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                        />
    
                        <Button
                            className="sm:w-auto w-full px-8"
                            onClick={handleDownload}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting..." : "Download"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
