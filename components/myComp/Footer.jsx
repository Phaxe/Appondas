import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const integrationPartners = [
  "Partner Company 1",
  "Partner Company 2", 
  "Partner Company 3",
  "Partner Company 4",
  "Partner Company 5",
];

const productsLinks = [
  { label: "Chatbot", href: "/products/chatbot" },
  { label: "Billing System", href: "/products/billing-system" },
  { label: "Inventory Trading", href: "/products/inventory-trading" },
  { label: "Custom", href: "/products/custom" },
];

const servicesLinks = [
  { label: "Custom AI Tool", href: "/services/custom-ai-tool" },
  { label: "AI Consultant", href: "/services/ai-consultant" },
  { label: "AI Integration", href: "/services/ai-integration" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Legal", href: "/legal" },
];

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
];

const Footer = () => (
  <footer className="w-full bg-[#e1e8f0] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] py-12 px-0">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Social Media */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <Image src="/logo.png" alt="Logo" width={120} height={60} />
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#0077B3] hover:text-[#FFB74D] transition-colors duration-200"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Integration Partners */}
        <div className="text-left">
          <h3 className="text-lg font-semibold text-[#0077B3] mb-4">Integration Partners</h3>
          <ul className="space-y-2 pl-4">
            {integrationPartners.map((partner, index) => (
              <li key={index}>
                <span className="text-gray-400 hover:text-[#FFB74D] transition-colors duration-200 cursor-pointer">
                  - {partner}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="text-left">
          <h3 className="text-lg font-semibold text-[#0077B3] mb-4">Products</h3>
          <ul className="space-y-2 pl-4">
            {productsLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="text-gray-400 hover:text-[#FFB74D] transition-colors duration-200"
                >
                  - {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="text-left">
          <h3 className="text-lg font-semibold text-[#0077B3] mb-4">Services</h3>
          <ul className="space-y-2 pl-4">
            {servicesLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="text-gray-400 hover:text-[#FFB74D] transition-colors duration-200"
                >
                  - {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="text-left">
          <h3 className="text-lg font-semibold text-[#0077B3] mb-4">Company</h3>
          <ul className="space-y-2 pl-4">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="text-gray-400 hover:text-[#FFB74D] transition-colors duration-200"
                >
                  - {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center text-xs text-gray-400 border-t border-gray-200 pt-6">
      © {new Date().getFullYear()} Appondas. All rights reserved.
    </div>
  </footer>
);

export default Footer; 