import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, Copy, Sparkles, Phone } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { SectionTitle } from '../components/common/SectionTitle';
import { profileData } from '../data/profile';

export const ContactsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger confetti celebration
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
      });

      // Reset form fields
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <div className="pt-24 pb-28 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Editorial Header */}
      <SectionTitle
        title="Contacts"
        subtitle="Have an inquiry, project proposal, or creative collaboration in mind? Feel free to reach out directly or submit the message form below."
        badge="Get In Touch"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Direct Contact Details (Left Column - 5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-light-text dark:text-dark-text mb-4">
              Let's connect and discuss opportunities.
            </h2>
            <p className="text-sm text-light-muted dark:text-dark-muted leading-relaxed mb-8">
              Currently pursuing a BSc (Hons) in Information Technology specializing in Data Science at SLIIT. Seeking an internship to leverage robust technical and analytical skills in full-stack engineering and machine learning.
            </p>

            {/* Direct Cards */}
            <div className="flex flex-col gap-4">
              {/* Email Card */}
              <div className="p-5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-accent-dynamic/10 text-accent-dynamic">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-sm font-semibold text-light-text dark:text-dark-text hover:text-accent-dynamic transition-colors break-all"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 text-light-muted dark:text-dark-muted hover:text-accent-dynamic transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <CheckCircle2 className="w-4 h-4 text-accent-dynamic" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              {profileData.phone && (
                <div className="p-5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 flex items-center justify-between group">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-accent-dynamic/10 text-accent-dynamic">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted block">
                        Phone / WhatsApp
                      </span>
                      <a
                        href={`tel:${profileData.phone}`}
                        className="text-sm font-semibold text-light-text dark:text-dark-text hover:text-accent-dynamic transition-colors"
                      >
                        {profileData.phone}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Location Card */}
              <div className="p-5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-accent-dynamic/10 text-accent-dynamic">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-light-text dark:text-dark-text">
                    {profileData.location}
                  </span>
                </div>
              </div>

              {/* LinkedIn Profile Card */}
              <div className="p-5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 flex items-center justify-between group">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-accent-dynamic/10 text-accent-dynamic">
                    <FaLinkedinIn className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted block">
                      LinkedIn
                    </span>
                    <a
                      href="https://www.linkedin.com/in/kavisha-gamagedara-4513kavi"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-light-text dark:text-dark-text hover:text-accent-dynamic transition-colors"
                    >
                      in/kavisha-gamagedara-4513kavi
                    </a>
                  </div>
                </div>
              </div>

              {/* Availability Status Card */}
              <div className="p-5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 flex items-center gap-3.5">
                <div className="relative flex items-center justify-center p-2.5 rounded-lg bg-accent-dynamic/10 text-accent-dynamic">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-dynamic animate-ping absolute" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-dynamic" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted block">
                    Opportunity Status
                  </span>
                  <span className="text-sm font-semibold text-light-text dark:text-dark-text">
                    Seeking Data Science & Software Engineering Internship
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 text-xs text-light-muted dark:text-dark-muted">
            Open to on-site, hybrid, and remote internship opportunities.
          </div>
        </div>

        {/* Contact Form (Right Column - 7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 shadow-sm">
            <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent-dynamic" />
              <span>Send a Direct Message</span>
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent-dynamic/15 text-accent-dynamic flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-light-muted dark:text-dark-muted max-w-sm mb-6">
                  Thank you for reaching out. I have received your note and will be in touch shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 rounded-lg bg-black/5 dark:bg-white/5 text-sm font-semibold hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Connor"
                      className="w-full px-4 py-3 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-light-text dark:text-dark-text placeholder-light-muted/50 dark:placeholder-dark-muted/50 focus:outline-none focus:border-accent-dynamic transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@domain.com"
                      className="w-full px-4 py-3 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-light-text dark:text-dark-text placeholder-light-muted/50 dark:placeholder-dark-muted/50 focus:outline-none focus:border-accent-dynamic transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Opportunity"
                    className="w-full px-4 py-3 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-light-text dark:text-dark-text placeholder-light-muted/50 dark:placeholder-dark-muted/50 focus:outline-none focus:border-accent-dynamic transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project vision, timeline, and goals..."
                    className="w-full px-4 py-3 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-light-text dark:text-dark-text placeholder-light-muted/50 dark:placeholder-dark-muted/50 focus:outline-none focus:border-accent-dynamic transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-accent-dynamic text-white dark:text-[#0e0f12] font-semibold text-sm hover:opacity-95 transition-all shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
