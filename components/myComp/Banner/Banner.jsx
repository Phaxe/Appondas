"use client";
import React from "react";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <section className="relative bg-gray-100 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-4">
            Tech made simple
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-yellow-600 to-orange-600">
              AI made useful
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-6">
            Price made for you
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Digital solutions tailored for small business, from websites to AI tools
          </p>

          {/* Call to Action Button */}
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-blue-500  to-orange-500 hover:from-blue-500 hover:to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Let's build together
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-10 blur-lg"></div>
    </section>
  );
};

export default Banner;
