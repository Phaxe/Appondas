import React from "react";
import Image from "next/image";

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-gradient-to-br from-blue-700 via-white to-orange-600 rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform hover:scale-105 duration-200 w-full max-w-xs mx-auto min-h-[420px] sm:min-h-[480px]">
      {image && (
        <div className="flex items-center justify-center w-full h-48 sm:h-56 md:h-64 bg-white/30">
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
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
          {title}
        </h3>
        <p className="text-gray-600 text-base text-center flex-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
