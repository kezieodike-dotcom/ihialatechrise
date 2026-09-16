import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Search, HelpCircle, MessageCircle, Mail, BookOpen, Users, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General & Admissions" | "Programs & Learning" | "Requirements & Equipment" | "Partners & Mentors";
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "eligibility",
    category: "General & Admissions",
    question: "Who can apply for Ihiala Tech Rise programs?",
    answer:
      "Our programs are open to youths, secondary school leavers, tertiary students, graduates, and working-class individuals across all 10 towns of Ihiala Local Government Area (Ihiala, Amorka, Azia, Lilu, Okija, Mbosi, Isseke, Orsumoghu, Ubuluisuzor, and Uli) and neighboring Anambra communities. Whether you are a complete beginner or looking to advance your digital skills, you are welcome to apply.",
  },
  {
    id: "fees",
    category: "General & Admissions",
    question: "Is the training really 100% free of charge?",
    answer:
      "Yes! Ihiala Tech Rise is a philanthropic community-first initiative founded by Engr. Pgm. Obinna Daniel O. Tuition is fully sponsored to ensure that financial barriers do not stop any motivated youth from acquiring high-income digital and software engineering skills.",
  },
  {
    id: "how-to-know-status",
    category: "General & Admissions",
    question: "How will I know if my application was accepted?",
    answer:
      "Once you submit the online application form, our admissions team reviews your submission. Selected applicants receive an email notification and WhatsApp message within 5 to 7 business days with cohort onboarding dates and orientation venue details.",
  },
  {
    id: "available-programs",
    category: "Programs & Learning",
    question: "What courses and tech tracks are currently offered?",
    answer:
      "We currently offer specialized cohorts in:\n• Web Development (HTML, CSS, JavaScript, React, Node.js & Full-stack fundamentals)\n• Digital Literacy & Modern Computing\n• Graphic Design & Brand Identity (Figma, Photoshop, Illustrator)\n• Advanced Data Analytics & AI Tools (Upcoming Q4 2026 track)",
  },
  {
    id: "program-duration",
    category: "Programs & Learning",
    question: "What is the duration of each cohort?",
    answer:
      "Cohorts run for 8 to 12 weeks of intensive, hands-on training. Each track combines live interactive workshops, practical take-home projects, peer collaboration, and a final capstone project presentation.",
  },
  {
    id: "certification",
    category: "Programs & Learning",
    question: "Do students receive a certificate upon graduation?",
    answer:
      "Yes. Students who attend scheduled sessions, fulfill attendance benchmarks, and successfully build and defend their capstone projects receive an official Ihiala Tech Rise Certificate of Completion and portfolio review assistance.",
  },
  {
    id: "laptop-requirement",
    category: "Requirements & Equipment",
    question: "Do I need to own a personal laptop before applying?",
    answer:
      "Having a personal laptop is highly recommended, especially for practical tracks like Web Development and Graphic Design so you can practice daily. However, for Digital Literacy, lab workstations and shared resources are made accessible during physical training sessions.",
  },
  {
    id: "zero-tech-background",
    category: "Requirements & Equipment",
    question: "Can I join if I have zero prior tech or computer experience?",
    answer:
      "Absolutely! We specifically designed our beginner Digital Literacy track to teach foundational computer concepts from scratch, building confidence before students transition into specialized software engineering or design tracks.",
  },
  {
    id: "physical-location",
    category: "Requirements & Equipment",
    question: "Where are classes held? Is there an online option?",
    answer:
      "Physical classes are held at our designated training center in Ihiala town (accessible from the Onitsha-Owerri Expressway). We also provide supplemental online materials, video recordings, and active Telegram mentorship channels for hybrid engagement.",
  },
  {
    id: "partnering-and-sponsorship",
    category: "Partners & Mentors",
    question: "How can diaspora members, companies, or NGOs partner with us?",
    answer:
      "We warmly welcome strategic partners! You can support the mission by donating laptops or workstations, sponsoring high-speed internet connectivity, volunteering as guest lecturers or industry mentors, or offering remote internship opportunities to top graduates. Visit our Partners page or email hello@ihialatechrise.org.",
  },
  {
    id: "volunteer-mentor",
    category: "Partners & Mentors",
    question: "Can I volunteer as a tech tutor or mentor?",
    answer:
      "Yes. Experienced developers, UI/UX designers, and tech professionals passionate about community development are encouraged to volunteer. Reach out via our Contact form or Telegram community to join our mentor network.",
  },
];

const CATEGORIES = [
  "All",
  "General & Admissions",
  "Programs & Learning",
  "Requirements & Equipment",
  "Partners & Mentors",
] as const;

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>("eligibility");

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="pt-20 pb-24 px-4 bg-background min-h-screen">
      <SEO
        title="Frequently Asked Questions (FAQ) | Ihiala Tech Rise"
        description="Find answers to common questions about Ihiala Tech Rise tech bootcamps, eligibility, tuition-free training, program durations, venues in Ihiala, and laptop requirements."
        keywords="Ihiala Tech Rise FAQ, coding training Ihiala questions, free tech boot camp Anambra, how to apply"
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          >
            <HelpCircle className="w-4 h-4" /> Help Center & Answers
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary/60 text-lg max-w-2xl mx-auto"
          >
            Everything you need to know about our free tech programs, admissions, curriculum, and community mission in Ihiala.
          </motion.p>

          {/* Search bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-primary/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. laptop, free, duration, certificate)..."
              className="w-full bg-white pl-12 pr-4 py-4 rounded-2xl border border-primary/10 shadow-sm focus:ring-2 focus:ring-secondary focus:outline-none text-primary text-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-primary/40 hover:text-primary"
              >
                Clear
              </button>
            )}
          </div>
        </header>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-primary/70 border border-primary/5 hover:bg-primary/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-primary/5">
              <p className="text-primary/60 mb-4">No questions matched your search criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="text-secondary font-bold text-sm hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-primary/5 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-primary/[0.01] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                      <span className="font-bold text-primary text-base md:text-lg">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-primary/40 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-secondary" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-primary/70 text-sm md:text-base leading-relaxed border-t border-primary/5 whitespace-pre-line pl-11">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Callout: Still have questions? */}
        <div className="bg-gradient-to-r from-primary to-primary/90 text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-accent font-bold text-xs uppercase tracking-widest block mb-2">
              Unanswered Questions?
            </span>
            <h3 className="text-2xl md:text-3xl font-black mb-2">Still need help or guidance?</h3>
            <p className="text-white/70 text-sm max-w-xl">
              Our team is readily available on WhatsApp and email to guide you through cohort requirements, training schedules, or partnership inquiries.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <a
              href="https://wa.me/2347037208507"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl font-bold text-sm hover:brightness-110 shadow-lg shadow-[#25D366]/20 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-5 py-3 rounded-xl font-bold text-sm hover:bg-white/90 transition-all"
            >
              <Mail className="w-4 h-4" /> Contact Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
