import { motion } from "framer-motion";

const clients = [
  "Accenture", "Wipro", "Oracle", "HP", "TCS", "Capgemini", "Cognizant",
  "Tech Mahindra", "IBM", "LG", "Dell", "NIIT", "Tally", "BHEL",
  "Canara Bank", "Mindtree", "Valtech", "Govt of Karnataka", "NSDC", "KEONICS",
];

const ClientsSection = () => {
  return (
    <section id="clients" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-dark mb-4 block">
            Our Clients
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            Empanelled with leading MNCs, Government bodies, and Fortune 500 companies.
          </p>
        </motion.div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="glass-card rounded-xl p-6 flex items-center justify-center h-24 group cursor-default"
            >
              <span className="font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center text-sm">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
