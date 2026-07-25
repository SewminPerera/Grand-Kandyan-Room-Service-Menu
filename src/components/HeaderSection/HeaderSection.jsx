import "./HeaderSection.css";
import headingImage from "../../assets/images/heading.jpeg";

export default function HeaderSection() {
  return (
    <header className="header-section">
      <img 
        src={headingImage} 
        alt="In Room Dining Menu - The Grand Kandyan Hotel" 
        className="header-image" 
      />
    </header>
  );
}