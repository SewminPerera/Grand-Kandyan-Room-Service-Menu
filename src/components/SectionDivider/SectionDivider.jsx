import "./SectionDivider.css";
import patternBar from "../../assets/images/pattern-bar.png";

export default function SectionDivider() {
  return (
    <div className="section-divider-wrapper">
      <img 
        src={patternBar} 
        alt="Decorative Pattern Divider" 
        className="section-divider-img" 
      />
    </div>
  );
}