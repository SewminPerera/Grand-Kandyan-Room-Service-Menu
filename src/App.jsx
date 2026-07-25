import "./App.css";

import BreakfastSection from "./components/BreakfastSection/BreakfastSection";
import BreadSection from "./components/BreadSection/BreadSection";

function App() {
  return (
    <main className="menu-container">
      <BreakfastSection />
      <BreadSection />
    </main>
  );
}

export default App;