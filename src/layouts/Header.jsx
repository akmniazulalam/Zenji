import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { LuUserRound } from "react-icons/lu";

const Header = () => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);
  const cartRef = useRef(null);

  const isHomePage = location.pathname === "/";

  const isMoreActive =
    location.pathname === "/collaboration" ||
    location.pathname === "/review" ||
    location.pathname === "/faq";

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      if (isHomePage) {
        if (window.scrollY > 50) {
          headerRef.current.classList.add("bg-[#000000f2]");
        } else {
          headerRef.current.classList.remove("bg-[#000000f2]");
        }
      }
    };

    handleScroll(); // Call it once to set the initial state based on the current scroll position

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartRef]);

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
      <nav
        ref={headerRef}
        className={`sticky top-0 z-40 w-full ${isMobile ? "bg-black/95" : ""} ${!isHomePage ? "bg-[#000000f2]" : ""} transition-all duration-300 ease-in-out`}>
        <div className="mx-auto flex w-full max-w-container-max items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
          <Link
            to={"/"}
            className="flex min-h-11 items-center gap-4 hover:scale-[1.05] transition-all duration-300 ease-in-out cursor-none">
            <span className="inline-block select-none uppercase leading-none text-white font-anton text-4xl tracking-[-0.02em] md:text-2xl xl:text-4xl [clip-path:polygon(0px_14%,9%_0px,100%_0px,100%_86%,91%_100%,0px_100%)]">
              ZENJI
            </span>
          </Link>
          <div className="hidden items-center gap-4 md:flex xl:gap-10">
            <NavLink
              to={"/drop"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-span" : "text-white"
                } font-jetbrains font-bold text-xs md:tracking-[0.04em] xl:tracking-widest opacity-80 hover:opacity-100 hover:[text-shadow:0_0_8px_#fff,0_0_16px_#fff,0_0_30px_hsla(0,0%,100%,.8)] hover:text-white hover:-translate-y-0.5 transition-all duration-300 ease-in-out cursor-none`
              }>
              DROP
            </NavLink>
            <NavLink
              to={"/collection"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-span" : "text-white"
                } font-jetbrains font-bold text-xs md:tracking-[0.04em] xl:tracking-widest opacity-80 hover:opacity-100 hover:[text-shadow:0_0_8px_#fff,0_0_16px_#fff,0_0_30px_hsla(0,0%,100%,.8)] hover:text-white hover:-translate-y-0.5 transition-all duration-300 ease-in-out cursor-none`
              }>
              COLLECTION
            </NavLink>
            <NavLink
              to={"/lookbook"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-span" : "text-white"
                } font-jetbrains font-bold text-xs md:tracking-[0.04em] xl:tracking-widest opacity-80 hover:opacity-100 hover:[text-shadow:0_0_8px_#fff,0_0_16px_#fff,0_0_30px_hsla(0,0%,100%,.8)] hover:text-white hover:-translate-y-0.5 transition-all duration-300 ease-in-out cursor-none`
              }>
              LOOKBOOK
            </NavLink>
            <NavLink
              to={"/our-story"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-span" : "text-white"
                } font-jetbrains font-bold text-xs md:tracking-[0.04em] xl:tracking-widest opacity-80 hover:opacity-100 hover:[text-shadow:0_0_8px_#fff,0_0_16px_#fff,0_0_30px_hsla(0,0%,100%,.8)] hover:text-white hover:-translate-y-0.5 transition-all duration-300 ease-in-out cursor-none`
              }>
              OUR STORY
            </NavLink>
            <div className="relative" onMouseLeave={() => setIsMoreOpen(false)}>
              <button
                type="button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className={`font-jetbrains text-xs font-bold md:tracking-[0.04em] xl:tracking-widest hover:text-white opacity-80 hover:opacity-100 hover:[text-shadow:0_0_8px_#fff,0_0_16px_#fff,0_0_30px_hsla(0,0%,100%,.8)] hover:-translate-y-0.5 transition-all duration-300 ease-in-out cursor-none min-h-10 min-w-10 ${isMoreActive ? "text-span" : "text-white"}`}>
                {isMoreOpen ? "MORE ∧" : "MORE ∨"}
              </button>
              <div
                className={`absolute left-0 z-50 min-w-45 border border-black bg-white ${isMoreOpen ? "top-full opacity-100 pointer-events-auto" : "top-7 opacity-0 pointer-events-none"} transition-all duration-300 ease-in-out`}>
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
              onClick={() => setIsCartOpen(true)}
              className="relative flex h-11 w-11 items-center justify-center text-white transition-colors hover:text-span hover:scale-[1.05] cursor-none">
              <GrCart className="text-2xl" />
            </button>
            <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
              <aside
                ref={cartRef}
                role="dialog"
                aria-modal="true"
                aria-label="Your cart"
                className={`absolute inset-y-0 right-0 flex h-full w-full flex-col border-l border-white/10 bg-black transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1) md:w-105${isCartOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"}`}>
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl uppercase tracking-widest text-white font-anton">
                      YOUR CART
                    </h2>
                  </div>
                  <button
                    type="button"
                    aria-label="Close cart"
                    onClick={() => setIsCartOpen(false)}
                    className="transition-colors duration-150 hover:border-white/50 hover:text-white text-[#6b7280] disabled:opacity-30 w-10 h-10 flex items-center justify-center text-[22px] shrink-0 p-0 bg-transparent border border-white/25 cursor-none"
                    tabIndex="0">
                    ×
                  </button>
                </div>
                <div
                  data-lenis-prevent="true"
                  className="scrollbar-none grow overflow-y-auto px-6 py-5">
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <p className="text-xl uppercase tracking-widest text-white font-anton">
                      YOUR CART IS EMPTY
                    </p>
                    <p className="mt-2 text-xs tracking-[0.3em] font-jetbrains text-span">
                      THE ARC AWAITS.
                    </p>
                    <Link
                      to={"/collection"}
                      className="mt-8 inline-flex min-h-11 items-center px-6 py-3 text-sm uppercase tracking-widest text-white font-anton bg-span transition-colors hover:bg-[#930100]! cursor-none">
                      SHOP COLLECTION →
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
            <Link
              to={"/login"}
              aria-label="Account"
              className="hidden h-11 w-11 items-center justify-center transition-colors hover:text-span md:flex text-white hover:scale-[1.05] cursor-none"
              aria-current="page">
              <LuUserRound className="text-2xl" />
            </Link>
            <button
              aria-label="Menu"
              aria-expanded="false"
              onClick={() => setIsMobile(!isMobile)}
              className="flex h-11 w-11 items-center justify-center text-white md:hidden"
              tabIndex="0">
              {isMobile ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <line x1="4" y1="4" x2="20" y2="20"></line>
                  <line x1="20" y1="4" x2="4" y2="20"></line>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
        {isMobile && (
          <div className="flex flex-col overflow-hidden md:hidden bg-black/95 border-t border-[#ffffff14] h-auto">
            <Link
              to={"/drop"}
              onClick={() => setIsMobile(false)}
              className="block border-b border-b-white/10 px-margin-mobile py-4 font-jetbrains text-xs font-bold leading-4 tracking-widest text-white border-t border-t-[#ffffff14] transition-all duration-300 ease-in-out">
              DROP
            </Link>
            <Link
              to={"/collection"}
              onClick={() => setIsMobile(false)}
              className="block border-b border-white/10 px-margin-mobile py-4 font-jetbrains text-xs font-bold leading-4 tracking-widest text-white transition-all duration-300 ease-in-out">
              Collection
            </Link>
            <Link
              to={"/lookbook"}
              onClick={() => setIsMobile(false)}
              className="block border-b border-white/10 px-margin-mobile py-4 font-jetbrains text-xs font-bold leading-4 tracking-widest text-white transition-all duration-300 ease-in-out">
              Lookbook
            </Link>
            <Link
              to={"/our-story"}
              onClick={() => setIsMobile(false)}
              className="block border-b border-white/10 px-margin-mobile py-4 font-jetbrains text-xs font-bold leading-4 tracking-widest text-white transition-all duration-300 ease-in-out">
              Our Story
            </Link>
            <Link
              to={"/collaboration"}
              onClick={() => setIsMobile(false)}
              className="block border-b border-white/10 px-margin-mobile py-4 font-jetbrains text-xs font-bold leading-4 tracking-widest text-white transition-all duration-300 ease-in-out">
              Collaboration
            </Link>
            <Link
              to={"/review"}
              onClick={() => setIsMobile(false)}
              className="block border-b border-white/10 px-margin-mobile py-4 font-jetbrains text-xs font-bold leading-4 tracking-widest text-white transition-all duration-300 ease-in-out">
              Review
            </Link>
            <Link
              to={"/faq"}
              onClick={() => setIsMobile(false)}
              className="block border-b border-white/10 px-margin-mobile py-4 font-jetbrains text-xs font-bold leading-4 tracking-widest text-white transition-all duration-300 ease-in-out">
              FAQ
            </Link>
            <Link
              to={"/login"}
              onClick={() => setIsMobile(false)}
              className="block border-b border-white/10 px-margin-mobile py-4 font-jetbrains text-xs font-bold leading-4 tracking-widest text-white transition-all duration-300 ease-in-out">
              Account
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
