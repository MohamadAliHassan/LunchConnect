import "./App.css";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { AllRoutes } from "./routes/AllRoutes";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  const hideNavbarRoutes = ["/", "/login", "/register", "/createprofile"];

  const isHeaderHidden = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="App">
      {!isLandingPage && !isHeaderHidden && <Navbar />}
      {!isLandingPage && isHeaderHidden && <Header />}
      <AllRoutes />
    </div>
  );
}

export default App;
