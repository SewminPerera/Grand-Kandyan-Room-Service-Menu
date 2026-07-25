import "./Footer.css";
import greenChili from "../../assets/images/green-chili.png";
import redChili from "../../assets/images/red-chili.png";
import shrimp from "../../assets/images/shrimp.png";

export default function Footer() {
  return (
    <div className="footer">

      <div className="footer-legend">
        <span>
          Vegetarian (V)
          <img src={greenChili} alt="" />
        </span>

        <span>Pork (P)</span>

        <span>Alcohol (A)</span>

        <span>
          Nuts (N)
          <img src={shrimp} alt="" />
        </span>

        <span>
          Spicy
          <img src={redChili} alt="" />
        </span>
      </div>

      <p>
        If you are prone to food allergy or intolerance or special dietary restriction,
      </p>

      <p>
        please inform our F &amp; B team. We will be happy to assist with your needs.
      </p>

      <p className="tax">
        All prices are subject to Service Charge and Government taxes
      </p>

    </div>
  );
}