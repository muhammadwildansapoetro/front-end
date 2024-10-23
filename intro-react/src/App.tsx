import Navbar from "./components/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";

// Functional Component
// First letter of component name must uppercase (e.g "App")
function App() {
  // const name: string = "John Doe";

  return (
    <div>
      {/* <Navbar name={name} /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
