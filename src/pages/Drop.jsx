import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Drop = () => {
  const sectionRef = useRef(null);
  const sectionTwoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
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
  useEffect(() => {
    const observerTwo = new IntersectionObserver(
      ([entry]) => {
        setIsVisibleTwo(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    if (sectionTwoRef.current) {
      observerTwo.observe(sectionTwoRef.current);
    }

    return () => observerTwo.disconnect();
  }, []);

  const targetDate = new Date("2027-09-01T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const difference = targetDate - Date.now();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    {
      value: timeLeft.days,
      label: "DAYS",
    },
    {
      value: timeLeft.hours,
      label: "HOURS",
    },
    {
      value: timeLeft.minutes,
      label: "MINUTES",
    },
    {
      value: timeLeft.seconds,
      label: "SECONDS",
    },
  ];

  const latestDrops = [
    {
      mainImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Blue-flame-1.webp",
      mainAlt: "ZENJI BLUE FLAME TEE anime streetwear, front",
      hoverImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Blue-flame-2.webp",
      hoverAlt: "ZENJI BLUE FLAME TEE anime streetwear, back",
      title: "BLUE FLAME TEE",
      originalPrice: "A$39.99",
      salePrice: "A$33.99",
      saleBadge: "SALE 15% OFF",
    },
    {
      mainImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Demon-blood-1.webp",
      mainAlt: "ZENJI DEMON BLOOD TEE anime streetwear, front",
      hoverImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Demon-blood-2.webp",
      hoverAlt: "ZENJI DEMON BLOOD TEE anime streetwear, back",
      title: "DEMON BLOOD TEE",
      originalPrice: "A$39.99",
      salePrice: "A$33.99",
      saleBadge: "SALE 15% OFF",
    },
    {
      mainImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Bushido-1.webp",
      mainAlt: "ZENJI BUSHIDO TEE anime streetwear, front",
      hoverImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Bushido-2.webp",
      hoverAlt: "ZENJI BUSHIDO TEE anime streetwear, back",
      title: "BUSHIDO TEE",
      salePrice: "A$39.99",
    },
    {
      mainImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Will-of-the-sun-1.webp",
      mainAlt: "ZENJI WILL OF THE SUN TEE anime streetwear, front",
      hoverImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Will-of-the-sun-2.webp",
      hoverAlt: "ZENJI WILL OF THE SUN TEE anime streetwear, back",
      title: "WILL OF THE SUN TEE",
      originalPrice: "A$39.99",
      salePrice: "A$33.99",
      saleBadge: "SALE 15% OFF",
    },
  ];
  return (
    <>
      <section
        ref={sectionTwoRef}
        className="relative w-full overflow-hidden bg-black h-[70vh] min-h-115">
        <img src="" alt="" />
        <img
          aria-hidden="true"
          decoding="async"
          data-nimg="fill"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.25] contrast-[1.1]"
          sizes="100vw"
          src="/bg_2 (1).avif"
        />
        <div className="absolute inset-0 bg-linear-[rgba(0, 0, 0, 0.7) 0%,transparent_100%]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-[6%] text-center">
          <span className="mb-6 flex items-center gap-3 text-[10px] uppercase font-jetbrains text-span tracking-[0.4em]">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-span"></span>
            INCOMING TRANSMISSION
          </span>
          <h1 className="uppercase text-white font-anton">
            <span
              className={`${isVisibleTwo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-300 block text-[56px] leading-none md:text-[120px] overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
              AWAKENING
            </span>
            <span className="block text-[56px] leading-none md:text-[120px] text-span">
              <span
                className={`${isVisibleTwo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-600 delay-500 block text-[56px] leading-none md:text-[120px] overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                IS LIVE.
              </span>
            </span>
          </h1>
          <p className="mt-6 text-[14px] font-ibm text-white/50">
            The next chapter begins. Are you ready?
          </p>
          <p className="font-jetbrains mt-4 text-[11px] tracking-widest text-[#999999]">
            DROP DATE: 01 SEPT 2026
          </p>
        </div>
      </section>
      <section className="relative overflow-hidden bg-white p-[100px_6%]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(188,1,0,0.08)_0%,transparent_70%)]"></div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)]"></div>
        <div className="relative">
          <p className="mb-12 flex items-center justify-center gap-3 text-xs uppercase font-jetbrains text-span tracking-[0.3em]">
            <span
              aria-hidden="true"
              class="h-2 w-2 animate-pulse rounded-full bg-span"></span>
            AWAKENING <span> // IS LIVE</span>
          </p>
          <div
            className="mx-auto grid max-w-160 grid-cols-2 justify-center gap-3 md:flex md:max-w-none md:gap-6"
            role="timer"
            aria-live="off"
            aria-label="Time remaining until the Awakening drop">
            {countdownItems.map((item, index) => (
              <div
                key={item.label}
                className="flex items-center justify-center">
                <div className="w-full border border-span bg-transparent px-3 py-4 shadow-[0_0_20px_rgba(188,1,0,0.3)] sm:px-4 sm:py-7 md:w-40">
                  <span className="block text-center font-anton text-4xl leading-none text-black sm:text-5xl md:text-7xl">
                    {String(item.value).padStart(2, "0")}
                  </span>

                  <span className="mt-3 block text-center font-jetbrains text-xs uppercase tracking-widest text-gray-400">
                    {item.label}
                  </span>
                </div>

                {index < countdownItems.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="mx-2 hidden self-center font-anton text-4xl text-span md:inline">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="mt-14 text-center text-2xl uppercase tracking-widest text-black font-anton">
            THE DROP IS COMING
          </p>
          <p className="mt-3 text-center text-xs uppercase tracking-widest text-gray-500 font-jetbrains">
            01 SEPTEMBER 2027 — AUSTRALIA
          </p>
          <div className="mt-10 text-center">
            <Link
              to={"/collection"}
              className="drop-cta inline-block rounded-none px-8 py-4 text-[16px] uppercase tracking-widest transition-all duration-300 ease-in-out font-anton bg-span text-white border border-span hover:bg-white hover:text-black cursor-none">
              THE WAIT IS OVER — ENTER THE ARCHIVE →
            </Link>
          </div>
        </div>
      </section>
      <section
        ref={sectionRef}
        className="scroll-mt-24 bg-white px-5 py-[60px] md:px-[6%] md:py-20 b-t b-t-black/10">
        <div className="mx-auto max-w-[600px] text-center">
          <p className="mb-4 text-xs uppercase font-jetbrains text-span tracking-[0.3em]">
            GET EARLY ACCESS
          </p>
          <h2 className="mb-4 text-[40px] uppercase text-black md:text-[64px] font-anton">
            <span
              className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-300 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
              JOIN&nbsp;
            </span>
            <span
              className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-400 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
              THE&nbsp;
            </span>
            <span
              className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-500 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
              WAITLIST.
            </span>
          </h2>
          <p className="mb-10 text-[13px] text-gray-500 font-ibm leading-[1.7]">
            Be first to shop Awakening. Exclusive early access + pre-drop
            discount for waitlist members.
          </p>
          <form
            action="#"
            method="post"
            className="flex flex-col gap-0 sm:flex-row"
            noValidate>
            <label for="waitlist-email" className="sr-only">
              Your email address
            </label>
            <input
              id="waitlist-email"
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              aria-invalid="false"
              className="waitlist-input min-h-[56px] h-[56px] py-0 px-5 flex-1 rounded-none border border-black bg-white text-[13px] font-ibm text-black placeholder:text-black/35 focus:outline-none sm:border-r-0 cursor-none"
            />
            <button
              type="submit"
              className="bg-span text-white border border-span drop-cta rounded-none font-anton h-[56px] py-0 px-8 text-[16px] uppercase tracking-widest cursor-none"
              tabIndex="0">
              JOIN THE WAITLIST →
            </button>
          </form>
        </div>
      </section>
      <section className="bg-white p-[80px_6%]">
        <div className="">
          <p className="mb-4 text-xs uppercase text-span font-jetbrains tracking-[0.3em]">
            THE_ORIGIN_DROP // STILL AVAILABLE
          </p>
          <h2 className="mb-2 text-[36px] uppercase text-black md:text-[48px] font-anton">
            WHILE YOU WAIT.
          </h2>
          <p className="mb-10 text-[13px] text-gray-500 font-ibm">
            Shop The Origin Drop, our current collection.
          </p>
        </div>
        <section className="relative mt-12">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-margin-mobile pb-6 justify-center-safe md:gap-6 md:px-margin-desktop scrollbar-none [&::-webkit-scrollbar]:hidden">
            {latestDrops.map((item, index) => (
              <div
                key={index}
                className="w-[82vw] flex-none snap-start sm:w-[46vw] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]">
                <div className="flex flex-col overflow-hidden border border-black bg-white">
                  <Link
                    to={"/drop/blue-flame-tee"}
                    className="group flex aspect-2/3 cursor-none flex-col overflow-hidden sm:aspect-3/4">
                    {/* Product Image */}
                    <div className="relative flex-1 overflow-hidden bg-surface-warm">
                      {/* Sale Badge */}
                      {item.saleBadge && (
                        <span className="absolute -left-7.5 top-5.5 z-20 w-30 -rotate-45 bg-span py-1 text-center text-[9px] font-bold uppercase tracking-[0.5px] text-white font-jetbrains">
                          {item.saleBadge}
                        </span>
                      )}

                      {/* Product Front Image */}
                      <img
                        src={item.mainImg}
                        alt={item.mainAlt}
                        className="absolute inset-0 h-full w-full object-cover object-top opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                      />

                      {/* Product Back Image */}
                      <img
                        src={item.hoverImg}
                        alt={item.hoverAlt}
                        className="absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />

                      {/* Quick View */}
                      <div className="absolute bottom-0 left-0 z-20 flex h-11 w-full translate-y-full items-center justify-center bg-[rgba(0,0,0,0.85)] transition-transform duration-300 group-hover:translate-y-0">
                        <span className="text-[11px] uppercase tracking-widest text-white font-jetbrains">
                          QUICK VIEW →
                        </span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="border-t border-black bg-stark-white px-4 py-4">
                      <span className="block truncate text-sm uppercase tracking-widest text-black font-anton">
                        {item.title}
                      </span>

                      <div className="mt-2 flex flex-col gap-1">
                        {/* Original Price */}
                        <div className="flex items-center gap-3">
                          <span className="text-xs tracking-wider text-gray-400 line-through font-jetbrains">
                            {item.originalPrice}
                          </span>
                        </div>

                        {/* Sale Price */}
                        {item.originalPrice ? (
                          <span className="text-2xl leading-none tracking-wide text-span font-anton">
                            {item.salePrice}
                          </span>
                        ) : (
                          <span className="text-2xl leading-none tracking-wide text-black font-anton">
                            {item.salePrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="mt-12">
          <Link
            className="inline-block border-b border-black font-jetbrains pb-1 text-[11px] tracking-widest text-black transition-colors hover:border-span hover:text-span cursor-none"
            tabIndex="0"
            to={"/collection"}>
            VIEW FULL COLLECTION →
          </Link>
        </div>
      </section>
    </>
  );
};

export default Drop;
