"use client"
import React from "react";

const placeholderCompanies = [
  "Company A",
  "Company B",
  "Company C",
  "Company D",
  "Company E",
  "Company F",
  "Company G",
  "Company H",
];

const Companies = () => {
  return (
    <div className="w-full overflow-hidden py-8 bg-white">
      <div className="relative w-full">
        <div className="flex items-center whitespace-nowrap animate-company-slider">
          {placeholderCompanies.concat(placeholderCompanies).map((name, idx) => (
            <div key={idx} className="mx-8 inline-block">
              <div className="flex items-center justify-center w-[100px] h-[60px] bg-gray-100 border border-gray-300 rounded text-gray-500 text-lg font-semibold">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes company-slider {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-company-slider {
          animation: company-slider 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Companies;
