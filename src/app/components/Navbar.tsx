import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
  onResumeClick: () => void;
}

const links = ["About", "Skills", "Projects", "Certifications", "Contact"];

export function Navbar({ theme, toggleTheme, onResumeClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4, rootMargin: "-64px 0px 0px 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? theme === "dark"
              ? "bg-[#080B14]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30"
              : "bg-white/90 backdrop-blur-md border-b border-black/5 shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-10 h-full flex items-center justify-between">
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="text-[#7C3AED] font-bold tracking-tight cursor-pointer select-none"
            style={{ fontSize: "1.1rem" }}
            whileHover={{ scale: 1.05 }}
          >
            gillbert.dev
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`relative text-sm transition-colors duration-200 ${
                  activeSection === link.toLowerCase()
                    ? "text-[#7C3AED]"
                    : theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {link}
                {activeSection === link.toLowerCase() && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#7C3AED] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                theme === "dark"
                  ? "text-gray-400 hover:text-white hover:bg-white/5"
                  : "text-gray-500 hover:text-gray-900 hover:bg-black/5"
              }`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <motion.button
              onClick={onResumeClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex items-center gap-1.5 px-4 py-2 bg-[#7C3AED] text-white rounded-lg text-sm font-medium hover:bg-[#6D28D9] transition-colors duration-200"
            >
              <FileText size={14} />
              Resume
            </motion.button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 ${
              theme === "dark" ? "bg-[#080B14]" : "bg-white"
            }`}
          >
            <span className="text-[#7C3AED] font-bold text-xl">gillbert.dev</span>
            {links.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link)}
                className={`text-2xl font-medium transition-colors duration-200 ${
                  activeSection === link.toLowerCase()
                    ? "text-[#7C3AED]"
                    : theme === "dark"
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                {link}
              </motion.button>
            ))}
            <motion.button
              onClick={onResumeClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.06 }}
              className="flex items-center gap-2 px-6 py-3 bg-[#7C3AED] text-white rounded-xl font-medium"
            >
              <FileText size={16} />
              Resume
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
