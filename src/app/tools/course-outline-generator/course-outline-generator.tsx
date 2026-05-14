// components/tools/course-outline-generator.tsx
import Navigator from "../Navigator";
import Generator from "./clientside";

export default function CourseOutlineGenerator() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#111827]">
      {/* HERO */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex rounded-full border border-neutral-300 bg-white px-4 py-1 text-sm font-medium text-neutral-700">
              Free AI Tool for Course Creators
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              AI Course Outline Generator
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Instantly generate professional course outlines, modules,
              lesson plans, and learning objectives using AI.
              Perfect for coaches, educators, and online course creators.
            </p>
          </div>
        </div>
      </section>
      <Navigator/>

      {/* GENERATOR */}
      <Generator/>


      {/* SEO CONTENT */}
      <section className="border-t border-neutral-200 bg-[#f8f8f6]">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <article className="prose prose-neutral max-w-none">
            <h2 className="text-3xl">
              Create Better Online Courses with AI
            </h2>

            <p>
              Planning an online course can take days or even weeks.
              Our AI Course Outline Generator helps creators build a
              complete curriculum in seconds.
            </p>

            <h3 className="text-2xl">
              What can this AI course generator create?
            </h3>

            <ul className="list-disc ml-5 my-2">
              <li>Course modules</li>
              <li>Lesson structures</li>
              <li>Learning outcomes</li>
              <li>Course curriculum ideas</li>
              <li>Beginner to advanced learning paths</li>
            </ul>

            <h3 className="text-2xl my-2">
              Who is this tool for?
            </h3>

            <p>
              This free AI tool is designed for coaches,
              educators, creators, consultants, and businesses
              launching online courses.
            </p>

            <h3 className="text-2xl my-2">
              Why use AI for course planning?
            </h3>

            <p>
              AI helps speed up brainstorming, organize ideas,
              improve course structure, and reduce the time needed
              to launch your course.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}