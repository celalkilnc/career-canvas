import "./App.css";
import Navbar from "./components/common/navbar/Navbar";
import Home from "./pages/home/Home";
import RouterIndex from "./router/RouterIndex"; 
import { useScrollSpy } from "./utils/useScrollSpy";
 


function App() {
  useScrollSpy();

  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
