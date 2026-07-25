import "./App.css";
import BreakfastSection from "./components/BreakfastSection/BreakfastSection";
import BreadSection from "./components/BreadSection/BreadSection";
import DessertSection from "./components/DessertSection/DessertSection";

function App() {
  return (
    <main className="menu-container">
      <BreakfastSection />
      <BreadSection />
      <DessertSection />
    </main>
  );
}

export default App;