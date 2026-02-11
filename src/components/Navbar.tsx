import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

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
  const navigate = useNavigate();

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "py-2 shadow-lg"
        : "py-4"
        }`}
      style={{ background: scrolled ? 'hsl(220 65% 12% / 0.95)' : 'hsl(220 65% 12% / 0.7)', backdropFilter: 'blur(16px)' }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <button onClick={() => scrollTo("#home")} className="flex items-center gap-2">
          <img src={logo} alt="SAN IT Solutions Logo" className="w-10 h-10 rounded-lg object-contain" />
          <div className="block">
            <span className="font-display font-bold text-lg text-white leading-none">
              SAN IT Solutions
            </span>
            <span className="block text-[10px] tracking-widest uppercase text-white/60">
              ISO 9001:2015 Certified
            </span>
          </div>
        </button>

        <nav className="hidden xl:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${active === link.href
                ? "text-gold bg-gold/10"
                : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <a
            href="tel:+919980932551"
            className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-gold transition-colors"
          >
            <Phone size={14} />
            +91 99809 32551
          </a>
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 text-sm font-medium bg-gold text-white rounded-md hover:bg-gold/90 transition-colors"
          >
            Sign Up
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden p-2 text-white"
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
            className="xl:hidden glass-dark overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-all ${active === link.href
                    ? "text-gold bg-gold/10"
                    : "text-white/75 hover:bg-white/10"
                    }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/login");
                }}
                className="px-4 py-3 text-left text-sm font-medium text-white/75 hover:bg-white/10 rounded-lg transition-all"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/signup");
                }}
                className="px-4 py-3 text-left text-sm font-medium text-gold hover:bg-gold/10 rounded-lg transition-all"
              >
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
