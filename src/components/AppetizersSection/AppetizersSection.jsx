import "./AppetizersSection.css";
import MenuItem from "../MenuItem/MenuItem";
import { appetizersData } from "../../data/appetizers";

export default function AppetizersSection() {
  return (
    <section className="menu-section">
      
      <div className="full-width-title">
        <h1 className="menu-title">APPETIZER & SALAD</h1>
      </div>

      <div className="menu-column">
        {appetizersData.leftItems.map((item, index) => {
          const itemIcons = item.icons ? [...item.icons] : [];
          if (item.icon && !itemIcons.includes(item.icon)) itemIcons.push(item.icon);

          return (
            <MenuItem
              key={`appetizer-left-${index}`}
              title={item.title}
              description={item.description}
              price={item.price}
              icons={itemIcons}
            />
          );
        })}
      </div>

      <div className="menu-column">
        {appetizersData.rightItems.map((item, index) => {
          const itemIcons = item.icons ? [...item.icons] : [];
          if (item.icon && !itemIcons.includes(item.icon)) itemIcons.push(item.icon);

          return (
            <MenuItem
              key={`appetizer-right-${index}`}
              title={item.title}
              description={item.description}
              price={item.price}
              icons={itemIcons}
            />
          );
        })}
      </div>

    </section>
  );
}