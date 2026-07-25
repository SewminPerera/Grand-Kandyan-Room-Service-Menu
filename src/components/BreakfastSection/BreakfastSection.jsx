import "./BreakfastSection.css";
import MenuPackage from "../MenuPackage/MenuPackage";
import MenuItem from "../MenuItem/MenuItem";
import { breakfastData } from "../../data/breakfast";

export default function BreakfastSection() {
  return (
    <section className="menu-section">

      <div className="menu-column">
        <h1 className="menu-title">
          BREAKFAST <span>6:00am – 11:00am</span>
        </h1>
        {breakfastData.leftPackages.map((pkg, index) => (
          <MenuPackage
            key={`pkg-${index}`}
            title={pkg.title}
            price={pkg.price}
            items={pkg.items}
          />
        ))}
      </div>

      <div className="menu-column">
        <h1 className="menu-title">
          BREAKFAST (A LA CARTE)
        </h1>
        {breakfastData.rightItems.map((item, index) => (
          <MenuItem
            key={`item-${index}`}
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