import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}
