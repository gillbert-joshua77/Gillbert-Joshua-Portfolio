import { motion } from "motion/react";
import { ArrowLeft, Download } from "lucide-react";

interface ResumePageProps {
  onClose: () => void;
}

export function ResumePage({ onClose }: ResumePageProps) {
  const handleDownload = () => window.print();

  return (
    <div className="min-h-screen bg-[#080B14] font-[Inter,ui-sans-serif,system-ui,sans-serif]">
      {/* Toolbar */}
      <div className="print:hidden sticky top-0 z-50 bg-[#0F1525]/90 backdrop-blur-md border-b border-white/5 h-14 flex items-center justify-between px-6">
        <motion.button
          whileHover={{ x: -3 }}
          onClick={onClose}
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </motion.button>

        <span className="text-gray-500 text-sm hidden sm:block">Resume — Demo</span>

        <motion.button
          whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(124,58,237,0.4)" }}
          whileTap={{ scale: 0.97 }}
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-[#7C3AED] text-white rounded-lg text-sm font-medium hover:bg-[#6D28D9] transition-colors"
        >
          <Download size={14} />
          Download PDF
        </motion.button>
      </div>

      {/* Resume sheet */}
      <div className="py-8 px-4 print:p-0">
        <div
          id="resume-sheet"
          className="max-w-[800px] mx-auto bg-white text-gray-900 shadow-2xl print:shadow-none"
          style={{ minHeight: "1056px", fontFamily: "Inter, sans-serif" }}
        >
          {/* Header */}
          <div style={{ background: "#1e1b4b", padding: "40px 48px 32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
              <div style={{
                width: "72px", height: "72px", borderRadius: "50%",
                background: "rgba(124,58,237,0.2)", border: "2px solid #7C3AED",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0
              }}>
                <span style={{ color: "#a78bfa", fontWeight: 800, fontSize: "1.3rem" }}>GJ</span>
              </div>
              <div>
                <div style={{ height: "18px", width: "220px", background: "rgba(255,255,255,0.15)", borderRadius: "6px", marginBottom: "10px" }} />
                <div style={{ height: "12px", width: "300px", background: "rgba(167,139,250,0.3)", borderRadius: "4px" }} />
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
              {[160, 140, 180, 200].map((w, i) => (
                <div key={i} style={{ height: "10px", width: `${w}px`, background: "rgba(196,181,253,0.25)", borderRadius: "4px" }} />
              ))}
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "36px 48px", display: "flex", flexDirection: "column", gap: "28px" }}>

            {/* Demo banner */}
            <div style={{
              background: "#fef9c3", border: "1px solid #fde68a",
              borderRadius: "8px", padding: "10px 16px",
              display: "flex", alignItems: "center", gap: "10px"
            }}>
              <span style={{ fontSize: "1rem" }}>📄</span>
              <span style={{ fontSize: "0.8rem", color: "#92400e", fontWeight: 600 }}>
                Demo Resume — Real content will be added soon.
              </span>
            </div>

            {/* Summary */}
            <DemoSection title="Summary">
              <DemoLines lines={[100, 95, 80]} />
            </DemoSection>

            <Divider />

            {/* Education */}
            <DemoSection title="Education">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <DemoBar width={200} dark />
                  <DemoBar width={140} />
                </div>
                <DemoBar width={80} />
              </div>
            </DemoSection>

            <Divider />

            {/* Experience */}
            <DemoSection title="Experience">
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[1, 2].map((i) => (
                  <div key={i}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                      <DemoBar width={180} dark />
                      <DemoBar width={100} />
                    </div>
                    <DemoBar width={130} color="#7C3AED" style={{ marginBottom: "8px" }} />
                    <DemoLines lines={[100, 90, 70]} />
                  </div>
                ))}
              </div>
            </DemoSection>

            <Divider />

            {/* Projects */}
            <DemoSection title="Projects">
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[1, 2, 3].map((i) => (
                  <div key={i}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                      <DemoBar width={160} dark />
                      <div style={{ height: "18px", width: "90px", background: "#ede9fe", borderRadius: "999px" }} />
                    </div>
                    <DemoBar width={200} color="#7C3AED" style={{ marginBottom: "8px" }} />
                    <DemoLines lines={[100, 75]} />
                  </div>
                ))}
              </div>
            </DemoSection>

            <Divider />

            {/* Skills */}
            <DemoSection title="Technical Skills">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {[
                  [100, 160],
                  [80, 180],
                  [120, 140],
                  [90, 170],
                  [110, 150],
                  [85, 130],
                ].map(([lw, rw], i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <DemoBar width={lw} color="#7C3AED" />
                    <DemoBar width={rw} />
                  </div>
                ))}
              </div>
            </DemoSection>

            <Divider />

            {/* Certifications */}
            <DemoSection title="Certifications & Badges">
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {[120, 100, 140, 90].map((w, i) => (
                  <div key={i} style={{ height: "28px", width: `${w}px`, background: "#ede9fe", borderRadius: "999px" }} />
                ))}
              </div>
            </DemoSection>

          </div>

          {/* Footer */}
          <div style={{ borderTop: "1px solid #e5e7eb", padding: "16px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ height: "10px", width: "180px", background: "#f3f4f6", borderRadius: "4px" }} />
            <span style={{ fontSize: "0.72rem", color: "#7C3AED", fontWeight: 600 }}>gillbert.dev</span>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body { background: white !important; }
          #resume-sheet { box-shadow: none !important; }
          @page { margin: 0; size: A4; }
        }
      `}</style>
    </div>
  );
}

function DemoSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 style={{ fontSize: "0.7rem", fontWeight: 800, color: "#7C3AED", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "14px" }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function Divider() {
  return <div style={{ height: "1px", background: "#F3F4F6" }} />;
}

function DemoBar({ width, dark, color, style }: { width: number; dark?: boolean; color?: string; style?: React.CSSProperties }) {
  return (
    <div style={{
      height: dark ? "13px" : "10px",
      width: `${width}%` in {} ? width : `${width}px`,
      background: color ?? (dark ? "#d1d5db" : "#e5e7eb"),
      borderRadius: "4px",
      ...style,
    }} />
  );
}

function DemoLines({ lines }: { lines: number[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
      {lines.map((pct, i) => (
        <div key={i} style={{ height: "9px", width: `${pct}%`, background: "#e5e7eb", borderRadius: "4px" }} />
      ))}
    </div>
  );
}
