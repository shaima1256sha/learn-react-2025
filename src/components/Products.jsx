import React, { useState } from "react";
import Counter from "./Counter";

import { v4 as uuid } from "uuid";
import ChildOfProducts from "./ChildOfProducts";

const Products = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const [message, setMessage] = useState("");

  const [products, setProducts] = useState([
    {
      id: 1,
      label: "IPad",
      price: 2300,
    },
    {
      id: 2,
      label: "IPhone",
      price: 2500,
    },
    {
      id: 3,
      label: "Laptop",
      price: 2700,
    },
  ]);

  const deleteProduct = (id) => {
    let myList = products.filter((product) => product.id !== id);
    setProducts((prev) => {
      console.log(prev);
      return myList;
    });
  };

  const titleChange = (e) => {
    if (e.target.value === "") {
      setMessage("Title is required !");
    } else if (e.target.value.trim().length < 3) {
      setMessage("plz enter more than 3 caracters !");
    } else {
      setMessage(null);
      setTitle(e.target.value);
    }
  };
  const priceChange = (e) => {
    if (e.target.value === "") {
      setMessage("Price is required !");
    } else if (e.target.value.trim().length < 3) {
      setMessage("plz enter more than 3 caracters !");
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
    setProducts([...products, myProduct]);
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
            placeholder="Enter email"
            defaultValue={title}
          />

          {message && (
            <div className="alert alert-dismissible alert-warning">
              {message}
            </div>
          )}
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
            placeholder="Enter email"
            defaultValue={price}
          />
          {message && (
            <div className="alert alert-dismissible alert-warning">
              {message}
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-dark mb-2">
          Save
        </button>
      </form>
      <Counter />
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <ChildOfProducts id={product.id} onDeleteProduct={deleteProduct}>
              <div className="card-body">
                <h4 className="card-title">{product.label}</h4>
                <p className="card-text">
                  <button className="btn btn-success ">{product.price}</button>
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
