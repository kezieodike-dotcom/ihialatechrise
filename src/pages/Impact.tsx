import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Quote, Heart, Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: <Users />, label: "Students Trained", value: "850+" },
  { icon: <Heart />, label: "Community Events", value: "24" },
  { icon: <Globe />, label: "Global Placements", value: "45" },
  { icon: <Award />, label: "Certificates Issued", value: "720" },
];

const gallery = [
  { 
    url: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    title: "Web Dev Workshop",
    category: "Training"
  },
  { 
    url: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    title: "Collaboration Session",
    category: "Community"
  },
  { 
    url: "https://images.pexels.com/photos/7129713/pexels-photo-7129713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    title: "Design Thinking",
    category: "Creative"
  },
  { 
    url: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    title: "Coding Sprint",
    category: "Technical"
  },
  { 
    url: "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    title: "Networking Meetup",
    category: "Events"
  },
  { 
    url: "https://images.pexels.com/photos/7433834/pexels-photo-7433834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    title: "Data Analysis Lab",
    category: "Advanced"
  },
];

const testimonials = [
  {
    name: "Amarachi Eze",
    role: "Full Stack Developer @ TechGlobal",
    text: "Before ITR, I didn't know what a 'div' was. Now I'm building complex web applications for international clients. The community support is unmatched.",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Emeka Obi",
    role: "Graphic Designer",
    text: "The design program at ITR opened my eyes to the world of visual communication. It gave me the skills to start my own design agency right here in Ihiala.",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export default function Impact() {
  return (
    <div className="pt-20 pb-24 px-4 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-secondary font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Our Impact
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-primary mb-8 tracking-tight"
          >
            Empowering Lives, <br />Building Futures
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary/60 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Since our inception, Ihiala Tech Rise has been more than just a training center. We are a movement dedicated to unlocking the digital potential of every young person in our community.
          </motion.p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-primary/5 text-center group hover:bg-primary transition-all duration-500"
            >
              <div className="text-secondary mb-4 flex justify-center group-hover:text-accent transition-colors">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black text-primary mb-1 group-hover:text-white transition-colors">{stat.value}</h3>
              <p className="text-xs font-bold text-primary/40 uppercase tracking-widest group-hover:text-white/60 transition-colors">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="space-y-16 mb-32">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-black text-primary mb-2">Success Stories</h2>
              <p className="text-primary/50">Real people, real growth, real impact.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[3rem] shadow-2xl border border-primary/5 flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-secondary/20">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div className="relative">
                  <Quote className="absolute -top-6 -left-6 w-12 h-12 text-secondary/10" />
                  <p className="text-lg italic text-primary/80 mb-6 leading-relaxed relative z-10">"{t.text}"</p>
                  <div>
                    <h4 className="font-bold text-primary text-xl">{t.name}</h4>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="space-y-12">
           <div className="text-center">
             <h2 className="text-3xl font-black text-primary mb-2">In Action</h2>
             <p className="text-primary/50">Moments from our training sessions and community meetups.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative h-80 rounded-[2rem] overflow-hidden shadow-lg"
                >
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">{item.category}</span>
                    <h4 className="text-white font-bold text-xl mt-2">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>

        {/* CTA */}
        <div className="mt-32 bg-primary p-16 rounded-[4rem] text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-3xl md:text-5xl font-black mb-8 relative z-10">Be Part of the Next Success Story</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg relative z-10">
            Whether you're looking to learn, mentor, or sponsor, there's a place for you in our growing tech community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link to="/apply" className="bg-accent text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl shadow-accent/20">
              Apply to Learn
            </Link>
            <Link to="/partners" className="bg-white text-primary px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-transform">
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
