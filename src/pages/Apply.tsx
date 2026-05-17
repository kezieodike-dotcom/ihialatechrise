import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle, School, Users, Award, Briefcase, Star, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    town: "",
    skill_interest: "",
    motivation: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    let supabaseSaved = false;
    let emailSent = false;
    let submissionErrors: string[] = [];

    // 1. Save to Supabase
    try {
      const { error: submitError } = await supabase
        .from('applications')
        .insert([formData]);

      if (submitError) {
        console.error("Supabase insert error:", submitError);
        submissionErrors.push(`Database: ${submitError.message}`);
      } else {
        supabaseSaved = true;
      }
    } catch (sbErr: any) {
      console.error("Failed to connect to Supabase (check if project is paused):", sbErr);
      submissionErrors.push(`Database: ${sbErr.message || "Failed to fetch (Database offline)"}`);
    }

    // 2. Send email notification via Supabase Edge Function (uses Resend)
    try {
      const response = await fetch(
        "https://pciqgqrbilldcaeeglmr.supabase.co/functions/v1/notify-new-application",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        emailSent = true;
        console.log("Email notification sent successfully.");
      } else {
        const errData = await response.json().catch(() => ({}));
        console.error("Email notification failed:", errData);
        submissionErrors.push(`Email: ${errData.error || "Notification service error"}`);
      }
    } catch (emailErr: any) {
      console.error("Email notification network error:", emailErr);
      submissionErrors.push(`Email: ${emailErr.message || "Network error"}`);
    }

    // 3. Evaluate results
    if (supabaseSaved || emailSent) {
      setSubmitted(true);
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        town: "",
        skill_interest: "",
        motivation: ""
      });
      
      if (submissionErrors.length > 0) {
        console.warn("Application submitted with partial warnings:", submissionErrors.join(", "));
      }
    } else {
      setError(
        "Failed to submit application. Both the database storage and email notification service are currently unavailable. " +
        "Please check your internet connection and try again."
      );
    }
    
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-20 pb-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Form Container */}
        <div className="lg:col-span-7">
          <header className="mb-12">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight"
            >
              Begin Your Tech Journey
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-primary/60 leading-relaxed max-w-2xl"
            >
              Fill out the application below to join our upcoming cohort. Join a community dedicated to empowering the next generation of African tech leaders.
            </motion.p>
          </header>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-primary/5"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-secondary/10 border border-secondary/20 p-10 rounded-3xl text-center"
              >
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Application Received!</h3>
                <p className="text-primary/60 leading-relaxed">
                  Thank you for applying. Our team will review your application and get back to you via email within 5-7 business days.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-secondary font-bold hover:underline"
                >
                  Apply for another program
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest text-[10px]">Full Name</label>
                    <input 
                      required 
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest text-[10px]">Email Address</label>
                    <input 
                      required 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest text-[10px]">Phone Number</label>
                    <input 
                      required 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel" 
                      placeholder="+234..." 
                      className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest text-[10px]">Your Town</label>
                    <select 
                      required 
                      name="town"
                      value={formData.town}
                      onChange={handleChange}
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
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-widest text-[10px]">Skill Interest</label>
                  <select 
                    required 
                    name="skill_interest"
                    value={formData.skill_interest}
                    onChange={handleChange}
                    className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a program</option>
                    <option value="Introduction to UI/UX">Introduction to UI/UX</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Digital Literacy">Digital Literacy</option>
                  </select>
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-bold text-primary uppercase tracking-widest text-[10px]">Why do you want to join ITR?</label>
                   <textarea 
                    required 
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    rows={5} 
                    placeholder="Tell us about your motivation..." 
                    className="w-full bg-background border-none rounded-2xl p-4 focus:ring-2 focus:ring-secondary transition-all resize-none" 
                  />
                </div>

                <motion.button 
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-accent text-white py-5 rounded-2xl font-bold text-xl shadow-xl shadow-accent/20 hover:brightness-110 transition-all mt-6 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading && <Loader2 className="w-5 h-5 animate-spin" />}
                  {loading ? "Submitting..." : "Submit Application"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-5 space-y-8">
          <div className="relative h-80 rounded-[2.5rem] overflow-hidden shadow-2xl group border border-primary/5">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAygDt-8YZ-BinsIh8eIeltYBmh2FEwlkLnNoOQAC1qbLygrN2juNuY4BqcjM2XE9aw5_8Q31ybqUXQpF9HumY-n0IvbsBfeqkOJha9yHapL06QmbTGIcUQnJ5PVEzDEYsxkONz0UjQisxMtMnAdXMatuqV2PaNPFm67_GzX35rnEmQZmXKqnDh4U43jIVyVBdYV2L9DJ7cbKSBx2ffv0NtMCQK0HdIiGNJxR1zx5x1nNePUrTafvzaSdQ2_z_dSgZVOgB8phivawA" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              alt="Join Cohort" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-black mb-1">Join the Cohort</h3>
              <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-70">Ihiala's Premier Tech Talent Pipeline</p>
            </div>
          </div>

          <div className="bg-background rounded-[2.5rem] p-10 border-l-[12px] border-accent space-y-10 shadow-sm">
             <h3 className="text-2xl font-black text-primary">Benefits of Joining</h3>
             
             {[
               { icon: <School className="w-5 h-5" />, title: "Free Training", desc: "Access high-quality, industry-relevant curriculum without any financial barrier." },
               { icon: <Users className="w-5 h-5" />, title: "Mentorship", desc: "Get paired with experienced professionals who guide your career growth." },
               { icon: <Award className="w-5 h-5" />, title: "Certification", desc: "Earn industry-recognized certificates upon successful completion." },
               { icon: <Briefcase className="w-5 h-5" />, title: "Job Placement", desc: "Direct path to internships and job opportunities within our network." }
             ].map((b) => (
               <div key={b.title} className="flex gap-6 items-start">
                  <div className="bg-primary/5 p-3 rounded-xl text-secondary">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{b.title}</h4>
                    <p className="text-[13px] text-primary/50 mt-1 leading-relaxed">{b.desc}</p>
                  </div>
               </div>
             ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-primary p-12 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent opacity-20 rounded-full blur-3xl" />
            <Star className="text-accent mb-6" />
            <p className="text-xl italic font-medium opacity-90 leading-relaxed mb-8">
              "Ihiala Tech Rise changed my life. I went from zero coding knowledge to landing a remote junior dev job in just 6 months."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-accent" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent">Chidi O., Alumni</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
