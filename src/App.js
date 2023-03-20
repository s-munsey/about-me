import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="gradient"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div className="gradient"></div>
      <Footer />
    </div>
  );
}

export default App;
