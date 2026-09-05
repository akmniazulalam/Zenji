import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";

const images = [
  {
    src: "/Warrior-spirit-5.avif",
    alt: "ZENJI WARRIOR SPIRIT TEE anime streetwear graphic",
    overlayText: "WARRIOR SPIRIT TEE",
    buttonText: "SHOP WARRIOR SPIRIT TEE →",
  },
  {
    src: "/Blue-flame-4.avif",
    alt: "ZENJI BLUE FLAME TEE anime streetwear graphic",
    overlayText: "BLUE FLAME TEE",
    buttonText: "SHOP BLUE FLAME TEE →",
  },
  {
    src: "/Demon-blood-4.avif",
    alt: "ZENJI DEMON BLOOD TEE anime streetwear graphic",
    overlayText: "DEMON BLOOD TEE",
    buttonText: "SHOP DEMON BLOOD TEE →",
  },
  {
    src: "/Will-of-the-sun-4.avif",
    alt: "ZENJI WILL OF THE SUN TEE anime streetwear graphic",
    overlayText: "WILL OF THE SUN TEE",
    buttonText: "SHOP WILL OF THE SUN TEE →",
  },
];

// Card 1 is the established first state. Each later entry begins exactly when
// the preceding card has arrived, so continued scrolling starts the next phase.
const entryStarts = [0, 0.14, 0.4, 0.66];
const entryEnds = [0, 0.4, 0.66, 0.92];
const finalScales = [0.82, 0.88, 0.94, 1];
const enterFromY = "96vh";

const StackCard = ({ image, scrollYProgress, index }) => {
  // All Y keyframes use viewport units. Mixing vh and px makes Motion change
  // units at the start of an interpolation, which visually pops the card in.
  const stackOffset = `${index * 4.5}vh`;
  const isFirstCard = index === 0;
  const isLastCard = index === images.length - 1;
  const yInputs = isFirstCard
    ? [0, 1]
    : [0, entryStarts[index], entryEnds[index], 1];
  const yOutputs = isFirstCard
    ? ["0vh", "0vh"]
    : [enterFromY, enterFromY, stackOffset, stackOffset];
  const y = useTransform(scrollYProgress, yInputs, yOutputs);

  // A card scales only while its direct successor moves into the stack.
  const scaleInputs = isLastCard
    ? [0, 1]
    : [0, entryStarts[index + 1], entryEnds[index + 1], 1];
  const scaleOutputs = isLastCard
    ? [1, 1]
    : [1, 1, finalScales[index], finalScales[index]];
  const cardScale = useTransform(scrollYProgress, scaleInputs, scaleOutputs);

  return (
    <motion.div
      style={{ y, scale: cardScale, zIndex: index + 1 }}
      className="stack-card-motion">
      <article className="stack-card">
        <img
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
        />

        {/* Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/85 to-transparent p-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-span font-jetbrains">
            COLLECTION <span className="text-white/45">// THE_ORIGIN_DROP</span>
          </span>

          <Link
            to={"/"}
            className="mt-2 text-[32px] font-anton uppercase leading-none text-white transition-colors hover:text-span md:text-[40px] block cursor-none">
            {image.overlayText}
          </Link>

          <Link
            to={"/"}
            className="mt-5 inline-block border-b border-current pb-1 text-[11px] font-jetbrains uppercase tracking-widest text-white transition-colors hover:border-span hover:text-span cursor-none">
            {image.buttonText}
          </Link>
        </div>
      </article>
    </motion.div>
  );
};

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
      "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Water-breathing-1.webp",
    mainAlt: "ZENJI WATER BREATHING TEE anime streetwear, front",
    hoverImg:
      "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products/Water-breathing-2.webp",
    hoverAlt: "ZENJI WATER BREATHING TEE anime streetwear, back",
    title: "WATER BREATHING TEE",
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

const Home = () => {
  const scrollRef = useRef(null);
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

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  return (
    <>
      <section>
        <video
          autoPlay
          playsInline
          muted
          loop
          poster="/hero-poster.webp"
          aria-hidden="true"
          className="absolute top-0 left-0 h-full w-full object-cover object-center">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </section>
      <section>
        <div className="px-6 py-12 flex items-end justify-between gap-6">
          <div className="">
            <span className="block text-xs text-span font-jetbrains uppercase tracking-widest">
              COLLECTION // THE_ORIGIN_DROP
            </span>
            <h2 className="mt-3 text-5xl font-anton uppercase leading-none tracking-tight text-black md:text-7xl">
              sale
            </h2>
          </div>
          <Link
            to={"/collection"}
            className={
              "shrink-0 whitespace-nowrap border border-black px-6 py-3 text-xs uppercase tracking-widest text-black font-jetbrains transition-colors hover:bg-black hover:text-white cursor-none"
            }>
            View_all
          </Link>
        </div>
        <div ref={scrollRef} className="stack-scroll-section">
          <div className="stack-sticky-viewport">
            <div className="stack-stage">
              {images.map((image, index) => (
                <StackCard
                  key={image.src}
                  image={image}
                  scrollYProgress={scrollYProgress}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-white py-24">
        <div className="flex items-end justify-between gap-6 bg-white px-6 py-12">
          <div className="">
            <span className="block text-xs uppercase tracking-widest font-jetbrains text-span">
              COLLECTION // THE_ORIGIN_DROP
            </span>
            <h2 className="mt-3 text-5xl uppercase leading-none tracking-tight text-black md:text-7xl font-anton">
              LATEST_DROPS
            </h2>
          </div>
          <Link
            to={"/drop"}
            className="shrink-0 whitespace-nowrap border border-black px-6 py-3 text-xs uppercase tracking-widest text-black font-jetbrains transition-colors hover:bg-black hover:text-white cursor-none">
            View_all
          </Link>
        </div>
        <div className="mb-16"></div>
        <section className="relative mt-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 md:w-40 bg-linear-to-r from-[#faf8f4] via-[#faf8f4]/80 to-transparent"></div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 md:w-40 bg-linear-to-l from-[#faf8f4]  via-[#faf8f4]/80  to-transparent"></div>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-margin-mobile pb-6 justify-center-safe md:gap-6 md:px-margin-desktop scrollbar-none [&::-webkit-scrollbar]:hidden">
            {latestDrops.map((item, index) => (
              <div
                key={index}
                className="w-[82vw] flex-none snap-start sm:w-[46vw] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]">
                <div className="flex flex-col overflow-hidden border border-deep-black bg-stark-white">
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
      </section>
      <section
        ref={sectionRef}
        aria-label="The ZENJI Ethos"
        className="relative bg-black overflow-hidden w-full h-screen visible">
        <img
          src="/background_2.avif"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-[.75] contrast-[1.05]"
        />
        <div className="bg-linear-90 from-0% via-50% to-100% from-black/58 via-black/16 to-black/3 absolute inset-0"></div>
        <div className="absolute left-[6%] top-1/2 z-2 max-w-95 -translate-y-1/2">
          <span
            className={`${isVisible ? "opacity-100" : "opacity-0"} delay-100 block font-jetbrains text-[10px] text-span tracking-[.3em] transition-[opacity,transform] duration-800 ease-out`}>
            MANIFESTO_001
          </span>
          <div
            aria-hidden="true"
            className={`w-10 bg-span h-px my-4 mx-0 delay-100 ${isVisible ? "opacity-100" : "opacity-0"} transition-[opacity,transform] duration-800 ease-out`}></div>
          <h2
            className={`${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7.5"} delay-300 transition-[opacity,transform] duration-800 ease-out font-anton uppercase m-0 text-[80px] leading-none`}>
            <span className="block">
              <span className="text-white block">THE</span>
            </span>
            <span className="block">
              <span className="text-span block">ZENJI</span>
            </span>
            <span className="block">
              <span className="text-white block">ETHOS</span>
            </span>
          </h2>
          <p
            className={`${isVisible ? "opacity-100" : "opacity-0"} transition-[opacity,transform] duration-800 ease-out delay-600 mt-8 mb-10 max-w-105 text-[13px] text-white/60 font-ibm leading-[1.8]`}>
            We exist at the intersection of technical precision and cultural
            expression. Our garments are engineered for those navigating an
            increasingly fragmented world, built from Japanese craftsmanship,
            anime culture and modern Australian streetwear.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
