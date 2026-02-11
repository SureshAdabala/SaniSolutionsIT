import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.getElementById(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center font-display font-bold text-navy-dark text-lg">
                S
              </div>
              <div>
                <span className="font-display font-bold text-lg leading-none block">SAN IT Solutions</span>
                <span className="text-[10px] tracking-widest uppercase text-primary-foreground/50">
                  ISO 9001:2015 Certified
                </span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Your Launchpad to the Next Orbit. Since 2006, empowering skills and enabling careers across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["about", "services", "government", "clients", "careers", "contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="block text-sm text-primary-foreground/60 hover:text-gold transition-colors capitalize"
                >
                  {link === "government" ? "Govt Projects" : link}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold mb-4">Services</h4>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <p>Skill Development</p>
              <p>Corporate Training</p>
              <p>HR & Staffing</p>
              <p>Managed IT</p>
              <p>BPO Services</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex gap-3 items-start text-sm text-primary-foreground/60">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-gold" />
                C.M. Tower, Jayanagar, Bangalore – 560 041
              </div>
              <div className="flex gap-3 items-center text-sm text-primary-foreground/60">
                <Phone size={16} className="text-gold" />
                +91 99809 32551
              </div>
              <div className="flex gap-3 items-center text-sm text-primary-foreground/60">
                <Mail size={16} className="text-gold" />
                info@sanitsolutions.in
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} SAN IT Solutions Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
