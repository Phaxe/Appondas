"use client"

import { useEffect, useRef, useState } from "react"

const companies = [
  { name: "Microsoft", logo: "/copilot.png?height=60&width=120" },
  { name: "Google", logo: "/google.png?height=60&width=120" },
  { name: "OpenAI", logo: "/chatgpt.png?height=60&width=120" },
  { name: "Salesforce", logo: "/sales.png?height=60&width=120" },
  { name: "SAP", logo: "/sap.png?height=60&width=120" },
]

export function CompaniesSection() {
  const [offset, setOffset] = useState(0)
  const containerRef = useRef(null)
  const logoWidth = 160 // px, adjust as needed for your logo size + margin
  const totalLogos = companies.length

  // Animation state (slower speed)
  useEffect(() => {
    let animationFrame;
    let localOffset = offset;
    const speed = 0.2; // px per frame (much slower)
    const animate = () => {
      localOffset += speed;
      if (localOffset >= logoWidth * totalLogos) {
        localOffset = 0;
      }
      setOffset(localOffset);
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(-${localOffset}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
    // eslint-disable-next-line
  }, []);

  // Calculate which logo is in the center of the container
  const getCenterLogoIndex = () => {
    if (!containerRef.current) return 0;
    const containerWidth = containerRef.current.parentElement.offsetWidth;
    const centerPosition = offset + containerWidth / 2;
    // Find the logo whose center is closest to the container center
    let minDist = Infinity;
    let centerIdx = 0;
    for (let i = 0; i < totalLogos * 2; i++) {
      const logoCenter = i * logoWidth + logoWidth / 2;
      const dist = Math.abs(logoCenter - centerPosition);
      if (dist < minDist) {
        minDist = dist;
        centerIdx = i % totalLogos;
      }
    }
    return centerIdx;
  };

  const centerLogoIndex = getCenterLogoIndex();

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of companies that trust Appondas to power their AI transformation and drive business growth.
          </p>
        </div>

        <div className="relative overflow-hidden flex justify-center">
          <div
            ref={containerRef}
            className="flex"
            style={{ width: `${logoWidth * companies.length * 2}px` }}
          >
            {[...companies, ...companies].map((company, index) => {
              const realIndex = index % companies.length;
              const isCenter = realIndex === centerLogoIndex;
              return (
                <div
                  key={index}
                  className={`flex-shrink-0 mx-8 transition-all duration-300 ${isCenter ? 'grayscale-0 opacity-100 scale-110 z-10' : 'grayscale opacity-60'}`}
                  style={{ width: logoWidth - 32 }} // 32px for mx-8
                >
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    className="h-12 w-auto transition-all duration-300"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
