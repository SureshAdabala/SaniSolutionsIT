import { motion } from "framer-motion";

const clients = [
  { name: "Accenture", src: "/Accenture-Logo.png" },
  { name: "Wipro", src: "/Wipro-Logo.png" },
  { name: "Oracle", src: "/Oracle-Logo.png" },
  { name: "HP", src: "/HP-Logo.png" },
  { name: "TCS", src: "/TCS-Logo.jpg" },
  { name: "Capgemini", src: "/Capgemini-Logo.jpg" },
  { name: "Cognizant", src: "/Cognizant-Logo.jpg" },
  { name: "Tech Mahindra", src: "/Tech Mahindra-Logo.png" },
  { name: "IBM", src: "/IBM-Logo.png" },
  { name: "LG", src: "/LG-Logo.png" },
  { name: "Dell", src: "/Dell-Logo.png" },
  { name: "NIIT", src: "/NIIT-Logo.png" },
  { name: "Tally", src: "/Tally-Logo.png" },
  { name: "BHEL", src: "/BHEL-Logo.png" },
  { name: "Canara Bank", src: "/Canara Bank-Logo.png" },
  { name: "Mindtree", src: "/Mindtree-Logo.png" },
  { name: "Valtech", src: "/Valtech-Logo.png" },
  { name: "Govt of Karnataka", src: "/Govt of Karnataka-Logo.png" },
  { name: "NSDC", src: "/NSDC-Logo.png" },
  { name: "KEONICS", src: "/KEONICS-Logo.jpeg" },
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="glass-card rounded-xl p-4 flex items-center justify-center h-28 group hover:bg-white/50 transition-colors duration-300"
            >
              <img
                src={client.src}
                alt={`${client.name} Logo`}
                className="max-h-16 max-w-full object-contain transition-all duration-300 opacity-80 group-hover:opacity-100"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden font-semibold text-muted-foreground text-sm text-center">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
