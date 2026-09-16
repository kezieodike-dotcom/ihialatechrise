import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search, Compass, BookOpen, Mail, HelpCircle, GraduationCap } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <div className="pt-20 pb-24 px-4 bg-background min-h-screen flex items-center justify-center">
      <SEO
        title="404 - Page Not Found | Ihiala Tech Rise"
        description="The page you are looking for might have been moved or does not exist. Explore our programs or return to the Ihiala Tech Rise homepage."
        noindex={true}
      />

      <div className="max-w-3xl w-full text-center py-12">
        {/* Animated Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6"
        >
          <Compass className="w-4 h-4 animate-spin-slow" /> Error 404 • Destination Not Found
        </motion.div>

        {/* 404 Display */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-black text-primary tracking-tighter mb-4"
        >
          4<span className="text-secondary">0</span>4
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-black text-primary mb-4"
        >
          Looks like you've ventured off the grid!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary/60 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed"
        >
          The page you are looking for doesn't exist, has been relocated, or the link may have contained a typo. Let's get you back on track.
        </motion.p>

        {/* Main Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-white px-7 py-4 rounded-2xl font-bold text-sm shadow-xl hover:brightness-110 active:scale-95 transition-all"
          >
            <Home className="w-4 h-4" /> Return to Homepage
          </Link>

          <Link
            to="/apply"
            className="inline-flex items-center gap-2 bg-secondary text-white px-7 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-secondary/25 hover:brightness-110 active:scale-95 transition-all"
          >
            <GraduationCap className="w-4 h-4" /> Apply for Bootcamps
          </Link>
        </div>

        {/* Quick Navigation Directory */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-primary/5 shadow-lg text-left">
          <h3 className="font-bold text-primary text-sm uppercase tracking-widest mb-6 text-center md:text-left">
            Popular Destinations
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/programs"
              className="p-4 rounded-2xl bg-background hover:bg-primary/5 transition-all flex items-center gap-3 text-primary font-semibold text-sm group"
            >
              <BookOpen className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
              <span>Programs</span>
            </Link>

            <Link
              to="/about"
              className="p-4 rounded-2xl bg-background hover:bg-primary/5 transition-all flex items-center gap-3 text-primary font-semibold text-sm group"
            >
              <Compass className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
              <span>About Us</span>
            </Link>

            <Link
              to="/faq"
              className="p-4 rounded-2xl bg-background hover:bg-primary/5 transition-all flex items-center gap-3 text-primary font-semibold text-sm group"
            >
              <HelpCircle className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
              <span>FAQ Center</span>
            </Link>

            <Link
              to="/contact"
              className="p-4 rounded-2xl bg-background hover:bg-primary/5 transition-all flex items-center gap-3 text-primary font-semibold text-sm group"
            >
              <Mail className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
