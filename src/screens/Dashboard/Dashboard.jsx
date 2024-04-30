import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import { Routes, Route } from "react-router-dom";
import UserProfile from "./UserProfile";
import Footer from "../../components/Footer";
import AllTargets from "./Targets/AllTargets";
import AllProperties from "./Property/AllProperties";
import Index from "./Index";
import AddProperty from "./Property/AddProperty";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import AddSales from "./Sales/AddSales";
import AllSales from "./Sales/AllSales";
import Success from "../../components/Success";

function Dashboard({ openSidebar, handleSideBar }) {
  const location = useLocation();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [widthWindow, setWidthWindow] = useState(window.innerWidth);

  // Function to handle drawer open/close
  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <div className="dashboard">
        <Sidebar openSidebar={openSidebar} handleSideBar={handleSideBar} />
        <Topbar
          user={user}
          openDrawer={openDrawer}
          handleDrawer={handleDrawer}
          openSidebar={openSidebar}
          handleSideBar={handleSideBar}
        />
        <div
          className="dashboard-body"
          style={{
            width: openSidebar ? "calc(100% - 261px)" : "calc(100% - 61px)",
            zIndex: openDrawer ? "-99" : "1",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, scale: 0.1, x: -1000 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.1, x: -1000 }}
              transition={{ duration: 0.3 }}
              className="dashboard-content"
              key={location.pathname}
            >
              <Routes location={location}>
                <Route
                  exact
                  path="/"
                  key={location.pathname}
                  element={<Index user={user} />}
                />
                <Route
                  exact
                  path="/user"
                  key={location.pathname}
                  element={<UserProfile />}
                />
                <Route exact path="/add-sales" element={<AddSales />} />
                <Route exact path="/all-sales" element={<AllSales />} />
                <Route exact path="/all-sales/edit" element={<AddSales />} />
                <Route
                  exact
                  path="/targets/*"
                  key={location.pathname}
                  element={<AllTargets user={user} />}
                />
                <Route exact path="/add-property" element={<AddProperty />} />
                <Route
                  exact
                  path="/all-properties"
                  element={<AllProperties />}
                />
                <Route
                  exact
                  path="/all-properties/edit"
                  element={<AddProperty />}
                />

                <Route
                  exact
                  path="/success"
                  element={<Success text={"Submitted Successfully."} />}
                />
              </Routes>
            </motion.div>
          </AnimatePresence>
          <Footer position={"absolute"} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;

const user = {
  userName: "Adil",
  email: "adil@example.com",
};
