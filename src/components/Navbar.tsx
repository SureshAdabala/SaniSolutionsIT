import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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

  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          setActive(hash);
        }
      }, 0);
    }
  }, [hash, pathname]);

  const scrollTo = (href: string) => {
    setOpen(false);

    // Cross-page navigation
    if (pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.location.hash = href;
        // Ensure scroll happens after navigation and hash set
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          setActive(href);
        }
      }, 300); // Increased delay to ensure page load
      return;
    }

    // Same-page navigation
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      // Small delay to allow mobile menu to close/animation to start
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
        setActive(href);
        window.history.pushState(null, "", href);
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white ${scrolled
        ? "py-2 shadow-lg"
        : "py-4"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <button onClick={() => scrollTo("#home")} className="flex items-center gap-2">
          <img src={logo} alt="SAN IT Solutions Logo" className="w-10 h-10 rounded-lg object-contain" />
          <img src="/new-logo.png.jpg" alt="SAN IT Solutions" className="h-8 object-contain" />
        </button>

        <nav className="hidden xl:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${active === link.href
                ? "text-blue-600 bg-blue-50"
                : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <a
            href="tel:+919980932551"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Phone size={14} />
            +91 99809 32551
          </a>
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden p-2 text-gray-700"
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
            className="xl:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`px-4 py-3 text-left text-sm font-medium rounded-lg transition-all ${active === link.href
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="h-px bg-gray-100 my-2" />
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/login");
                }}
                className="px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-all"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/signup");
                }}
                className="px-4 py-3 text-left text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
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
