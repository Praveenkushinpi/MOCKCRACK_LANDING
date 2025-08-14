// components/created/FloatingFormulas.tsx
import React from "react";

type FormulaProps = {
  text: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  transform?: string;
  color?: string;
};

const formulas: FormulaProps[] = [
  { text: "E = mc²", top: "0%", left: "0%", color: "#FFD700" },
  { text: "∫₀^∞ e^x dx = 1", top: "0%", right: "0%", color: "#87CEFA" },
  { text: "a² + b² = c²", top: "100%", right: "30%", color: "#FF9800" },
  { text: "f(x) = sin(x) + cos(x)", bottom: "50%", right: "100%", color: "#FFB6C1" },
  { text: "∇·E = ρ/ε₀", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#FFD700" },
  { text: "F = ma", top: "10%", left: "80%", color: "#87CEFA" },
  { text: "V = IR", bottom: "30%", right: "70%", color: "#FF9800" },
  { text: "y = mx + c", top: "60%", left: "10%", color: "#FFB6C1" },
  { text: "P = W/t", bottom: "10%", left: "50%", color: "#FFD700" },
  { text: "c² = a² + b² - 2ab cos(θ)", top: "20%", right: "40%", color: "#00FF00" },
  { text: "λ = h/p", bottom: "20%", left: "70%", color: "#FF69B4" },
  { text: "Δx·Δp ≥ ℏ/2", top: "70%", right: "10%", color: "#1E90FF" },
];

const Formula: React.FC<FormulaProps> = ({ text, top, bottom, left, right, transform, color }) => (
  <div
    style={{
      position: "absolute",
      top,
      bottom,
      left,
      right,
      transform,
      color,
      opacity: 0.3, // increased opacity
      fontSize: "1.5rem", // larger font
      transition: "opacity 0.3s ease",
      pointerEvents: "auto",
      fontWeight: "italics",
      zIndex: 0, // behind content
    }}
    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
  >
    {text}
  </div>
);

const FloatingFormulas: React.FC = () => {
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {formulas.map((formula, idx) => (
        <Formula key={idx} {...formula} />
      ))}
    </div>
  );
};

export default FloatingFormulas;
