"use client";
import { Show, UserButton } from "@clerk/nextjs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, Triangle, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import logo from "@/assets/logo.1141418a.png";
import { useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigation, pricingStyles } from "./navigation";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function PublicNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="bg-white top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2"
          onClick={() => router.push("/")}
        >
          <Image src={logo} alt="logo" width={50} height={50} />
          <h1 className="text-3xl font-extrabold">Courses</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <ChevronDown size={24} />}
          </button>
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href={"/pricing"} className={pricingStyles}>
                    Pricing
                  </Link>
                </NavigationMenuItem>
                {navigation.map((iteam) => (
                  <NavigationMenuItem key={iteam.title}>
                    <NavigationMenuTrigger>{iteam.title}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {iteam.links.map((link) => (
                        <div key={link.title}>
                          <NavigationMenuLink
                            className="w-screen"
                            href={link.link}
                          >
                            {link.title}
                          </NavigationMenuLink>
                          <hr />
                        </div>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center">
            <Show when={"signed-out"}>
              <span className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mx-1">
                <a href="https://accounts.buisnesstools.in/sign-in">Sign In</a>
              </span>
              <span className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mx-1">
                <a href="https://accounts.buisnesstools.in/sign-up">Sign Up</a>
              </span>
            </Show>

            <Show when={"signed-in"}>
              <div className="hidden md:flex items-center gap-2 mr-3">
                <a href="https://app.buisnesstools.in/onboarding">
                  <Badge>
                    Dashboard
                    <Triangle className="rotate-90 fill-white" />
                  </Badge>
                </a>
                <UserButton />
              </div>
            </Show>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t transition-all duration-200">
          <div className="flex flex-col space-y-4 p-4">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              {navigation.map((link) => (
                <AccordionItem key={link.title} value={link.title}>
                  <AccordionTrigger>{link.title}</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    {link.links.map((l) => (
                      <div key={l.link}>
                        <Link className={pricingStyles} href={l.link}>
                          {l.title}
                        </Link>
                        <hr />
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="flex items-center justify-between">
              <Show when={"signed-out"}>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  <a href="https://accounts.buisnesstools.in/sign-in">Sign In</a>
                </button>
              </Show>
              <Show when={"signed-in"}>
                <UserButton />
              </Show>
              <a href="https://app.buisnesstools.in/onboarding">
                <Badge>
                  Dashboard
                  <Triangle className="rotate-90 fill-white" />
                </Badge>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
