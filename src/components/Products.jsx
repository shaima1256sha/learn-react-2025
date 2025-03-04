import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { ProductContext } from "../Contexts/ProductContext";
import ChildOfProducts from "./ChildOfProducts";
import Counter from "./Counter";

const Products = () => {
  const { products, addProduct } = useContext(ProductContext);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const titleChange = (e) => {
    if (e.target.value === "") {
      setMessage("Title is required !");
    } else if (e.target.value.trim().length < 3) {
      setMessage("plz enter more than 3 characters !");
    } else {
      setMessage(null);
      setTitle(e.target.value);
    }
  };

  const priceChange = (e) => {
    if (e.target.value === "") {
      setMessage("Price is required !");
    } else if (e.target.value.trim().length < 3) {
      setMessage("plz enter more than 3 characters !");
    } else {
      setPrice(e.target.value);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    let myProduct = {
      id: uuid(),
      label: title,
      price,
    };

    addProduct(myProduct);  
    console.log(myProduct);// Ajout du produit via le contexte
    setTitle("");
    setPrice(0);
  };

  return (
    <div>
      <div className="d-grid gap-2">
        <button className="btn btn-lg btn-primary" type="button">
          {title}
        </button>
        <button className="btn btn-lg btn-primary" type="button">
          {price}
        </button>
      </div>
      <form onSubmit={submitForm}>
        <div className="form-group my-2">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Title
          </label>
          <input
            onChange={titleChange}
            type="text"
            className="form-control"
            id="titleinput"
            aria-describedby="emailHelp"
            placeholder="Enter title"
            defaultValue={title}  // Utiliser value au lieu de defaultValue pour un contrôle total
          />
          
        </div>

        <div className="form-group my-2 ">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Price
          </label>
          <input
            onChange={priceChange}
            type="text"
            className="form-control"
            id="priceinput"
            aria-describedby="emailHelp"
            placeholder="Enter price"
            defaultValue={price}  // Utiliser value au lieu de defaultValue
          />
        
        </div>

        <button type="submit" className="btn btn-dark mb-2">
          Save
        </button>
      </form>

      <Counter />
      
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <ChildOfProducts id={product.id}>
              <div className="card-body">
                <h4 className="card-title">{product.label}</h4>
                <p className="card-text">
                  <button className="btn btn-success">{product.price}</button>
                </p>
              </div>
            </ChildOfProducts>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
