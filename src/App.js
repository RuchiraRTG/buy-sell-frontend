import Signup from "./Components/Signup";
import Login from "./Components/Login";
import HomePage from "./Components/Home";
import Profile  from "./Components/Profile/Profile";
import Support from "./Components/Pages/support/support";
import Wishlist from "./Components/Pages/wishlist";
import Notifications from "./Components/Pages/notification";
import Cart from "./Components/Pages/cart";
import Electronics from "./Components/Pages/Accessories/Accessories";
import Phones from "./Components/Pages/Phones/Phones";
import PhoneDetails from "./Components/Pages/Details/PhoneDetails";
import ElectronicDetails from "./Components/Pages/Details/ElectronicDetails";
import PropertyForSale from "./Components/Pages/Lands/land";
import PropertyDetails from "./Components/Pages/Details/PropertyDetails";
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
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/electronics/:id" element={<ElectronicDetails />} />
        <Route path="/Phones" element={<Phones />} />
        <Route path="/phones/:id" element={<PhoneDetails />} />
        <Route path="/lands" element={<PropertyForSale />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/deals" element={<PropertyForSale />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/cart" element={<Cart />} />
        {/* Add more routes as needed */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;