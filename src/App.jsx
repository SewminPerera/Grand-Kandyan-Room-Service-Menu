import "./App.css";
import BreakfastSection from "./components/BreakfastSection/BreakfastSection";
import BreadSection from "./components/BreadSection/BreadSection";
import DessertSection from "./components/DessertSection/DessertSection";
import AsianSection from "./components/AsianSection/AsianSection";
import SidesSection from "./components/SidesSection/SidesSection";

function App() {
  return (
    <main className="menu-container">
      <BreakfastSection />
      <BreadSection />
      <DessertSection />
      <AsianSection />
      <SidesSection />
    </main>
  );
}

export default App;