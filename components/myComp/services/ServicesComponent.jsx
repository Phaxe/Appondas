import React from "react";
import Card2 from "@/components/myComp/Banner/Card2";

const services = [
  {
    image: "/Service1.png", // Replace with your image
    title: "Service One",
    description: "Description for service one goes here.",
  },
  {
    image: "/Service2.png", // Replace with your image
    title: "Service Two",
    description: "Description for service two goes here.",
  },
  {
    image: "/Service3.png", // Replace with your image
    title: "Service Three",
    description: "Description for service three goes here.",
  },
];

const ServicesComponent = () => (
  <section className="py-12 bg-white">
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
