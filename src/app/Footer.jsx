import React from "react";

const Footer = () => {
  return (
    <footer className="overflow-hidden px-28 pt-2 pb-20 w-full max-md:px-5 max-md:max-w-full">
      <hr className="object-contain max-w-full aspect-[1000] stroke-[1px] stroke-zinc-300 w-[1216px]" />
      <div className="flex flex-wrap gap-8 items-start mt-20 max-w-full w-[1216px] max-md:mt-10">
        <div className="text-5xl min-w-60 w-[592px] max-md:max-w-full max-md:text-4xl">
          <h2 className="leading-[60px] text-zinc-800 max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
            Kick-start your dream home with us
          </h2>
          <a
            href="#contact"
            className="mt-4 italic leading-none text-yellow-700 underline underline-offset-auto max-md:max-w-full max-md:text-4xl"
          >
            Send us a hi
          </a>
        </div>
        <div className="flex flex-col flex-1 shrink items-start pl-80 basis-0 min-w-60 max-md:max-w-full">
          <address className="max-w-full text-zinc-800 w-[280px] not-italic">
            <h3 className="text-2xl leading-none">Brooklyn, New York</h3>
            <p className="mt-2 text-sm font-light leading-6">
              962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United
              State.
            </p>
          </address>
          <div className="mt-8 max-w-full w-[280px]">
            <p className="text-sm font-light leading-6 text-zinc-800">
              Email us at
            </p>
            <a
              href="mailto:starkinfracon@gmail.com"
              className="mt-2 text-2xl leading-none text-yellow-700"
            >
              starkinfracon@gmail.com
            </a>
          </div>
          <div className="mt-8 max-w-full w-[280px]">
            <p className="text-sm font-light leading-6 text-zinc-800">
              If you're hurry, quick call for us
            </p>
            <a
              href="tel:+8(663)125-08-59"
              className="mt-2 text-2xl leading-none text-yellow-700"
            >
              +8(663)125-08-59
            </a>
          </div>
        </div>
      </div>
      <hr className="object-contain mt-20 max-w-full aspect-[1000] stroke-[1px] stroke-zinc-300 w-[1216px] max-md:mt-10" />
      <div className="flex flex-wrap gap-8 justify-between items-center mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <p className="self-stretch my-auto text-base font-light leading-6 text-neutral-700 w-[592px] max-md:max-w-full">
          © 2025 Stark Infracon 
      
        </p>
        <div className="flex flex-wrap gap-6 items-center self-stretch my-auto text-sm font-semibold tracking-widest leading-none whitespace-nowrap min-w-60 text-neutral-700 w-[592px] max-md:max-w-full">
          <div className="flex gap-4 items-center self-stretch my-auto">
            <span className="self-stretch my-auto">CONNECT</span>
            <hr className="shrink-0 self-stretch my-auto w-16 h-px border border-solid bg-neutral-700 border-neutral-700" />
          </div>
          <a href="#" aria-label="Social link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1499209ce738a89e1b1c7bf0e4ee7631b365be8?placeholderIfAbsent=true"
              alt="Social icon"
              className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square rounded-[100px]"
            />
          </a>
          <a href="#" aria-label="Social link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d92dbafa437128fa7c9f0dff4f10fe42c729471a?placeholderIfAbsent=true"
              alt="Social icon"
              className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square rounded-[100px]"
            />
          </a>
          <a href="#" aria-label="Social link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5887a1c1ea6a748dffdf00b0b1eaf9831fb2c025?placeholderIfAbsent=true"
              alt="Social icon"
              className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square rounded-[100px]"
            />
          </a>
          <a href="#" aria-label="Social link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/abcf8378ad950264e197df454d28d7f3b49c1046?placeholderIfAbsent=true"
              alt="Social icon"
              className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square rounded-[100px]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
