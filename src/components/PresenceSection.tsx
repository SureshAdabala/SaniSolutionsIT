import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const branches = [
  "Bangalore", "Bagalkot", "Bangalore Rural", "Belgaum", "Bellary", "Bidar",
  "Bijapur", "Chamrajnagar", "Chickmagalur", "Chitradurga", "Davangere",
  "Gulbarga", "Hassan", "Haveri", "Hubli", "Kodagu", "Kolar", "Koppal",
  "Mangalore", "Mysore", "Raichur", "Ramanagar", "Shimoga", "Tumkur",
  "Udupi", "Uttara Kannada",
];

const PresenceSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-dark mb-4 block">
            Our Presence
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            200+ Branches Across India
          </h2>
          <p className="text-lg text-muted-foreground">
            Headquartered in Bangalore with branches across Karnataka and PAN-India presence through
            associated partners.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6077193477756!2d77.5782!3d12.9279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzQwLjQiTiA3N8KwMzQnNDEuNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="SAN IT Solutions Location"
            />
          </motion.div>

          {/* Branches grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
              <MapPin size={20} className="text-gold-dark" />
              Karnataka Branches
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {branches.map((branch) => (
                <div
                  key={branch}
                  className="px-3 py-2 rounded-lg bg-muted text-sm text-foreground font-medium"
                >
                  {branch}
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-gold/5 border border-gold/10">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">PAN-India Presence</strong> — We have operational
                infrastructure across India through our network of associated partners.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PresenceSection;
