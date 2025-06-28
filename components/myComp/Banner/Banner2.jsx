"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-r from-[#FF6F20] via-[#006192] to-[#FFB74D] ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 text-white">
            Tech made simple
            <br />
            AI made useful
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6">
            Price made for you
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            Digital solutions tailored for small business, from websites to AI tools
          </p>

          {/* Call to Action Button */}
          <Button 
            size="lg" 
            className=" text-base sm:text-lg cursor-pointer px-8 py-6 h-auto bg-gradient-to-r from-blue-500 border-2 to-orange-500 hover:from-blue-500 hover:to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Let's build together
            <Rocket className="w-5 h-5" />
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
