interface FooterProps {
  theme: "dark" | "light";
}

export function Footer({ theme }: FooterProps) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className={`relative border-t px-6 sm:px-10 ${
        theme === "dark"
          ? "border-white/5 bg-[#070A14]"
          : "border-gray-100 bg-white"
      }`}
    >
      {/* subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-px bg-gradient-to-r from-transparent via-[#7C3AED]/60 to-transparent" />

      <div className="max-w-[1200px] mx-auto py-10 flex flex-col items-center gap-6">
        {/* Logo / name */}
        <div className="flex flex-col items-center gap-1">
          <span
            className={`text-lg font-bold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            gillbert<span className="text-[#7C3AED]">.dev</span>
          </span>
          <span
            className={`text-xs ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Building things that outlive me.
          </span>
        </div>

        {/* Divider */}
        <div
          className={`w-full max-w-xs h-px ${
            theme === "dark" ? "bg-white/5" : "bg-gray-100"
          }`}
        />

        {/* Bottom row */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
          <span
            className={`text-sm ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Built by{" "}
            <span className="text-[#7C3AED] font-medium">
              Gillbert Joshua
            </span>{" "}
            · Dindigul → Global.
          </span>

          <div className="flex items-center gap-4">
            <span
              className={`text-xs ${
                theme === "dark" ? "text-gray-600" : "text-gray-300"
              }`}
            >
              © {new Date().getFullYear()} gillbert.dev
            </span>
            <button
              onClick={scrollToTop}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                theme === "dark"
                  ? "border-white/10 text-gray-400 hover:text-white hover:border-[#7C3AED]/50"
                  : "border-gray-200 text-gray-500 hover:text-gray-900 hover:border-[#7C3AED]/50"
              }`}
            >
              ↑ Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}