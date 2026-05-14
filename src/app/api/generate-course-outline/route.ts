// app/api/generate-course-outline/route.ts

import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {
  try {
    const { topic, audience, level } = await req.json();

    if (!topic) {
      return NextResponse.json(
        { error: "Topic is required" },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-3.1-flash-lite",
    });

    const prompt = `
Generate a professional online course outline.

Topic: ${topic}
Audience: ${audience}
Skill Level: ${level}

Return ONLY valid JSON.

Format:
{
  "courseTitle": "",
  "targetAudience": "",
  "courseDescription": "",
  "modules": [
    {
      "title": "",
      "lessons": []
    }
  ]
}

Requirements:
- 5-8 modules
- Each module should have 4-6 lessons
- Professional and practical curriculum
`;

    const result = await model.generateContent(prompt);

    const text = result.response.text();

    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleaned);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to generate outline" },
      { status: 500 }
    );
  }
}