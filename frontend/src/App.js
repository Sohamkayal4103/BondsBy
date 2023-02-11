import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Admin from "./pages/Admin/Admin";
import ExploreBonds from "./pages/ExploreBonds/ExploreBonds";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import UserKYC from "./pages/UserKYC/UserKYC";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<ExploreBonds />} />
          <Route path="/user-kyc" element={<UserKYC />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
