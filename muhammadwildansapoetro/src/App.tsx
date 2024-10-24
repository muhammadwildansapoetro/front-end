import NavBar from "./components/navBar";
import Welcome from "./components/welcome";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/aboutPage";

function App() {
  return (
    <div className="min-h-screen bg-[#222831]">
      <NavBar />
      <Routes>
        <Route path="about" element={<AboutPage />} />
      </Routes>
      <Welcome />
    </div>
  );
}

export default App;
