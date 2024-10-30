import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import NavBar from "./components/navbar";
import UsersPage from "./pages/UsersPage";
import ProfilPage from "./pages/ProfilPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/:userId" element={<ProfilPage />} />
      </Routes>
    </div>
  );
}

export default App;
