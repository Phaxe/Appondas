import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const OurWork = () => {
  return (
    <section className="py-12 md:py-24 bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12 md:mb-20">
          Our Work
        </h2>
        <div className="space-y-16 md:space-y-24">
          {/* First Work Item - Image Left */}
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div className="relative z-10 md:-ml-50 bg-[#eff6ff] p-8 rounded-lg shadow-lg text-[#1e3a8a]">
              <h3 className="text-2xl font-bold mb-4">Reservation Chat Bot</h3>
              <p className="mb-4">
                A local hair salon in Prague receives hundreds of daily messages on Instagram and TikTok. Missed DMs mean lost bookings and lost revenue.
              </p>
              <p>
                We build AI-powered chatbots that integrate with social media, handle customer inquiries instantly, book appointments automatically, and alert the owner if a conversation needs personal attention so no customer gets missed.
              </p>
            </div>
            <div className="relative z-0 group md:order-first">
              <Image
                src="/gem.jpeg" // Replace with your image path
                alt="Reservation Chat Bot"
                width={400}
                height={350}
                className="rounded-lg ml-20 shadow-xl transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Second Work Item - Image Right */}
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div className="relative z-10 md:-mr-20 bg-[#fff7ed] text-[#78350f] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">AI Billing Tracking Solution</h3>
              <p className="mb-4">
                A children's dance studio in Spain struggled to track which parents missed monthly membership payments. The owner had no time to follow up, and many parents simply forgot to pay.
              </p>
              <p>
                We built an AI-powered solution that automatically monitors payments, sends friendly reminders to parents before each due date, and alerts the owner if payments are still pending, reducing missed payments and saving hours of manual work every month.
              </p>
            </div>
            <div className="relative z-0 group">
              <Image
                src="/dancing.jpeg" // Replace with your image path
                alt="AI Billing Tracking Solution"
                width={400}
                height={350}
                className="rounded-lg ml-10 shadow-xl transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          {/* Third Work Item - Image Left */}
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div className="relative z-10 md:-ml-16 bg-[#fef2f2] text-[#7f1d1d] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">AI Inventory Management System using simple Camera</h3>
              <p className="mb-4">
              A local supermarket struggled to track inventory and keep shelves full.
              </p>
              <p>
               Manual checks were time-consuming and often missed fast-selling items.



We built an AI-powered image processing system that monitors shelves, generates refill lists, tracks stock levels, and analyzes sales trends over the year, helping the owner prevent out-of-stock issues and better predict demand.
              </p>
            </div>
            <div className="relative z-0 group md:order-first">
              <Image
                src="/super.jpeg" // Replace with your image path
                alt="Automated Content Creation"
                width={400}
                height={350}
                className="rounded-lg  ml-50 shadow-xl transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

        </div>
        <div className="text-center mt-16 md:mt-24 ">
          <Button className="hover:bg-[#2563eb] bg-[#f59e0b] text-white font-bold px-10 py-5 text-xl rounded-lg transition-colors duration-200">Let's build together</Button>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
