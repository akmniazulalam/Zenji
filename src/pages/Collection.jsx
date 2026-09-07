import React, { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";

const Collection = () => {
  const sectionRef = useRef(null);
  const sectionRefThree = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleThree, setIsVisibleThree] = useState(false);
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
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Bushido-1.webp",
      mainAlt: "ZENJI BUSHIDO TEE anime streetwear, front",
      hoverImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Bushido-2.webp",
      hoverAlt: "ZENJI BUSHIDO TEE anime streetwear, back",
      title: "BUSHIDO TEE",
      salePrice: "A$39.99",
      category: "LIMITED"
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
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Domain-expansion-1.webp",
      mainAlt: "ZENJI DOMAIN EXPANSION TEE anime streetwear, front",
      hoverImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Domain-expansion-2.webp",
      hoverAlt: "ZENJI DOMAIN EXPANSION TEE anime streetwear, back",
      title: "DOMAIN EXPANSION TEE",
      salePrice: "A$39.99",
    },
    {
      mainImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Free-soul-1.webp",
      mainAlt: "ZENJI FREE SOUL TEE anime streetwear, front",
      hoverImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Free-soul-2.webp",
      hoverAlt: "ZENJI FREE SOUL TEE anime streetwear, back",
      title: "FREE SOUL TEE",
      salePrice: "A$39.99",
      category: "LIMITED"
    },
    {
      mainImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Limitless-1.webp",
      mainAlt: "ZENJI LIMITLESS TEE anime streetwear, front",
      hoverImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Limitless-2.webp",
      hoverAlt: "ZENJI LIMITLESS TEE anime streetwear, back",
      title: "LIMITLESS TEE",
      salePrice: "A$39.99",
      category: "LIMITED"
    },
    {
      mainImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Paradise-spirit-1.webp",
      mainAlt: "ZENJI PARADISE SPIRIT TEE anime streetwear, front",
      hoverImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Paradise-spirit-2.webp",
      hoverAlt: "ZENJI PARADISE SPIRIT TEE anime streetwear, back",
      title: "PARADISE SPIRIT TEE",
      salePrice: "A$39.99",
    },
    {
      mainImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Warrior-spirit-2.webp",
      mainAlt: "ZENJI WARRIOR SPIRIT TEE anime streetwear, front",
      hoverImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Warrior-spirit-4.webp",
      hoverAlt: "ZENJI WARRIOR SPIRIT TEE anime streetwear, back",
      title: "WARRIOR SPIRIT TEE",
      originalPrice: "A$39.99",
      salePrice: "A$33.99",
      saleBadge: "SALE 15% OFF",
    },
    {
      mainImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Water-breathing-1.webp",
      mainAlt: "ZENJI WATER BREATHING TEE anime streetwear, front",
      hoverImg:
        "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Water-breathing-2.webp",
      hoverAlt: "ZENJI WATER BREATHING TEE anime streetwear, back",
      title: "WATER BREATHING TEE",
      salePrice: "A$39.99",
      category: "NEW_ARRIVAL"
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

  const [activeTab, setActiveTab] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = ["ALL", "SALE", "NEW_ARRIVAL", "LIMITED", "ZANGETSU"];

  const filteredDrops = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return latestDrops.filter((item) => {
      // Search filter
      const matchesSearch = !query || item.title.toLowerCase().includes(query);

      // Category filter
      let matchesTab = true;

      if (activeTab === "SALE") {
        matchesTab = Boolean(item.saleBadge);
      }

      if (activeTab === "NEW_ARRIVAL") {
        matchesTab = item.category === "NEW_ARRIVAL";
      }

      if (activeTab === "LIMITED") {
        matchesTab = item.category === "LIMITED";
      }

      if (activeTab === "ZANGETSU") {
        matchesTab = item.category === "ZANGETSU";
      }

      return matchesSearch && matchesTab;
    });
  }, [activeTab, searchQuery]);
  return (
    <>
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-black text-stark-white p-[120px_6%_80px]">
        <div className="relative z-10">
          <span className="mb-4 block text-[10px] tracking-widest text-span font-jetbrains">
            THE_ORIGIN_DROP // COMPLETE ARCHIVE
          </span>
          <h1 className="text-[56px] uppercase leading-none md:text-[96px] font-anton text-white">
            <span className="block">
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-100 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                ANIME&nbsp;
              </span>
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-200 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                GRAPHIC&nbsp;
              </span>
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-300 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                TEES&nbsp;
              </span>
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-400 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                —
              </span>
            </span>
            <span className="block">
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-500 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                THE&nbsp;
              </span>
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-600 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                FULL&nbsp;
              </span>
              <span
                className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-700 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                COLLECTION&nbsp;
              </span>
            </span>
          </h1>
          <p className="mt-6 text-[14px] text-[#999] font-ibm">
            Every drop. Every arc. Documented.
          </p>
        </div>
        <span className="pointer-events-none absolute right-[6%] top-1/2 z-0 hidden -translate-y-1/2 select-none text-[200px] leading-none md:block font-anton text-[#ffffff0a]">
          10
        </span>
        <div className="relative z-10 mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:justify-between font-jetbrains">
          <span className="text-[11px] text-[#999]">
            10 PIECES // THE_ORIGIN_DROP // EST_2024
          </span>
          <span className="text-[11px] text-[#999]">
            AUSTRALIA-WIDE SHIPPING
          </span>
        </div>
      </section>
      {/* Collection Filters */}
      <div className="sticky top-17.25 z-30 border-b border-black bg-white px-[6%] py-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  aria-pressed={isActive}
                  className={`cursor-none flex min-h-11 items-center border px-4 py-2 text-[11px] uppercase transition-all duration-200 font-jetbrains ${
                    isActive
                      ? "border-black bg-black text-white"
                      : "border-black/20 bg-transparent text-black hover:border-black hover:bg-black/5"
                  }`}>
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Search + Count */}
          <div className="flex w-full items-center gap-3 lg:w-auto">
            <label htmlFor="collection-search" className="sr-only">
              Search the collection
            </label>

            <input
              id="collection-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH..."
              className="min-h-11 w-full cursor-none border border-black/20 bg-transparent px-3 py-2 text-[11px] uppercase text-black placeholder:text-[#666] focus:border-black focus:outline-none font-jetbrains sm:w-[220px]"
            />

            <span className="whitespace-nowrap text-[11px] text-[#666] font-jetbrains">
              {filteredDrops.length} ITEMS
            </span>
          </div>
        </div>
      </div>

      {/* Product Collection */}
      <section className="bg-white px-[6%] pb-16 pt-8">
        {filteredDrops.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
            {filteredDrops.map((item, index) => (
              <div key={`${item.title}-${index}`} className="min-w-0">
                <div className="overflow-hidden border border-black bg-white">
                  <Link
                    to={`/drop/${item.slug || "blue-flame-tee"}`}
                    className="group flex aspect-3/4 cursor-none flex-col overflow-hidden">
                    {/* Product Image */}
                    <div className="relative flex-1 overflow-hidden bg-surface-warm">
                      {/* Sale Badge */}
                      {item.saleBadge && (
                        <span className="absolute -left-8 top-5 z-20 w-32 -rotate-45 bg-span py-1 text-center text-[9px] font-bold uppercase tracking-[0.5px] text-white font-jetbrains">
                          {item.saleBadge}
                        </span>
                      )}

                      {/* Front Image */}
                      <img
                        src={item.mainImg}
                        alt={item.mainAlt}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300 group-hover:opacity-0"
                      />

                      {/* Hover Image */}
                      <img
                        src={item.hoverImg}
                        alt={item.hoverAlt}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />

                      {/* Quick View */}
                      <div className="absolute bottom-0 left-0 z-20 flex h-11 w-full translate-y-full items-center justify-center bg-black/85 transition-transform duration-300 group-hover:translate-y-0">
                        <span className="text-[10px] uppercase tracking-widest text-white font-jetbrains sm:text-[11px]">
                          QUICK VIEW →
                        </span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="border-t border-black bg-stark-white px-3 py-3 sm:px-4 sm:py-4">
                      <span className="block truncate text-xs uppercase tracking-widest text-black font-anton sm:text-sm">
                        {item.title}
                      </span>

                      <div className="mt-2 flex flex-col gap-1">
                        {/* Original Price */}
                        {item.originalPrice && (
                          <span className="text-[10px] tracking-wider text-gray-400 line-through font-jetbrains sm:text-xs">
                            {item.originalPrice}
                          </span>
                        )}

                        {/* Current Price */}
                        <span
                          className={`text-xl leading-none tracking-wide font-anton sm:text-2xl ${
                            item.originalPrice ? "text-span" : "text-black"
                          }`}>
                          {item.salePrice}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="px-4 pb-4">
                    <div className="flex w-full gap-0 ">
                      <button
                        type="button"
                        aria-pressed="false"
                        aria-label="Save PARADISE SPIRIT TEE to wishlist"
                        className="cursor-none flex w-1/2 items-center justify-center rounded-none border border-black bg-white py-3 text-[13px] uppercase tracking-widest text-black font-anton transition-none hover:bg-gray-100">
                        <span class="sm:hidden" aria-hidden="true">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-heart h-4 w-4"
                            aria-hidden="true">
                            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                          </svg>
                        </span>
                        <span className="hidden sm:inline">♡ WISHLIST</span>
                      </button>
                      <button
                        type="button"
                        aria-label="Add PARADISE SPIRIT TEE to cart"
                        aria-haspopup="dialog"
                        className="cursor-none flex w-1/2 items-center justify-center rounded-none bg-black py-3 text-[13px] uppercase tracking-widest text-white transition-none hover:bg-span font-anton">
                        <span className="sm:hidden" aria-hidden="true">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-shopping-cart h-4 w-4"
                            aria-hidden="true">
                            <path d="m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18"></path>
                            <path d="M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25"></path>
                            <circle cx="18" cy="20" r="2"></circle>
                            <circle cx="8" cy="20" r="2"></circle>
                          </svg>
                        </span>
                        <span className="hidden sm:inline">ADD TO CART →</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-75 items-center justify-center border border-black/10">
            <div className="text-center">
              <p className="font-anton text-2xl uppercase">NO MATCHES</p>

              <p className="mt-3 text-[11px] uppercase text-[#666] font-jetbrains">
                NOTHING IN THE ARCHIVE FOR THIS FILTER
              </p>
              <button type="button" class="mt-6 min-h-11 border border-black px-5 py-2 text-[11px] uppercase text-black transition-colors hover:bg-black hover:text-white font-jetbrains cursor-none" tabIndex="0">CLEAR SEARCH</button>
            </div>
          </div>
        )}
      </section>
      <section ref={sectionRefThree} className="bg-black text-center text-white p-[80px_6%]">
        <h2 className="mb-4 text-[40px] uppercase md:text-[64px] font-anton">
          <span className="block">
              <span
                className={`${isVisibleThree ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-100 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                MORE&nbsp;
              </span>
              <span
                className={`${isVisibleThree ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-200 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                DROPS&nbsp;
              </span>
              <span
                className={`${isVisibleThree ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-300 delay-300 inline-block overflow-hidden pb-[0.15em] mb-[-0.15em] align-bottom`}>
                COMING&nbsp;
              </span>
            </span>
        </h2>
        <p className="mb-8 text-[12px] tracking-widest text-span font-jetbrains">AWAKENING // REDACTED</p>
        <form action="#" method="post" className="mx-auto flex max-w-120 flex-col gap-4 sm:flex-row sm:items-center">
          <input required placeholder="ENTER_EMAIL //" className="w-full flex-1 border-b border-white/30 bg-transparent py-3 text-[13px] text-white placeholder:text-[#666] focus:border-white focus:outline-none sm:w-auto font-jetbrains cursor-none" type="email"/>
          <button type="submit" className="w-full px-6 py-3 text-[14px] uppercase text-white font-anton bg-span transition-colors hover:bg-[#930100]! sm:w-auto cursor-none" tabIndex="0">NOTIFY ME</button>
        </form>
      </section>
    </>
  );
};

export default Collection;
