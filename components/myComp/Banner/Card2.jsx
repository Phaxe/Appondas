import React from "react";
import Image from "next/image";

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform hover:scale-105 duration-200 w-full max-w-xs mx-auto min-h-[420px] sm:min-h-[480px] border border-gray-100">
      {image && (
        <div className="flex items-center justify-center w-full h-48 sm:h-56 md:h-64 bg-gray-50">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-center bg-gradient-to-r from-blue-700 via-yellow-600 to-orange-600 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base text-center flex-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
