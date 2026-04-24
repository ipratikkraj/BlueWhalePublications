import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { Toaster } from "./components/ui/sonner";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Authors from "./pages/Authors";
import Blog from "./pages/Blog";
import Submit from "./pages/Submit";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/authors" element={<Authors />} />
          {/* <Route path="/blog" element={<Blog />} />
          <Route path="/submit" element={<Submit />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
