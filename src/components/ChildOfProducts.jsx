import React, { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";

const ChildOfProducts = ({ children, id }) => {
    const {deleteProduct} = useContext(ProductContext)
  
  return (
    <>
      <div className="my-4">
        <div
          className="card text-white bg-primary mb-3"
          style={{ maxWidth: "20rem" }}
        >
          {children}
        </div>
        <button
          className="btn btn-danger"
          onClick={() => 
            deleteProduct(id)
          }
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default ChildOfProducts;
