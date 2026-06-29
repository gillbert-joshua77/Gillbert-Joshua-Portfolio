import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ResumePage } from "./components/ResumePage";
import faviconUrl from "../imports/icon.png";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    // Page title
    document.title = "Gillbert Joshua | Portfolio";

    // Favicon
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const bg = theme === "dark"
    ? "bg-[#080B14] text-white"
    : "bg-white text-gray-900";

  if (showResume) {
    return <ResumePage onClose={() => setShowResume(false)} />;
  }

  return (
    <div
      className={`min-h-screen font-[Inter,ui-sans-serif,system-ui,sans-serif] transition-colors duration-300 ${bg}`}
    >
      <Navbar theme={theme} toggleTheme={toggleTheme} onResumeClick={() => setShowResume(true)} />
      <main>
        <Hero theme={theme} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Certifications theme={theme} />
        <Contact theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  );
}
