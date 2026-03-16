import Link from 'next/link'
import { Book, FileText, Download, ArrowRight } from 'lucide-react'

const resources = [
  {
    title: "The Ultimate Guide to Course Creation",
    description: "Learn how to structure, film, and launch your first online course from scratch.",
    type: "E-book",
    icon: Book,
    color: "bg-blue-500"
  },
  {
    title: "Creator's Launch Checklist",
    description: "A comprehensive 50-step checklist to ensure your course launch is a success.",
    type: "Guide",
    icon: FileText,
    color: "bg-purple-500"
  },
  {
    title: "High-Converting Sales Script",
    description: "Copy and paste these proven scripts for your course landing page and emails.",
    type: "Template",
    icon: Download,
    color: "bg-emerald-500"
  }
]

export default function ResourcesCTA() {
  return (
    <section id="resources-cta" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Want to build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">successful course?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Stop guessing and start building. Access our library of free ebooks, guides, and templates designed exclusively for course creators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="group bg-white/70 backdrop-blur-md border border-slate-200 rounded-3xl p-8 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`${resource.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <resource.icon size={28} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
                {resource.type}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                {resource.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {resource.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/resources"
            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg shadow-blue-200 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            Access All Free Resources
            <ArrowRight size={20} />
          </Link>
          <span className="text-slate-500 font-medium tracking-wide">
            100% Free • No Credit Card Required
          </span>
        </div>
      </div>
    </section>
  )
}
