import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Govt Projects", href: "#government" },
  { label: "Clients", href: "#clients" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleHash = () => {
      const sections = links.map((l) => l.href.slice(1));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleHash);
    return () => window.removeEventListener("scroll", handleHash);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 glass-dark shadow-lg"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <button onClick={() => scrollTo("#home")} className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center font-display font-bold text-navy-dark text-lg">
            S
          </div>
          <div className="hidden sm:block">
            <span className="font-display font-bold text-lg text-primary-foreground leading-none">
              SAN IT Solutions
            </span>
            <span className="block text-[10px] tracking-widest uppercase text-primary-foreground/60">
              ISO 9001:2015 Certified
            </span>
          </div>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                active === link.href
                  ? "text-gold bg-gold/10"
                  : "text-primary-foreground/75 hover:text-primary-foreground hover:bg-primary-foreground/5"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919980932551"
            className="flex items-center gap-2 text-sm font-medium text-primary-foreground/80 hover:text-gold transition-colors"
          >
            <Phone size={14} />
            +91 99809 32551
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-primary-foreground"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-dark overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-all ${
                    active === link.href
                      ? "text-gold bg-gold/10"
                      : "text-primary-foreground/75 hover:bg-primary-foreground/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
