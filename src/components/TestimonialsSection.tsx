import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "SAN IT's training programs transformed our fresh recruits into productive team members within weeks. Exceptional quality and professionalism.",
    name: "Rajesh Kumar",
    role: "HR Director, Leading MNC",
  },
  {
    quote: "We've been partnering with SAN IT for over 5 years for our induction training. Their trainer network and infrastructure are unmatched.",
    name: "Priya Sharma",
    role: "Training Manager, IT Company",
  },
  {
    quote: "The placement-linked skill development program gave me the confidence and skills to secure my dream job in IT. Highly recommended!",
    name: "Anil Prasad",
    role: "Software Developer, Trained at SAN IT",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-dark mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground">
            What People Say
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-8 lg:p-12 text-center"
            >
              <Quote size={40} className="text-gold/30 mx-auto mb-6" />
              <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[current].quote}"
              </p>
              <div>
                <p className="font-display font-bold text-foreground">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-gold" : "w-2 bg-border"
                    }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
