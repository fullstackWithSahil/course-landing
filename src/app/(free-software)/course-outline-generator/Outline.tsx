"use client";

import type { ResponseType } from "@/app/(free-software)/course-outline-generator/Form";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Lesson from "./Lesson";


export default function Outline({ outline }: { outline: ResponseType }) {
    return (
        <Card className="p-5">
            <CardHeader>
                <CardTitle className="text-center font-bold text-3xl">
                    Course structure
                </CardTitle>
            </CardHeader>
            <Accordion
                type="multiple"
                className="w-full"
                defaultValue={["item-1"]}
            >
                {outline?.map((mod) => {
                    return (
                        <AccordionItem
                            key={mod.moduleName}
                            value={mod.moduleName}
                        >
                            <AccordionTrigger>
                                <h1 className="text-2xl">{mod.moduleName}</h1>
                            </AccordionTrigger>
                            <AccordionContent>
                                {mod.lessons.map((lesson) => {
                                    return (
                                        <Lesson
                                            key={lesson.name}
                                            name={lesson.name}
                                            description={lesson.description}
                                            content={lesson.content}
                                            lesson={lesson.lessonNumber}
                                        />
                                    );
                                })}
                            </AccordionContent>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </Card>
    );
}
