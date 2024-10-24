import Navbar from "./components/nav-bar/navbar";
import AboutPage from "./pages/about/about";
import ContactPage from "./pages/contact/contact";
import HomePage from "./pages/home/home";
import { Routes, Route } from "react-router-dom";

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
