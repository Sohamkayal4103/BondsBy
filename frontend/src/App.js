import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { Nav } from "./components/Navbar/Navbar";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Admin from "./pages/Admin/Admin";
import ExploreBonds from "./pages/ExploreBonds/ExploreBonds";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import UserKYC from "./pages/UserKYC/UserKYC";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExploreBonds />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user-kyc" element={<UserKYC />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
