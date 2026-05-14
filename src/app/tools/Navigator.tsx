import Link from "next/link";

const tools = [
  {
    title: "AI Course Name Generator",
    desc: "Generate catchy course titles that improve conversions.",
    href: "#",
  },
  {
    title: "Course Pricing Calculator",
    desc: "Find the perfect pricing strategy for your online course.",
    href: "#",
  },
  {
    title: "AI Lesson Plan Generator",
    desc: "Create lesson plans and learning objectives instantly.",
    href: "#",
  },
];

export default function Navigator() {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
            More Free Tools
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Explore our other creator tools
          </h2>

          <p className="mt-4 text-neutral-600">
            Free tools designed to help course creators launch, market, and grow
            their online business.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, index) => (
            <Link
              key={index}
              href={tool.href}
              className="group rounded-xl border p-2 transition border-black"
            >
                {tool.title}
                <div className="mt-6 text-sm font-medium">
                  Try Tool →
                </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
