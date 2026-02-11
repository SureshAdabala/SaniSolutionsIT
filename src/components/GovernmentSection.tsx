import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const sscBadges = ["ESSCI", "TSSC", "NASSCOM", "RSDC", "RASCI"];

const govtPrograms = [
  "KSDC", "PMKVY", "CMKKY", "NAPS", "NATS", "BBMP", "NULM", "NRLM",
  "KEONICS", "CCTNS", "DGR", "NIELIT", "MEPMA", "RPL", "NDLM"
];

const GovernmentSection = () => {
  return (
    <section id="government" className="section-padding section-alt">
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

        {/* NSDC SSCs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            NSDC Sector Skill Councils
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {sscBadges.map((badge) => (
              <div
                key={badge}
                className="glass-card rounded-xl px-6 py-4 flex items-center gap-3"
              >
                <Shield size={18} className="text-gold-dark" />
                <span className="font-semibold text-foreground">{badge}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Government Programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">
            Government Schemes & Programs
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {govtPrograms.map((program) => (
              <span
                key={program}
                className="px-5 py-2.5 rounded-lg bg-navy/5 text-navy font-medium text-sm border border-navy/10 hover:bg-navy/10 transition-colors cursor-default"
              >
                {program}
              </span>
            ))}
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
