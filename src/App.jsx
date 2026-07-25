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
import SectionDivider from "./components/SectionDivider/SectionDivider";

function App() {
  return (
    <>
      <HeaderSection />
      <SectionDivider />
      <main className="menu-container">
        <BreakfastSection />
        <SectionDivider />
        <BreadSection />
        <SectionDivider />
        <SoupSection />
        <SectionDivider />
        <AppetizersSection />
        <SectionDivider />
        <DessertSection />
        <SectionDivider />
        <AsianSection />
        <SectionDivider />
        <PizzaSection />
        <SectionDivider />
        <NightMenuSection />
        <SectionDivider />
        <SidesSection />
        <SectionDivider />
        <MainEventSection />
      </main>
    </>
  );
}

export default App;