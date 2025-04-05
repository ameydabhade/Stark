import React from "react";

const Awards = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center px-28 py-6 w-full text-sm leading-6 bg-zinc-800 text-zinc-300 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 items-center w-full max-w-[1216px] max-md:max-w-full">
        <hr className="shrink-0 self-stretch my-auto w-16 h-px bg-white border border-white border-solid opacity-50" />
        <div className="flex flex-wrap gap-10 items-start self-stretch my-auto min-w-60 max-md:max-w-full">
          <div className="flex gap-3 items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/174f9e2e1ca57ea37ebe435b7cb1e448783b1102?placeholderIfAbsent=true"
              alt="German Design Award"
              className="object-contain shrink-0 self-stretch my-auto w-20 aspect-square"
            />
            <p className="self-stretch my-auto">
              German Design Award
              <br />
              2021
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5045b3f6b4224407a991e0f6964e89bd5c96a5ce?placeholderIfAbsent=true"
              alt="Gold A' Design Award"
              className="object-contain shrink-0 self-stretch my-auto w-20 aspect-square"
            />
            <p className="self-stretch my-auto">
              Gold A' Design Award
              <br />
              2021
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3309ca37b2465191373520096eacc470db4d452e?placeholderIfAbsent=true"
              alt="IF Design Award"
              className="object-contain shrink-0 self-stretch my-auto w-20 aspect-square"
            />
            <p className="self-stretch my-auto">
              IF Design Award
              <br />
              2020
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8bdfab10ccb6b213a49de4e3ff0f3b93630ed61?placeholderIfAbsent=true"
              alt="Good Design Award"
              className="object-contain shrink-0 self-stretch my-auto w-20 aspect-square"
            />
            <p className="self-stretch my-auto">
              Good Design Award
              <br />
              2019
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
