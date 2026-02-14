import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi SAN IT! I'm ${form.name} (${form.email}). ${form.message}`;
    window.open(`https://wa.me/919980932551?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold-dark mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info + map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "C.M. Tower, #76/3, 30th Cross, Tilaknagar Main Road, Jayanagar, Bangalore – 560 041" },
                { icon: Phone, text: "+91 99809 32551 | +91 80-2664 0299" },
                { icon: Mail, text: "info@sanitsolutions.in" },
              ].map((item) => (
                <div key={item.text} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex-shrink-0 flex items-center justify-center">
                    <item.icon className="text-gold-dark" size={18} />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pt-2">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden h-[250px] shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6077193477756!2d77.5782!3d12.9279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzQwLjQiTiA3N8KwMzQnNDEuNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="SAN IT Office Location"
              />
            </div>

            <a
              href="https://wa.me/919980932551"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-san w-full justify-center"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Quick form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
              <h3 className="text-xl font-display font-bold text-foreground mb-2">Send us a Message</h3>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold/30 focus:border-gold outline-none transition-all text-sm resize-none"
                />
              </div>
              <button type="submit" className="btn-primary-san w-full justify-center">
                <Send size={16} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
