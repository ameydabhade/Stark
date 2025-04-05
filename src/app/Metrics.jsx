import React, { useState, useEffect, useRef } from "react";

// Counter animation hook
const useCountUp = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger counter when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Counter animation effect
  useEffect(() => {
    if (!isInView) return;

    countRef.current = start;
    const step = (end - start) / (duration / 26);
    let animationFrame;
    const counter = () => {
      const next = countRef.current + step;
      if ((step > 0 && next < end) || (step < 0 && next > end)) {
        countRef.current = next;
        setCount(next);
        animationFrame = requestAnimationFrame(counter);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(counter);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start, isInView]);

  return { count, sectionRef };
};

const MetricItem = ({ number, suffix = "", content, delay = 0 }) => {
  const numericValue = parseInt(number.replace(/[^0-9]/g, ""));
  const { count, sectionRef } = useCountUp(numericValue, 2500);
  
  return (
    <div 
      ref={sectionRef}
      className="flex flex-col lg:flex-row items-center lg:items-start gap-4 group p-6 lg:p-8 rounded-lg hover:bg-yellow-50 transition-all duration-300"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-5xl lg:text-6xl font-bold text-yellow-700 tracking-tight">
        {Math.round(count)}{suffix}
      </h3>
      <div className="h-0.5 w-12 bg-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:hidden"></div>
      <p className="text-sm tracking-wider leading-relaxed text-center lg:text-left font-medium uppercase">
        {content}
      </p>

      {/* Visual decoration element */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full opacity-0 group-hover:opacity-10 bg-gradient-to-br from-yellow-500 to-transparent rounded-lg transition-opacity duration-300"></div>
    </div>
  );
};

const Metrics = () => {
  const metrics = [
    {
      number: "100",
      suffix: "%",
      content: "SATISFIED CLIENTS WORLDWIDE",
      delay: 0
    },
    {
      number: "250",
      suffix: "+",
      content: "EMPLOYEES WORLDWIDE",
      delay: 200
    },
    {
      number: "3469",
      suffix: "",
      content: "PROJECTS COMPLETED ",
      delay: 400
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-28 w-full bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-zinc-800 mb-12 text-center">Our Impact By The Numbers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {metrics.map((metric, index) => (
            <div key={index} className="relative">
              <MetricItem
                number={metric.number}
                suffix={metric.suffix}
                content={metric.content}
                delay={metric.delay}
              />
            </div>
          ))}
        </div>
        
        <hr className="mt-16 border-zinc-300" />
      </div>
    </section>
  );
};

export default Metrics;