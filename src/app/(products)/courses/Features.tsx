import {
	Award,
	BarChart3,
	CheckCircle,
	Clock,
	FileText,
	Video,
} from "lucide-react";
import React from "react";

export default function Features() {
	return (
		<section className="py-20 px-6 bg-slate-50">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
						Everything You Need to Create Professional Courses
					</h2>
					<p className="text-xl text-slate-600">
						Powerful features that work together seamlessly
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Feature 1 */}
					<div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
						<div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
							<Video className="w-8 h-8 text-indigo-600" />
						</div>
						<h3 className="text-xl font-bold text-slate-900 mb-3">
							Unlimited Video Hosting
						</h3>
						<p className="text-slate-600 leading-relaxed">
							Upload unlimited videos with adaptive streaming that
							adjusts quality based on connection speed. Your
							students get smooth playback every time.
						</p>
					</div>

					{/* Feature 2 */}
					{/* <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
						<div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
							<CheckCircle className="w-8 h-8 text-purple-600" />
						</div>
						<h3 className="text-xl font-bold text-slate-900 mb-3">
							Interactive Assessments
						</h3>
						<p className="text-slate-600 leading-relaxed">
							Create quizzes, assignments, and automated
							certificates. Test knowledge and reward completion
							with professional certificates.
						</p>
					</div> */}

					{/* Feature 3 */}
					{/* <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
						<div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
							<Clock className="w-8 h-8 text-teal-600" />
						</div>
						<h3 className="text-xl font-bold text-slate-900 mb-3">
							Drip Content Scheduling
						</h3>
						<p className="text-slate-600 leading-relaxed">
							Release content on your schedule. Set up drip
							campaigns that unlock lessons automatically to keep
							students engaged over time.
						</p>
					</div> */}

					{/* Feature 4 */}
					<div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
						<div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
							<BarChart3 className="w-8 h-8 text-pink-600" />
						</div>
						<h3 className="text-xl font-bold text-slate-900 mb-3">
							Student Interaction
						</h3>
						<p className="text-slate-600 leading-relaxed">
							Interact with students in comments or our built in group chats
						</p>
					</div>

					{/* Feature 5 */}
					{/* <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
						<div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
							<FileText className="w-8 h-8 text-orange-600" />
						</div>
						<h3 className="text-xl font-bold text-slate-900 mb-3">
							Rich Content Support
						</h3>
						<p className="text-slate-600 leading-relaxed">
							Beyond videos: add PDFs, audio files, text lessons,
							embedded content, and downloadable resources to
							create comprehensive courses.
						</p>
					</div> */}

					{/* Feature 6 */}
					<div className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-200">
						<div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
							<Award className="w-8 h-8 text-blue-600" />
						</div>
						<h3 className="text-xl font-bold text-slate-900 mb-3">
							Certificates & Completion
						</h3>
						<p className="text-slate-600 leading-relaxed">
							Automatically issue beautiful, customizable
							certificates with qr code verification when students
							complete your courses. Add value and boost
							completion rates.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
