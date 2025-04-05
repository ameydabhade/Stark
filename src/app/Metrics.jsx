import React from "react";

const MetricItem = ({ number, content }) => (
  <div className="flex flex-1 shrink gap-4 items-center whitespace-nowrap basis-0 min-w-60">
    <h3 className="self-stretch my-auto text-6xl tracking-tighter leading-tight max-md:text-4xl">
      {number}
    </h3>
    <p className="flex-1 shrink gap-2.5 self-stretch pt-2 my-auto text-sm tracking-wider leading-5 basis-0">
      {content}
    </p>
  </div>
);

const Metrics = () => {
  return (
    <section className="overflow-hidden px-28 pb-12 w-full text-zinc-800 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
        <MetricItem
          number="100%"
          content={
            <>
              SATISFITATION
              <br />
              CLIENTS
            </>
          }
        />
        <MetricItem
          number="250"
          content={
            <>
              EMPLOYEES ON
              <br />
              WORLDWIDE
            </>
          }
        />
        <MetricItem
          number="3469"
          content={
            <>
              PROJECTS COMPLETED
              <br />
              ON 60 COUNTRIES
            </>
          }
        />
      </div>
      <hr className="mt-20 max-w-full border border-solid bg-zinc-300 border-zinc-300 min-h-px w-[1216px] max-md:mt-10" />
    </section>
  );
};

export default Metrics;
