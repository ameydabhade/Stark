import React from "react";

const Footer = () => {
  // Social media links data
  const socialLinks = [
    {
      name: "Instagram",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      url: "#",
    },
    {
      name: "Twitter",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      ),
      url: "#",
    },
    {
      name: "Facebook",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
      url: "#",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      url: "#",
    },
  ];

  return (
    <footer className="bg-white px-4 md:px-8 lg:px-16 xl:px-28 pt-12 pb-8 w-full">
      <div className="container mx-auto max-w-7xl">
        <hr className="border-zinc-200" />
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Left Column - Call to Action */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-zinc-800">
              Kick-start your dream home with us
            </h2>
            <a
              href="#contact"
              className="inline-block mt-4 text-2xl md:text-3xl lg:text-4xl italic text-yellow-700 hover:text-yellow-800 transition-colors duration-200 border-b-2 border-yellow-700 pb-1"
            >
              Send us a hi
            </a>
          </div>
          
          {/* Right Column - Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address */}
            <address className="not-italic">
              <h3 className="text-xl md:text-2xl font-medium text-zinc-800 mb-3">Brooklyn, New York</h3>
              <p className="text-base font-light leading-relaxed text-zinc-700">
                962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United States
              </p>
            </address>
            
            <div className="space-y-8">
              {/* Email */}
              <div>
                <p className="text-sm font-light text-zinc-700 mb-2">
                  Email us at
                </p>
                <a
                  href="mailto:starkinfracon@gmail.com"
                  className="text-xl md:text-2xl text-yellow-700 hover:text-yellow-800 transition-colors duration-200"
                >
                  starkinfracon@gmail.com
                </a>
              </div>
              
              {/* Phone */}
              <div>
                <p className="text-sm font-light text-zinc-700 mb-2">
                  If you're in a hurry, quick call for us
                </p>
                <a
                  href="tel:+8(663)125-08-59"
                  className="text-xl md:text-2xl text-yellow-700 hover:text-yellow-800 transition-colors duration-200 flex items-center"
                >
                  +8 (663) 125-08-59
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="border-zinc-200 mt-16" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-6">
          {/* Copyright */}
          <p className="text-base font-light text-zinc-700">
            © {new Date().getFullYear()} Stark Infracon. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold tracking-widest text-zinc-700">CONNECT</span>
              <hr className="w-12 border-zinc-500" />
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={`Follow us on ${social.name}`}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-100 text-zinc-700 hover:bg-yellow-700 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;