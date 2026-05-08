import { motion } from "motion/react";
import { CheckCircle, School, Users, Award, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Digital Literacy",
    level: "Beginner",
    duration: "4 Weeks",
    icon: <School className="w-6 h-6" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnR0zF57xa1CDF8y2lRqZPjrXF9O21ZVZ2nuDsWfSBaW-Zekw0ogm1V1i8vrqFX_dXXRNnlNcsEGBuaVEeTrA3e9ay8YmVOEVIlhOivxGg1WlWKiGZeO57b9-46RPy3E-cyqbSyFMwkV9Tngpo7rlcL84V0g-6KLPAzl5IRWvEiRfOt8RaxDGeQBUCOuZBCVDuy8s9q7rrQ3lTxj_63egcBXG112LnUJZjcmi5bZQKr2HLmg2JVi2M34WXEFOPbCbEcmOUCxMoskE",
    description: "Master the essentials of modern computing, online collaboration, and productivity tools."
  },
  {
    title: "Graphic Design",
    level: "Intermediate",
    duration: "8 Weeks",
    icon: <PenTool className="w-6 h-6" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgYjxlTUKPrZR-mudx1ex95uyxgQm8UVNBz8mYglSd-8YB6MSWJVpntyL2XeGHhijfq6YPCiVw7xVdUs5m7xXSvFT8_2tf14gUy8Bgy9OEnXdHPyZiTgiUegRVVsiI2o-PV3kPJ4MGrbEizzddr12vsw224VTj8PTgza_f9tmw94oj8KNB5xTBWBHGLqG20JBtdSpdbp4i7G8cOzlP_-FQRUIndLBg_tbea8kJMWhJUj1np0QFa8fK-D7S2vAihmhxpBGEs66ldKM",
    description: "Learn visual storytelling, brand identity, and industry-standard design tools like Figma and Photoshop."
  },
  {
    title: "Web Development",
    level: "Intermediate",
    duration: "12 Weeks",
    icon: <Code className="w-6 h-6" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAunaC17TeTY2RO8xD--VAtTW5YTI6Q4C2yqWE-NOQyN2dQzf1EqDAeh9qH7AkWACVHJqLutlZLeIKuoZATRjWuCxONrKFOGedCYPwOq1t4sFiRCCM3nSstv18YunsmekA6R7OHggZu49bf5dtQ8zDagvAA2c-kQSAqwS3ZbgrgN_6F-foWJ-xuJWu3f0QOak_90TIu_b2Gyvbd2SGcnIqdgj5BDoXY2GKsFe1p-wOIn9l3zzshyiS5W1G5w8vAapXzMOkgfJY4Kic",
    description: "Build modern, responsive websites using HTML, CSS, JavaScript, and React."
  },
  {
    title: "Data Analysis",
    level: "Beginner",
    duration: "10 Weeks",
    icon: <TrendingUp className="w-6 h-6" />,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSm4lLN7ZOxmdun2K2TV56_TuuT2S_id82HZfaqddyJvqO17uR3r8brUaFEZpYfLu_IEU-VNnS_CMNb5FwzFZpthukWgaPZvjzfMODe6MRsICy2xV62ozRpB2gwFFO-VOb1jfPO8fk6ABNvq84QAol6AEZrMl3HqZ9I9saUwU_0NYrm53eZaSevf2clrK4-6ihrmF5FKiFee8i8Mg-AkkB8eQ7xmHXldXeIxsVu7UJyIrNHpQsVvK3gope7yKNcSXegT3g-xQpPpY",
    description: "Turn raw data into insights. Master Excel, SQL, and data visualization techniques."
  }
];

import { PenTool, Code, TrendingUp } from "lucide-react";

export default function Programs() {
  return (
    <div className="pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl font-black text-primary mb-6"
          >
            Available Programs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary/60"
          >
            Choose a path that aligns with your career goals. All courses include mentorship and real-world projects.
            <span className="ml-4 inline-flex items-center px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-bold uppercase tracking-widest">Enrolling Now</span>
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {programs.map((program, idx) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-primary/5 flex flex-col h-full group"
            >
              <div className="h-48 relative overflow-hidden">
                <img src={program.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={program.title} />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{program.level}</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-secondary mb-3">
                  {program.icon}
                  <h3 className="text-xl font-bold text-primary">{program.title}</h3>
                </div>
                <p className="text-sm text-primary/60 mb-8 leading-relaxed flex-grow">{program.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-primary/5">
                  <div className="flex items-center gap-2 text-primary/40">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-bold">{program.duration}</span>
                  </div>
                  <button className="text-secondary font-bold text-xs uppercase tracking-widest flex items-center gap-1 group/link">
                    Curriculum <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-all" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Path */}
        <section className="bg-background rounded-[3rem] p-12 md:p-20 relative overflow-hidden border-2 border-primary/5">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight">Your Learning Path</h2>
            <p className="text-primary/50 max-w-2xl mx-auto italic">We follow a structured 4-step approach to ensure you move from a beginner to a job-ready professional.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-secondary text-white flex items-center justify-center mb-6 shadow-xl shadow-secondary/20 group-hover:scale-110 transition-transform">
                <School className="w-10 h-10" />
              </div>
              <h4 className="font-bold text-primary text-xl mb-3">Foundations</h4>
              <p className="text-sm text-primary/50 leading-relaxed text-sm">Master core concepts through interactive lectures.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-primary text-secondary flex items-center justify-center mb-6 shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform">
                <Code className="w-10 h-10" />
              </div>
              <h4 className="font-bold text-primary text-xl mb-3">Hands-on Labs</h4>
              <p className="text-sm text-primary/50 leading-relaxed text-sm">Apply learning through practical, guided exercises.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-secondary text-white flex items-center justify-center mb-6 shadow-xl shadow-secondary/20 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10" />
              </div>
              <h4 className="font-bold text-primary text-xl mb-3">Project Building</h4>
              <p className="text-sm text-primary/50 leading-relaxed text-sm">Collaborate with peers on real-world industry projects.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-primary text-secondary flex items-center justify-center mb-6 shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10" />
              </div>
              <h4 className="font-bold text-primary text-xl mb-3">Certification</h4>
              <p className="text-sm text-primary/50 leading-relaxed text-sm">Get recognized and connected to our partner network.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
