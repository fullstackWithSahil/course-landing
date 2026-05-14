"use client";
import { useState } from 'react'

type CourseOutline = {
  courseTitle: string;
  targetAudience: string;
  courseDescription: string;
  modules: {
    title: string;
    lessons: string[];
  }[];
};

export default function Generator() {
    const [topic, setTopic] = useState("");
    const [audience, setAudience] = useState("");
    const [level, setLevel] = useState("Beginner");

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<CourseOutline | null>(null);
    const [error, setError] = useState("");

    const generateOutline = async () => {
        setLoading(true);
        setError("");
        setResult(null);

        try {
        const res = await fetch("/api/generate-course-outline", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            topic,
            audience,
            level,
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error || "Something went wrong");
        }

        setResult(data);
        } catch (err: any) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    };
    return (
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[420px_1fr]">
          {/* LEFT PANEL */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">
              Generate Your Course
            </h2>

            <div className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Course Topic
                </label>

                <input
                  type="text"
                  placeholder="Example: Digital Marketing"
                  className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-black"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Target Audience
                </label>

                <input
                  type="text"
                  placeholder="Example: Small business owners"
                  className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-black"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Skill Level
                </label>

                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-black"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>

              <button
                onClick={generateOutline}
                disabled={loading || !topic}
                className="w-full rounded-2xl bg-black px-6 py-4 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Generating..." : "Generate Course Outline"}
              </button>

              {error && (
                <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
                  {error}
                </div>
              )}
            </div>
          </div>

          {/* RESULT */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
            {!result ? (
              <div className="flex h-full min-h-[500px] items-center justify-center text-center">
                <div>
                  <h3 className="text-2xl font-semibold">
                    Your AI generated outline will appear here
                  </h3>

                  <p className="mt-3 text-neutral-500">
                    Enter your course topic and generate a complete
                    curriculum structure instantly.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div className="border-b border-neutral-200 pb-6">
                  <h2 className="text-4xl font-bold">
                    {result.courseTitle}
                  </h2>

                  <p className="mt-4 text-neutral-600">
                    {result.courseDescription}
                  </p>

                  <div className="mt-4 inline-flex rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700">
                    Audience: {result.targetAudience}
                  </div>
                </div>

                <div className="mt-10 space-y-8">
                  {result.modules.map((module, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-neutral-200 p-6"
                    >
                      <h3 className="text-xl font-semibold">
                        Module {index + 1}: {module.title}
                      </h3>

                      <ul className="mt-5 space-y-3">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li
                            key={lessonIndex}
                            className="flex items-start gap-3 text-neutral-700"
                          >
                            <div className="mt-2 h-2 w-2 rounded-full bg-black" />

                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-14 rounded-3xl border border-neutral-200 bg-[#f4f4f1] p-8">
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
                        Want to launch your course?
                      </p>

                      <h3 className="mt-2 text-3xl font-bold">
                        Turn your outline into a complete online course
                      </h3>

                      <p className="mt-4 text-neutral-600">
                        We help course creators build their website,
                        host videos, manage payments, and grow their
                        business — without touching tech.
                      </p>
                    </div>

                    <a
                      href="https://accounts.buisnesstools.in/sign-up"
                      className="inline-flex h-fit items-center justify-center rounded-2xl bg-black px-6 py-4 text-sm font-medium text-white transition hover:opacity-90"
                    >
                      Start Free
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    )
}
