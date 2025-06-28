import React from "react";
import Card2 from "@/components/myComp/Banner/Card2";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    image: "/Service1.png", // Replace with your image
    title: "Custom Website Development",
    description: "Beautifut tost websites tailored to your brend. We design from scratch and optimize existing sites.",
  },
  {
    image: "/Service2.png", // Replace with your image
    title: "AI-Powered Tools for All Businesses",
    description: "We design smart bots and automation to hargle bookings, support, a admin tasks.",
  },
  {
    image: "/Service3.png", // Replace with your image
    title: "Al Integration & Data Solutions",
    description: "We connect your data to powerfut Al platforms ii like Microsoft Coplior, Openni  and Google Al- without breaking yor bdget.",
  },
];

const ServicesComponent = () => (
  <section className="py-12 bg-gray-100">
    <h1 className="text-center text-4xl font-bold text-[#0077B3] mb-5 ">Services</h1>
    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 text-base">
      Discover our range of digital solutions, from custom websites to powerful AI tools, designed to help your business grow and succeed.
    </p>
    <div className="container mx-auto px-4">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => ( 
          <div key={idx} className="flex flex-col gap-8 items-center">

            <Card2
              image={service.image}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/services">
          <Button size="lg" className="hover:bg-[#0077B3] border-white border-2 bg-[#FFB74D] cursor-pointer text-white font-medium px-8 py-4  rounded-md transition-colors duration-200">
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default ServicesComponent;
