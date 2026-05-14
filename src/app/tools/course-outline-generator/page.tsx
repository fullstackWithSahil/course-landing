// app/tools/ai-course-outline-generator/page.tsx

import { Metadata } from "next";
import CourseOutlineGenerator from "./course-outline-generator";

export const metadata: Metadata = {
  title:
    "AI Course Outline Generator (Free) | Create Course Curriculum in Seconds",
  description:
    "Generate complete online course outlines using AI. Create modules, lessons, learning outcomes, and course structure for your online course in seconds.",
  keywords: [
    "AI course outline generator",
    "course curriculum generator",
    "online course creator tools",
    "course planning tool",
    "course structure generator",
    "AI curriculum builder",
  ],
};

export default function Page() {
  return <CourseOutlineGenerator />;
}