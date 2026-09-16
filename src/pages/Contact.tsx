import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, MessageCircle, Send, Navigation, Compass, ExternalLink, Loader2, Clock, Car, Bus } from "lucide-react";
import SEO from "../components/SEO";

export default function Contact() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const payload: Record<string, string> = {
      full_name: formData.get("name") as string,
      email: formData.get("email") as string,
      town: formData.get("town") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      skill_interest: `[Contact] ${formData.get("subject") || "General Inquiry"}`,
      motivation: formData.get("message") as string,
      phone: "N/A",
    };

    try {
      await fetch(
        "https://pciqgqrbilldcaeeglmr.supabase.co/functions/v1/notify-new-application",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      // Navigate to dedicated Thank You page
      navigate("/thank-you?type=contact");
    } catch (error) {
      console.error("Contact form network error:", error);
      // Even if network notification encounters a partial edge glitch, forward to Thank You confirmation
      navigate("/thank-you?type=contact");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 pb-24 px-4 bg-background">
      <SEO
        title="Contact Us & Directions | Ihiala Tech Rise"
        description="Get in touch with Ihiala Tech Rise. Find our office location in Ihiala, explore Google Maps directions, transit guidelines from Onitsha-Owerri Expressway, or message us directly on WhatsApp."
        keywords="Contact Ihiala Tech Rise, Ihiala tech hub directions, Ihiala Anambra state map, Engr Obinna Daniel O contact"
      />

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
            Have questions about our programs, need directions to our training hub, or want to partner with us? We're here to help you navigate your tech journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
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
                    <a href="mailto:hello@ihialatechrise.org" className="font-bold text-primary hover:text-secondary transition-colors">
                      hello@ihialatechrise.org
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="bg-accent/10 p-4 rounded-2xl text-accent">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">Call / WhatsApp</p>
                    <a href="https://wa.me/2347037208507" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:text-accent transition-colors">
                      +234 703 720 8507
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="bg-primary/5 p-4 rounded-2xl text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">Location</p>
                    <p className="font-bold text-primary">Mbrakpaka, Ihiala LGA, Anambra State, Nigeria</p>
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

              <div className="mt-12 pt-8 border-t border-primary/5">
                <h4 className="font-bold text-primary mb-4 text-sm uppercase tracking-wider">Office Hours</h4>
                <div className="flex items-center gap-3 text-sm text-primary/70">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span>Monday – Friday: 9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-primary/70 mt-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>Saturday (Workshops): 10:00 AM – 4:00 PM</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/2347037208507"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary p-8 rounded-[2.5rem] text-white shadow-xl flex items-center justify-between group cursor-pointer overflow-hidden relative block"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Chat on WhatsApp</h3>
                <p className="text-sm opacity-80">Instant support & live location sharing</p>
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
                    <input required name="name" type="text" placeholder="Your Name" className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest text-[10px]">Email Address</label>
                    <input required name="email" type="email" placeholder="your@email.com" className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest text-[10px]">Your Town</label>
                    <select
                      required
                      name="town"
                      defaultValue=""
                      className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select your town</option>
                      <option value="Ihiala">Ihiala</option>
                      <option value="Amorka">Amorka</option>
                      <option value="Azia">Azia</option>
                      <option value="Lilu">Lilu</option>
                      <option value="Okija">Okija</option>
                      <option value="Mbosi">Mbosi</option>
                      <option value="Isseke">Isseke</option>
                      <option value="Orsumoghu">Orsumoghu</option>
                      <option value="Ubuluisuzor">Ubuluisuzor</option>
                      <option value="Uli">Uli</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest text-[10px]">Subject</label>
                    <input required name="subject" type="text" placeholder="How can we help?" className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-widest text-[10px]">Message</label>
                  <textarea required name="message" rows={6} placeholder="Your message here..." className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all resize-none" />
                </div>

                <motion.button
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:brightness-110 transition-all disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Map & Directions Section */}
        <section className="bg-white rounded-[3rem] p-8 md:p-14 shadow-xl border border-primary/5 overflow-hidden">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <Compass className="w-4 h-4" /> Location & Transit
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight">
              Find Us in Ihiala & Transit Directions
            </h2>
            <p className="text-primary/60 text-base leading-relaxed">
              Ihiala Tech Rise is strategically based in Ihiala Local Government, Anambra State, centrally accessible from the major Onitsha-Owerri transport artery and all surrounding towns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Embedded Google Map */}
            <div className="lg:col-span-7 rounded-[2rem] overflow-hidden shadow-md border border-primary/10 aspect-[16/10] relative bg-gray-100">
              <iframe
                title="Ihiala Tech Rise Location Map"
                src="https://maps.google.com/maps?q=Ihiala%2C%20Anambra%20State%2C%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ihiala+Anambra+State+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg hover:brightness-110 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Open in Google Maps
                </a>
              </div>
            </div>

            {/* Directions Guide */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-background rounded-2xl border border-primary/5">
                <div className="flex items-center gap-3 mb-2 text-primary font-bold">
                  <Car className="w-5 h-5 text-secondary" />
                  <h4>From Onitsha or Owerri</h4>
                </div>
                <p className="text-xs text-primary/70 leading-relaxed">
                  Take any intercity bus or taxi heading along the <strong className="text-primary">Onitsha-Owerri Expressway</strong>. Alight at the main <strong className="text-primary">Ihiala Junction (Total / Roundabout axis)</strong>. From there, take a short commercial ride to the Mbrakpaka axis.
                </p>
              </div>

              <div className="p-6 bg-background rounded-2xl border border-primary/5">
                <div className="flex items-center gap-3 mb-2 text-primary font-bold">
                  <Bus className="w-5 h-5 text-accent" />
                  <h4>From Neighboring Towns (Okija, Uli, Azia, Amorka, etc.)</h4>
                </div>
                <p className="text-xs text-primary/70 leading-relaxed">
                  Regular commuter shuttles and tricycles operate directly along the Ihiala central corridor from Okija, Uli, Azia, Mbosi, and Amorka. Simply ask for the central Ihiala tech workshop venue.
                </p>
              </div>

              <div className="p-6 bg-secondary/5 rounded-2xl border border-secondary/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-primary text-sm">Need help with navigation?</h4>
                  <p className="text-xs text-primary/60">We can drop a live pin on WhatsApp to guide you.</p>
                </div>
                <a
                  href="https://wa.me/2347037208507?text=Hello%20Ihiala%20Tech%20Rise,%20please%20share%20the%20exact%20location%20and%20directions%20to%20your%20hub."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-white px-4 py-2.5 rounded-xl font-bold text-xs inline-flex items-center justify-center gap-2 hover:brightness-110 whitespace-nowrap shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" /> Request Live Pin
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
