import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Send, Linkedin, Github, Facebook, Instagram } from "lucide-react";

interface ContactProps {
  theme: "dark" | "light";
}

const EMAIL = "gilbertjoshua77@gmail.com";

export function Contact({ theme }: ContactProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-colors duration-200 ${
    theme === "dark"
      ? "bg-white/5 border border-white/8 text-gray-100 placeholder:text-gray-600 focus:border-[#7C3AED]/60 focus:bg-white/7"
      : "bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#7C3AED]/60 focus:bg-white"
  }`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

const socials = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/gillbert-joshua-mj-35489a419/" },
    { icon: Github, label: "GitHub", href: "https://github.com/gillbert-joshua77" },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/Gillbert-Joshua/",
      icon: () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      ),
    },
    {
      label: "X",
      href: "https://x.com/GillbertJosh",
      icon: () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61591553382790" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/gillberjoshua77?igsh=MWRxZGRsdmdlNndsMw==" },
];;

  return (
    <section id="contact" className="py-24 px-10 max-w-[1200px] mx-auto">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em" }}
            className={theme === "dark" ? "text-white" : "text-gray-900"}
          >
            Got an opportunity or idea? Let's talk.
          </h2>
          <p className={`mt-3 text-base ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            Fill out the form below — I respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className={`rounded-2xl p-8 space-y-4 ${
              theme === "dark"
                ? "bg-[#0F1525] border border-white/5"
                : "bg-white border border-gray-100 shadow-sm"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={`block text-xs font-medium mb-1.5 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className={inputClass}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className={`block text-xs font-medium mb-1.5 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className={`block text-xs font-medium mb-1.5 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Subject
              </label>
              <input
                type="text"
                required
                placeholder="What's this about?"
                className={inputClass}
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              />
            </div>

            <div>
              <label className={`block text-xs font-medium mb-1.5 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about the opportunity, project, or idea..."
                className={`${inputClass} resize-none`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 0 24px rgba(124,58,237,0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#7C3AED] text-white rounded-xl font-semibold hover:bg-[#6D28D9] transition-colors duration-200"
            >
              <Send size={16} />
              Send Message →
            </motion.button>
          </form>

          {/* Divider + socials */}
          <div className="mt-10 text-center">
            <div className="flex items-center gap-4 mb-6">
              <div className={`flex-1 h-px ${theme === "dark" ? "bg-white/8" : "bg-gray-200"}`} />
              <span className={`text-xs ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                Or reach out directly on:
              </span>
              <div className={`flex-1 h-px ${theme === "dark" ? "bg-white/8" : "bg-gray-200"}`} />
            </div>

            <div className="flex items-center justify-center gap-4">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                    theme === "dark"
                      ? "bg-white/5 border border-white/8 text-gray-400 hover:text-white hover:border-[#7C3AED]/40"
                      : "bg-white border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-[#7C3AED]/30"
                  }`}
                  title={s.label}
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
