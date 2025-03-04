import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../Contexts/ProductContext";

const ShowProducts = () => {
  const myParams = useParams();
  const navigate = useNavigate();
  const { products } = useContext(ProductContext);

  const myProduct = products.find((product) => product.id === +myParams.idProduct);

  const [product, setProduct] = useState(myProduct);

  // ✅ Correction : éviter la boucle infinie avec `useEffect`
  useEffect(() => {
    setProduct(myProduct);
  }, [myProduct]);

  console.log(myParams);

  const redirectToHome = () => {
    navigate("/");
  };

  const redirectToAbout = () => {
    navigate("/about");
  };

  const redirectToContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <h1>{product?.label} 😎</h1>

      <button className="btn btn-info mx-4" >
        {product.price}
      </button>


      {/* <button className="btn btn-info mx-4" onClick={redirectToAbout}>
        Go To About
      </button>

      <button className="btn btn-info mx-4" onClick={redirectToContact}>
        Go To Contact
      </button> */}
    </>
  );
};

export default ShowProducts;
