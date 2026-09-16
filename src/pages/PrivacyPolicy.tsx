import { motion } from "motion/react";
import { Shield, Lock, Eye, FileText, CheckCircle, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function PrivacyPolicy() {
  const lastUpdated = "September 16, 2026";

  return (
    <div className="pt-20 pb-24 px-4 bg-background min-h-screen">
      <SEO
        title="Privacy Policy | Ihiala Tech Rise"
        description="Learn how Ihiala Tech Rise collects, uses, and safeguards your personal information when applying for our tech training cohorts and interacting with our platform."
        keywords="Ihiala Tech Rise privacy policy, data protection, student data privacy, Anambra tech"
      />

      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary/60 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        {/* Header */}
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center p-4 bg-secondary/10 text-secondary rounded-2xl mb-6 shadow-sm"
          >
            <Shield className="w-8 h-8" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tight"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary/60 text-sm md:text-base max-w-xl mx-auto"
          >
            Your privacy and trust are paramount to us. This policy explains how Ihiala Tech Rise collects, protects, and respects your data.
          </motion.p>
          <p className="text-xs text-primary/40 font-semibold uppercase tracking-widest mt-4">
            Last Updated: {lastUpdated}
          </p>
        </header>

        {/* Content Box */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-xl border border-primary/5 space-y-12 text-primary/80 leading-relaxed">
          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-secondary/10 text-secondary rounded-xl">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-primary">1. Overview & Organization</h2>
            </div>
            <p className="mb-4">
              <strong>Ihiala Tech Rise (ITR)</strong> is a community-driven technology empowerment initiative founded by{" "}
              <strong>Engr. Pgm. Obinna Daniel O.</strong> (a native of Mbrakpaka in Ihiala Local Government Area, Anambra State, Nigeria).
            </p>
            <p>
              Our mission is to bridge the digital skills gap and unlock global tech opportunities for youths, students, graduates, and professionals across all 10 towns of Ihiala LGA (Ihiala, Amorka, Azia, Lilu, Okija, Mbosi, Isseke, Orsumoghu, Ubuluisuzor, and Uli) and neighboring communities.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent/10 text-accent rounded-xl">
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-primary">2. Information We Collect</h2>
            </div>
            <p className="mb-4">
              We collect information you directly provide when applying for training cohorts, contacting our team, or volunteering:
            </p>
            <ul className="space-y-3 list-disc pl-6 marker:text-secondary">
              <li>
                <strong>Application Information:</strong> Full name, email address, WhatsApp/phone number, home town/community in Ihiala LGA, preferred learning track (Web Development, Digital Literacy, Graphic Design, Data Science), and your motivation statement.
              </li>
              <li>
                <strong>Inquiries & Contact Details:</strong> Name, email address, town, subject, and any message or question you send through our contact form.
              </li>
              <li>
                <strong>Partner & Volunteer Submissions:</strong> Organization name, contact person details, collaboration proposal, and sponsorship intent.
              </li>
              <li>
                <strong>Device & Usage Data:</strong> Basic technical logs such as browser type, referring URLs, device operating system, and pages viewed, gathered automatically to diagnose server errors and optimize page speed.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 text-primary rounded-xl">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-primary">3. How We Use Your Information</h2>
            </div>
            <p className="mb-4">Your information is used strictly for legitimate organizational and educational purposes:</p>
            <ul className="space-y-3 list-disc pl-6 marker:text-secondary">
              <li>Reviewing and processing admissions into our tech training cohorts.</li>
              <li>Communicating cohort schedules, onboarding instructions, classroom venues, and training materials.</li>
              <li>Providing career mentorship, internship placements, and employment recommendations upon graduation.</li>
              <li>Responding directly to questions, feedback, or partner inquiries submitted through our website.</li>
              <li>Sending essential program updates and announcements via email or WhatsApp/Telegram groups.</li>
              <li>Compiling anonymized statistics (e.g., total graduates trained, employment rate) to demonstrate community impact to partners and sponsors.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-secondary/10 text-secondary rounded-xl">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-primary">4. Data Storage, Security & Retention</h2>
            </div>
            <p className="mb-4">
              We take data security seriously. All application submissions and form communications are transmitted securely using HTTPS/TLS encryption.
            </p>
            <p className="mb-4">
              Data is stored in authenticated, cloud-hosted infrastructure (Supabase PostgreSQL with Row Level Security) and is accessible only to authorized administrators and cohort coordinators.
            </p>
            <p>
              We retain applicant records for the duration of the training program and subsequent alumni mentorship, or until you request its deletion.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Third-Party Services & Sharing</h2>
            <p className="mb-4">
              <strong>We never sell, rent, or trade your personal information to third-party advertisers or data brokers.</strong>
            </p>
            <p className="mb-4">
              We work with select trusted service providers solely to operate our platform:
            </p>
            <ul className="space-y-2 list-disc pl-6 marker:text-secondary">
              <li><strong>Supabase:</strong> Secure cloud database and authentication provider.</li>
              <li><strong>Resend / Edge Functions:</strong> Automated transactional email notification delivery for new applications and support tickets.</li>
              <li><strong>Google Maps:</strong> Used to display venue locations and transit directions in Ihiala.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights & Choices</h2>
            <p className="mb-4">You have the following rights regarding your personal information:</p>
            <ul className="space-y-3 list-disc pl-6 marker:text-secondary">
              <li><strong>Access & Review:</strong> You may request a copy of the personal details we hold about you.</li>
              <li><strong>Correction:</strong> You can ask us to correct or update inaccurate contact or cohort information.</li>
              <li><strong>Erasure:</strong> You can request that we delete your application records from our database.</li>
              <li><strong>Opt-Out:</strong> You may unsubscribe from non-essential emails or leave our community communication channels at any time.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Children's Privacy</h2>
            <p>
              Our programs are designed for secondary school students, school leavers, undergraduates, and adults. If an applicant is under the age of 16, parental or guardian consent is encouraged prior to enrolling in physical training sessions.
            </p>
          </section>

          {/* Section 8 */}
          <section className="pt-8 border-t border-primary/10">
            <h2 className="text-2xl font-bold text-primary mb-6">8. Contact Us Regarding Your Privacy</h2>
            <p className="mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please reach out to our team:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background p-6 rounded-2xl flex items-start gap-4">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">Email</p>
                  <a href="mailto:hello@ihialatechrise.org" className="font-bold text-primary hover:text-secondary text-sm">
                    hello@ihialatechrise.org
                  </a>
                </div>
              </div>

              <div className="bg-background p-6 rounded-2xl flex items-start gap-4">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">Phone / WhatsApp</p>
                  <a href="https://wa.me/2347037208507" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:text-accent text-sm">
                    +234 703 720 8507
                  </a>
                </div>
              </div>

              <div className="bg-background p-6 rounded-2xl flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">Headquarters</p>
                  <p className="font-bold text-primary text-sm">
                    Mbrakpaka, Ihiala LGA, Anambra State
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
