// import React from "react";
// import { Facebook, Twitter, Instagram } from "lucide-react";
// import Link from "next/link";
import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

// const integrationPartners = [
//   "Partner Company 1",
//   "Partner Company 2", 
//   "Partner Company 3",
//   "Partner Company 4",
//   "Partner Company 5",
// ];

// const productsLinks = [
//   { label: "Chatbot", href: "/products/chatbot" },
//   { label: "Billing System", href: "/products/billing-system" },
//   { label: "Inventory Trading", href: "/products/inventory-trading" },
//   { label: "Custom", href: "/products/custom" },
// ];

// const servicesLinks = [
//   { label: "Custom AI Tool", href: "/services/custom-ai-tool" },
//   { label: "AI Consultant", href: "/services/ai-consultant" },
//   { label: "AI Integration", href: "/services/ai-integration" },
// ];

// const companyLinks = [
//   { label: "About", href: "/about" },
//   { label: "Team", href: "/team" },
//   { label: "Contact", href: "/contact" },
//   { label: "Blog", href: "/blog" },
//   { label: "Legal", href: "/legal" },
// ];

// const socialLinks = [
//   { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
//   { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
//   { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
// ];

// const Footer = () => (
//   <footer className="w-full bg-[#e1e8f0] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] py-12 px-0">
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
//         {/* Logo and Social Media */}
//         <div className="flex flex-col items-center text-center">
//           <div className="mb-6">
//             <Image src="/logo.png" alt="Logo" width={120} height={60} />
//           </div>
//           <div className="flex items-center space-x-4">
//             {socialLinks.map(({ href, icon: Icon, label }) => (
//               <a
//                 key={label}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={label}
//                 className="text-[#0077B3] hover:text-[#FFB74D] transition-colors duration-200"
//               >
//                 <Icon className="h-5 w-5" />
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Integration Partners */}
//         <div className="text-left">
//           <h3 className="text-lg font-semibold text-[#0077B3] mb-4">Integration Partners</h3>
//           <ul className="space-y-2 pl-4">
//             {integrationPartners.map((partner, index) => (
//               <li key={index}>
//                 <span className="text-gray-400 hover:text-[#FFB74D] transition-colors duration-200 cursor-pointer">
//                   - {partner}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Products */}
//         <div className="text-left">
//           <h3 className="text-lg font-semibold text-[#0077B3] mb-4">Products</h3>
//           <ul className="space-y-2 pl-4">
//             {productsLinks.map((link) => (
//               <li key={link.href}>
//                 <Link 
//                   href={link.href} 
//                   className="text-gray-400 hover:text-[#FFB74D] transition-colors duration-200"
//                 >
//                   - {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Services */}
//         <div className="text-left">
//           <h3 className="text-lg font-semibold text-[#0077B3] mb-4">Services</h3>
//           <ul className="space-y-2 pl-4">
//             {servicesLinks.map((link) => (
//               <li key={link.href}>
//                 <Link 
//                   href={link.href} 
//                   className="text-gray-400 hover:text-[#FFB74D] transition-colors duration-200"
//                 >
//                   - {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Company */}
//         <div className="text-left">
//           <h3 className="text-lg font-semibold text-[#0077B3] mb-4">Company</h3>
//           <ul className="space-y-2 pl-4">
//             {companyLinks.map((link) => (
//               <li key={link.href}>
//                 <Link 
//                   href={link.href} 
//                   className="text-gray-400 hover:text-[#FFB74D] transition-colors duration-200"
//                 >
//                   - {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//     <div className="mt-8 text-center text-xs text-gray-400 border-t border-gray-200 pt-6">
//       © {new Date().getFullYear()} Appondas. All rights reserved.
//     </div>
//   </footer>
// );

// export default Footer; 

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Social Media */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Image src="/logo.png" alt="Appondas Logo" width={120} height={60} className="mb-2" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming businesses with intelligent AI solutions. Your partner in the AI revolution.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Integration Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Integration Partners</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  OpenAI
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Google Cloud
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  AWS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Microsoft Azure
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Hugging Face
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  AI Chatbot
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Billing System
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Inventory Tracking
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 mb-8">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Custom AI
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  AI Integration
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Appondas. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
