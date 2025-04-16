"use client";
import React, { Suspense, lazy } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Awards from "./Awards";

// Lazy load components that are below the fold
const About = lazy(() => import("./About"));
const Metrics = lazy(() => import("./Metrics"));
const Services = lazy(() => import("./Services"));
const Footer = lazy(() => import("./Footer"));

// Loading fallbacks
const LoadingFallback = () => (
  <div className="w-full h-64 flex items-center justify-center">
    <div className="h-8 w-8 rounded-full border-4 border-yellow-700 border-t-transparent animate-spin"></div>
  </div>
);

function Desktop() {
  return (
    <main className="overflow-hidden ">
      <Header />
      <Hero />

      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Metrics />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </main>
  );
}

export default Desktop;