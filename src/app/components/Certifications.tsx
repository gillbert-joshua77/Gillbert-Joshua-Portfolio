import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Award, Clock, Plus } from "lucide-react";

interface CertificationsProps {
  theme: "dark" | "light";
}

const badges = [
  { name: "HackerRank ", color: "text-green-400", bg: "bg-green-400/10 border-green-400/20" },
  { name: "LeetCode · Active", color: "text-orange-400", bg: "bg-orange-400/10 border-orange-400/20" },
  { name: "GeeksforGeeks · Member", color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/20" },
];

export function Certifications({ theme }: CertificationsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const cardBase = theme === "dark"
    ? "border border-dashed border-white/10 bg-[#0F1525]/50"
    : "border border-dashed border-gray-200 bg-gray-50/50";

  return (
    <section
      id="certifications"
      className={`py-24 ${theme === "dark" ? "bg-[#070A14]" : "bg-gray-50/50"}`}
    >
      <div className="px-10 max-w-[1200px] mx-auto" ref={ref}>
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
            Proof of the grind.
          </h2>
          <p className={`mt-2 text-base ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            Building the list — certifications coming as they're earned.
          </p>
        </motion.div>

        {/* 2x2 cert grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`${cardBase} rounded-2xl p-6 flex items-start gap-4`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "rgba(124,58,237,0.08)", border: "1px dashed rgba(124,58,237,0.3)" }}
              >
                <Award size={18} className="text-[#7C3AED] opacity-50" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                    Platform TBA
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/20">
                    <Clock size={9} />
                    IN PROGRESS
                  </span>
                </div>
                <h4
                  className={`font-semibold mb-1 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                  style={{ fontSize: "1rem" }}
                >
                  Coming Soon
                </h4>
                <p className={`text-xs leading-relaxed ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
                  This certificate is planned and will be updated upon completion.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`text-center text-sm mb-10 ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}
        >
          Certificates will appear here as they are earned.
        </motion.p>

        {/* Badge strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {badges.map((badge) => (
            <span
              key={badge.name}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border ${badge.bg} ${badge.color}`}
            >
              <Award size={12} />
              {badge.name}
            </span>
          ))}
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border border-dashed ${
              theme === "dark"
                ? "border-white/10 text-gray-500"
                : "border-gray-200 text-gray-400"
            }`}
          >
            <Plus size={12} />
            Add Badge
          </span>
        </motion.div>
      </div>
    </section>
  );
}
