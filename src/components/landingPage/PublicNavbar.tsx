import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.1141418a.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigation, pricingStyles } from "./navigation";

export default function PublicNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a
          className="flex items-center gap-2 cursor-pointer"
          href="/"
        >
          <img src={typeof logo === "string" ? logo : logo.src} alt="logo" width={50} height={50} />
          <h1 className="text-3xl font-extrabold">Courses</h1>
        </a>
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
                  <a href={"/pricing"} className={pricingStyles}>
                    Pricing
                  </a>
                </NavigationMenuItem>
                {navigation.map((iteam) => (
                  <NavigationMenuItem key={iteam.title}>
                        <NavigationMenuTrigger className="bg-inherit">
                            {iteam.title}
                        </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {iteam.links.map((link) => (
                        <div key={link.title}>
                          <NavigationMenuLink
                            className="w-screen"
                            href={link.link}
                          >
                            {link.title}
                          </NavigationMenuLink>
                          <hr className="border-gray-200 border" />
                        </div>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center">
              <span className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mx-1">
                <a href="https://accounts.buisnesstools.in/sign-in">Sign In</a>
              </span>
              <span className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition mx-1">
                <a href="https://accounts.buisnesstools.in/sign-up">Sign Up</a>
              </span>
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
                  <AccordionTrigger className="bg-inherit">{link.title}</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-0 text-balance">
                    {link.links.map((l) => (
                      <div key={l.link}>
                        <a className={pricingStyles} href={l.link}>
                          {l.title}
                        </a>
                        <hr />
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="flex items-center justify-between">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  <a href="https://accounts.buisnesstools.in/sign-in">Sign In</a>
                </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
