import React from "react";

const About = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-16 py-32 w-full text-lg font-light leading-8 text-neutral-700 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-8 items-center mb-0 max-md:mb-2.5 max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto min-w-60 w-[592px] max-md:max-w-full">
          <div className="flex gap-4 items-center self-start text-sm font-semibold tracking-widest leading-none text-yellow-700">
            <hr className="shrink-0 self-stretch my-auto w-16 h-px bg-yellow-700 border border-yellow-700 border-solid" />
            <span className="self-stretch my-auto">ABOUT US</span>
          </div>
          <h2 className="mt-6 text-6xl tracking-tighter leading-[72px] text-zinc-800 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            We help to bring your{" "}
            <span style={{ color: "rgba(44,44,44,1)" }}>dream home</span> to
            reality
          </h2>
          <p className="mt-6 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
            fringilla dui amet faucibus nam. Erat id laoreet posuere etiam
            morbi.
          </p>
          <p className="mt-6 max-md:max-w-full">
            Tempor dolor elementum tellus non ipsum faucibus. Justo, magna
            mauris posuere auctor justo. Habitant proin aliquet volutpat leo
            ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc.
            Faucibus sit odio bibendum lobortis diam.
          </p>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dd13e3c082f9bd6d7eab989c4848baf1dcdc788?placeholderIfAbsent=strue"
          alt="About us"
          className="object-contain self-stretch my-auto aspect-[1.06] min-w-60 w-[592px] max-md:max-w-full"
        />
      </div>
    </section>
  );
};

export default About;
