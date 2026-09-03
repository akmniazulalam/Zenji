import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { LuUserRound } from "react-icons/lu";

const Header = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
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
            <div className="relative">
              <button
                type="button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="font-jetbrains text-xs font-bold md:tracking-[0.04em] xl:tracking-widest text-white opacity-80 hover:opacity-100 hover:[text-shadow:0_0_8px_#fff,0_0_16px_#fff,0_0_30px_hsla(0,0%,100%,.8)] hover:-translate-y-0.5 transition-all duration-300 ease-in-out cursor-none min-h-10 min-w-10">
                MORE ∨
              </button>
              {isMoreOpen && (
                <div className="absolute left-0 top-full z-50 min-w-45 border border-black bg-white opacity-100">
                  <Link
                    to={"/collaboration"}
                    className="block px-5 py-3 text-[12px] uppercase font-jetbrains tracking-widest text-black hover:bg-black hover:text-white hover:[text-shadow:0_0_8px_#fff,0_0_16px_#fff,0_0_30px_hsla(0,0%,100%,.8)] transition-all duration-300 ease-in-out cursor-none border-b border-black/10">
                    COLLABORATION
                  </Link>
                  <Link
                    to={"/review"}
                    className="block px-5 py-3 text-[12px] font-jetbrains uppercase tracking-widest text-black hover:bg-black hover:text-white hover:[text-shadow:0_0_8px_#fff,0_0_16px_#fff,0_0_30px_hsla(0,0%,100%,.8)] transition-all duration-300 ease-in-out cursor-none border-b border-black/10">
                    REVIEW
                  </Link>
                  <Link
                    to={"/faq"}
                    className="block px-5 py-3 text-[12px] font-jetbrains uppercase tracking-widest text-black hover:bg-black hover:text-white hover:[text-shadow:0_0_8px_#fff,0_0_16px_#fff,0_0_30px_hsla(0,0%,100%,.8)] transition-all duration-300 ease-in-out cursor-none">
                    FAQ
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-6 md:gap-2 xl:gap-6">
            <div className="hidden items-center md:flex">
              <button
                type="button"
                aria-label="Open Search"
                aria-expanded="false"
                aria-controls="nav-search-panel"
                className="flex h-11 w-11 items-center justify-center text-white transition-colors hover:text-span hover:scale-[1.05] cursor-none">
                <FiSearch className="text-[20px]" />
              </button>
            </div>
            <Link
              to={"/wishlist"}
              aria-label="Wishlist"
              className="relative flex h-11 w-11 items-center justify-center text-white transition-colors hover:text-span hover:scale-[1.05] cursor-none">
              <FaRegHeart className="text-2xl" />
            </Link>
            <button
              aria-label="Open cart"
              className="relative flex h-11 w-11 items-center justify-center text-white transition-colors hover:text-span hover:scale-[1.05] cursor-none">
              <GrCart className="text-2xl" />
            </button>
            <Link
              to={"/login"}
              aria-label="Account"
              className="hidden h-11 w-11 items-center justify-center transition-colors hover:text-span md:flex text-white hover:scale-[1.05] cursor-none"
              aria-current="page">
              <LuUserRound className="text-2xl" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
