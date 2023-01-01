import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./Components/Adm/Administrator/Dashboard";
import Login from "./Components/Adm/Administrator/Login";
import Home from "./Components/UserInterface/Home";
import VehicleDetails from "./Components/UserInterface/VehicleDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path='/home' />
        <Route element={<Login />} path='/login' />
        <Route element={<VehicleDetails />} path='/vehicle_details' />
        <Route element={<DashBoard />} path='/dashboard/*' />
      </Routes>
    </Router>
  );
}

export default App;
