import "./DessertsSection.css";
import MenuItem from "../MenuItem/MenuItem";
import { dessertsData } from "../../data/desserts";

export default function DessertSection() {
  return (
    <section className="menu-section">
      
      <div className="full-width-title">
        <h1 className="menu-title">A PERFECT ENDING</h1>
      </div>

      <div className="menu-column">
        {dessertsData.leftItems.map((item, index) => {
          const itemIcons = item.icons ? [...item.icons] : [];
          if (item.icon && !itemIcons.includes(item.icon)) itemIcons.push(item.icon);

          return (
            <MenuItem
              key={`dessert-left-${index}`}
              title={item.title}
              description={item.description}
              price={item.price}
              icons={itemIcons}
            />
          );
        })}
      </div>

      <div className="menu-column">
        {dessertsData.rightItems.map((item, index) => {
          const itemIcons = item.icons ? [...item.icons] : [];
          if (item.icon && !itemIcons.includes(item.icon)) itemIcons.push(item.icon);

          return (
            <MenuItem
              key={`dessert-right-${index}`}
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