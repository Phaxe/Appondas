import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const OurWork = () => {
  return (
    <section className="py-12 md:py-24 bg-white ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#FF6F20] mb-12 md:mb-20">
          Our Work
        </h2>
        <div className="space-y-24">

          {/* First Work Item */}
          <div className="relative md:flex md:items-center w-full max-w-5xl mx-auto">
            <div className="relative md:absolute md:top-1/2 md:-translate-y-1/2 left-0 z-0 w-full md:w-[450px] h-[350px] group mb-8 md:mb-0">
              <Image
                src="/gem.jpeg"
                alt="Reservation Chat Bot"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative z-10 md:ml-auto w-full md:w-3/5 bg-[#e1e8f0] p-8 rounded-lg shadow-lg text-[#0077B3]">
              <h3 className="text-2xl font-bold mb-4">Reservation Chat Bot</h3>
              <p className="mb-4">
                A local hair salon in Prague receives hundreds of daily messages on Instagram and TikTok. Missed DMs mean lost bookings and lost revenue.
              </p>
              <p>
                We build AI-powered chatbots that integrate with social media, handle customer inquiries instantly, book appointments automatically, and alert the owner if a conversation needs personal attention so no customer gets missed.
              </p>
            </div>
          </div>

          {/* Second Work Item */}
          <div className="relative md:flex md:items-center w-full max-w-5xl mx-auto">
            <div className="relative md:absolute md:top-1/2 md:-translate-y-1/2 right-0 z-0 w-full md:w-[450px] h-[350px] group mb-8 md:mb-0">
              <Image
                src="/dancing.jpeg"
                alt="AI Billing Tracking Solution"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative z-10 w-full md:w-3/5 bg-[#FFFDE7] text-[#B59B00] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">AI Billing Tracking Solution</h3>
              <p className="mb-4">
                A children's dance studio in Spain struggled to track which parents missed monthly membership payments. The owner had no time to follow up, and many parents simply forgot to pay.
              </p>
              <p>
                We built an AI-powered solution that automatically monitors payments, sends friendly reminders to parents before each due date, and alerts the owner if payments are still pending, reducing missed payments and saving hours of manual work every month.
              </p>
            </div>
          </div>

          {/* Third Work Item */}
          <div className="relative md:flex md:items-center w-full max-w-5xl mx-auto">
            <div className="relative md:absolute md:top-1/2 md:-translate-y-1/2 left-0 z-0 w-full md:w-[450px] h-[350px] group mb-8 md:mb-0">
              <Image
                src="/super.jpeg"
                alt="AI Inventory Management System"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative z-10 md:ml-auto w-full md:w-3/5 bg-[#FFF3E0] text-[#b14d17] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">AI Inventory Management System using simple Camera</h3>
              <p className="mb-4">
                A local supermarket struggled to track inventory and keep shelves full. Manual checks were time-consuming and often missed fast-selling items.
              </p>
              <p>
                We built an AI-powered image processing system that monitors shelves, generates refill lists, tracks stock levels, and analyzes sales trends over the year, helping the owner prevent out-of-stock issues and better predict demand.
              </p>
            </div>
          </div>

        </div>
         <div className="text-center mt-16 md:mt-24 ">

   
            <Button
              className="bg-[#0077B3] shadow-xl hover:border-[#0077B3] hover:text-[#0077B3]  border-2 border-[#FFB74D]  hover:bg-[#FFB74D] cursor-pointer text-white font-medium px-8 py-5  rounded-md transition-colors duration-200"
              size="lg"
            >
                 Let's build together
            </Button>
          </div>
        </div>
      </section>
  );
};


export default OurWork;
