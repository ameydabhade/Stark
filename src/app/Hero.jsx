import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gray-50 mt-20 pt-20 pb-0">
      {/* Background design element */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-yellow-700/5"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-yellow-700/5"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Text content with animation */}
          <div 
            className={`max-w-4xl text-center transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight text-zinc-800 mb-6">
              <span className="italic">Transform your</span>{" "}
              <span className="text-yellow-700">Space</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl font-light leading-relaxed text-neutral-700 max-w-3xl mx-auto">
              We transform empty houses into extraordinary homes, crafting spaces that reflect your unique personality and lifestyle. With innovative design and meticulous attention to detail, we bring your vision to life.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-yellow-700 text-white font-medium rounded-sm hover:bg-yellow-800 transition-colors duration-200 shadow-md">
                Explore Our Services
              </button>
              <button className="px-8 py-4 bg-white text-yellow-700 font-medium rounded-sm border border-yellow-700 hover:bg-yellow-50 transition-colors duration-200">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Hero image with animation */}
          <div 
            className={`w-full mt-12 transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 h-32 w-8 bg-yellow-700/20 rounded-full blur-md"></div>
              <div className="absolute -right-4 top-1/3 -translate-y-1/2 h-24 w-8 bg-yellow-700/20 rounded-full blur-md"></div>
              
              {/* Main image */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cea47f5dbbd3e8c5063f2e11bf123ef8c60ef7e?placeholderIfAbsent=true"
                alt="Beautiful modern home interior showcasing elegant design solutions"
                className="w-full h-auto object-cover rounded-t-lg shadow-2xl"
              />
              
              {/* Floating stats boxes */}
              <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <p className="text-3xl font-bold text-yellow-700">98%</p>
                <p className="text-sm text-zinc-700">Client Satisfaction</p>
              </div>
              
              <div className="absolute top-8 right-8 md:top-16 md:right-16 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <p className="text-3xl font-bold text-yellow-700">15+</p>
                <p className="text-sm text-zinc-700">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;