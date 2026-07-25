import "./PizzaSection.css";
import MenuItem from "../MenuItem/MenuItem";
import { pizzaData } from "../../data/pizza";

export default function PizzaSection() {
  return (
    <section className="menu-section">
      
      <div className="full-width-title">
        <h1 className="menu-title">PIZZA FEASTER</h1>
      </div>

      <div className="menu-column">
        {pizzaData.slice(0, 2).map((item, index) => {
          const itemIcons = item.icons ? [...item.icons] : [];
          if (item.icon && !itemIcons.includes(item.icon)) itemIcons.push(item.icon);

          return (
            <MenuItem
              key={`pizza-left-${index}`}
              title={item.title}
              description={item.description}
              price={item.price}
              icons={itemIcons}
            />
          );
        })}
      </div>

      <div className="menu-column">
        {pizzaData.slice(2, 4).map((item, index) => {
          const itemIcons = item.icons ? [...item.icons] : [];
          if (item.icon && !itemIcons.includes(item.icon)) itemIcons.push(item.icon);

          return (
            <MenuItem
              key={`pizza-right-${index}`}
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