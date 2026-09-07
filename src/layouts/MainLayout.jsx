import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null);
  const location = useLocation();
  const pageChanged = location.pathname;
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000); // Open the popup after 5 seconds
  }, [pageChanged]);

  return (
    <>
      <Header />
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 bg-[#000000b3] opacity-100 z-40">
          <div
            ref={popupRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="anime-popup-title"
            className="relative flex max-h-[90dvh] w-full max-w-3xl bg-[#0a0a0a] opacity-100 z-40 overflow-hidden border border-white/10">
            <div className="relative hidden w-1/2 md:block">
              <img
                src="/bg_2.avif"
                alt="Zenji anime characters"
                data-nimg="fill"
                decoding="async"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="relative w-full overflow-y-auto p-6 text-center md:w-1/2 sm:p-8">
              <button
                type="button"
                aria-label="Close"
                onClick={() => setIsPopupOpen(false)}
                className="transition-colors duration-150 hover:border-white/50 hover:text-white disabled:opacity-30 absolute right-4 top-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-white text-[#ffffff80] text-[20px] shrink-0 flex items-center justify-center h-10 w-10 p-0 bg-transparent border border-white/25 cursor-none">
                ×
              </button>
              <div className="mb-6 flex justify-center">
                <span className="inline-block select-none uppercase leading-none text-white text-4xl font-anton tracking-[-0.02em] [clip-path:polygon(0px_14%,9%_0px,100%_0px,100%_86%,91%_100%,0px_100%)]">
                  ZENJI
                </span>
              </div>
              <h2
                id="anime-popup-title"
                className="mb-3 text-[28px] uppercase font-anton leading-none text-white">
                FREE SHIPPING ON FIRST ORDER
              </h2>
              <p className="mb-8 text-xs uppercase tracking-widest text-gray-400 font-jetbrains">
                CHOOSE YOUR FIGHTER
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  "Jujutsu Kaisen",
                  "Demon Slayer",
                  "One Piece",
                  "Naruto",
                  "Dragon Ball",
                  "Other",
                ].map((fighter) => (
                  <button
                    key={fighter}
                    type="button"
                    className="w-full rounded-none border border-white py-3 text-[13px] uppercase tracking-widest text-white font-jetbrains transition-none hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] cursor-none">
                    {fighter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <main className={isHomePage ? "-mt-[76px]" : ""}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
