import "./SidesSection.css";
import { sidesData } from "../../data/sides";
import greenChili from "../../assets/images/green-chili.png";

export default function SidesSection() {
  return (
    <section className="sides-section-wrapper">
      
      <div className="full-width-title">
        <h1 className="menu-title sides-header">
          ADD ON YOUR SIDE
          <img 
            src={greenChili} 
            alt="vegetarian" 
            className="sides-header-icon"
          />
        </h1>
      </div>

      <div className="sides-content-column">
        {sidesData.map((item, index) => (
          <div className="side-item-row" key={`side-${index}`}>
            <h4>{item.title}</h4>
            <span>{item.price}</span>
          </div>
        ))}
      </div>

    </section>
  );
}
