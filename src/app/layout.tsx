import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import PublicNavbar from "@/components/landingPage/PublicNavbar";
import Footer from "@/components/landingPage/Footer";
import { Suspense } from "react";
import PostHogPageView from "@/components/PostHogPageView";
import { cn } from "@/lib/utils";
import { PostHogProvider } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Get your course online today | Buisnesstools",
    description:
        "Our website helps course creators get thier course online without being profecient in tech",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" className={cn("font-sans", inter.variable)}>
                <PostHogProvider>
                    <body
                        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                    >
                        <PublicNavbar />
                        <Suspense>
                            <PostHogPageView />
                        </Suspense>
                        {children}
                        <Toaster />
                        <Footer />
                    </body>
                </PostHogProvider>
            </html>
        </ClerkProvider>
    );
}
