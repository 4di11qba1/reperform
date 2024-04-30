import { useState, useEffect } from "react";
import Auth from "./screens/Auth";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard/Dashboard.jsx";
import "./constants/fontawesome.js";
import Subcription from "./screens/Subscription.jsx";
import.meta.glob("/src/styles/*.(scss|css)", { eager: true });

function App() {
  const [openSidebar, setOpenSidebar] = useState();
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidthWindow(window.innerWidth);
      setOpenSidebar(widthWindow > 750 ? true : false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSideBar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        {/* Wrap Routes with motion.div for transition animation */}
        <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route
            exact
            path="/dashboard/*"
            element={
              <Dashboard
                openSidebar={openSidebar}
                handleSideBar={handleSideBar}
              />
            }
          />
          <Route exact path="/subscription" element={<Subcription />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
