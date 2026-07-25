import "./MenuItem.css";
import greenChili from "../../assets/images/green-chili.png";
import redChili from "../../assets/images/red-chili.png";
import shrimp from "../../assets/images/shrimp.png";

export default function MenuItem({ title, description, price, variants, icon, icons }) {
  
  const getIconImage = (iconName) => {
    if (iconName === "vegetarian") return greenChili;
    if (iconName === "spicy") return redChili;
    if (iconName === "seafood") return shrimp;
    return null;
  };

  const allIcons = [];
  if (icons) allIcons.push(...icons);
  if (icon && !allIcons.includes(icon)) allIcons.push(icon);

  return (
    <div className="menu-item">
      
      <div className="menu-item-header">
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {title}
          
          {/* Renders all icons in the array */}
          {allIcons.map((iconName, i) => {
            const imgSource = getIconImage(iconName);
            return imgSource ? (
              <img 
                key={i}
                src={imgSource} 
                alt={iconName} 
                style={{ height: '26px', objectFit: 'contain', mixBlendMode: 'multiply' }} 
              />
            ) : null;
          })}
        </h3>
        {price && <span>{price}</span>}
      </div>

      <p>{description}</p>

      {variants && variants.length > 0 && (
        <div className="menu-item-variants">
          {variants.map((variant, index) => {
            const varIcons = [];
            if (variant.icons) varIcons.push(...variant.icons);
            if (variant.icon && !varIcons.includes(variant.icon)) varIcons.push(variant.icon);

            return (
              <div className="variant-row" key={index}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {variant.name}
                  
                  {varIcons.map((iconName, vIndex) => {
                    const varImgSource = getIconImage(iconName);
                    return varImgSource ? (
                      <img 
                        key={vIndex}
                        src={varImgSource} 
                        alt={iconName} 
                        style={{ height: '22px', objectFit: 'contain', mixBlendMode: 'multiply' }} 
                      />
                    ) : null;
                  })}
                </h4>
                <span>{variant.price}</span>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}