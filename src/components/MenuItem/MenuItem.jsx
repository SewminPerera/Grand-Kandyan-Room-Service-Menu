import "./MenuItem.css";
// 1. Import all three of your images
import greenChili from "../../assets/images/green-chili.png";
import redChili from "../../assets/images/red-chili.png";
import shrimp from "../../assets/images/shrimp.png";

export default function MenuItem({ title, description, price, variants, icon }) {
  
  // 2. Create a quick helper function to choose the right image based on the prop
  const getIconSource = () => {
    if (icon === "vegetarian") return greenChili;
    if (icon === "spicy") return redChili;
    if (icon === "seafood") return shrimp;
    return null;
  };

  const iconSrc = getIconSource();

  return (
    <div className="menu-item">
      
      <div className="menu-item-header">
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {title}
          
          {/* 3. Render the image if an icon is found */}
          {iconSrc && (
            <img 
              src={iconSrc} 
              alt={icon} 
              style={{ 
                height: '22px', 
                objectFit: 'contain',
                mixBlendMode: 'multiply' /* <-- This removes the white background! */
              }} 
            />
          )}
        </h3>
        {price && <span>{price}</span>}
      </div>

      <p>{description}</p>

      {variants && variants.length > 0 && (
        <div className="menu-item-variants">
          {variants.map((variant, index) => (
            <div className="variant-row" key={index}>
              <h4>{variant.name}</h4>
              <span>{variant.price}</span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}