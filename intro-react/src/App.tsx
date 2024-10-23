import Navbar from "./components/navbar";
import HomePage from "./pages/home";

// Functional Component
// First letter of component name must uppercase (e.g "App")
function App() {
  const str: string = "Hello World";
  const name: string = "John Doe";

  return (
    <div>
      <Navbar name={name} />
      <HomePage />
    </div>
  );
}

export default App;
