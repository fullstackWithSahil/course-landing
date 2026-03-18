import {
    FileText,
    MessageCircle,
    Target,
    Users,
} from "lucide-react";

export default function Features() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        More Than Just Discussions
                    </h2>
                    <p className="text-xl text-slate-600">
                        Create a complete community experience with integrated
                        features
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        {/* <div className="flex items-start space-x-4">
							<div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
								<Video className="w-6 h-6 text-teal-600" />
							</div>
							<div>
								<h3 className="text-lg font-bold text-slate-900 mb-1">
									Live Video Events
								</h3>
								<p className="text-slate-600">
									Host live workshops, webinars, and community
									calls right inside your platform.
								</p>
							</div>
						</div> */}

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <FileText className="w-6 h-6 text-cyan-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">
                                    Resource Library
                                </h3>
                                <p className="text-slate-600">
                                    Share templates, guides, and downloadable
                                    resources exclusive to members.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Users className="w-6 h-6 text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">
                                    Sub-Communities
                                </h3>
                                <p className="text-slate-600">
                                    Create topic-specific groups within your
                                    main community for focused discussions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Target className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">
                                    Member Challenges
                                </h3>
                                <p className="text-slate-600">
                                    Run community challenges with leaderboards
                                    to boost engagement and participation.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <MessageCircle className="w-6 h-6 text-pink-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">
                                    Direct Messaging
                                </h3>
                                <p className="text-slate-600">
                                    Enable private conversations between members
                                    for networking and collaboration.
                                </p>
                            </div>
                        </div>

                        {/* <div className="flex items-start space-x-4">
							<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
								<Shield className="w-6 h-6 text-orange-600" />
							</div>
							<div>
								<h3 className="text-lg font-bold text-slate-900 mb-1">
									Private Spaces
								</h3>
								<p className="text-slate-600">
									Create VIP-only areas for your highest-tier
									members with exclusive benefits.
								</p>
							</div>
						</div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
