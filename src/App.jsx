import "./App.css";
import BreakfastSection from "./components/BreakfastSection/BreakfastSection";
import BreadSection from "./components/BreadSection/BreadSection";
import DessertSection from "./components/DessertSection/DessertSection";
import AsianSection from "./components/AsianSection/AsianSection";
import SidesSection from "./components/SidesSection/SidesSection";
import MainEventSection from "./components/MainEventSection/MainEventSection";
import PizzaSection from "./components/PizzaSection/PizzaSection";
import NightMenuSection from "./components/NightMenuSection/NightMenuSection";
import SoupSection from "./components/SoupSection/SoupSection";
import AppetizersSection from "./components/AppetizersSection/AppetizersSection";
import HeaderSection from "./components/HeaderSection/HeaderSection";

function App() {
  return (
    <main className="menu-container">
      <HeaderSection />
      <BreakfastSection />
      <BreadSection />
      <DessertSection />
      <AsianSection />
      <SidesSection />
      <MainEventSection />
      <PizzaSection />
      <NightMenuSection />
      <SoupSection />
      <AppetizersSection />
    </main>
  );
}

export default App;