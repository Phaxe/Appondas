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
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    {
      label: "Services",
      href: "/services",
      dropdown: [
        { label: "Custom AI Tool", href: "/services/custom-ai-tool" },
        { label: "AI Consultant", href: "/services/ai-consultant" },
        { label: "AI Integration", href: "/services/ai-integration" },
      ],
    },
    {
      label: "Products",
      href: "/products",
      dropdown: [
        { label: "Chatbot", href: "/products/chatbot" },
        { label: "Billing System", href: "/products/billing-system" },
        { label: "Inventory Trading", href: "/products/inventory-trading" },
        { label: "Custom", href: "/products/custom" },
      ],
    },
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
        {navigationItems.map((item) =>
          item.dropdown ? (
            <div key={item.label} className="w-full">
              <details className="group">
                <summary className="cursor-pointer text-base sm:text-lg font-medium text-[#0077B3] hover:text-[#FFB74D] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0077B3] after:transition-all after:duration-300 after:ease-out hover:after:w-full flex items-center justify-between">
                  {item.label}
                  <span className="ml-2">▼</span>
                </summary>
                <ul className="pl-4 mt-2 flex flex-col gap-2">
                  {item.dropdown.map((sub) => (
                    <li key={sub.href}>
                      <a
                        href={sub.href}
                        className="block px-2 py-1 text-[#0077B3] hover:text-[#FFB74D] transition-colors duration-200 rounded flex items-center gap-2 text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        <ArrowRight className="w-4 h-4" />
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          ) : (
            <a
              key={item.href}
              href={item.href}
              className="text-base sm:text-lg font-medium text-[#0077B3] hover:text-[#FFB74D] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0077B3] after:transition-all after:duration-300 after:ease-out hover:after:w-full"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          )
        )}
        <Button 
          variant="default" 
          className=" mt-4 hover:bg-[#0077B3] border-[#0077B3] border-2 bg-[#FFB74D] cursor-pointer text-white font-medium px-6 py-3 rounded-md transition-colors duration-200"
        >
          Get in Touch
          <MessageCircle className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile: Burger left, Logo right; Desktop: unchanged */}
          <div className="flex items-center w-full justify-between md:justify-start">
            {/* Burger menu (mobile only) */}
            <div className="md:hidden order-1">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button  size="sm" className="p-0 text-[#0077B3] shadow-none border-2 border-[#F9D74D]">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white [&>button]:text-[#0077B3] [&>button]:hover:text-[#FFB74D] [&>button>svg]:h-8 [&>button>svg]:w-8">
                  <div className="mt-2">
                    <MobileNav />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            {/* Logo */}
            <div className="flex items-center order-2 ml-auto md:ml-0">
              <Image src="/logo.png" alt="Logo" width={180} height={100} />
            </div>
          </div>
          {/* Left side - Navigation Links and Button (Desktop) */}
          <div className="hidden md:flex items-center gap-20 z-50">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="flex gap-8">
                {navigationItems.map((item) =>
                  item.dropdown ? (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuTrigger
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "text-[#0077B3] hover:text-[#FFB74D] transition-colors p-0 duration-200 text-base sm:text-lg font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0077B3] after:transition-all after:duration-300 after:ease-out hover:after:w-full"
                        )}
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white shadow-lg rounded-md p-4 min-w-[180px] z-[100]">
                        <ul className="flex flex-col gap-2">
                          {item.dropdown.map((sub) => (
                            <li key={sub.href}>
                              <a
                                href={sub.href}
                                className="block px-2 py-1 text-[#0077B3] hover:text-[#FFB74D] transition-colors duration-200 rounded flex items-center gap-2 text-sm"
                              >
                                <ArrowRight className="w-4 h-4" />
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink
                        href={item.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "text-[#0077B3] hover:text-[#FFB74D] transition-colors p-0 duration-200 text-base sm:text-lg font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0077B3] after:transition-all after:duration-300 after:ease-out hover:after:w-full"
                        )}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              className="hover:bg-[#0077B3] border-[#0077B3] border-2 bg-[#FFB74D] cursor-pointer text-white font-medium px-8 py-4 rounded-md transition-colors duration-200"
              size="lg"
            >
              Get in Touch
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
