import React from "react";

const ServiceCard = ({ icon, title, description }) => (
  <article className="flex-1 shrink p-10 border border-solid basis-0 border-[color:var(--Primary-100,#E6D8CC)] min-w-60 max-md:px-5">
    <img src={icon} alt={title} className="object-contain w-12 aspect-square" />
    <div className="mt-20 w-full max-md:mt-10">
      <h3 className="text-4xl leading-10 text-zinc-800">{title}</h3>
      <p className="mt-4 text-lg font-light leading-8 text-neutral-700">
        {description}
      </p>
    </div>
  </article>
);

const Services = () => {
  return (
    <section className="overflow-hidden p-28 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[800px]">
        <div className="flex gap-4 items-center self-start text-sm font-semibold tracking-widest leading-none text-yellow-700">
          <hr className="shrink-0 self-stretch my-auto w-16 h-px bg-yellow-700 border border-yellow-700 border-solid" />
          <span className="self-stretch my-auto">OUR SERVICES</span>
        </div>
        <h2 className="mt-6 text-6xl italic tracking-tighter leading-[72px] text-zinc-800 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
          We provide the{" "}
          <span style={{ fontStyle: "italic" }}>best solutions</span> for your
          dream home
        </h2>
      </div>
      <div className="flex flex-wrap gap-8 mt-20 max-md:mt-10 max-md:max-w-full">
        <ServiceCard
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/06d1649aed32b18dbefd5b057539cb38c9e29f8a?placeholderIfAbsent=true"
          title="Architectural & Interior design"
          description="Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."
        />
        <ServiceCard
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/09c813caf06b5160cfc9c106fee426f405389f42?placeholderIfAbsent=true"
          title="Building Renovation"
          description="Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."
        />
        <ServiceCard
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b98105ead7fc8769a3d792b73af28a01fc2950d6?placeholderIfAbsent=true"
          title="Construciton Management"
          description="Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies."
        />
      </div>
    </section>
  );
};

export default Services;
