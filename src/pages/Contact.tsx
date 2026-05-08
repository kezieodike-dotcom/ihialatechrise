import { motion } from "motion/react";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
  };

  return (
    <div className="pt-20 pb-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary/60 max-w-2xl mx-auto"
          >
            Have questions about our programs or want to partner with us? We're here to help you navigate your tech journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-primary/5">
              <h3 className="text-2xl font-bold text-primary mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="bg-secondary/10 p-4 rounded-2xl text-secondary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">Email Us</p>
                    <p className="font-bold text-primary">hello@ihialatechrise.org</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="bg-accent/10 p-4 rounded-2xl text-accent">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">Call Us</p>
                    <p className="font-bold text-primary">+234 703 720 8507</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="bg-primary/5 p-4 rounded-2xl text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">Location</p>
                    <p className="font-bold text-primary">Ihiala, Anambra State, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="https://t.me/ihialatechrise" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full flex items-center justify-center gap-3 bg-[#24A1DE]/10 text-[#24A1DE] py-4 rounded-2xl font-bold hover:bg-[#24A1DE] hover:text-white transition-all border border-[#24A1DE]/20"
                >
                  <Send className="w-5 h-5" /> Join Telegram Community
                </a>
              </div>

              <div className="mt-12 pt-12 border-t border-primary/5">
                <h4 className="font-bold text-primary mb-4">Follow Our Impact</h4>
                <div className="flex gap-4">
                  {["Twitter", "LinkedIn", "Instagram", "Facebook"].map((social) => (
                    <button key={social} className="bg-background px-4 py-2 rounded-lg text-xs font-bold text-primary/60 hover:bg-primary hover:text-white transition-all">
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/2347037208507" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-secondary p-8 rounded-[2.5rem] text-white shadow-xl flex items-center justify-between group cursor-pointer overflow-hidden relative"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Chat on WhatsApp</h3>
                <p className="text-sm opacity-80">Instant support for your inquiries</p>
              </div>
              <MessageCircle className="w-12 h-12 relative z-10 group-hover:scale-110 transition-transform" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 -translate-y-16" />
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-primary/5"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest text-[10px]">Full Name</label>
                    <input required type="text" placeholder="Your Name" className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest text-[10px]">Email Address</label>
                    <input required type="email" placeholder="your@email.com" className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-widest text-[10px]">Subject</label>
                  <input required type="text" placeholder="How can we help?" className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-widest text-[10px]">Message</label>
                  <textarea required rows={6} placeholder="Your message here..." className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all resize-none" />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:brightness-110 transition-all"
                >
                  <Send className="w-5 h-5" /> Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
