import Navbar from "./components/nav-bar/navbar";
import AboutPage from "./pages/about/about";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/home";
import ContactPage from "./pages/contact/contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
