import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col mt-24 w-full text-center  max-md:mt-10 max-md:max-w-full justify-center self-center flex flex-col">
      <h1 className="text-7xl italic font-medium tracking-tighter leading-none text-zinc-800 max-md:max-w-full max-md:text-4xl">
        <span style={{ color: "rgba(44,44,44,1)" }}>Make </span>
        <span style={{ fontStyle: "italic", color: "rgba(44,44,44,1)" }}>
          your home
        </span>
        <span style={{ color: "rgba(44,44,44,1)" }}> an ode to joy</span>
      </h1>
      <p className="self-center mt-6 text-xl font-light leading-8 text-neutral-700 w-[800px] max-md:max-w-full">
        We turn your empty house to a lovely home, making the compact spaces
        with sapce saving furnitures. Making the unique tastes of yours into
        reality!
      </p>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cea47f5dbbd3e8c5063f2e11bf123ef8c60ef7e?placeholderIfAbsent=true"
        alt="Hero image"
        className="object-contain self-stretch mt-4 w-full aspect-[2.04] max-md:max-w-full"
      />
    </section>
  );
};

export default Hero;
