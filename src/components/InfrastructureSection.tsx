import { motion } from "framer-motion";
import { Monitor, MapPin, Users, Building } from "lucide-react";

const features = [
  {
    icon: Building,
    title: "16 Premium Classrooms",
    desc: "State-of-the-art training rooms with latest technology, AC, power backup & ample parking at C.M. Tower, Jayanagar.",
  },
  {
    icon: Monitor,
    title: "500+ Seat Capacity",
    desc: "Fully equipped infrastructure accommodating large-scale corporate and government training batches.",
  },
  {
    icon: MapPin,
    title: "PAN-India Infrastructure",
    desc: "Onsite and offsite training support across India through our extensive partner network.",
  },
  {
    icon: Users,
    title: "500+ Expert Trainers",
    desc: "Certified trainers across all technologies ensuring highest quality training delivery.",
  },
];

const InfrastructureSection = () => {
  return (
    <section id="infrastructure" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-dark mb-4 block">
            Infrastructure
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            World-Class Training Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground">
            Preferred infrastructure provider for major IT giants like Accenture, Wipro, and more.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 flex gap-5"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex-shrink-0 flex items-center justify-center">
                <feature.icon className="text-gold-dark" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
