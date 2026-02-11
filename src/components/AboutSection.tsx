import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Target, Eye, Award, MapPin, Users, Calendar } from "lucide-react";

const stats = [
  { icon: Users, value: 50000, suffix: "+", label: "Candidates Trained" },
  { icon: MapPin, value: 200, suffix: "+", label: "Centers & Partners" },
  { icon: Calendar, value: 2006, suffix: "", label: "Established Since", isYear: true },
  { icon: Award, value: 500, suffix: "+", label: "Expert Trainers" },
];

function AnimatedCounter({ value, suffix, isYear }: { value: number; suffix: string; isYear?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-display font-bold gradient-text">
      {isYear ? count || "" : count.toLocaleString()}
      {suffix}
    </div>
  );
}

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-dark mb-4 block">
            About Us
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Your Launchpad to the Next Orbit
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            SAN IT Solutions Pvt. Ltd., an ISO 9001:2015 certified company founded in 2006, is headquartered in
            Bangalore with a strong PAN-India presence. We are dedicated to providing total IT/ITES solutions,
            skill development, and HR services under one roof.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
              <Eye className="text-gold-dark" size={24} />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the most admired Learning and Skill Development Partner by enabling regular transformation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
              <Target className="text-gold-dark" size={24} />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To maximize the engagement of people by providing superior solutions for understanding, acquiring,
              developing and retaining the talents towards Employment.
            </p>
          </motion.div>
        </div>

        {/* Animated stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-gold-dark" size={24} />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} isYear={stat.isYear} />
              <p className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
