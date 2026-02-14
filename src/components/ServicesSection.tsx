import { motion } from "framer-motion";
import {
  GraduationCap, Building2, UserCheck, Server, Headphones, Rocket, Landmark
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Skill Development & Placements",
    desc: "Market-driven training programs with guaranteed placement support for IT, ITES, and vocational skills.",
  },
  {
    icon: Building2,
    title: "Corporate Trainings",
    desc: "Induction, lateral, and intervention-based training for MNCs, blue-chip companies, and PSUs.",
  },
  {
    icon: UserCheck,
    title: "HR Services",
    desc: "Contract, permanent, and temp-to-perm staffing solutions tailored to your workforce needs.",
  },
  {
    icon: Server,
    title: "Outsourcing & Managed IT",
    desc: "IT Service Desk, Network Support, Server Support, Remote Support, and Warranty Services.",
  },
  {
    icon: Headphones,
    title: "BPO Services",
    desc: "Inbound/outbound sales, tech support, data management, email marketing, and help desk services.",
  },
  {
    icon: Rocket,
    title: "Talent Incubation",
    desc: "Train & Hire programs, Finishing School, and blended learning to deploy recruits on live projects.",
  },
  {
    icon: Landmark,
    title: "Government Skill Programs",
    desc: "NSDC, KSDC, PMKVY, CMKKY, NAPS, NATS partner — empowering national skill development.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-dark mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Comprehensive IT & HR Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From skill development to managed IT services, we deliver end-to-end solutions for government,
            corporate, and individual clients.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-7 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center mb-5 transition-colors duration-300">
                <service.icon className="text-gold-dark" size={24} />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
