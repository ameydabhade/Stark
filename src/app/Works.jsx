import React from "react";

const ProjectCard = ({ image, title, description }) => (
  <article className="mt-24 max-w-full w-[592px] max-md:mt-10">
    <img
      src={image}
      alt={title}
      className="object-contain w-full aspect-[1.33]"
    />
    <div className="mt-6 w-full max-md:max-w-full">
      <h3 className="text-4xl leading-none text-zinc-800 max-md:max-w-full">
        {title}
      </h3>
      <p className="mt-4 text-lg font-light leading-8 text-neutral-700 max-md:max-w-full">
        {description}
      </p>
    </div>
  </article>
);

const Works = () => {
  return (
    <section className="flex overflow-hidden flex-wrap gap-8 items-start p-28 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col min-w-60 w-[592px] max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[592px] max-md:max-w-full">
          <div className="flex gap-4 items-center self-start text-sm font-semibold tracking-widest leading-none text-yellow-700">
            <hr className="shrink-0 self-stretch my-auto w-16 h-px bg-yellow-700 border border-yellow-700 border-solid" />
            <span className="self-stretch my-auto">RECENT WORKS</span>
          </div>
          <h2 className="mt-6 text-6xl tracking-tighter leading-[72px] text-zinc-800 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            Some of{" "}
            <span style={{ color: "rgba(44,44,44,1)" }}>our crafts</span> made
            with love
          </h2>
        </div>
        <ProjectCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/ab3d005c7013165f472c95cb620dcf60d91c0384?placeholderIfAbsent=true"
          title="Villa Furnishing & Interior"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi."
        />
        <button className="flex gap-1 items-center self-start px-6 py-4 mt-24 text-sm font-semibold leading-6 text-center text-white bg-yellow-700 max-md:px-5 max-md:mt-10">
          <span className="self-stretch my-auto">CONTACT US</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e4f6d94be8c41affe48b20e9d9ca4d9e0faae7a?placeholderIfAbsent=true"
            alt="Contact icon"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
        </button>
      </div>
      <div className="px-14 min-w-60 w-[592px] max-md:px-5 max-md:max-w-full">
        <ProjectCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/417137dae876fddde1cf4ade0b744574e8054093?placeholderIfAbsent=true"
          title="Luxury Hotel Renovation"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam."
        />
        <ProjectCard
          image="https://cdn.builder.io/api/v1/image/assets/TEMP/4717264f670b834bd79099dcc25a06bb0c30fe05?placeholderIfAbsent=true"
          title="Residence Swimming Pool"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam."
        />
      </div>
    </section>
  );
};

export default Works;
