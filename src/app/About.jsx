import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-16 w-full bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Content Column */}
          <div className="flex flex-col w-full md:w-1/2 order-2 md:order-1">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <hr className="w-12 h-0.5 bg-yellow-700 border-0" />
              <span className="text-yellow-700 font-semibold text-sm tracking-widest">ABOUT US</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight tracking-tight text-zinc-800 mb-6">
              We help to bring your <span className="text-zinc-900">dream home</span> to reality
            </h2>
            
            {/* Description */}
            <div className="space-y-6 text-lg text-neutral-700 font-light leading-relaxed">
              <p>
              At Stark Infracon, we specialize in transforming architectural ideas into purposeful, functional, and inspiring spaces. Our multidisciplinary team is passionate about design excellence and committed to delivering innovation and quality across all types of projects.

              </p>
              <p>
        
With over 15 years of experience, we’ve built a reputation for reliability, creativity, and uncompromising craftsmanship—from consultation to execution.
              </p>
              
              {/* Stats or Additional Info */}
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <p className="text-4xl font-bold text-yellow-700">250+</p>
                  <p className="text-zinc-600">Projects Completed</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-yellow-700">15+</p>
                  <p className="text-zinc-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Column */}
          <div className="w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24  -z-10"></div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd13e3c082f9bd6d7eab989c4848baf1dcdc788?placeholderIfAbsent=true"
                alt="Elegant modern home interior designed by Stark Infracon"
                className="w-full h-auto object-cover rounded-lg "
              />
              <div className="absolute -bottom-6 -right-6 w-36 h-36  -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;