import { motion } from "motion/react";
import { Handshake, Globe, ShieldCheck, TrendingUp, CheckCircle, Mail, MapPin } from "lucide-react";

export default function Partners() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <header className="relative h-[550px] flex items-center overflow-hidden bg-primary px-4">
        <div className="absolute inset-0 opacity-20">
           <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-1_KWjtujpxMDipzrIir_E402QRuZUqYqAeUHSJJ_GBumYdODkbjB7HG93KBOQDZeucCwJ59p6Cl7DgfKZcs79iIykmx8zu8_i4fJmyDcqhL2f1BoV8U3qL134VSy9PhOalKoSkNUEUmvV1kwoxDSPHCqKlyz3BuB3NZ3igoE9Wz2EHB4hDatFikvrw_ylTdhLwkXPDMf2TQNzavQG_5PIeFzaaIPQ4KoLnWP3-7kWDJlDh-RSfVgdyklPjZCsZ35nOR3MLfO45A" 
            alt="Business professionals shake hands" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-secondary text-white px-4 py-1.5 rounded-full font-bold mb-6 uppercase tracking-[0.2em] text-[10px]">Join Our Mission</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">Empower Change Through Strategic Partnership</h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed font-light">Ihiala Tech Rise bridges the digital divide by connecting global resources with grassroots talent. Partner with us to scale tech education.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-accent text-white px-10 py-4 rounded-xl font-bold hover:brightness-110 shadow-xl shadow-accent/20 transition-all">Become a Partner</a>
              <button className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">View Our Impact</button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Trust */}
      <section className="py-12 bg-white border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.4em] mb-10">Trusted by Industry Leaders & NGOs</p>
          <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
             <div className="font-extrabold text-2xl tracking-tighter text-primary/60">TECHCORP</div>
             <div className="font-extrabold text-2xl tracking-tighter text-primary/60">HUB_CENTRAL</div>
             <div className="font-extrabold text-2xl tracking-tighter text-primary/60">GLOBAL_INIT</div>
             <div className="font-extrabold text-2xl tracking-tighter text-primary/60">VANTAGE.XYZ</div>
             <div className="font-extrabold text-2xl tracking-tighter text-primary/60">EDU_LINK</div>
          </div>
        </div>
      </section>

      {/* Bento Impact */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-primary mb-4">Why Partner with Us?</h2>
            <p className="max-w-xl mx-auto text-primary/50 text-lg">We combine operational excellence with community trust to deliver organic social impact.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-white p-12 rounded-3xl shadow-sm border border-primary/5 flex flex-col justify-between border-t-8 border-secondary">
               <div>
                  <Globe className="w-12 h-12 text-secondary mb-6" />
                  <h3 className="text-3xl font-black text-primary mb-4 tracking-tight">Regional Reach</h3>
                  <p className="text-primary/60 leading-relaxed mb-10 max-w-lg">Access a pipeline of over 500+ vetted tech talents across South-Eastern Nigeria, ready to innovate and contribute to the global digital economy.</p>
               </div>
               <div className="flex gap-12">
                  <div>
                    <span className="block text-4xl font-black text-secondary">85%</span>
                    <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">Employment Rate</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-black text-secondary">15+</span>
                    <span className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">Tech Hubs Enabled</span>
                  </div>
               </div>
            </div>
            
            <div className="md:col-span-4 bg-secondary p-12 rounded-3xl text-white flex flex-col justify-center text-center shadow-xl shadow-secondary/20 group">
               <ShieldCheck className="w-20 h-20 mx-auto mb-6 opacity-40 group-hover:scale-110 transition-transform" />
               <h3 className="text-2xl font-black mb-4">100% Transparency</h3>
               <p className="text-white/80 text-sm leading-relaxed">Full accountability with bi-annual impact reports and direct visibility into project funding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Support */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-primary mb-16">Ways to Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Sponsorship", icon: <TrendingUp />, color: "border-secondary", points: ["Naming Rights for Cohorts", "Quarterly Impact Reports", "Tax Deduction Certificates"] },
              { title: "Mentorship", icon: <Globe />, color: "border-accent", points: ["Remote Mentoring Sessions", "Industry Webinar Opps", "Talent Recruitment Priority"] },
              { title: "Equipment", icon: <Handshake />, color: "border-primary", points: ["Bulk Hardware Acceptance", "Brand Visibility on Hubs", "Sustainable Tech Recycling"] }
            ].map((way) => (
              <div key={way.title} className={`bg-background p-10 rounded-3xl text-left border-t-4 ${way.color} shadow-sm group hover:shadow-xl transition-all`}>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="text-primary">{way.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-primary mb-6">{way.title}</h3>
                <ul className="space-y-4">
                  {way.points.map(p => (
                    <li key={p} className="flex items-center gap-3 text-sm text-primary/60">
                      <CheckCircle className="w-4 h-4 text-secondary" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-primary/5">
             <div className="md:w-1/3 bg-primary p-12 text-white flex flex-col justify-between">
                <div>
                   <h2 className="text-4xl font-black mb-8">Let's Build Together</h2>
                   <p className="text-white/60 text-lg mb-12">Ready to start a conversation? Our partnership team will reach out within 2 business days.</p>
                   <div className="space-y-6">
                      <div className="flex items-center gap-4 group">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors"><Mail className="w-5 h-5 text-white" /></div>
                        <span className="text-sm font-medium">partners@ihialatechrise.org</span>
                      </div>
                      <div className="flex items-center gap-4 group">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors"><MapPin className="w-5 h-5 text-white" /></div>
                        <span className="text-sm font-medium">Ihiala Innovation Center, Anambra State</span>
                      </div>
                   </div>
                </div>
                <div className="pt-10 border-t border-white/10">
                   <p className="italic text-white/40 text-sm">"Partnership is the fuel that powers community transformation."</p>
                </div>
             </div>
             
             <div className="md:w-2/3 p-12 md:p-20">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-primary opacity-40 uppercase tracking-widest">Full Name</label>
                       <input type="text" placeholder="John Doe" className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold text-primary opacity-40 uppercase tracking-widest">Org Email</label>
                       <input type="email" placeholder="john@company.com" className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary opacity-40 uppercase tracking-widest">Base Town</label>
                    <select 
                      required 
                      name="town"
                      defaultValue=""
                      className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select town</option>
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
                     <label className="text-[10px] font-bold text-primary opacity-40 uppercase tracking-widest">Message</label>
                     <textarea rows={4} placeholder="How can we help?" className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all resize-none" />
                  </div>
                  <button className="w-full bg-secondary text-white py-5 rounded-2xl font-bold text-lg hover:brightness-110 shadow-xl shadow-secondary/20 active:scale-[0.98] transition-all">
                    Send Partnership Request
                  </button>
                </form>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
