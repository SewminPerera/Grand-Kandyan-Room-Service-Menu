import "./MenuItem.css";

export default function MenuItem({ title, description, price, variants }) {
  return (
    <div className="menu-item">
      
      <div className="menu-item-header">
        <h3>{title}</h3>
        {/* Only render the top price if it exists */}
        {price && <span>{price}</span>}
      </div>

      <p>{description}</p>

      {/* Conditionally render variants if they are passed in the data */}
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