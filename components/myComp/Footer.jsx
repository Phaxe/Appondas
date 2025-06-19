import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
];

const Footer = () => (
  <footer className="w-full bg-white border-t py-6 px-0">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Logo */}
      <div className="flex items-center md:order-1 order-1 md:w-auto justify-center md:justify-start min-w-[120px]">
        <Image src="/logo.png" alt="Logo" width={120} height={60} />
      </div>
      {/* Navigation Links */}
      <nav className="flex-1 flex justify-center md:order-2 order-3 w-full">
        <ul className="flex flex-wrap justify-center gap-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Social Media */}
      <div className="flex items-center space-x-4 md:order-3 order-2 md:w-auto justify-center md:justify-end min-w-[100px]">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-500 hover:text-primary transition-colors"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
    <div className="mt-6 text-center text-xs text-gray-400">© {new Date().getFullYear()} Appondas. All rights reserved.</div>
  </footer>
);

export default Footer; 