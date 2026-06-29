import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Wrench, CheckCircle2, ExternalLink } from "lucide-react";

interface ProjectsProps {
  theme: "dark" | "light";
}

const projects = [
  {
    badge: "UNDER DEVELOPMENT · IEEE/ACM TARGET",
    badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    status: "Actively building — not yet released",
    statusIcon: "building",
    title: "ClassroomSync",
    description:
      "Offline peer-to-peer classroom IDE with real-time collaboration and keystroke-based copy detection.",
    tech: ["Electron", "P2P", "Monaco Editor", "Socket.IO"],
    link: null,
  },
  {
    badge: "UNDER DEVELOPMENT · STARTUP INDIA",
    badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    status: "Actively building — not yet released",
    statusIcon: "building",
    title: "UniGuide AI",
    description:
      "AI-powered student guidance platform with RAG pipelines and intelligent counseling.",
    tech: ["Python", "RAG", "LLM", "Django"],
    link: null,
  },
  {
    badge: "LIVE · ONLINE NOW",
    badgeColor: "text-green-400 bg-green-400/10 border-green-400/20",
    status: "Live at gillbert.dev",
    statusIcon: "live",
    title: "Gillbert Dev Portfolio",
    description:
      "Personal portfolio with smooth animations and responsive design.",
    tech: ["React", "Tailwind CSS", "Motion"],
    link: "https://gillbert.dev",
  },
];

export function Projects({ theme }: ProjectsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const cardBase = theme === "dark"
    ? "bg-[#0F1525] border border-white/5"
    : "bg-white border border-gray-100 shadow-sm";

  return (
    <section id="projects" className="py-24 px-10 max-w-[1200px] mx-auto">
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
            What I've been building.
          </h2>
          <p className={`mt-2 text-base ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            Real products. Real problems. Real code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`${cardBase} rounded-2xl p-6 flex flex-col gap-4 group`}
            >
              {/* Badge */}
              <span
                className={`inline-flex self-start px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider border ${project.badgeColor}`}
              >
                {project.badge}
              </span>

              {/* Status */}
              <div className="flex items-center gap-2">
                {project.statusIcon === "building" ? (
                  <Wrench size={13} className="text-amber-400 flex-shrink-0" />
                ) : (
                  <CheckCircle2 size={13} className="text-green-400 flex-shrink-0" />
                )}
                <span className={`text-xs ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3
                className={`font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                style={{ fontSize: "1.2rem", lineHeight: 1.3 }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className={`text-sm leading-relaxed flex-1 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                      theme === "dark"
                        ? "bg-white/5 text-gray-400"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-1.5 text-[#7C3AED] text-sm font-medium mt-1"
                >
                  <ExternalLink size={13} />
                  Visit Site
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
