import "./App.css";
import ActiveToggle from "./components/ActiveToggle/ActiveToggle";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ColorPage from "./components/ColorPage/ColorPage";
import Hungry from "./components/Hungry/Hungry";

function App() {
  return (
    <div className="App">
      <ActiveToggle />
      <ShoppingCart />
    </div>
  );
}

export default App;