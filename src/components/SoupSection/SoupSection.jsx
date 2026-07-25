import "./SoupSection.css";
import MenuItem from "../MenuItem/MenuItem";
import { soupData } from "../../data/soup";

export default function SoupSection() {
  return (
    <section className="menu-section">
      
      <div className="full-width-title">
        <h1 className="menu-title">SOUP</h1>
      </div>

      <div className="menu-column">
        {soupData.leftItems.map((item, index) => {
          const itemIcons = item.icons ? [...item.icons] : [];
          if (item.icon && !itemIcons.includes(item.icon)) itemIcons.push(item.icon);

          return (
            <MenuItem
              key={`soup-left-${index}`}
              title={item.title}
              description={item.description}
              price={item.price}
              icons={itemIcons}
            />
          );
        })}
      </div>

      <div className="menu-column">
        {soupData.rightItems.map((item, index) => {
          const itemIcons = item.icons ? [...item.icons] : [];
          if (item.icon && !itemIcons.includes(item.icon)) itemIcons.push(item.icon);

          return (
            <MenuItem
              key={`soup-right-${index}`}
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