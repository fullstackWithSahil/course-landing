"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Lesson({
    lesson,
    name,
    description,
    content,
}: {
    lesson: number;
    name: string;
    description: string;
    content: string;
}) {
    return (
        <Card className="my-5">
            <CardHeader>
                <CardTitle className="text-center font-bold text-3xl">
                    Lesson-{lesson}
                </CardTitle>
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        className="col-span-4"
                        value={name}
                        id="name"
                        required
                    />
                </div>
                <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea value={description} id="description" required />
                </div>
                <div>
                    <Label htmlFor="description">Content</Label>
                    <Textarea value={content} id="description" required />
                </div>
            </CardHeader>
        </Card>
    );
}
