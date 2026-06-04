import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "@/components/common-components/Navbar";
import Footer from "@/components/common-components/Footer";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Training from "@/pages/training";
import Contact from "@/pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;