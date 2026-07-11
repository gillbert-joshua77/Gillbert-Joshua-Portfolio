import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { GraduationCap, Calendar, Brain, Layers, Target, MapPin } from "lucide-react";

interface AboutProps {
  theme: "dark" | "light";
}

const infoCards = [
  { icon: GraduationCap, label: "Degree", value: "IMCA (Integrated MCA)" },
  { icon: Calendar, label: "Year", value: "2025–2030" },
  { icon: Brain, label: "Current Focus", value: "AI Research & Product Development" },
  { icon: Layers, label: "Project Status", value: "2 Active · 1 Live" },
  { icon: Target, label: "Goal", value: "AI Research Internship · 2027" },
  { icon: MapPin, label: "Hometown", value: "Dindigul, Tamil Nadu" },
];

export function About({ theme }: AboutProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const card = theme === "dark"
    ? "bg-[#0F1525] border border-white/5"
    : "bg-white border border-gray-100 shadow-sm";

  return (
    <section id="about" className="py-24 px-10 max-w-[1200px] mx-auto">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em" }}
            className={theme === "dark" ? "text-white" : "text-gray-900"}
          >
            From Dindigul to global stages.
          </h2>
          <p className={`mt-2 text-base ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            Second-year IMCA student. Builder. Lifelong learner.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div className="space-y-6">
            {[
              `Gillbert Joshua MJ is a developer and IMCA student at Parul University, Gujarat, focused on AI/ML research and full-stack development. He builds practical tools like ClassroomSync (an offline classroom collaboration IDE) and UniGuide AI (an AI-powered college and career guidance platform). His work centers on solving real problems through strong DSA fundamentals, clean architecture, and applied AI — with the long-term goal of contributing to AI research at the graduate level.`,
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className={`text-base leading-relaxed ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {para}
              </motion.p>
            ))}

            {/* Accent bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-0.5 w-24 bg-[#7C3AED] origin-left rounded-full"
            />
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
            {infoCards.map((card_item, i) => (
              <motion.div
                key={card_item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className={`${card} rounded-xl px-4 flex items-center gap-3`}
                style={{ height: "72px" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(124,58,237,0.12)" }}
                >
                  <card_item.icon size={16} className="text-[#7C3AED]" />
                </div>
                <div className="min-w-0">
                  <div className={`text-xs ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                    {card_item.label}
                  </div>
                  <div
                    className={`truncate text-sm font-medium ${
                      theme === "dark" ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {card_item.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
