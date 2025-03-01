import React from "react";

const ChildOfProducts = ({ children, onDeleteProduct, id }) => {
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
          onClick={() => {
            onDeleteProduct(id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default ChildOfProducts;
