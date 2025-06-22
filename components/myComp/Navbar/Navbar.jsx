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
    <div className="flex flex-col items-center p-4">
      {/* Logo at the top center */}
      <div className="mb-8">
        <Image src="/logo.png" alt="Logo" width={180} height={100} />
      </div>
      
      {/* Navigation links with consistent alignment and hover effects */}
      <div className="flex flex-col space-y-4 w-full">
        {navigationItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-lg font-medium text-[#0077B3] hover:text-[#FFB74D] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0077B3] after:transition-all after:duration-300 after:ease-out hover:after:w-full"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <Button 
          variant="default" 
          className=" mt-4 hover:bg-[#0077B3] border-[#0077B3] border-2 bg-[#FFB74D] cursor-pointer text-white font-medium px-4 py-2 rounded-md transition-colors duration-200"
        >
          Get in Touch
        </Button>
      </div>
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
          <div className="hidden md:flex items-center space-x-8 gap-5">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-[#0077B3] hover:text-[#FFB74D] transition-colors duration-200 text-lg font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0077B3] after:transition-all after:duration-300 after:ease-out hover:after:w-full"
                      )}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              className="hover:bg-[#0077B3] border-[#0077B3] border-2 bg-[#FFB74D] cursor-pointer text-white font-medium px-4 py-2 rounded-md transition-colors duration-200"
              size="lg"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button  size="lg" className="p-0 text-[#0077B3] shadow-none border-2 border-[#F9D74D]">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white [&>button]:text-[#0077B3] [&>button]:hover:text-[#FFB74D] [&>button>svg]:h-8 [&>button>svg]:w-8">
                <div className="mt-2">
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
