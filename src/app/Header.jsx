import React from "react";

const Header = () => {
  return (
    <header className="flex overflow-hidden flex-col justify-center items-center pt-5 w-full">
      <nav className="flex flex-wrap gap-5 justify-between w-full text-sm font-medium leading-6 max-w-[1216px] text-neutral-700 max-md:max-w-full">
        <img
          src="/BSL3Cropped.svg"
          alt="Stark infracon"
          className="object-contain shrink-0  w-[180px]"
        />
        <div className="flex gap-4 items-center max-md:max-w-full">
          <a
            href="#about"
            className="gap-2.5 self-stretch px-4 my-auto whitespace-nowrap"
          >
            About
          </a>
          <a
            href="#services"
            className="gap-2.5 self-stretch px-4 my-auto whitespace-nowrap"
          >
            Services
          </a>
          <a href="#works" className="gap-2.5 self-stretch px-4 my-auto">
            Our Work
          </a>
          <button className="flex gap-1 justify-center items-center self-stretch px-5 py-3 my-auto text-xs font-semibold leading-none text-center text-white bg-yellow-700">
            <span className="self-stretch my-auto">CONTACT US</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9370b1dcad5e0bd654cb1f489e9ed8edbb2fd8a4?placeholderIfAbsent=true"
              alt="Contact icon"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
