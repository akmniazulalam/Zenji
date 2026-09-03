import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";

const images = [
  {
    src: "/Demon-blood-4.avif",
    alt: "ZENJI DEMON BLOOD TEE anime streetwear graphic",
    overlayText: "DEMON BLOOD TEE",
    buttonText: "SHOP DEMON BLOOD TEE →",
  },
  {
    src: "/Blue-flame-4.avif",
    alt: "ZENJI BLUE FLAME TEE anime streetwear graphic",
    overlayText: "BLUE FLAME TEE",
    buttonText: "SHOP BLUE FLAME TEE →",
  },
  {
    src: "/Will-of-the-sun-4.avif",
    alt: "ZENJI WILL OF THE SUN TEE anime streetwear graphic",
    overlayText: "WILL OF THE SUN TEE",
    buttonText: "SHOP WILL OF THE SUN TEE →",
  },
  {
    src: "/Warrior-spirit-5.avif",
    alt: "ZENJI WARRIOR SPIRIT TEE anime streetwear graphic",
    overlayText: "WARRIOR SPIRIT TEE",
    buttonText: "SHOP WARRIOR SPIRIT TEE →",
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

const Home = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  return (
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
  );
};

export default Home;
