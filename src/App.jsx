import Home from "./Home";
import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Blog from './Blog';
import Projects from './Projects';
import Contact from './Contact';
import Products from "./Products";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; 
function App() {
  return (
    <Router>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
