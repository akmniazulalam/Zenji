import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="relative h-10 overflow-hidden bg-span text-white z-50">
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
      <nav className="sticky top-0 z-50 w-full bg-transparent [backdrop-filter:none] border-b-0 transition-all duration-300 ease-in-out">
        <div className="mx-auto flex w-full max-w-container-max items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
            <Link to={"/"} className="flex min-h-11 items-center gap-4">
              <span className="inline-block select-none uppercase leading-none text-white font-anton text-4xl tracking-[-0.02em] md:text-2xl xl:text-4xl">ZENJI</span>
            </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
