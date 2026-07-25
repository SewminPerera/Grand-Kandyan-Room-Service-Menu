import "./App.css";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import BreakfastSection from "./components/BreakfastSection/BreakfastSection";
import BreadSection from "./components/BreadSection/BreadSection";
import SoupSection from "./components/SoupSection/SoupSection";
import AppetizersSection from "./components/AppetizersSection/AppetizersSection";
import DessertSection from "./components/DessertSection/DessertSection";
import AsianSection from "./components/AsianSection/AsianSection";
import PizzaSection from "./components/PizzaSection/PizzaSection";
import NightMenuSection from "./components/NightMenuSection/NightMenuSection";
import SidesSection from "./components/SidesSection/SidesSection";
import MainEventSection from "./components/MainEventSection/MainEventSection";

function App() {
  return (
    <>
      <HeaderSection />
      <main className="menu-container">
        <BreakfastSection />
        <BreadSection />
        <SoupSection />
        <AppetizersSection />
        <DessertSection />
        <AsianSection />
        <PizzaSection />
        <NightMenuSection />
        <SidesSection />
        <MainEventSection />
      </main>
    </>
  );
}

export default App;