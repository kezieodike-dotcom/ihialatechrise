import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Rocket, Laptop, PenTool, Layout, ChevronRight, TrendingUp, Quote } from "lucide-react";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAjupNRq06CgRJGdcLRHQ2eXCwhAuHu5EN9w6_u5NicZRjaMRP7KhxNFF6W7zczKF-eo6mD2E-MUZNI2rFgUUXbjPW7vGd9DNerKTa2jpWqVCT7Ls78b0WeFnYljMcchRPNczHWOyfbzv_hj-x7L9jhvzOtmAlT4j5DdsX-L8BACcuI_qYmn33Hc-Nr-f7pGyBlK8w_G7dmgXeBDPKeQZ06r1NZ_OFmnoJL-jxIGrrUV-8El1MqN5zY1ce9nIPquzwnqlerybaUxSQ')` }}
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px] z-1" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto"
          >
            Empowering the Next Generation of Tech Leaders in Ihiala LG
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Bridging the digital divide with world-class training in software development, design, and digital literacy.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/apply" className="bg-accent text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-accent/20 hover:scale-105 transition-transform active:scale-95">
              Apply Now
            </Link>
            <Link to="/programs" className="border-2 border-white/30 backdrop-blur-md text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all active:scale-95">
              Explore Programs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-secondary font-bold tracking-widest uppercase text-xs">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Catalyzing Growth Through Digital Excellence</h2>
              <p className="text-primary/70 leading-relaxed text-lg">
                Ihiala Tech Rise (ITR) is a tech-hub focused on empowering individuals with practical digital skills for today’s tech-driven world. Driven by a vision to bridge the gap between basic education and real-world tech skills, we equip students, graduates, and professionals across the region.
              </p>
              <div className="flex items-start gap-4 pt-4 border-l-4 border-secondary pl-6">
                <div>
                  <h4 className="font-bold text-primary text-xl flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-secondary" /> Visionary Learning
                  </h4>
                  <p className="text-sm text-primary/60 mt-1">Curriculums designed by industry experts to meet global standards.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-primary/5">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMmrQOWG__nVbLUrm7EgrOiFyOLG-LqhhwG9Hni7tQKKgnPACSqX2OlQcLwxDgm3E-1vhJOQK00V1vEmu3H6nczjkUBqi21JTQTh8L6b7hLaEwIw-yDird6ZjaO5KdBiksUP--_YcvsZyXcayXaaUMYsj0xM7DralcNdPhSD0ksIMG3cI9xilK1IzGXTco14DE_ukSjg6YPq8DzNZ-agjSoZfCuF31sLAiA93NdkssUqHjKUktc1OyC0Tiyhu-8syKEw1kvOR7_Rk" 
                  alt="Students learning" 
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl z-20 border border-primary/5 animate-bounce-slow">
                <p className="text-4xl font-black text-secondary">500+</p>
                <p className="text-xs font-bold text-primary/40 uppercase tracking-widest mt-1">Trained Professionals</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1 mt-12 lg:mt-0 px-4 md:px-0"
            >
              <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 relative z-10">
                <img 
                  className="w-full h-full object-cover" 
                  src="/founder.jpeg" 
                  alt="Engr. Pgm. Obinna Daniel O. - Founder of Ihiala Tech Rise" 
                />
              </div>
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 order-1 md:order-2"
            >
              <div className="space-y-2">
                <span className="text-accent font-bold tracking-widest uppercase text-xs">The Visionary</span>
                <h2 className="text-4xl md:text-5xl font-black leading-tight">Meet the Founder</h2>
                <h3 className="text-2xl font-bold text-accent/90">Engr. Pgm. Obinna Daniel O.</h3>
              </div>
              
              <div className="space-y-6 text-white/80 leading-relaxed text-lg font-light">
                <p>
                  Founded by <strong className="text-white">Engr. Pgm. Obinna Daniel O.</strong>, a seasoned Civil Engineer and a native of Ihiala, Mbrakpaka in Ihiala Local Government, Anambra State, Ihiala Tech Rise is driven by a vision to bridge the gap between basic education and real-world tech skills.
                </p>
                <p>
                  Our initiative equips students, graduates, working-class individuals, business men and even the non-elite across our communities including <span className="text-white font-medium">Ihiala Amorka, Azia, Lilu, Okija, Mbosi, Isseke, Orsumoghu, Ubuluisuzor and Uli.</span>
                </p>
                <p>
                  Through training, mentorship, and community engagement, we are building a generation that is digitally literate, confident, and ready to create opportunities in the modern workforce.
                </p>
              </div>

              <div className="pt-4">
                <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                  <div className="w-12 h-[2px] bg-accent" />
                  <span className="text-sm font-bold uppercase tracking-widest">Building a Digital Legacy</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 tracking-tight">Core Programs</h2>
            <p className="text-primary/50 max-w-2xl mx-auto text-lg lowercase">Specialized tracks tailored for immediate industry relevance and professional growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Featured: Web Dev */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 bg-white rounded-3xl overflow-hidden shadow-md flex flex-col md:flex-row group border border-primary/5"
            >
              <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_gQL57-mnwgKthH3DY1njaty_fsTf26aKeriYqsZPpLax5EwpCWCXAkeceauY1GTNr0Ho7e72lupE5x5Iu14HvJr1r-wi0fthfPCfDsIkce_y6TTlVJhwlJcOcYCxvOuXqX8rdHk0CeWdKmt2Nh_eY-x2ApFZcISbVCUgQr2DnUs77w4V9i4ngQGF5GtQPD7keDisfCUcaFNlzGETERfzFUTr-_WbX1MkRyPrFERSF8EYNqBAcErH55MYeU2qSdf-1qTYqFeJrbg" 
                  alt="Web Dev" 
                />
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">Advanced Track</span>
                    <Laptop className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Web Development</h3>
                  <p className="text-primary/60 mb-6 text-sm leading-relaxed">Master the full stack from HTML/CSS to React and Node.js. Build real-world applications and responsive interfaces.</p>
                </div>
                <Link to="/programs" className="text-secondary font-bold flex items-center gap-2 group/btn">
                  Program Details <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Digital Literacy */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 bg-white rounded-3xl overflow-hidden shadow-md border border-primary/5 flex flex-col group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnR0zF57xa1CDF8y2lRqZPjrXF9O21ZVZ2nuDsWfSBaW-Zekw0ogm1V1i8vrqFX_dXXRNnlNcsEGBuaVEeTrA3e9ay8YmVOEVIlhOivxGg1WlWKiGZeO57b9-46RPy3E-cyqbSyFMwkV9Tngpo7rlcL84V0g-6KLPAzl5IRWvEiRfOt8RaxDGeQBUCOuZBCVDuy8s9q7rrQ3lTxj_63egcBXG112LnUJZjcmi5bZQKr2HLmg2JVi2M34WXEFOPbCbEcmOUCxMoskE" 
                  alt="Digital Literacy" 
                />
                <div className="absolute top-4 left-4 bg-secondary/10 text-secondary px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">Beginner</div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-bold text-primary mb-3">Digital Literacy</h3>
                <p className="text-primary/60 text-sm mb-6 leading-relaxed">Essential computing skills for the modern world. Navigate the digital landscape with confidence.</p>
                <Link to="/programs" className="text-secondary font-bold flex items-center gap-2 group/btn">
                  Learn More <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Graphic Design */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 bg-white rounded-3xl overflow-hidden shadow-md border border-primary/5 flex flex-col group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgYjxlTUKPrZR-mudx1ex95uyxgQm8UVNBz8mYglSd-8YB6MSWJVpntyL2XeGHhijfq6YPCiVw7xVdUs5m7xXSvFT8_2tf14gUy8Bgy9OEnXdHPyZiTgiUegRVVsiI2o-PV3kPJ4MGrbEizzddr12vsw224VTj8PTgza_f9tmw94oj8KNB5xTBWBHGLqG20JBtdSpdbp4i7G8cOzlP_-FQRUIndLBg_tbea8kJMWhJUj1np0QFa8fK-D7S2vAihmhxpBGEs66ldKM" 
                  alt="Graphics" 
                />
                <div className="absolute top-4 left-4 bg-accent/10 text-accent px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">Creative</div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-bold text-primary mb-3">Graphic Design</h3>
                <p className="text-primary/60 text-sm mb-6 leading-relaxed">Visual storytelling using industry-standard tools like Figma, Photoshop, and Illustrator.</p>
                <Link to="/programs" className="text-secondary font-bold flex items-center gap-2 group/btn">
                  Learn More <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Data Analytics */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 bg-primary rounded-3xl p-10 flex items-center border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <TrendingUp className="w-64 h-64 text-accent" />
              </div>
              <div className="relative z-10 w-full">
                <div className="flex items-center gap-6 mb-8">
                  <div className="bg-accent/20 p-4 rounded-2xl">
                    <TrendingUp className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Advanced Data Analytics</h3>
                    <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold mt-1">Coming Q4 2026</p>
                  </div>
                </div>
                <p className="text-white/70 mb-10 max-w-xl leading-relaxed">A deep dive into data interpretation, visualization, and strategic decision-making for aspiring analysts.</p>
                <button className="bg-accent text-white px-8 py-3 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg active:scale-95">
                  Join Waitlist
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center mb-20">
            <div>
              <h4 className="text-6xl font-black text-accent mb-2">95%</h4>
              <p className="opacity-70 font-medium tracking-wide uppercase text-xs">Employment Rate</p>
            </div>
            <div>
              <h4 className="text-6xl font-black text-accent mb-2">120+</h4>
              <p className="opacity-70 font-medium tracking-wide uppercase text-xs">Local Businesses Partnered</p>
            </div>
            <div>
              <h4 className="text-6xl font-black text-accent mb-2">10k+</h4>
              <p className="opacity-70 font-medium tracking-wide uppercase text-xs">Learning Hours</p>
            </div>
          </div>

          {/* Featured Testimonial */}
          <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 md:p-16 border border-white/10 relative">
            <Quote className="absolute top-10 right-10 w-20 h-20 text-accent/10" />
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-secondary flex-shrink-0 animate-pulse-slow">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfrUUw7cOqgPpVZ6irb5D6MXqm07nrnzfE71RpSj8LQcX8VpHbHKPDEOGXudUKOBJU8DmLfoXm2d1VY9UcOLSvI5nTv_rs7MKGnD7IpoTzb6vCEGunHMyGdunJZ9_i5phd8rwQUKwoCjO5GN2gnCmRpeI0PUoGrGli7il833wMcbEc7e1xPU2g7ZiiLJ_7kw3Cv5-MwTB5laPvRUZH425QsScO-z6G_mtHuH6yqhxl3h_UE_wHgyp4ukn0f3jZcUYvOfpn6cvkmvA" 
                  alt="Graduate" 
                />
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-medium italic mb-8 leading-relaxed opacity-90">
                  "Ihiala Tech Rise didn't just teach me how to code; they taught me how to think like a builder. Today, I'm working remotely for a global tech firm right from my hometown."
                </p>
                <h5 className="font-bold text-accent text-xl">Chinedu Okafor</h5>
                <p className="text-sm opacity-50 uppercase tracking-widest font-bold mt-1">Web Development Graduate, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-background p-12 md:p-20 rounded-[3rem] border-2 border-primary/5 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 tracking-tight tracking-tight">Ready to Start Your Journey?</h2>
            <p className="text-primary/60 text-lg mb-10 leading-relaxed font-light">
              Applications for our Fall 2026 cohort are now open. Don't miss your chance to be part of the tech revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply" className="bg-accent text-white px-12 py-4 rounded-2xl font-bold text-lg hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-accent/20">
                Apply For Program
              </Link>
              <a 
                href="https://t.me/ihialatechrise" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary text-white px-12 py-4 rounded-2xl font-bold text-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                Join Our Telegram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
