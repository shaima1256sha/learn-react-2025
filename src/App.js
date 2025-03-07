import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import ShowProducts from "./components/ShowProducts";
import { ProductProvider } from "./Contexts/ProductContext";
import ArticleList from "./components/articles/ArticleList";

const App = () => {
  return (
    <>
      <Router>
        <ProductProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:idProduct" element={<ShowProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<ArticleList />} />

  
          


        </Routes>
        </ProductProvider>
      </Router>
    </>
  );
};

export default App;
