import "./MenuPackage.css";

export default function MenuPackage({ title, price, items }) {
  return (
    <div className="menu-package">

      <div className="package-header">

        <h3>{title}</h3>

        <span>{price}</span>

      </div>

      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

    </div>
  );
}