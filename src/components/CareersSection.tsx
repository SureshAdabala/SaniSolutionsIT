import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Send, MessageCircle } from "lucide-react";

const CareersSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", program: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi SAN IT! I'm ${form.name}. Interested in: ${form.program}. Phone: ${form.phone}, Email: ${form.email}`;
    window.open(`https://wa.me/919980932551?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="careers" className="section-padding section-alt">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-dark mb-4 block">
            Careers & Training
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Launch Your Career With Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Placement-linked training programs, internships, and career opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: GraduationCap, title: "Training with Placement", desc: "Industry-aligned skill development with guaranteed placement assistance." },
              { icon: Briefcase, title: "Internship Programs", desc: "Hands-on internships in IT, BPO, and corporate sectors with mentorship." },
              { icon: MessageCircle, title: "WhatsApp Connect", desc: "Quick enquiries via WhatsApp for immediate career guidance and support." },
            ].map((item, i) => (
              <div key={item.title} className="glass-card rounded-2xl p-6 flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex-shrink-0 flex items-center justify-center">
                  <item.icon className="text-gold-dark" size={22} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Application form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <h3 className="text-xl font-display font-bold text-foreground mb-2">Apply Now</h3>
              {[
                { key: "name", label: "Full Name", type: "text" },
                { key: "email", label: "Email Address", type: "email" },
                { key: "phone", label: "Phone Number", type: "tel" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{field.label}</label>
                  <input
                    type={field.type}
                    required
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all text-sm"
                  />
                </div>
              ))}
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Program of Interest</label>
                <select
                  required
                  value={form.program}
                  onChange={(e) => setForm({ ...form, program: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all text-sm"
                >
                  <option value="">Select a program</option>
                  <option>Skill Development & Placement</option>
                  <option>Corporate Training</option>
                  <option>Internship Program</option>
                  <option>Government Skill Program</option>
                  <option>BPO / IT Services</option>
                </select>
              </div>
              <button type="submit" className="btn-primary-san w-full justify-center">
                <Send size={16} />
                Submit via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
