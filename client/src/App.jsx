import { useState, useEffect } from "react";
import "./App.css";
import sessionService from "./utils/sessionService";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { AllRoutes } from "./routes/AllRoutes";
import { useLocation } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  const hideNavbarRoutes = ["/", "/login", "/register", "/createprofile"];

  const isHeaderHidden = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="App">
      {!isLandingPage && !isHeaderHidden && <Navbar />}
      {!isLandingPage && isHeaderHidden && <Header />}
      {/* Wrap AllRoutes with TokenContext provider */}
      <AuthContextProvider>
        <AllRoutes />
      </AuthContextProvider>
    </div>
  );
}

export default App;
