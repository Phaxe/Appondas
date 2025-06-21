"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ];

  const MobileNav = () => (
    <div className="flex flex-col space-y-4">
      {navigationItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-lg font-medium hover:text-primary transition-colors"
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </a>
      ))}
      <Button variant="default" className="w-full mt-4">
        Get in Touch
      </Button>
    </div>
  );

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
         <Image src="/logo.png" alt="Logo" width={180} height={100} />
          </div>
          {/* Left side - Navigation Links and Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      href={item.href}
                      className={navigationMenuTriggerStyle() + "text-[#1f2937] hover:text-[#2563eb] transition-colors duration-200 text-lg font-medium"}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button className="hover:bg-[#2563eb] bg-[#f59e0b] text-white font-medium px-4 py-2 rounded-md transition-colors duration-200" size="lg">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="lg" className="p-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Navigate through our website
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6">
                  <MobileNav />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Right side - Logo */}
    
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
