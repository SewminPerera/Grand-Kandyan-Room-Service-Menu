import "./NightMenuSection.css";
import MenuItem from "../MenuItem/MenuItem";
import { nightMenuData } from "../../data/nightMenu";

export default function NightMenuSection() {
  return (
    <section className="menu-section">
      
      <div className="full-width-title">
        <h1 className="menu-title">
          NIGHT MENU <span>10:00pm — 6:00am</span>
        </h1>
      </div>

      <div className="menu-column">
        {nightMenuData.leftItems.map((item, index) => {
          const itemIcons = item.icons ? [...item.icons] : [];
          if (item.icon && !itemIcons.includes(item.icon)) itemIcons.push(item.icon);

          return (
            <MenuItem
              key={`night-left-${index}`}
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
        {nightMenuData.rightItems.map((item, index) => {
          const itemIcons = item.icons ? [...item.icons] : [];
          if (item.icon && !itemIcons.includes(item.icon)) itemIcons.push(item.icon);

          return (
            <MenuItem
              key={`night-right-${index}`}
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