import React from "react";
import Card2 from "@/components/myComp/Banner/Card2";

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
    </div>
  </section>
);

export default ServicesComponent;
