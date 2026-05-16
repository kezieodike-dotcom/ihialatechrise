import { motion } from "motion/react";
import { User, Target, Eye, Star, Quote, School, Building2, Cpu, Award, GraduationCap, MapPin, Lightbulb, BookOpen, Users, HardHat } from "lucide-react";

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
        <div className="max-w-4xl mx-auto px-4">
          <div className="py-10 md:py-0">
              <div className="flex flex-col items-center mb-12">
                <div className="w-12 h-1.5 bg-accent rounded-full mb-6" />
                <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight text-center">Our Story</h2>
              </div>
              <div className="space-y-6 text-primary/70 leading-relaxed text-lg">
                <p>Ihiala Tech Rise (ITR) is a tech-hub focused on empowering individuals with practical digital skills for today’s tech-driven world. Founded by <strong className="text-primary">Engr. Pgm. Obinna Daniel O.</strong>, a native of Ihiala, Mbrakpaka in Ihiala Local Government, Anambra State, the initiative is driven by a vision to bridge the gap between basic education and real-world tech skills.</p>
                <p>We equip students, graduates, working-class individuals, business men and even the non-elite across communities including Ihiala Amorka, Azia, Lilu, Okija, Mbosi, Isseke, Orsumoghu, Ubuluisuzor and Uli.</p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-16 max-w-2xl mx-auto">
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
      </section>

      {/* Meet the Founder */}
      <section className="py-28 bg-primary text-white overflow-hidden relative">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="bg-accent/20 text-accent px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 inline-block border border-accent/30">
              Visionary Behind ITR
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4 tracking-tight">
              Meet the Founder
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-lg">
              The story of a son of the soil who chose to invest his expertise back into the community that shaped him.
            </p>
          </motion.div>

          {/* Main Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-8 md:p-16 mb-12 grid md:grid-cols-12 gap-12 items-start"
          >
            {/* Photo + Identity */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent shadow-2xl shadow-accent/30 mx-auto">
                  <img
                    src="/founder.jpeg"
                    alt="Engr. Pgm. Obinna Daniel O."
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[9px] font-black uppercase tracking-[0.15em] px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                  Founder & Director
                </span>
              </div>
              <h3 className="text-2xl font-black mt-6 mb-1">Engr. Pgm. Obinna Daniel O.</h3>
              <p className="text-accent font-semibold text-sm mb-4">B.Eng. | Civil Engineer</p>
              <div className="flex items-center justify-center gap-2 text-white/50 text-xs mb-6">
                <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span>Mbrakpaka, Ihiala LGA, Anambra State</span>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 w-full">
                {[
                  { label: "Years Experience", value: "10+" },
                  { label: "Youths Trained", value: "500+" },
                  { label: "Programs Built", value: "12+" },
                  { label: "Communities", value: "15+" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <span className="text-2xl font-black text-accent block">{s.value}</span>
                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-8 space-y-6 text-white/70 leading-relaxed">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-1 bg-accent rounded-full" />
                <h4 className="text-2xl font-black text-white uppercase tracking-tight">Profile &amp; Background</h4>
              </div>

              <p className="text-lg">
                <strong className="text-white">Engr. Pgm. Obinna Daniel O.</strong> is a seasoned Civil Engineer
                with over a decade of hands-on experience in infrastructure development and management. A <strong className="text-accent">native of Ihiala, Mbrakpaka
                in Ihiala Local Government, Anambra State</strong>, he carries a deep sense of responsibility to the soil
                that nurtured his earliest curiosity for technology.
              </p>
              <p>
                He holds a degree in Engineering and has enriched his expertise through certifications in project management,
                and emerging technologies. His professional career has spanned both the private sector and
                collaborative community-driven initiatives — working with clients and teams across Nigeria and beyond to solve
                real-world problems through strategic planning and technology integration.
              </p>
              <p>
                Beyond his corporate achievements, it is his <strong className="text-white">deep-rooted passion for youth
                empowerment</strong> that truly defines him. He witnessed first-hand how geography and economic barriers shut
                capable young minds out of the digital economy. That frustration became the catalyst for <strong className="text-white">Ihiala Tech Rise</strong> — a platform he conceived, built from scratch, and continues to lead as a personal calling, not merely a project.
              </p>
              <p>
                He firmly believes that <em className="text-accent/90">"talent is evenly distributed, but opportunity is not"</em> —
                and has committed his resources, network, and expertise to reversing that imbalance in Ihiala and its
                neighbouring communities.
              </p>

              {/* Philosophy Highlight */}
              <div className="mt-8 bg-accent/10 border border-accent/20 rounded-2xl p-6">
                <Quote className="w-6 h-6 text-accent mb-3 opacity-60" />
                <p className="text-lg text-white italic font-medium leading-snug">
                  "I didn't start ITR because it was easy. I started it because I remembered what it felt like to have the drive
                  but not the direction. Every young person in Ihiala deserves the chance to show the world what they're made of."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-6 h-[2px] bg-accent/50" />
                  <p className="text-[10px] font-bold text-accent/70 uppercase tracking-widest">Engr. Pgm. Obinna Daniel O.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: GraduationCap,
                color: "accent",
                title: "Education & Certifications",
                items: [
                  "B.Eng. – Civil Engineering (Hons)",
                  "Certified Engineer (Pgm.)",
                  "Project Management Professional",
                  "Full-Stack Web Development Certification",
                  "Advanced Cloud & Systems Architecture",
                ],
              },
              {
                icon: Building2,
                color: "secondary",
                title: "Professional Expertise",
                items: [
                  "Civil Engineering & Infrastructure",
                  "Urban Planning & Structural Design",
                  "Construction Project Management",
                  "Technical Resource Management",
                  "Innovation & Community Development",
                ],
              },
              {
                icon: Award,
                color: "accent",
                title: "Leadership & Impact",
                items: [
                  "Founded Ihiala Tech Rise (2020)",
                  "Trained 500+ youths across Anambra",
                  "Mentored 50+ working tech professionals",
                  "Built 12+ community tech programs",
                  "Digital inclusion advocate, Ihiala LGA",
                ],
              },
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:border-accent/30 transition-all"
              >
                <div className={`bg-${card.color}/20 p-3 rounded-xl w-fit mb-6 border border-${card.color}/30`}>
                  <card.icon className={`w-6 h-6 text-${card.color}`} />
                </div>
                <h4 className="font-black text-white mb-4 uppercase tracking-tight text-sm">{card.title}</h4>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/60 text-xs">
                      <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Driving Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12"
          >
            <div className="text-center mb-10">
              <h4 className="text-xl font-black text-white uppercase tracking-tight mb-2">What Drives Him</h4>
              <p className="text-white/40 text-sm">The core convictions at the heart of his work.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: MapPin, title: "Roots First", desc: "A son of Mbrakpaka who never forgot where he came from and chose to pour back into his community." },
                { icon: Lightbulb, title: "Opportunity Architect", desc: "He believes systemic change begins with one skilled youth at a time — creating ripple effects across families and communities." },
                { icon: Users, title: "Community Builder", desc: "He has personally mentored hundreds, fostering a culture of collaboration, sharing knowledge freely and paying it forward." },
                { icon: BookOpen, title: "Lifelong Learner", desc: "Still studying, still building. He leads by example — showing students that growth never stops, no matter how far you've come." },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl hover:bg-white/5 transition-all group"
                >
                  <div className="bg-accent/10 border border-accent/20 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:bg-accent/20 transition-all">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h5 className="font-black text-white mb-2 text-sm">{item.title}</h5>
                  <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
