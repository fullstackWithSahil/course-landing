import Form from "./Form";
import { Lightbulb } from "lucide-react";

export default function AICoursePage() {
    return (
        <>
            {/* Main Course Generator Section */}
            <div className="col-span-4 p-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <Lightbulb className="w-8 h-8 text-blue-600" />
                            <h1 className="text-4xl font-bold text-gray-800">
                                AI Course Outline Generator
                            </h1>
                        </div>
                        <p className="text-gray-600 text-lg">
                            Create comprehensive course outlines in minutes
                            using artificial intelligence
                        </p>
                    </div>

                    {/* Input Form */}
                    <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                            Course Details
                        </h2>
                        <Form />
                    </div>
                </div>
            </div>
        </>
    );
}
