"use client"
import React from "react";
import Image from "next/image";

const companyLogos = [
  { src: "/google.png", alt: "Google" },
  { src: "/chatgpt.png", alt: "OpenAI" },
  { src: "/copilot.png", alt: "Microsoft Loop" },
  { src: "/sales.png", alt: "Salesforce" },
  { src: "/sap.png", alt: "SAP" },
];

const Companies = () => {
  return (
    <div className="w-full overflow-hidden py-8 bg-gray-100 shadow">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0077B3] mb-8">Integration Partners</h2>
      <div className="relative w-full">
        <div className="flex items-center whitespace-nowrap animate-company-slider w-max">
          {companyLogos.concat(companyLogos).map((logo, idx) => (
            <div key={idx} className="mx-8 inline-block">
              <div className="flex items-center justify-center w-[100px] h-[60px]  ">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={80}
                  height={48}
                  className="object-contain w-[80px] h-[48px] md:w-[100px] md:h-[60px]"
                  priority={idx < companyLogos.length}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-company-slider {
          animation: company-slider 25s linear infinite;
          min-width: 1640px;
        }
        @keyframes company-slider {
          0% {
            transform: translateX(820px);
          }
          100% {
            transform: translateX(-820px);
          }
        }
      `}</style>
    </div>
  );
};

export default Companies;
