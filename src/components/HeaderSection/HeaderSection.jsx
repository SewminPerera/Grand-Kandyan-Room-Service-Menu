import "./HeaderSection.css";
import logoImage from "../../assets/images/logo.png";
import greenChili from "../../assets/images/green-chili.png";
import redChili from "../../assets/images/red-chili.png";
import shrimp from "../../assets/images/shrimp.png"

export default function HeaderSection() {
  return (
    <header className="header-section">
      <div className="header-content-wrapper">
        <div className="header-logo-container">
          <img 
            src={logoImage} 
            alt="The Grand Kandyan Hotel Logo" 
            className="header-logo" 
          />
        </div>

        <h2 className="hotel-subtitle">The Grand Kandyan Hotel</h2>

        <div className="header-title-bar">
          <h1>IN ROOM DINING MENU</h1>
        </div>

        <div className="header-scroll-instruction">
          <span>Scroll below to see the menu</span>
          <svg className="scroll-arrow-long" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="12" y1="0" x2="12" y2="28" stroke="#b98d1f" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M5 20L12 29L19 20" stroke="#b98d1f" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="header-legend">
          <div className="legend-row">
            Vegetarian (V)
            <img src={greenChili} alt="vegetarian" className="legend-icon" />, 
            Pork (P), Alcohol (A), Nuts (N), Spicy 
            <img src={redChili} alt="spicy" className="legend-icon" />,
            Seafood (SF) <img src={shrimp} alt="seafood" className="legend-icon"/>
          </div>
          <div>If you are prone to food allergy or intolerance or special dietary restriction, please inform our F & B team. We will be happy to assist with your needs.</div>
          <div>All prices are subject to Service Charge and Government taxes</div>
        </div>
      </div>
    </header>
  );
}