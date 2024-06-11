import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Login from "./components/Login";
import ThemeToggle from "./components/ThemeToggle";
import ActiveOrders from "./pages/ActiveOrders";
import CompletedOrders from "./pages/CompletedOrders";
import "./styles.css";
const PrivateRoute = () => {
  return localStorage.getItem("authenticated") === "true" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <ThemeToggle />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/active-orders" element={<ActiveOrders />} />
            <Route path="/completed-orders" element={<CompletedOrders />} />
          </Route>
          <Route path="/" element={<Navigate to="/active-orders" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
