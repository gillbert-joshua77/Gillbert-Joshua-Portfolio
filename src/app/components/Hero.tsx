import { Github, Linkedin, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import suitImage from "../../imports/Suit_Image.png";

interface HeroProps {
  theme: "dark" | "light";
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export function Hero({ theme }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 px-10 max-w-[1200px] mx-auto"
    >
      <div className="w-full grid lg:grid-cols-2 gap-16 items-center py-20">
        {/* Left */}
        <div className="space-y-8">
          <motion.div {...fadeUp(0.1)}>
            <span
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border ${
                theme === "dark"
                  ? "border-[#7C3AED]/30 text-[#A78BFA] bg-[#7C3AED]/10"
                  : "border-[#7C3AED]/20 text-[#7C3AED] bg-[#7C3AED]/5"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for AI Research Internship · 2027
            </span>
          </motion.div>

          <div className="space-y-2">
            <motion.h1
              {...fadeUp(0.2)}
              style={{
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
              className={theme === "dark" ? "text-white" : "text-gray-900"}
            >
              Gillbert
            </motion.h1>
            <motion.h1
              {...fadeUp(0.3)}
              style={{
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
              className="text-[#7C3AED]"
            >
              Joshua
            </motion.h1>
          </div>

          <motion.p
            {...fadeUp(0.4)}
            style={{ fontSize: "1.2rem", fontWeight: 600 }}
            className={theme === "dark" ? "text-gray-300" : "text-gray-700"}
          >
            Building what others only imagine.
          </motion.p>

          <motion.p
            {...fadeUp(0.5)}
            className={`text-base leading-relaxed max-w-md ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            IMCA student at Parul University, self-taught developer from Dindigul, Tamil Nadu.
            I build products, solve hard problems, and work toward becoming an AI researcher.
          </motion.p>

          <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(124,58,237,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-[#7C3AED] text-white rounded-xl font-medium hover:bg-[#6D28D9] transition-colors duration-200"
            >
              View Projects
            </motion.button>

            <motion.a
              href="https://github.com/gillbert-joshua77"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium border transition-colors duration-200 ${
                theme === "dark"
                  ? "border-white/10 text-gray-300 hover:border-white/20 hover:text-white bg-white/5"
                  : "border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900 bg-white"
              }`}
            >
              <Github size={16} />
              GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/gillbert-joshua-mj-35489a419/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium border transition-colors duration-200 ${
                theme === "dark"
                  ? "border-white/10 text-gray-300 hover:border-white/20 hover:text-white bg-white/5"
                  : "border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900 bg-white"
              }`}
            >
              <Linkedin size={16} />
              LinkedIn
            </motion.a>
          </motion.div>

        </div>

        {/* Right — Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)",
                transform: "scale(1.3)",
                filter: "blur(20px)",
              }}
            />
            {/* Avatar circle */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative w-[320px] h-[320px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden"
              style={{
                border: "2px solid #7C3AED",
                boxShadow: "0 0 40px rgba(124,58,237,0.3)",
              }}
            >
              <img
                src={suitImage}
                alt="Gillbert Joshua"
                className="w-full h-full object-cover object-top"
              />

              {/* Orbit ring */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  border: "1px solid rgba(124,58,237,0.2)",
                  transform: "scale(1.12)",
                }}
              />
              {/* Floating dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div
                  className="absolute left-1/2"
                  style={{ top: "-6px", transform: "translateX(-50%)" }}
                >
                  <div className="w-3 h-3 rounded-full bg-[#7C3AED]" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
