import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const serviceItems = [
  { label: "Government Projects", href: "#government" },
  { label: "Skill Development & Placements", href: "#services" },
  { label: "Corporate Trainings", href: "#services" },
  { label: "HR Services", href: "#services" },
  { label: "Outsourcing & Managed IT", href: "#services" },
  { label: "BPO Services", href: "#services" },
  { label: "Talent Incubation", href: "#services" },
];

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
    // Always scroll to top on load/refresh
    window.scrollTo(0, 0);
    setActive("#home");

    // Clear hash from URL so it doesn't look like we are at a specific section
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []); // Run only once on mount

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
          <img src={logo} alt="SAN IT Solutions Logo" className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-contain" />
          <img src="/new-logo.png.jpg" alt="SAN IT Solutions" className="h-6 md:h-8 object-contain" />
        </button>

        <nav className="hidden lg:flex items-center gap-1 ml-auto mr-4 xl:mr-10">
          {links.map((link) => {
            if (link.label === "Services") {
              return (
                <div key={link.label} className="relative group">
                  <button
                    onClick={() => scrollTo(link.href)}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${active === link.href || active === "#government"
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute top-full -left-12 mt-2 w-[600px] bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6 grid grid-cols-2 gap-4 translate-y-2 group-hover:translate-y-0 z-50">
                    {serviceItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => scrollTo(item.href)}
                        className="text-left p-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors border border-transparent hover:border-gray-100"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }
            return (
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
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => window.open("https://wa.me/919980932551", "_blank")}
            className="px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Enquiry
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-gray-700"
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
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <div key={link.href}>
                  {link.label === "Services" ? (
                    <div>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium rounded-lg transition-all ${active === link.href || active === "#government"
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:bg-gray-50"
                          }`}
                      >
                        {link.label}
                        <ChevronDown size={16} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-gray-50/50 rounded-lg overflow-hidden mx-4"
                          >
                            {serviceItems.map((item) => (
                              <button
                                key={item.label}
                                onClick={() => scrollTo(item.href)}
                                className="w-full text-left px-4 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors border-l-2 border-transparent hover:border-blue-600 pl-4"
                              >
                                {item.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => scrollTo(link.href)}
                      className={`w-full px-4 py-3 text-left text-sm font-medium rounded-lg transition-all ${active === link.href
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                      {link.label}
                    </button>
                  )}
                </div>
              ))}
              <div className="h-px bg-gray-100 my-2" />
              <button
                onClick={() => {
                  setOpen(false);
                  window.open("https://wa.me/919980932551", "_blank");
                }}
                className="px-4 py-3 text-left text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-all"
              >
                Enquiry
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
