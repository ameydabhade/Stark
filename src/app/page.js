"use client";
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Awards from "./Awards";
import About from "./About";
import Metrics from "./Metrics";
import Services from "./Services";
import Works from "./Works";
import Footer from "./Footer";

function Desktop() {
  return (
    <main className="overflow-hidden ">
      <Header />
      <Hero />

      <About />
      <Metrics />
      <Services />
      {/* <Works /> */}
      <Footer />
    </main>
  );
}

export default Desktop;