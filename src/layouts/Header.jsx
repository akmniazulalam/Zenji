import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="relative h-10 overflow-hidden bg-span text-white z-40">
        <div className="marquee-inner flex h-full w-max items-center whitespace-nowrap">
          <span className="px-4 text-[10px] uppercase tracking-widest text-white font-jetbrains md:text-[11px]">
            NEW DROP: BLUE FLAME TEE NOW AVAILABLE • LIMITED STOCK •
            THE_ORIGIN_DROP COLLECTION LIVE • FREE SHIPPING AUSTRALIA-WIDE ON
            ORDERS OVER A$100 •
          </span>
          <span className="px-4 text-[10px] uppercase tracking-widest text-white font-jetbrains md:text-[11px]">
            NEW DROP: BLUE FLAME TEE NOW AVAILABLE • LIMITED STOCK •
            THE_ORIGIN_DROP COLLECTION LIVE • FREE SHIPPING AUSTRALIA-WIDE ON
            ORDERS OVER A$100 •
          </span>
        </div>
      </div>
      <nav className="sticky top-0 z-40 w-full bg-transparent [backdrop-filter:none] border-b-0 transition-all duration-300 ease-in-out">
        <div className="mx-auto flex w-full max-w-container-max items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
          <Link
            to={"/"}
            className="flex min-h-11 items-center gap-4 hover:scale-[1.05] transition-all duration-300 ease-in-out cursor-none">
            <span className="inline-block select-none uppercase leading-none text-white font-anton text-4xl tracking-[-0.02em] md:text-2xl xl:text-4xl">
              ZENJI
            </span>
          </Link>
          <div className="hidden items-center gap-4 md:flex xl:gap-10">
            <Link
              to={"/drop"}
              className="font-jetbrains font-bold text-xs md:tracking-[0.04em] xl:tracking-widest text-white opacity-80 hover:opacity-100 hover:[text-shadow:0_0_8px_#fff,0_0_16px_#fff,0_0_30px_hsla(0,0%,100%,.8)] hover:-translate-y-0.5 transition-all duration-300 ease-in-out cursor-none">
              DROP
            </Link>
            <Link
              to={"/collection"}
              className="font-jetbrains font-bold text-xs md:tracking-[0.04em] xl:tracking-widest text-white opacity-80 hover:opacity-100 hover:[text-shadow:0_0_8px_#fff,0_0_16px_#fff,0_0_30px_hsla(0,0%,100%,.8)] hover:-translate-y-0.5 transition-all duration-300 ease-in-out cursor-none">
              COLLECTION
            </Link>
            <Link
              to={"/lookbook"}
              className="font-jetbrains font-bold text-xs md:tracking-[0.04em] xl:tracking-widest text-white opacity-80 hover:opacity-100 hover:[text-shadow:0_0_8px_#fff,0_0_16px_#fff,0_0_30px_hsla(0,0%,100%,.8)] hover:-translate-y-0.5 transition-all duration-300 ease-in-out cursor-none">
              LOOKBOOK
            </Link>
            <Link
              to={"/our-story"}
              className="font-jetbrains font-bold text-xs md:tracking-[0.04em] xl:tracking-widest text-white opacity-80 hover:opacity-100 hover:[text-shadow:0_0_8px_#fff,0_0_16px_#fff,0_0_30px_hsla(0,0%,100%,.8)] hover:-translate-y-0.5 transition-all duration-300 ease-in-out cursor-none">
              OUR STORY
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
