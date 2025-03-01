import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import ShowProducts from "./components/ShowProducts";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:idProduct/:slug" element={<ShowProducts />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
