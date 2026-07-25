import "./MainEventSection.css";
import MenuItem from "../MenuItem/MenuItem";
import { mainEventData } from "../../data/mainEvent";

export default function MainEventSection() {
  return (
    <section className="menu-section">
      
      <div className="full-width-title">
        <h1 className="menu-title">MAIN EVENTS</h1>
      </div>

      <div className="menu-column">
        {mainEventData.slice(0, 2).map((item, index) => (
          <MenuItem
            key={`main-left-${index}`}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>

      <div className="menu-column">
        {mainEventData.slice(2, 4).map((item, index) => (
          <MenuItem
            key={`main-right-${index}`}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>

    </section>
  );
}