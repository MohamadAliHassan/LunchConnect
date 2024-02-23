// App.js

import { createContext } from "react";
import "./App.css";
import { useState, useEffect } from "react";
import sessionService from "./utils/sessionService";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { AllRoutes } from "./routes/AllRoutes";
import { useLocation } from "react-router-dom";

// Create a context for token and setToken
export const TokenContext = createContext(null);

function App() {
  const [token, setUserToken] = useState(undefined);

  function setToken(newToken) {
    if (newToken === undefined) {
      sessionService.clearSession();
    } else {
      sessionService.setToken(newToken);
    }
    setUserToken(newToken);
  }

  useEffect(() => {
    const foundToken = sessionService.getToken();

    if (foundToken !== null) {
      setToken(foundToken);
    }
  }, []);

  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  const hideNavbarRoutes = ["/", "/login", "/register", "/createprofile"];

  const isHeaderHidden = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="App">
      {!isLandingPage && !isHeaderHidden && <Navbar />}
      {!isLandingPage && isHeaderHidden && <Header />}
      {/* Wrap AllRoutes with TokenContext provider */}
      <TokenContext.Provider value={{ token, setToken }}>
        <AllRoutes />
      </TokenContext.Provider>
    </div>
  );
}

export default App;
