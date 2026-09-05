import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-30 w-full overflow-hidden bg-black text-white">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[120px] font-anton text-[#ffffff0a] uppercase leading-none md:text-[300px]">
        ZENJI
      </span>
      <div className="relative z-10 px-[6%] pb-10 pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[30%_1fr] md:gap-16">
          <div>
            <img
              src="/wm_logo.webp"
              alt="ZENJI anime streetwear brand logo"
              className="h-20 w-20"
            />
            <p className="mt-4 max-w-70 text-[12px] text-white/50 font-ibm leading-[1.6]">
              Wear the Arc. Anime-inspired streetwear for gamers and otaku.
              Every drop limited. No restocks. Ever.
            </p>
            <div className="mt-8">
              <p className="mb-4 text-[10px] tracking-widest text-white/30 font-jetbrains">
                FOLLOW THE LORE
              </p>
              <div className="flex gap-2">
                <Link
                  to={"https://www.tiktok.com/@zenji_.shop"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex min-h-11 items-center gap-2 text-[11px] font-jetbrains rounded-none py-2 px-4 transition-all duration-300 ease-in-out hover:scale-[1.05] border bg-white text-black border-white hover:bg-[#010101] hover:text-white hover:border-[#010101] cursor-none"
                  tabIndex="0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true">
                    <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.11v12.63a2.59 2.59 0 1 1-1.84-2.48V9.94a5.68 5.68 0 1 0 4.95 5.63V9.01a7.34 7.34 0 0 0 4.29 1.37V7.27a4.28 4.28 0 0 1-2.19-1.45z"></path>
                  </svg>
                  TikTok
                </Link>
                <Link
                  to={
                    "https://www.instagram.com/zenji_.shop?igsh=a3ppYnA3YnJqMHk%3D"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex min-h-11 items-center gap-2 text-[11px] transition-all duration-300 ease-in-out hover:scale-[1.05] text-white font-jetbrains rounded-none py-2 px-4 border-0 bg-linear-[45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888] cursor-none"
                  tabIndex="0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    aria-hidden="true">
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram
                </Link>
                <Link
                  to={"https://www.facebook.com/people/ZENJI/61592433253702/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex min-h-11 items-center gap-2 text-[11px] transition-all duration-300 ease-in-out hover:scale-[1.05] text-white font-jetbrains rounded-none py-2 px-4 border-0 bg-[#1877f2] cursor-none"
                  tabIndex="0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true">
                    <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.5c-1.49 0-1.95.93-1.95 1.87v2.25h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"></path>
                  </svg>
                  Facebook
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 md:gap-8">
            <div>
              <h3 className="mb-6 text-[11px] tracking-widest text-white/35 font-jetbrains">
                DROPS
              </h3>
              <ul>
                <li>
                  <Link
                    to={"/"}
                    className="inline-flex min-h-11 items-center text-[13px] font-ibm text-white transition-colors duration-200 hover:text-span cursor-none">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/drop"}
                    className="inline-flex min-h-11 items-center text-[13px] font-ibm text-white transition-colors duration-200 hover:text-span cursor-none">
                    Drop
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/collection"}
                    className="inline-flex min-h-11 items-center text-[13px] font-ibm text-white transition-colors duration-200 hover:text-span cursor-none">
                    Collection
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-[11px] tracking-widest text-white/35 font-jetbrains">
                EXPLORE
              </h3>
              <ul>
                <li>
                  <Link
                    to={"/lookbook"}
                    className="inline-flex min-h-11 items-center text-[13px] font-ibm text-white transition-colors duration-200 hover:text-span cursor-none">
                    Lookbook
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/drop"}
                    className="inline-flex min-h-11 items-center text-[13px] font-ibm text-white transition-colors duration-200 hover:text-span cursor-none">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/collection"}
                    className="inline-flex min-h-11 items-center text-[13px] font-ibm text-white transition-colors duration-200 hover:text-span cursor-none">
                    Collection
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-[11px] tracking-widest text-white/35 font-jetbrains uppercase">
                Community
              </h3>
              <ul>
                <li>
                  <Link
                    to={"https://www.tiktok.com/@zenji_.shop"}
                    className="inline-flex min-h-11 items-center text-[13px] font-ibm text-white transition-colors duration-200 hover:text-span cursor-none">
                    Tiktok
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      "https://www.instagram.com/zenji_.shop?igsh=a3ppYnA3YnJqMHk%3D"
                    }
                    className="inline-flex min-h-11 items-center text-[13px] font-ibm text-white transition-colors duration-200 hover:text-span cursor-none">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://www.facebook.com/people/ZENJI/61592433253702/"}
                    className="inline-flex min-h-11 items-center text-[13px] font-ibm text-white transition-colors duration-200 hover:text-span cursor-none">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-[11px] tracking-widest text-white/35 font-jetbrains uppercase">
                CONTACT
              </h3>
              <ul>
                <li>
                  <Link
                    to={"/faq"}
                    className="inline-flex min-h-11 items-center text-[13px] font-ibm text-white transition-colors duration-200 hover:text-span cursor-none">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/review"}
                    className="inline-flex min-h-11 items-center text-[13px] font-ibm text-white transition-colors duration-200 hover:text-span cursor-none">
                    Review
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/privacy-policy"}
                    className="inline-flex min-h-11 items-center text-[13px] font-ibm text-white transition-colors duration-200 hover:text-span cursor-none">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/terms"}
                    className="inline-flex min-h-11 items-center text-[13px] font-ibm text-white transition-colors duration-200 hover:text-span cursor-none">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/faq"}
                    className="inline-flex min-h-11 items-center text-[13px] font-ibm text-white transition-colors duration-200 hover:text-span cursor-none">
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/return-policy"}
                    className="inline-flex min-h-11 items-center text-[13px] font-ibm text-white transition-colors duration-200 hover:text-span cursor-none">
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="inline-flex min-h-11 items-center text-[13px] font-ibm text-white transition-colors duration-200 hover:text-span cursor-none">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center gap-4 px-[6%] py-6 md:flex-row md:justify-between border-t border-white/10">
        <span className="font-jetbrains text-[11px] text-white/30">
          © 2026 ZENJI. All drops are final. No restocks. Ever.
        </span>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          <div className="flex gap-8">
            <Link
              to={"/privacy-policy"}
              className="text-[11px] font-jetbrains text-white/30 transition-colors hover:text-white duration-300 ease-in-out cursor-none">
              Policy
            </Link>
            <Link
              to={"/terms"}
              className="text-[11px] font-jetbrains text-white/30 transition-colors hover:text-white duration-300 ease-in-out cursor-none">
              Terms
            </Link>
            <Link
              to={"/privacy-policy#cookies"}
              className="text-[11px] font-jetbrains text-white/30 transition-colors hover:text-white duration-300 ease-in-out cursor-none">
              Cookies
            </Link>
          </div>
          <span className="text-[10px] font-jetbrains text-white/30">
            <span className="text-[#eab308] text-xs">● </span>
            Anime-inspired. Gamer-built. Community-owned.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
