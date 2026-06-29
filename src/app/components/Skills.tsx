import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Globe, Server, Code2, Wrench, BookOpen } from "lucide-react";

interface SkillsProps {
  theme: "dark" | "light";
}

const skillGroups = [
  {
    icon: Globe,
    title: "Frontend",
    items: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    row: 0,
  },
  {
    icon: Server,
    title: "Backend & DB",
    items: ["Django", "Django REST Framework", "MySQL", "Python", "REST APIs"],
    row: 0,
  },
  {
    icon: Code2,
    title: "Core Languages",
    items: ["Java", "Python", "C", "JavaScript"],
    row: 0,
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Postman"],
    row: 1,
  },
  {
    icon: BookOpen,
    title: "CS Fundamentals",
    items: ["DSA", "OOP", "RDBMS", "Software Engineering", "Computer Networks"],
    row: 1,
  },
];

const tagColors = [
  "rgba(124,58,237,0.15)",
  "rgba(79,70,229,0.12)",
  "rgba(99,102,241,0.12)",
];

export function Skills({ theme }: SkillsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const cardBase = theme === "dark"
    ? "bg-[#0F1525] border border-white/5"
    : "bg-white border border-gray-100 shadow-sm";

  const topRow = skillGroups.filter((g) => g.row === 0);
  const bottomRow = skillGroups.filter((g) => g.row === 1);

  return (
    <section
      id="skills"
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
            Tools I actually ship with.
          </h2>
        </motion.div>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {topRow.map((group, i) => (
            <SkillCard key={group.title} group={group} theme={theme} cardBase={cardBase} delay={i * 0.08} inView={inView} />
          ))}
        </div>

        {/* Bottom row: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bottomRow.map((group, i) => (
            <SkillCard key={group.title} group={group} theme={theme} cardBase={cardBase} delay={0.24 + i * 0.08} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  group,
  theme,
  cardBase,
  delay,
  inView,
}: {
  group: typeof skillGroups[0];
  theme: string;
  cardBase: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`${cardBase} rounded-2xl p-6 flex flex-col gap-4`}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(124,58,237,0.12)" }}
        >
          <group.icon size={18} className="text-[#7C3AED]" />
        </div>
        <span
          className={`font-semibold text-sm ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}
        >
          {group.title}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item, idx) => (
          <span
            key={item}
            className={`px-3 py-1 rounded-lg text-xs font-medium ${
              theme === "dark" ? "text-[#A78BFA]" : "text-[#7C3AED]"
            }`}
            style={{ background: tagColors[idx % tagColors.length] }}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
