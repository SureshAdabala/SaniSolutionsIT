import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  {
    image: heroSlide1,
    headline: "Empowering Skills. Enabling Careers.",
    subtext: "ISO 9001:2015 Certified | Skill Development & Placement Partner",
    cta: "Explore Training Programs",
    ctaHref: "#services",
  },
  {
    image: heroSlide2,
    headline: "Your Trusted IT & HR Solutions Partner",
    subtext: "Corporate Training | Staffing | Managed IT | BPO",
    cta: "Hire Talent / Corporate Services",
    ctaHref: "#services",
  },
  {
    image: heroSlide3,
    headline: "Driving National Skill Development",
    subtext: "NSDC | KSDC | PMKVY | Government Training Partner",
    cta: "View Government Projects",
    ctaHref: "#government",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].headline}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/75 to-navy-dark/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 via-transparent to-navy-dark/30" />

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          {/* ISO badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-8"
          >
            <Shield size={14} className="text-gold" />
            <span className="text-xs font-semibold tracking-wider uppercase text-gold">
              ISO 9001:2015 Certified
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-primary-foreground">
                {slides[current].headline}
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/70 mb-10 max-w-xl leading-relaxed">
                {slides[current].subtext}
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo(slides[current].ctaHref)}
                  className="btn-primary-san"
                >
                  {slides[current].cta}
                </button>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="btn-outline-san"
                >
                  Get in Touch
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full glass-dark flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === current ? "w-8 bg-gold" : "w-2 bg-primary-foreground/30"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full glass-dark flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
