import { motion } from "motion/react";
import { User, Target, Eye, Star, Quote, School } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-primary py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-GQqyPAJp3ib_psBjYy_1_3zH1S31rFUac3-dZXKwmamzx1JHKszQJ91Hsg_G2BPGNXbRFsHVuY-i0DbZPasfPIV8mswbrfJ5V2fjG0S7Dg7EQd6swtqDJu8jLIui7OdByj0277LjkiY5XYrD6bLtj2APE2uFT5R-hwJTsmU2vXgJgZTj0Kk1-onEKr8jX7yyaNIyH5JoNWunnw-0xlsnpimGvpOAIcFyyHFp_Uj1GjK4VSGFSNoGv2YCB2d19ExZd620UZ2w6Bc" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <span className="bg-accent text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block tracking-[0.2em]">Rooted In Growth</span>
          <h1 className="text-4xl md:text-6xl font-black mb-8 max-w-2xl leading-tight">Empowering the Next Generation of Tech Leaders in Ihiala.</h1>
          <p className="text-lg text-white/70 max-w-xl leading-relaxed">We bridge the digital skills gap by providing world-class technical training to motivated individuals in our community, fostering a self-sustaining ecosystem of innovation.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-1 border border-primary/10"
              >
                <img src="/founder.jpg" className="w-full h-full object-cover" alt="Engr. Pgm. Obinna Daniel O. - Founder of Ihiala Tech Rise" />
              </motion.div>
              <div className="absolute -bottom-10 -right-4 md:-right-10 bg-secondary p-8 rounded-3xl shadow-2xl max-w-[320px] text-white border-t-8 border-accent">
                <p className="font-medium italic text-lg leading-snug">"Technology is the ultimate equalizer for our youth."</p>
                <div className="mt-4 flex items-center gap-3">
                   <div className="w-8 h-[2px] bg-accent/50" />
                   <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest">— Engr. Pgm. Obinna Daniel O., Founder</p>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-7 py-10 md:py-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-1.5 bg-accent rounded-full" />
                <h2 className="text-4xl font-black text-primary uppercase tracking-tight">Our Story</h2>
              </div>
              <div className="space-y-6 text-primary/70 leading-relaxed text-lg">
                <p>Ihiala Tech Rise (ITR) is a tech-hub focused on empowering individuals with practical digital skills for today’s tech-driven world. Founded by Engr. Pgm. Obinna Daniel O., the initiative is driven by a vision to bridge the gap between basic education and real-world tech skills.</p>
                <p>We equip students, graduates, working-class individuals, business men and even the non-elite across communities including Ihiala, Amorka, Azia, Lilu, Okija, Mbosi, Isseke, Orsumoghu, Ubuluisuzor and Uli.</p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="p-8 bg-background rounded-3xl border-l-[6px] border-secondary shadow-sm">
                  <span className="text-4xl font-black text-primary block mb-1">500+</span>
                  <span className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em]">Graduates</span>
                </div>
                <div className="p-8 bg-background rounded-3xl border-l-[6px] border-accent shadow-sm">
                  <span className="text-4xl font-black text-accent block mb-1">85%</span>
                  <span className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em]">Employment Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-8 items-start bg-white p-12 rounded-[2.5rem] shadow-sm border border-primary/5"
          >
            <div className="bg-secondary p-4 rounded-2xl flex-shrink-0 shadow-lg shadow-secondary/20">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-primary mb-4 uppercase tracking-tight">Our Mission 🚀</h3>
              <ul className="text-primary/60 leading-relaxed text-sm space-y-3 list-none p-0">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">1.</span>
                  To close the gap between theoretical/formal education and practical digital skills.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">2.</span>
                  To provide accessible training in high-demand tech areas.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">3.</span>
                  To empower the youth in Ihiala LG with skills that enhance employability and entrepreneurship.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">4.</span>
                  To increase digital literacy among youths in Ihiala LG.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">5.</span>
                  To build a community of skilled individuals who can adapt, innovate, and lead in a tech-driven world.
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-8 items-start bg-white p-12 rounded-[2.5rem] shadow-sm border border-primary/5"
          >
            <div className="bg-accent p-4 rounded-2xl flex-shrink-0 shadow-lg shadow-accent/20">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-primary mb-4 uppercase tracking-tight">Our Vision</h3>
              <p className="text-primary/60 leading-relaxed text-sm">
                To raise a digitally empowered generation where young people of Ihiala and beyond are not only educated but equipped with practical, relevant tech skills that position them for global opportunities, innovation, and sustainable impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-primary mb-4 tracking-tight">💡 Core Values</h2>
            <p className="text-primary/50 max-w-2xl mx-auto">The principles that guide our work and shape our community.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { title: "Accessibility", desc: "Making tech education available to all", icon: "📌" },
              { title: "Practicality", desc: "Focus on real-world, usable skills", icon: "📌" },
              { title: "Empowerment", desc: "Creating opportunities for growth and independence", icon: "📌" },
              { title: "Innovation", desc: "Encouraging creative thinking and problem-solving", icon: "📌" },
              { title: "Integrity", desc: "Promoting responsible and ethical tech use", icon: "📌" }
            ].map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-8 rounded-[2rem] border border-primary/5 hover:border-secondary transition-all group"
              >
                <div className="text-2xl mb-4">{v.icon}</div>
                <h4 className="font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{v.title}</h4>
                <p className="text-xs text-primary/60 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners/Stats CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-black text-primary mb-6">The Skills Gap We're Closing</h2>
          <p className="text-primary/50 text-lg mb-16">Ihiala faces unique challenges that we tackle through targeted, community-first interventions.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="p-8 bg-background rounded-3xl text-left border border-primary/5">
                <div className="text-accent mb-4"><Target /></div>
                <h4 className="font-bold text-primary mb-2">Geographic Isolation</h4>
                <p className="text-xs text-primary/60 leading-relaxed">We bring world-class training directly to the community, bypassing the need for expensive city living.</p>
             </div>
             <div className="p-8 bg-accent rounded-3xl text-left text-white shadow-xl shadow-accent/20">
                <Quote className="text-white/20 mb-4" />
                <h4 className="font-bold mb-2">Financial Barriers</h4>
                <p className="text-xs text-white/70 leading-relaxed">Through sponsorships and income-share models, we ensure talent isn't sidelined by cost.</p>
             </div>
             <div className="p-8 bg-background rounded-3xl text-left border border-primary/5">
                <div className="text-secondary mb-4"><School /></div>
                <h4 className="font-bold text-primary mb-2">Industry-First</h4>
                <p className="text-xs text-primary/60 leading-relaxed">Our curriculum updates every 6 months to match the latest global market demands.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
