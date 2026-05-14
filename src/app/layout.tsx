import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import PublicNavbar from "@/components/landingPage/PublicNavbar";
import Footer from "@/components/landingPage/Footer";
import { cn } from "@/lib/utils";

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
            <html lang="en" className={cn("font-sans", inter.variable)}>
                    <body
                        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                    >
                        <PublicNavbar />
                        {children}
                        <Footer />
                    </body>
            </html>
    );
}
