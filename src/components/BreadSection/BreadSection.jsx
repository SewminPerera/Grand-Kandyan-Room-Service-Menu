import "./BreadSection.css";
import MenuItem from "../MenuItem/MenuItem";
import MenuPackage from "../MenuPackage/MenuPackage";
import { breadAndWraps } from "../../data/breads";

export default function BreadSection() {
  return (
    <section className="menu-section">
      
      {/* Reuses your existing menu-title class, adding full-width-title for the grid span */}
      <div className="full-width-title">
        <h1 className="menu-title">
          BETWEEN BREAD AND WRAPS
        </h1>
      </div>

      <div className="menu-column">
        {breadAndWraps.leftPackages.map((item, index) => {
          if (item.variants) {
            return (
              <MenuItem
                key={`left-${index}`}
                title={item.title}
                description={item.description}
                variants={item.variants}
              />
            );
          }
          return (
            <MenuPackage
              key={`left-${index}`}
              title={item.title}
              price={item.price}
              items={[item.description]}
            />
          );
        })}
      </div>

      <div className="menu-column">
        {breadAndWraps.rightItems.map((item, index) => (
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