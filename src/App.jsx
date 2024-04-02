import { useState } from "react";
import Auth from "./screens/Auth";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard/Dashboard.jsx";
import "./constants/fontawesome.js";
import.meta.glob("/src/styles/*.(scss|css)", { eager: true });

function App() {
  const [openSidebar, setOpenSidebar] = useState(true);

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
        </Routes>
      </div>
    </>
  );
}

export default App;
