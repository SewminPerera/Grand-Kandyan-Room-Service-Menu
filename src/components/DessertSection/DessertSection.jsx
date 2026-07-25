import "../BreadSection/BreadSection.css";
import MenuItem from "../MenuItem/MenuItem";
import { dessertsData } from "../../data/desserts";

export default function DessertSection() {
  const midIndex = Math.ceil(dessertsData.length / 2);
  const leftItems = dessertsData.slice(0, midIndex);
  const rightItems = dessertsData.slice(midIndex);

  return (
    <section className="menu-section">
      
      <div className="full-width-title">
        <h1 className="menu-title">A PERFECT ENDING</h1>
      </div>

      <div className="menu-column">
        {leftItems.map((item, index) => (
          <MenuItem
            key={`left-${index}`}
            title={item.title}
            description={item.description}
            price={item.price}
            icon={item.icon}
          />
        ))}
      </div>

      <div className="menu-column">
        {rightItems.map((item, index) => (
          <MenuItem
            key={`right-${index}`}
            title={item.title}
            description={item.description}
            price={item.price}
            icon={item.icon}
          />
        ))}
      </div>

    </section>
  );
}