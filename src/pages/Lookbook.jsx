import React, { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";

const Lookbook = () => {
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

  const sectionRefThree = useRef(null);
  const [isVisibleThree, setIsVisibleThree] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisibleThree(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    if (sectionRefThree.current) {
      observer.observe(sectionRefThree.current);
    }

    return () => observer.disconnect();
  }, []);

  const IMAGE_BASE =
    "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products";

  const collectionImages = [
    {
      id: 1,
      product: "DOMAIN EXPANSION TEE",
      slug: "domain-expansion-tee",
      type: "ON MODEL",
      category: "THE_ORIGIN_DROP",
      image: `${IMAGE_BASE}/Domain-expansion-5.webp`,
      alt: "ZENJI DOMAIN EXPANSION TEE anime streetwear, on model",
    },
    {
      id: 2,
      product: "DOMAIN EXPANSION TEE",
      slug: "domain-expansion-tee",
      type: "FRONT",
      category: "THE_ORIGIN_DROP",
      image: `${IMAGE_BASE}/Domain-expansion-1.webp`,
      alt: "ZENJI DOMAIN EXPANSION TEE anime streetwear, front",
    },
    {
      id: 3,
      product: "BUSHIDO TEE",
      slug: "bushido-tee",
      type: "BACK",
      category: "LIMITED",
      image: `${IMAGE_BASE}/Bushido-2.webp`,
      alt: "ZENJI BUSHIDO TEE anime streetwear, back",
    },
    {
      id: 4,
      product: "LIMITLESS TEE",
      slug: "limitless-tee",
      type: "FRONT",
      category: "LIMITED",
      image: `${IMAGE_BASE}/Limitless-1.webp`,
      alt: "ZENJI LIMITLESS TEE anime streetwear, front",
    },
    {
      id: 5,
      product: "DEMON BLOOD TEE",
      slug: "demon-blood-tee",
      type: "FRONT",
      category: "SALE",
      image: `${IMAGE_BASE}/Demon-blood-1.webp`,
      alt: "ZENJI DEMON BLOOD TEE anime streetwear, front",
    },
    {
      id: 6,
      product: "BUSHIDO TEE",
      slug: "bushido-tee",
      type: "ON MODEL",
      category: "LIMITED",
      image: `${IMAGE_BASE}/Bushido-5.webp`,
      alt: "ZENJI BUSHIDO TEE anime streetwear, on model",
    },
    {
      id: 7,
      product: "BLUE FLAME TEE",
      slug: "blue-flame-tee",
      type: "ON MODEL",
      category: "SALE",
      image: `${IMAGE_BASE}/Blue-flame-5.webp`,
      alt: "ZENJI BLUE FLAME TEE anime streetwear, on model",
    },
    {
      id: 8,
      product: "BUSHIDO TEE",
      slug: "bushido-tee",
      type: "FRONT",
      category: "LIMITED",
      image: `${IMAGE_BASE}/Bushido-1.webp`,
      alt: "ZENJI BUSHIDO TEE anime streetwear, front",
    },
    {
      id: 9,
      product: "FREE SOUL TEE",
      slug: "free-soul-tee",
      type: "FRONT",
      category: "LIMITED",
      image: `${IMAGE_BASE}/Free-soul-1.webp`,
      alt: "ZENJI FREE SOUL TEE anime streetwear, front",
    },
    {
      id: 10,
      product: "WARRIOR SPIRIT TEE",
      slug: "warrior-spirit-tee",
      type: "BACK",
      category: "SALE",
      image: `${IMAGE_BASE}/Warrior-spirit-4.webp`,
      alt: "ZENJI WARRIOR SPIRIT TEE anime streetwear, back",
    },
    {
      id: 11,
      product: "WILL OF THE SUN TEE",
      slug: "will-of-the-sun-tee",
      type: "FRONT",
      category: "SALE",
      image: `${IMAGE_BASE}/Will-of-the-sun-1.webp`,
      alt: "ZENJI WILL OF THE SUN TEE anime streetwear, front",
    },
    {
      id: 12,
      product: "WARRIOR SPIRIT TEE",
      slug: "warrior-spirit-tee",
      type: "FRONT",
      category: "SALE",
      image: `${IMAGE_BASE}/Warrior-spirit-2.webp`,
      alt: "ZENJI WARRIOR SPIRIT TEE anime streetwear, front",
    },
    {
      id: 13,
      product: "PARADISE SPIRIT TEE",
      slug: "paradise-spirit-tee",
      type: "FRONT",
      category: "THE_ORIGIN_DROP",
      image: `${IMAGE_BASE}/Paradise-spirit-1.webp`,
      alt: "ZENJI PARADISE SPIRIT TEE anime streetwear, front",
    },
    {
      id: 14,
      product: "PARADISE SPIRIT TEE",
      slug: "paradise-spirit-tee",
      type: "BACK",
      category: "THE_ORIGIN_DROP",
      image: `${IMAGE_BASE}/Paradise-spirit-2.webp`,
      alt: "ZENJI PARADISE SPIRIT TEE anime streetwear, back",
    },
    {
      id: 15,
      product: "WATER BREATHING TEE",
      slug: "water-breathing-tee",
      type: "FRONT",
      category: "NEW_ARRIVAL",
      image: `${IMAGE_BASE}/Water-breathing-1.webp`,
      alt: "ZENJI WATER BREATHING TEE anime streetwear, front",
    },
    {
      id: 16,
      product: "DEMON BLOOD TEE",
      slug: "demon-blood-tee",
      type: "BACK",
      category: "SALE",
      image: `${IMAGE_BASE}/Demon-blood-2.webp`,
      alt: "ZENJI DEMON BLOOD TEE anime streetwear, back",
    },
    {
      id: 17,
      product: "BLUE FLAME TEE",
      slug: "blue-flame-tee",
      type: "BACK",
      category: "SALE",
      image: `${IMAGE_BASE}/Blue-flame-2.webp`,
      alt: "ZENJI BLUE FLAME TEE anime streetwear, back",
    },
    {
      id: 18,
      product: "WATER BREATHING TEE",
      slug: "water-breathing-tee",
      type: "BACK",
      category: "NEW_ARRIVAL",
      image: `${IMAGE_BASE}/Water-breathing-2.webp`,
      alt: "ZENJI WATER BREATHING TEE anime streetwear, back",
    },
    {
      id: 19,
      product: "FREE SOUL TEE",
      slug: "free-soul-tee",
      type: "ON MODEL",
      category: "LIMITED",
      image: `${IMAGE_BASE}/Free-soul-5.webp`,
      alt: "ZENJI FREE SOUL TEE anime streetwear, on model",
    },
    {
      id: 20,
      product: "LIMITLESS TEE",
      slug: "limitless-tee",
      type: "ON MODEL",
      category: "LIMITED",
      image: `${IMAGE_BASE}/Limitless-5.webp`,
      alt: "ZENJI LIMITLESS TEE anime streetwear, on model",
    },
    {
      id: 21,
      product: "WILL OF THE SUN TEE",
      slug: "will-of-the-sun-tee",
      type: "BACK",
      category: "SALE",
      image: `${IMAGE_BASE}/Will-of-the-sun-2.webp`,
      alt: "ZENJI WILL OF THE SUN TEE anime streetwear, back",
    },
    {
      id: 22,
      product: "LIMITLESS TEE",
      slug: "limitless-tee",
      type: "BACK",
      category: "LIMITED",
      image: `${IMAGE_BASE}/Limitless-2.webp`,
      alt: "ZENJI LIMITLESS TEE anime streetwear, back",
    },
    {
      id: 23,
      product: "DEMON BLOOD TEE",
      slug: "demon-blood-tee",
      type: "ON MODEL",
      category: "SALE",
      image: `${IMAGE_BASE}/Demon-blood-5.webp`,
      alt: "ZENJI DEMON BLOOD TEE anime streetwear, on model",
    },
    {
      id: 24,
      product: "WATER BREATHING TEE",
      slug: "water-breathing-tee",
      type: "ON MODEL",
      category: "NEW_ARRIVAL",
      image: `${IMAGE_BASE}/Water-breathing-5.webp`,
      alt: "ZENJI WATER BREATHING TEE anime streetwear, on model",
    },
    {
      id: 25,
      product: "PARADISE SPIRIT TEE",
      slug: "paradise-spirit-tee",
      type: "ON MODEL",
      category: "THE_ORIGIN_DROP",
      image: `${IMAGE_BASE}/Paradise-spirit-5.webp`,
      alt: "ZENJI PARADISE SPIRIT TEE anime streetwear, on model",
    },
    {
      id: 26,
      product: "DOMAIN EXPANSION TEE",
      slug: "domain-expansion-tee",
      type: "BACK",
      category: "THE_ORIGIN_DROP",
      image: `${IMAGE_BASE}/Domain-expansion-2.webp`,
      alt: "ZENJI DOMAIN EXPANSION TEE anime streetwear, back",
    },
    {
      id: 27,
      product: "FREE SOUL TEE",
      slug: "free-soul-tee",
      type: "BACK",
      category: "LIMITED",
      image: `${IMAGE_BASE}/Free-soul-2.webp`,
      alt: "ZENJI FREE SOUL TEE anime streetwear, back",
    },
    {
      id: 28,
      product: "BLUE FLAME TEE",
      slug: "blue-flame-tee",
      type: "FRONT",
      category: "SALE",
      image: `${IMAGE_BASE}/Blue-flame-1.webp`,
      alt: "ZENJI BLUE FLAME TEE anime streetwear, front",
    },
    {
      id: 29,
      product: "WILL OF THE SUN TEE",
      slug: "will-of-the-sun-tee",
      type: "ON MODEL",
      category: "SALE",
      image: `${IMAGE_BASE}/Will-of-the-sun-5.webp`,
      alt: "ZENJI WILL OF THE SUN TEE anime streetwear, on model",
    },
    {
      id: 30,
      product: "WARRIOR SPIRIT TEE",
      slug: "warrior-spirit-tee",
      type: "FRONT",
      category: "SALE",
      image: `${IMAGE_BASE}/Warrior-spirit-1.webp`,
      alt: "ZENJI WARRIOR SPIRIT TEE anime streetwear, front",
    },
  ];

  const filterTabs = ["ALL", "FRONT", "BACK", "ON MODEL"];

  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredImages = useMemo(() => {
    if (activeFilter === "ALL") {
      return collectionImages;
    }

    return collectionImages.filter((item) => item.type === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-black text-stark-white p-[120px_6%_80px]">
        <div className="relative z-10">
          <span className="mb-4 block text-[10px] tracking-widest text-span font-jetbrains">
            THE_ORIGIN_DROP // EDITORIAL
          </span>
          <h1 className="text-[64px] uppercase leading-none md:text-[120px] font-anton text-white">
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
                —
              </span>
            </span>
            <span className="block">
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-400 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                LOOK&nbsp;
              </span>
            </span>
            <span className="block">
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-500 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                BOOK&nbsp;
              </span>
            </span>
          </h1>
          <p className="mt-6 text-[14px] text-[#999] font-ibm">
            The Origin Drop, The Full Visual Archive
          </p>
        </div>
        <span className="pointer-events-none absolute right-[6%] top-1/2 z-0 hidden -translate-y-1/2 select-none text-[200px] leading-none md:block font-anton text-[#ffffff0a]">
          2024
        </span>
        <div className="relative z-10 mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:justify-between font-jetbrains">
          <span className="text-[11px] text-[#999]">
            10 PIECES // THE_ORIGIN_DROP
          </span>
          <span className="text-[11px] text-[#999]">
            ANIME STREETWEAR // AUSTRALIA
          </span>
        </div>
      </section>
      <section className="bg-white">
        {/* FILTER BAR */}
        <div className="sticky top-0 z-10 flex flex-col items-start gap-2 border-b border-black bg-white px-[6%] py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          {/* FILTERS */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={`flex min-h-11 items-center border cursor-none px-4 py-2 text-[11px] uppercase transition-colors duration-150 font-jetbrains ${
                    isActive
                      ? "border-black bg-black text-white"
                      : "border-black/20 bg-transparent text-black hover:border-black"
                  }`}>
                  {filter}
                </button>
              );
            })}
          </div>

          {/* IMAGE COUNT */}
          <span className="text-[11px] text-[#666] font-jetbrains">
            {filteredImages.length} IMAGES
          </span>
        </div>

        {/* MASONRY GALLERY */}
        <div className="px-[6%] py-6">
          <div className="columns-2 gap-4 md:columns-3 lg:columns-3">
            {filteredImages.map((item) => (
              <Link
                key={item.id}
                to={`/drop/${item.slug}`}
                className="group relative mb-4 block overflow-hidden cursor-none"
                style={{
                  breakInside: "avoid",
                }}>
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={1000}
                    className="block h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 flex flex-col justify-between bg-black/0 p-4 transition-colors duration-300 group-hover:bg-black/70">
                    {/* TOP LABEL */}
                    <span className="text-[10px] uppercase text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-jetbrains">
                      {item.category}
                    </span>

                    {/* BOTTOM CONTENT */}
                    <div className="translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-[20px] uppercase text-white font-anton">
                        {item.product}
                      </p>

                      <p className="text-[10px] text-white/50 font-jetbrains">
                        {item.type}
                      </p>

                      <p className="mt-2 text-[11px] text-span font-jetbrains">
                        VIEW PRODUCT →
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* EMPTY STATE */}
          {filteredImages.length === 0 && (
            <div className="flex min-h-75 items-center justify-center border border-black/10">
              <p className="text-xs uppercase tracking-widest text-ink-muted font-jetbrains">
                NO IMAGES FOUND
              </p>
            </div>
          )}
        </div>
      </section>
      <section ref={sectionRefThree} className="bg-black text-center text-white p-[80px_6%]">
        <h2 className="mb-4 text-[40px] uppercase md:text-[64px] font-anton text-white">
          <span className="block">
            <span
              className={`${isVisibleThree ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-500 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
              SHOP&nbsp;
            </span>
            <span
              className={`${isVisibleThree ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-600 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
              THE&nbsp;
            </span>
            <span
              className={`${isVisibleThree ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-700 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
              COLLECTION
            </span>
          </span>
        </h2>
        <p className="mb-8 text-[14px] text-[#666] font-ibm">
          Every piece from The Origin Drop, limited stock.
        </p>
        <Link
          className="inline-block px-12 py-4 font-anton bg-span text-[16px] uppercase text-white transition-colors hover:bg-[#930100]!"
          tabIndex="0"
          to={"/collection"}>
          SHOP NOW
        </Link>
      </section>
    </>
  );
};

export default Lookbook;
