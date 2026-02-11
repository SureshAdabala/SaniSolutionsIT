import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const sscLogos = [
  { name: "ESSCI", src: "/ESSCI-Logo.jpeg" },
  { name: "TSSC", src: "/TSSC-Logo.png" },
  { name: "NASSCOM", src: "/NASSCOM-Logo.jpeg" },
  { name: "RSDC", src: "/RSDC-Logo.png" },
  { name: "RASCI", src: "/RASCI-Logo.jpeg" },
];

const govtPrograms = [
  { name: "KSDC", src: "/KSDC-Logo.jpg" },
  { name: "PMKVY", src: "/PMKVY-Logo.png" },
  { name: "CMKKY", src: "/CMKKY-Logo.png" },
  { name: "NAPS", src: "/NAPS-Logo.png" },
  { name: "NATS", src: "/NATS-Logo.png" },
  { name: "BBMP", src: "/BBMP-Logo.png" },
  { name: "NULM", src: "/NULM-Logo.webp" },
  { name: "NRLM", src: "/NRLM-Logo.png" },
  { name: "KEONICS", src: "/KEONICS-Logo.jpeg" },
  { name: "CCTNS", src: "/CCTNS-Logo.png" },
  { name: "DGR", src: "/DGR-Logo.jpg" },
  { name: "NIELIT", src: "/NIELIT-Logo.jpg" },
  { name: "MEPMA", src: "/MEPMA-Logo.png" },
  { name: "RPL", src: "/RPL-Logo.jpg" },
  { name: "NDLM", src: "/NDLM-Logo.jpeg" },
];

const GovernmentSection = () => {
  return (
    <section id="government" className="section-padding section-alt overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-dark mb-4 block">
            Government & NSDC
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Trusted Government Partner
          </h2>
          <p className="text-lg text-muted-foreground">
            Affiliated with NSDC Sector Skill Councils and associated with major State & Central Government
            skill development schemes across India.
          </p>
        </motion.div>

        {/* NSDC SSCs Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-8">
            NSDC Sector Skill Councils
          </h3>

          <div className="relative flex overflow-x-hidden group">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...sscLogos, ...sscLogos].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="glass-card rounded-xl px-8 py-4 mx-4 flex items-center justify-center min-w-[200px] h-24 hover:bg-white/50 transition-colors"
                >
                  <img
                    src={logo.src}
                    alt={`${logo.name} Logo`}
                    className="max-h-16 w-auto object-contain mix-blend-multiply"
                  />
                </div>
              ))}
            </div>
            <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
              {[...sscLogos, ...sscLogos].map((logo, index) => (
                <div
                  key={`${logo.name}-duplicate-${index}`}
                  className="glass-card rounded-xl px-8 py-4 mx-4 flex items-center justify-center min-w-[200px] h-24 hover:bg-white/50 transition-colors"
                >
                  <img
                    src={logo.src}
                    alt={`${logo.name} Logo`}
                    className="max-h-16 w-auto object-contain mix-blend-multiply"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Government Programs Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-8">
            Government Schemes & Programs
          </h3>

          <div className="relative flex overflow-x-hidden group">
            <div className="flex animate-marquee-slow whitespace-nowrap">
              {[...govtPrograms, ...govtPrograms].map((program, index) => (
                <div
                  key={`${program.name}-${index}`}
                  className="glass-card rounded-xl p-4 mx-4 flex flex-col items-center justify-center min-w-[180px] h-32 hover:bg-white/50 transition-colors gap-3"
                >
                  <div className="h-16 w-full flex items-center justify-center">
                    <img
                      src={program.src}
                      alt={`${program.name} Logo`}
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{program.name}</span>
                </div>
              ))}
            </div>
            <div className="absolute top-0 flex animate-marquee2-slow whitespace-nowrap">
              {[...govtPrograms, ...govtPrograms].map((program, index) => (
                <div
                  key={`${program.name}-duplicate-${index}`}
                  className="glass-card rounded-xl p-4 mx-4 flex flex-col items-center justify-center min-w-[180px] h-32 hover:bg-white/50 transition-colors gap-3"
                >
                  <div className="h-16 w-full flex items-center justify-center">
                    <img
                      src={program.src}
                      alt={`${program.name} Logo`}
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{program.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 glass-card rounded-2xl p-8 lg:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-display font-bold gradient-text mb-2">50,000+</div>
              <p className="text-sm text-muted-foreground">Candidates trained under Govt. schemes across Karnataka</p>
            </div>
            <div>
              <div className="text-3xl font-display font-bold gradient-text mb-2">25,800+</div>
              <p className="text-sm text-muted-foreground">Students trained under KSDC Kalike Jothige Kaushalya</p>
            </div>
            <div>
              <div className="text-3xl font-display font-bold gradient-text mb-2">36,000+</div>
              <p className="text-sm text-muted-foreground">Police Corps trained under CCTNS project</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GovernmentSection;
