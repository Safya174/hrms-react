import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login"
import Leaves from "./pages/employee/Leaves"
import Profile from "./pages/employee/Profile"
import Regsister from './pages/auth/Register';

import UserDashboard from './pages/employee/UserDashboard';
function App() {
  

  return (
    <>
     <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/Leaves" element={<Leaves />} />
        <Route path="/Profile" element={<Profile />} />
        <Route index element={<Regsister />} />
     </Routes>

    </>
  )
}

export default App
