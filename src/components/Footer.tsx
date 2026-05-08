import { Link } from "react-router-dom";
import { Mail, Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 border-b border-white/10 pb-8 md:border-0 md:pb-0">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.jpeg" alt="Ihiala Tech Rise Logo" className="h-10 w-auto" />
              <span className="font-bold text-2xl tracking-tight">Ihiala Tech Rise</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Empowering communities through technology and education. Building the future of Ihiala, one developer at a time.
            </p>
            <div className="flex gap-4">
              <button className="p-2 bg-white/10 rounded-full hover:bg-secondary/20 hover:text-secondary transition-all">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white/10 rounded-full hover:bg-secondary/20 hover:text-secondary transition-all">
                <Mail className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white/10 rounded-full hover:bg-secondary/20 hover:text-secondary transition-all">
                <Globe className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 col-span-3 gap-8">
            <div>
              <h4 className="font-bold text-accent mb-6 uppercase tracking-widest text-xs">Programs</h4>
              <ul className="space-y-4">
                <li><Link to="/programs" className="text-white/60 hover:text-white text-sm transition-colors">Web Development</Link></li>
                <li><Link to="/programs" className="text-white/60 hover:text-white text-sm transition-colors">Digital Literacy</Link></li>
                <li><Link to="/programs" className="text-white/60 hover:text-white text-sm transition-colors">Graphic Design</Link></li>
                <li><Link to="/programs" className="text-white/60 hover:text-white text-sm transition-colors">Data Science</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-accent mb-6 uppercase tracking-widest text-xs">Organization</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-white/60 hover:text-white text-sm transition-colors">About Us</Link></li>
                <li><Link to="/impact" className="text-white/60 hover:text-white text-sm transition-colors">Impact Stories</Link></li>
                <li><Link to="/partners" className="text-white/60 hover:text-white text-sm transition-colors">Partner With Us</Link></li>
                <li><button className="text-white/60 hover:text-white text-sm transition-colors text-left uppercase font-bold text-[10px]">Volunteer</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-accent mb-6 uppercase tracking-widest text-xs">Support</h4>
              <ul className="space-y-4">
                <li><Link to="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</Link></li>
                <li><Link to="/contact" className="text-white/60 hover:text-white text-sm transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Ihiala Tech Rise. All rights reserved. Empowering communities through technology.
          </p>
          <Link to="/admin" className="text-white/20 hover:text-white/60 text-[10px] font-bold uppercase tracking-widest transition-all">
            Admin Portal
          </Link>
        </div>
      </div>
    </footer>
  );
}
