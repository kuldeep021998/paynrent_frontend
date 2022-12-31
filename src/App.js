import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./Components/Adm/Administrator/Dashboard";
import Login from "./Components/Adm/Administrator/Login";
import Home from "./Components/UserInterface/Home";

function App() {
  return (
            <Router>
              <Routes>
                <Route element={<DashBoard />} path='/dashboard/*' />
                <Route element={<Login />} path='/login' />
                <Route element={<Home />} path='/home' />
              </Routes>
            </Router>
  );
}

export default App;
