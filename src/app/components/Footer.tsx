interface FooterProps {
  theme: "dark" | "light";
}

export function Footer({ theme }: FooterProps) {
  return (
    <footer
      className={`py-8 border-t px-10 ${
        theme === "dark"
          ? "border-white/5 bg-[#070A14]"
          : "border-gray-100 bg-white"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className={`text-sm ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>
          Built by{" "}
          <span className="text-[#7C3AED] font-medium">Gillbert Joshua</span>
          {" "}· Dindigul → Global.
        </span>
        <span className={`text-xs ${theme === "dark" ? "text-gray-600" : "text-gray-300"}`}>
          © {new Date().getFullYear()} gillbert.dev
        </span>
      </div>
    </footer>
  );
}
