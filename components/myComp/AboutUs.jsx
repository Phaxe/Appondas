import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AboutUs = () => (
  <section className="relative w-full min-h-[400px] flex items-center justify-center py-16 overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/wavebanner.png"
        alt="About Appondas"
        fill
        className="object-cover object-center w-full h-full"
        priority
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
    {/* Content */}
    <div className="relative z-10 max-w-2xl mx-auto text-center text-white px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">About Appondas</h2>
      <p className="mb-2 text-base sm:text-lg">
        Appondas is dedicated to making technology accessible for everyone.
      </p>
      <p className="mb-2 text-base sm:text-lg">
        We specialize in digital solutions for small businesses.
      </p>
      <p className="mb-2 text-base sm:text-lg">
        From custom websites to powerful AI tools, we help you grow.
      </p>
      <p className="mb-6 text-base sm:text-lg">
        Our mission is to simplify tech and make AI truly useful for you.
      </p>
      <Button
              className="hover:bg-[#0077B3] border-white border-2 bg-[#FFB74D] cursor-pointer text-white font-medium px-8 py-4  rounded-md transition-colors duration-200"
              size="lg"
            >
              Learn More
            </Button>
    </div>
  </section>
);

export default AboutUs;
