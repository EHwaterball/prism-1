"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const formula = [
  ["100 MG", "Natural caffeine", "Clean, controlled energy."],
  ["Honey", "Primary sweetener", "A smoother kind of sweet."],
  ["Carbs", "Fuel for movement", "Usable energy for the work ahead."],
  ["Electrolytes", "Built for hydration", "Selected for active days."],
  ["Vitamins", "Daily support", "A refined finishing layer."],
];

const moments = [
  {
    title: "HYROX-STYLE INTENSITY",
    image: "https://prism-performance-energy.iannkiim.chatgpt.site/stock/sled-push.jpg",
    alt: "Athlete pushing a weighted sled in an indoor training space",
  },
  {
    title: "FUNCTIONAL TRAINING",
    image: "https://prism-performance-energy.iannkiim.chatgpt.site/stock/sled-training.jpg",
    alt: "Athlete driving a weighted sled across gym turf",
  },
  {
    title: "LONG-DAY ENDURANCE",
    image: "https://prism-performance-energy.iannkiim.chatgpt.site/stock/trail-runner.jpg",
    alt: "Trail runner moving through a forest path",
  },
];

const reveal = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
};

function PrismMark() {
  return (
    <span className="mark" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

function Nav() {
  return (
    <header className="site-nav">
      <a className="brand" href="#top" aria-label="PRISM home">
        <PrismMark />
        <span>PRISM</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#formula">Formula</a>
        <a href="#why">Why PRISM</a>
        <a href="#performance">Performance</a>
        <a href="#ambassador">Ambassador</a>
      </nav>
      <a className="nav-cta" href="#shop">
        Get PRISM
      </a>
    </header>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -70]);
  const heroRotate = useTransform(scrollYProgress, [0, 0.25], [0, -4]);

  return (
    <main id="top">
      <Nav />

      <section className="hero section-pad" aria-labelledby="hero-title">
        <div className="hero-copy">
          <motion.p className="eyebrow" {...reveal}>
            Energy, refined.
          </motion.p>
          <motion.h1
            id="hero-title"
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.08 }}
          >
            FUEL YOUR
            <span>PERFORMANCE.</span>
          </motion.h1>
          <motion.p
            className="hero-text"
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.16 }}
          >
            PRISM combines natural caffeine, honey, carbohydrates,
            electrolytes, and vitamins for energy designed around real
            movement.
          </motion.p>
          <motion.div
            className="hero-actions"
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.24 }}
          >
            <a className="button primary" href="#shop">
              Get PRISM
            </a>
            <a className="button secondary" href="#formula">
              Discover the Formula
            </a>
          </motion.div>
          <motion.div
            className="proof-strip"
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.32 }}
          >
            <span>100mg natural caffeine</span>
            <span>Honey</span>
            <span>Carbs</span>
            <span>Electrolytes</span>
          </motion.div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <motion.div className="spectral-ring" style={{ y: heroY }} />
          <motion.div className="can-wrap" style={{ y: heroY, rotate: heroRotate }}>
            <Image
              src="https://prism-performance-energy.iannkiim.chatgpt.site/assets/prism-spectrum-can.png"
              alt=""
              width={964}
              height={1632}
              priority
              sizes="(max-width: 900px) 72vw, 36vw"
            />
          </motion.div>
          <div className="flavor-note">
            <span>Spectrum</span>
            <b>White peach + citrus + berry</b>
          </div>
        </div>
      </section>

      <section className="manifesto section-pad" id="why" aria-labelledby="manifesto-title">
        <motion.div className="manifesto-grid" {...reveal}>
          <div>
            <p className="eyebrow">The point</p>
            <h2 id="manifesto-title">ENERGY ISN&apos;T ENOUGH.</h2>
          </div>
          <div className="manifesto-copy">
            <p>Your body needs more than a bigger jolt to perform.</p>
            <p>
              PRISM is a cleaner approach to performance energy: natural
              caffeine for focus, carbohydrates and honey for usable fuel,
              electrolytes for active days, and vitamins to round out the
              formula.
            </p>
          </div>
        </motion.div>
        <div className="marquee" aria-hidden="true">
          <span>TRAINING / RUNNING / LIFTING / HYROX / HIKING / PICKUP / </span>
          <span>TRAINING / RUNNING / LIFTING / HYROX / HIKING / PICKUP / </span>
        </div>
      </section>

      <section className="formula section-pad" id="formula" aria-labelledby="formula-title">
        <motion.div className="section-head" {...reveal}>
          <p className="eyebrow">The formula</p>
          <h2 id="formula-title">ENERGY + FUEL + HYDRATION.</h2>
        </motion.div>
        <div className="formula-stage">
          <div className="formula-core">
            <PrismMark />
            <span>PRISM</span>
          </div>
          {formula.map(([amount, title, body], index) => (
            <motion.article
              className="ingredient"
              key={title}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
            >
              <span>{amount}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="product-story section-pad" aria-labelledby="product-title">
        <div className="sticky-product">
          <Image
            src="https://prism-performance-energy.iannkiim.chatgpt.site/assets/prism-product-collage.png"
            alt="PRISM cans photographed with condensation and flavor variations"
            width={1536}
            height={1024}
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
        <div className="story-steps">
          {["ENERGY.", "FUEL.", "HYDRATION."].map((word, index) => (
            <motion.div className="story-step" key={word} {...reveal}>
              <span>0{index + 1}</span>
              <h2 id={index === 0 ? "product-title" : undefined}>{word}</h2>
              <p>
                {index === 0
                  ? "100mg natural caffeine, balanced for everyday performance."
                  : index === 1
                    ? "Honey and carbohydrates selected around movement, not just sweetness."
                    : "Electrolytes and vitamins to complete the can."}
              </p>
            </motion.div>
          ))}
          <motion.div className="one-drink" {...reveal}>
            <p>One drink.</p>
            <b>PRISM.</b>
          </motion.div>
        </div>
      </section>

      <section className="performance" id="performance" aria-labelledby="performance-title">
        <div className="performance-head section-pad">
          <motion.p className="eyebrow" {...reveal}>
            Built for movement
          </motion.p>
          <motion.h2 id="performance-title" {...reveal}>
            BUILT FOR WHATEVER MOVES YOU.
          </motion.h2>
        </div>
        <div className="image-collage">
          {moments.map((moment, index) => (
            <motion.figure
              key={moment.title}
              className={`moment moment-${index + 1}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.72, delay: index * 0.08 }}
            >
              <Image
                src={moment.image}
                alt={moment.alt}
                fill
                sizes="(max-width: 900px) 88vw, 34vw"
              />
              <figcaption>{moment.title}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section className="comparison section-pad" aria-labelledby="comparison-title">
        <motion.div className="section-head" {...reveal}>
          <p className="eyebrow">Why PRISM</p>
          <h2 id="comparison-title">A BROADER IDEA OF ENERGY.</h2>
        </motion.div>
        <div className="compare-grid">
          <motion.div className="compare-muted" {...reveal}>
            <span>Old playbook</span>
            <p>Stimulate first. Everything else second.</p>
          </motion.div>
          <motion.div
            className="compare-prism"
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.1 }}
          >
            <span>PRISM philosophy</span>
            <p>
              Energy, fuel, and hydration in one can, made with ingredients
              selected around performance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="ambassador section-pad" id="ambassador" aria-labelledby="ambassador-title">
        <motion.div className="ambassador-copy" {...reveal}>
          <p className="eyebrow">Join the signal</p>
          <h2 id="ambassador-title">
            BECOME A PRISM
            <span>AMBASSADOR.</span>
          </h2>
          <p>
            For coaches, hybrid athletes, run clubs, gym owners, creators, and
            everyday movers who want to help bring PRISM into the training
            world.
          </p>
        </motion.div>
        <motion.form
          className="ambassador-form"
          action="mailto:hello@drinkprism.com"
          method="post"
          encType="text/plain"
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.1 }}
        >
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            City
            <input name="city" type="text" autoComplete="address-level2" />
          </label>
          <label>
            Training lane
            <select name="training-lane" defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              <option>HYROX / hybrid racing</option>
              <option>Gym / lifting</option>
              <option>Running / endurance</option>
              <option>Recreational sports</option>
              <option>Creator / community</option>
            </select>
          </label>
          <label className="form-wide">
            Tell us why PRISM fits your world
            <textarea name="message" rows={5} required />
          </label>
          <button className="button primary form-wide" type="submit">
            Contact PRISM
          </button>
        </motion.form>
      </section>

      <section className="final-cta section-pad" id="shop" aria-labelledby="shop-title">
        <motion.div {...reveal}>
          <p className="eyebrow">Ready when you are</p>
          <h2 id="shop-title">
            READY TO
            <span>FUEL YOUR</span>
            PERFORMANCE?
          </h2>
          <a className="button primary" href="mailto:hello@drinkprism.com?subject=Get%20PRISM">
            Get PRISM
          </a>
        </motion.div>
        <motion.div className="closing-cans" whileHover={{ scale: 1.025, rotate: -0.5 }}>
          <Image
            src="https://prism-performance-energy.iannkiim.chatgpt.site/assets/prism-flavors.png"
            alt="Four PRISM flavor cans: lemon lime, mango, berry, and blue raspberry"
            width={1536}
            height={1024}
            sizes="(max-width: 900px) 96vw, 48vw"
          />
        </motion.div>
      </section>

      <footer>
        <div className="footer-brand">
          <PrismMark />
          <span>PRISM</span>
        </div>
        <div className="footer-links">
          <a href="https://instagram.com" rel="noreferrer">
            Instagram
          </a>
          <a href="https://tiktok.com" rel="noreferrer">
            TikTok
          </a>
          <a href="mailto:hello@drinkprism.com">Contact</a>
          <a href="#formula">FAQ</a>
          <a href="#top">Privacy</a>
          <a href="#top">Terms</a>
        </div>
        <p>
          Contains caffeine. Not recommended for children, people sensitive to
          caffeine, or people who are pregnant or nursing. Performance imagery
          sourced from free Pexels stock photography.
        </p>
      </footer>
    </main>
  );
}
