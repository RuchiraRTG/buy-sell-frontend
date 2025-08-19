import Signup from "./Components/Signup";
import Login from "./Components/Login";
import HomePage from "./Components/Home";
import Profile  from "./Components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Profile" element={<Profile />} />
        {/* Add more routes as needed */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;