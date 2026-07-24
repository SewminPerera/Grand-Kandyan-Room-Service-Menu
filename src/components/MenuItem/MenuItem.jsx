import "./MenuItem.css";

export default function MenuItem({ title, description, price }) {
  return (
    <div className="menu-item">

      <div className="menu-item-header">
        <h3>{title}</h3>
        <span>{price}</span>
      </div>

      <p>{description}</p>

    </div>
  );
}