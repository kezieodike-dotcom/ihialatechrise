import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Compass, BookOpen, Users, Shield, HelpCircle, Mail, Globe, ExternalLink, Code, CheckCircle } from "lucide-react";
import SEO from "../components/SEO";

export default function Sitemap() {
  const siteStructure = [
    {
      category: "Main Navigation",
      icon: <Compass className="w-5 h-5 text-secondary" />,
      links: [
        { name: "Home Page", path: "/", desc: "Homepage introducing Ihiala Tech Rise mission, stats, and core offerings" },
        { name: "Programs & Bootcamps", path: "/programs", desc: "Detailed curriculum for Web Dev, Digital Literacy, Graphic Design & Data Science" },
        { name: "About Us", path: "/about", desc: "Our story, founder Engr. Pgm. Obinna Daniel O., and vision for Ihiala LGA" },
        { name: "Impact Stories & Gallery", path: "/impact", desc: "Graduate testimonials, statistics, and photo gallery of past cohorts" },
        { name: "Partner With Us", path: "/partners", desc: "Corporate sponsorship, hardware donations, mentorship, and diaspora engagement" },
        { name: "Contact & Directions", path: "/contact", desc: "Inquiry form, office location, interactive Google Map, and travel directions" },
        { name: "Apply for Cohort", path: "/apply", desc: "Application form for upcoming free tech training cohorts" },
      ],
    },
    {
      category: "Support & Information",
      icon: <HelpCircle className="w-5 h-5 text-accent" />,
      links: [
        { name: "Frequently Asked Questions (FAQ)", path: "/faq", desc: "Answers regarding tuition fees, laptop requirements, duration, and certificates" },
        { name: "Privacy Policy", path: "/privacy", desc: "How we collect, use, and protect student and applicant data" },
        { name: "Submission Confirmation", path: "/thank-you", desc: "Application and contact inquiry confirmation page" },
      ],
    },
    {
      category: "Search Engines & Developer Resources",
      icon: <Code className="w-5 h-5 text-primary" />,
      links: [
        { name: "XML Sitemap (sitemap.xml)", path: "/sitemap.xml", desc: "Raw XML sitemap conforming to sitemaps.org standards for search engine indexing", isExternal: true },
        { name: "Robots Directives (robots.txt)", path: "/robots.txt", desc: "Search crawler directives and bot permissions file", isExternal: true },
        { name: "Admin Portal", path: "/admin", desc: "Restricted administrative dashboard for cohort application reviews" },
      ],
    },
  ];

  return (
    <div className="pt-20 pb-24 px-4 bg-background min-h-screen">
      <SEO
        title="HTML Sitemap | Ihiala Tech Rise"
        description="Explore the full directory of pages, programs, resources, and policies available on the Ihiala Tech Rise website."
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Globe className="w-4 h-4" /> Site Directory & Navigation
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tight"
          >
            Website Sitemap
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary/60 text-lg max-w-2xl mx-auto"
          >
            A comprehensive overview of all pages, educational tracks, and community resources on Ihiala Tech Rise.
          </motion.p>
        </header>

        {/* Categories */}
        <div className="space-y-12">
          {siteStructure.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-primary/5"
            >
              <div className="flex items-center gap-3 mb-8 border-b border-primary/5 pb-4">
                <div className="p-3 bg-background rounded-2xl">{section.icon}</div>
                <h2 className="text-2xl font-bold text-primary">{section.category}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.links.map((link) => (
                  <div
                    key={link.name}
                    className="p-5 rounded-2xl bg-background hover:bg-primary/[0.03] border border-primary/5 transition-all group"
                  >
                    {link.isExternal ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-primary font-bold hover:text-secondary mb-1"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="w-4 h-4 text-primary/40 group-hover:text-secondary group-hover:translate-x-0.5 transition-all" />
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="flex items-center justify-between text-primary font-bold hover:text-secondary mb-1"
                      >
                        <span>{link.name}</span>
                        <span className="text-xs text-secondary font-semibold group-hover:translate-x-1 transition-transform">
                          Visit →
                        </span>
                      </Link>
                    )}
                    <p className="text-xs text-primary/60 leading-relaxed">{link.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
