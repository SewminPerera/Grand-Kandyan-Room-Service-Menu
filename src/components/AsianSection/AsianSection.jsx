import "../BreadSection/BreadSection.css";
import MenuItem from "../MenuItem/MenuItem";
import { asianData } from "../../data/asian";

export default function AsianSection() {
  return (
    <section className="menu-section">
      
      <div className="full-width-title">
        <h1 className="menu-title">ASIAN</h1>
      </div>

      <div className="menu-column">
        {asianData.leftItems.map((item, index) => {
          // Combine singular 'icon' and plural 'icons' safely
          const itemIcons = item.icons ? [...item.icons] : [];
          if (item.icon && !itemIcons.includes(item.icon)) itemIcons.push(item.icon);

          return (
            <MenuItem
              key={`asian-left-${index}`}
              title={item.title}
              description={item.description}
              price={item.price}
              variants={item.variants}
              icons={itemIcons}
            />
          );
        })}
      </div>

      <div className="menu-column">
        {asianData.rightItems.map((item, index) => {
          // Combine singular 'icon' and plural 'icons' safely
          const itemIcons = item.icons ? [...item.icons] : [];
          if (item.icon && !itemIcons.includes(item.icon)) itemIcons.push(item.icon);

          return (
            <MenuItem
              key={`asian-right-${index}`}
              title={item.title}
              description={item.description}
              price={item.price}
              variants={item.variants}
              icons={itemIcons}
            />
          );
        })}
      </div>

    </section>
  );
}