"use client";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-indigo-50 via-white to-purple-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            {/* <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-200 shadow-sm">
							<Sparkles className="w-4 h-4 text-indigo-600" />
							<span className="text-sm font-semibold text-indigo-700">Trusted by 5,000+ Course Creators</span>
						</div> */}

            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Launch Your{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
                Online Course
              </span>{" "}
              Without Touching Tech
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-xl">
              We build your website, host your course, and help you grow. Your
              technical partner in course creation—not just software.
            </p>

            {/* Benefits list */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                <span className="text-lg text-slate-700">
                  We build your entire course website for you
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                <span className="text-lg text-slate-700">
                  Free strategy consultancy included
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                <span className="text-lg text-slate-700">
                  No technical skills required—ever
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://app.buisnesstools.in/onboarding"
                className="group bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Launch Your Course Website
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a
                href={"#consultancy"}
                className="group bg-white hover:bg-slate-50 text-slate-700 font-semibold py-4 px-8 rounded-lg transition-all duration-200 border-2 border-slate-200 hover:border-slate-300 flex items-center justify-center"
              >
                <Sparkles className="w-5 h-5 mr-2 text-indigo-600" />
                Book Free Strategy Call
              </a>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main dashboard mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-200 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-linear-to-br from-indigo-100 to-purple-100 rounded-lg p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-8 w-32 bg-white/60 rounded"></div>
                    <div className="h-8 w-20 bg-white/60 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-16 bg-white/80 rounded-lg"></div>
                    <div className="h-16 bg-white/80 rounded-lg"></div>
                    <div className="h-16 bg-white/80 rounded-lg"></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-20 bg-linear-to-br from-indigo-400 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                    348
                    <span className="text-xs ml-1">students</span>
                  </div>
                  <div className="h-20 bg-linear-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                    12
                    <span className="text-xs ml-1">courses</span>
                  </div>
                  <div className="h-20 bg-linear-to-br from-pink-400 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                    $24K
                  </div>
                </div>
              </div>

              {/* Floating card - Revenue */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-slate-200 animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">
                      Monthly Revenue
                    </p>
                    <p className="text-lg font-bold text-slate-900">$24,580</p>
                    <p className="text-xs text-green-600">↑ 23% this month</p>
                  </div>
                </div>
              </div>

              {/* Floating card - New Student */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-slate-200 animate-float animation-delay-2000">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      New Student Enrolled!
                    </p>
                    <p className="text-xs text-slate-500">
                      Advanced Marketing Course
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        {/* <Herostats/> */}
      </div>

      <style>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
