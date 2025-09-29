import Signup from "./Components/Signup";
import Login from "./Components/Login";
import HomePage from "./Components/Home";
import Profile  from "./Components/Profile/Profile";
import Support from "./Components/Pages/support/support";
import Accessories from "./Components/Pages/Accessories/Accessories";
import Phones from "./Components/Pages/Phones/Phones";
import PhoneDetails from "./Components/Pages/PhoneDetails/PhoneDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/Phones" element={<Phones />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
        {/* Add more routes as needed */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;