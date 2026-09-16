import { useSearchParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle, ArrowRight, Home, Send, MessageCircle, BookOpen, Calendar, Mail, Sparkles } from "lucide-react";
import SEO from "../components/SEO";
import SocialShare from "../components/SocialShare";

export default function ThankYou() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "application";
  const isContact = type === "contact";

  return (
    <div className="pt-20 pb-24 px-4 bg-background min-h-screen">
      <SEO
        title={isContact ? "Thank You for Contacting Us | Ihiala Tech Rise" : "Thank You for Applying | Ihiala Tech Rise"}
        description="We have received your submission. Learn what happens next as we review your submission and prepare onboarding details."
      />

      <div className="max-w-4xl mx-auto">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-[3rem] p-8 md:p-14 shadow-2xl border border-primary/5 text-center relative overflow-hidden"
        >
          {/* Subtle decorative glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            className="w-24 h-24 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-secondary/30 relative"
          >
            <CheckCircle className="w-12 h-12" />
            <span className="absolute -top-1 -right-1 bg-accent p-1.5 rounded-full text-white">
              <Sparkles className="w-4 h-4" />
            </span>
          </motion.div>

          <span className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Submission Confirmed
          </span>

          <h1 className="text-3xl md:text-5xl font-black text-primary mb-4 tracking-tight">
            {isContact ? "Thank You for Reaching Out!" : "Application Received Successfully!"}
          </h1>

          <p className="text-lg text-primary/70 max-w-2xl mx-auto leading-relaxed mb-10">
            {isContact
              ? "Thank you for getting in touch with Ihiala Tech Rise. A member of our team will review your inquiry and respond to your email shortly."
              : "Congratulations on taking the bold first step toward your tech career! Our admissions team has logged your application and will review your profile."}
          </p>

          {/* Next Steps Timeline */}
          <div className="bg-background rounded-3xl p-6 md:p-8 text-left mb-10 border border-primary/5">
            <h3 className="font-black text-primary text-xl mb-6 text-center md:text-left">
              What Happens Next?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm mb-1">Application Review</h4>
                  <p className="text-xs text-primary/60 leading-relaxed">
                    Our team reviews submissions within <strong className="text-primary">5 to 7 business days</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-accent/10 text-accent flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm mb-1">Email Notification</h4>
                  <p className="text-xs text-primary/60 leading-relaxed">
                    Check your inbox and spam folder for official cohort status and schedule updates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm mb-1">Cohort Onboarding</h4>
                  <p className="text-xs text-primary/60 leading-relaxed">
                    Selected applicants receive orientation details, course guides, and mentor assignments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="https://t.me/ihialatechrise"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#24A1DE] text-white px-6 py-3.5 rounded-2xl font-bold text-sm hover:brightness-110 shadow-lg shadow-[#24A1DE]/25 transition-all"
            >
              <Send className="w-4 h-4" /> Join Telegram Community
            </a>

            <a
              href="https://wa.me/2347037208507"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-2xl font-bold text-sm hover:brightness-110 shadow-lg shadow-[#25D366]/25 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>

            <Link
              to="/programs"
              className="inline-flex items-center gap-2 bg-primary/5 hover:bg-primary/10 text-primary px-6 py-3.5 rounded-2xl font-bold text-sm transition-all"
            >
              <BookOpen className="w-4 h-4" /> Explore Programs
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-primary/15 hover:border-primary text-primary px-6 py-3.5 rounded-2xl font-bold text-sm transition-all"
            >
              <Home className="w-4 h-4" /> Back to Home
            </Link>
          </div>

          {/* Social Share Callout */}
          <div className="text-left border-t border-primary/10 pt-10">
            <SocialShare
              title="I just applied to Ihiala Tech Rise!"
              summary="Excited to take the next step in my tech journey with Ihiala Tech Rise! Free tech training in Web Development, Digital Literacy, Graphic Design & Data Science for youths in Ihiala LGA."
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
