import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const OurStory = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <main className="bg-black text-white">
      <section
        ref={sectionRef}
        className="px-margin-mobile py-24 md:px-margin-desktop">
        <div className="mx-auto max-w-180">
          <span className="block text-[0.7rem] tracking-widest font-jetbrains text-span">
            ABOUT // ZENJI
          </span>
          <span className="my-4 block h-px w-10 bg-span"></span>
          <h1 className="mb-10 text-[51px] uppercase leading-none text-white md:text-[83px] font-anton">
            <span className="block">
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-100 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                ANIME&nbsp;
              </span>
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-200 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                STREETWEAR&nbsp;
              </span>
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-300 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                AUSTRALIA&nbsp;
              </span>
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-400 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                —
              </span>
            </span>
            <span className="block">
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-500 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                BORN&nbsp;
              </span>
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-600 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                FROM&nbsp;
              </span>
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-700 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                THE&nbsp;
              </span>
            </span>
            <span className="block">
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-800 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                WARRIOR&nbsp;
              </span>
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-900 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                SPIRIT.
              </span>
            </span>
          </h1>
          <div className="">
            <p
              className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-300 mb-6 text-[0.9rem] leading-relaxed font-ibm text-white/70`}>
              ZENJI began with one belief: what you wear should tell a story.
            </p>
            <p
              className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-400 mb-6 text-[0.9rem] leading-relaxed font-ibm text-white/70`}>
              Inspired by samurai discipline, anime art and modern street
              culture, we create premium streetwear for those who choose their
              own path.
            </p>
            <p
              className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-500 mb-6 text-[0.9rem] leading-relaxed font-ibm text-white/70`}>
              Every ZENJI piece combines Japanese-inspired artwork, powerful
              symbolism and oversized silhouettes to express courage, creativity
              and individuality.
            </p>
          </div>
          <blockquote
            className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-600 my-10 border-l-2 border-span pl-6 font-ibm text-white/60 text-[0.95rem] italic leading-relaxed`}>
            ZENJI is more than a name on a shirt. It represents the warrior
            within, the part of us that keeps moving forward, stays true to
            itself and refuses to fade into the crowd.
          </blockquote>
          <p
            className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-700 mb-10 text-[0.9rem] leading-relaxed font-ibm text-white/70`}>
            We design for the dreamers, fighters, creators and outsiders shaping
            their own future.
          </p>
          <p className="mb-12 text-[31px] uppercase leading-none text-white md:text-[40px] font-anton">
            <span className="block">
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-300 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                Wear&nbsp;
              </span>
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-400 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                your&nbsp;
              </span>
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-500 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                story.
              </span>
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-600 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                Wear&nbsp;
              </span>
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-700 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                your&nbsp;
              </span>
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-800 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                spirit.
              </span>
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-900 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                Wear&nbsp;
              </span>
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-1000 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                ZENJI.
              </span>
            </span>
          </p>
          <span
            className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-1100 mb-8 block text-[0.65rem] uppercase tracking-widest font-jetbrains text-[#999]`}>
            For the dreamers. Fighters. Creators. Outsiders.
          </span>
          <Link
            className="inline-block border-b border-white pb-1 font-jetbrains cursor-none text-[0.75rem] tracking-widest text-white transition-colors hover:border-span hover:text-span"
            tabIndex="0"
            to={"/collection"}>
            EXPLORE THE COLLECTION →
          </Link>
          <section className="mt-16 border-t border-white/10 pt-10">
            <h2 className="mb-6 text-[24px] uppercase tracking-wide text-white md:text-[30px] font-anton">
              About ZENJI
            </h2>
            <dl className="space-y-4 text-[0.85rem] leading-relaxed font-ibm text-white/70">
              <div className="">
                <dt className="mb-1 text-[0.6rem] uppercase tracking-[0.25em] font-jetbrains text-span">
                  What ZENJI is
                </dt>
                <dd>ZENJI is an Australian anime streetwear brand.</dd>
              </div>
              <div className="">
                <dt className="mb-1 text-[0.6rem] uppercase tracking-[0.25em] font-jetbrains text-span">
                  Founded
                </dt>
                <dd>ZENJI was founded in 2024.</dd>
              </div>
              <div className="">
                <dt className="mb-1 text-[0.6rem] uppercase tracking-[0.25em] font-jetbrains text-span">
                  What we make
                </dt>
                <dd>
                  ZENJI makes limited-edition anime-inspired graphic tees in
                  100% heavyweight 240gsm cotton.
                </dd>
              </div>
              <div className="">
                <dt className="mb-1 text-[0.6rem] uppercase tracking-[0.25em] font-jetbrains text-span">
                  Shipping
                </dt>
                <dd>
                  ZENJI ships Australia-wide, with free shipping on orders over
                  A$100 and standard delivery in 1–2 weeks.
                </dd>
              </div>
              <div className="">
                <dt className="mb-1 text-[0.6rem] uppercase tracking-[0.25em] font-jetbrains text-span">
                  Restocks
                </dt>
                <dd>
                  ZENJI products are limited edition. There are no restocks,
                  ever — once a piece sells out it is gone for good.
                </dd>
              </div>
              <div className="">
                <dt className="mb-1 text-[0.6rem] uppercase tracking-[0.25em] font-jetbrains text-span">
                  Pricing
                </dt>
                <dd>
                  ZENJI tees are A$39.99, with selected pieces on sale at
                  A$33.99.
                </dd>
              </div>
              <div className="">
                <dt className="mb-1 text-[0.6rem] uppercase tracking-[0.25em] font-jetbrains text-span">
                  Influences
                </dt>
                <dd>
                  ZENJI draws on samurai discipline, Japanese iconography and
                  modern anime art.
                </dd>
              </div>
              <div className="">
                <dt className="mb-1 text-[0.6rem] uppercase tracking-[0.25em] font-jetbrains text-span">
                  Based in
                </dt>
                <dd>
                  ZENJI is based in Australia and ships to every Australian
                  state and territory, including Sydney, Melbourne, Brisbane,
                  Perth and Adelaide.
                </dd>
              </div>
              <div className="">
                <dt className="mb-1 text-[0.6rem] uppercase tracking-[0.25em] font-jetbrains text-span">
                  Anime inspiration
                </dt>
                <dd>
                  ZENJI designs are inspired by series including Jujutsu Kaisen,
                  Demon Slayer, Naruto, One Piece and Dragon Ball, alongside
                  original samurai artwork. Anime character artwork is licensed
                  for commercial use.
                </dd>
              </div>
              <div className="">
                <dt className="mb-1 text-[0.6rem] uppercase tracking-[0.25em] font-jetbrains text-span">
                  Next drop
                </dt>
                <dd>
                  The Origin Drop is in stock and shipping now, with selected
                  pieces on sale at 15% off.
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </section>
    </main>
  );
};

export default OurStory;
