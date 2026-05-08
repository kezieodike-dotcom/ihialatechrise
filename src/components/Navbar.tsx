import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Programs", path: "/programs" },
  { name: "About", path: "/about" },
  { name: "Impact", path: "/impact" },
  { name: "Partners", path: "/partners" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="relative w-full z-50 bg-white border-b border-primary/5 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.jpeg" alt="Ihiala Tech Rise Logo" className="h-12 w-auto group-hover:scale-110 transition-transform" />
          <span className="font-bold text-xl tracking-tight text-primary">Ihiala Tech Rise</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Programs", path: "/programs" },
            { name: "About", path: "/about" },
            { name: "Impact", path: "/impact" },
            { name: "Contact", path: "/contact" },
          ].map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-[15px] font-medium text-primary/70 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/apply" 
            className="h-[48px] px-6 bg-primary text-white rounded-xl font-semibold text-[15px] flex items-center justify-center hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/10"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-primary/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-primary hover:bg-primary/5 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button className="w-full text-center py-3 font-semibold text-primary">Volunteer</button>
                <Link
                  to="/apply"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-accent text-white text-center py-4 rounded-xl font-bold shadow-lg"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
