"use client";
import { useState } from "react";
import { BookOpen, Clock, Target, Users, Lightbulb } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import Outline from "./Outline";

type LessonType = {
    lessonNumber: number;
    name: string;
    description: string;
    content: string; // a short description on what to teach in this lesson
};

export type ResponseType = {
    moduleName: string;
    lessons: LessonType[];
}[];

export default function Form() {
    const [courseTitle, setCourseTitle] = useState("");
	const [targetAudience, setTargetAudience] = useState("");
	const [courseDuration, setCourseDuration] = useState("");
	const [learningObjectives, setLearningObjectives] = useState("");
	const [isGenerating, setIsGenerating] = useState(false);
	const [outline, setOutline] = useState<ResponseType>();

	const generateCourseOutline = async () => {
		if(isGenerating) return;
		setIsGenerating(true);
		if (
			!courseTitle ||
			!targetAudience ||
			!courseDuration ||
			!learningObjectives
		) {
			alert("Please fill in all fields to generate your course outline.");
			return;
		}
		const {data} = await axios.post("https://buisnesstools.fullstackwithsahil.workers.dev/free-software/course-outline",{
			courseTitle,
			courseDuration,
			targetAudience,
			learningObjectives
		})
		if(!data.success){
			toast("Error generating a course outline");
			return;
		}
		setOutline(data.data);
		setIsGenerating(false);
	};
	return (
		<>
			<div className="grid md:grid-cols-2 gap-6">
				<div>
					<label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
						<BookOpen className="w-4 h-4" />
						<span>Course Title</span>
					</label>
					<input
						type="text"
						value={courseTitle}
						onChange={(e) => setCourseTitle(e.target.value)}
						placeholder="e.g., Introduction to Machine Learning"
						className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					/>
				</div>

				<div>
					<label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
						<Users className="w-4 h-4" />
						<span>Target Audience</span>
					</label>
					<select
						value={targetAudience}
						onChange={(e) => setTargetAudience(e.target.value)}
						className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					>
						<option value="">Select audience level</option>
						<option value="Beginners">Beginners</option>
						<option value="Intermediate">Intermediate</option>
						<option value="Advanced">Advanced</option>
						<option value="Professionals">Professionals</option>
					</select>
				</div>

				<div>
					<label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
						<Clock className="w-4 h-4" />
						<span>Course Duration</span>
					</label>
					<input
						type="text"
						value={courseDuration}
						onChange={(e) => setCourseDuration(e.target.value)}
						placeholder="e.g., 8 weeks, 20 hours"
						className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					/>
				</div>

				<div>
					<label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
						<Target className="w-4 h-4" />
						<span>Learning Objectives</span>
					</label>
					<textarea
						value={learningObjectives}
						onChange={(e) => setLearningObjectives(e.target.value)}
						placeholder="What should students learn from this course?"
						className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 resize-none"
					/>
				</div>
			</div>

			<button
				onClick={generateCourseOutline}
				disabled={isGenerating}
				className="w-full mt-6 bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
			>
				{isGenerating ? (
					<>
						<div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
						<span>Generating Course Outline...</span>
					</>
				) : (
					<>
						<Lightbulb className="w-5 h-5" />
						<span>Generate Course Outline</span>
					</>
				)}
			</button>
			{outline&&<Outline outline={outline}/>}
		</>
	);
}
