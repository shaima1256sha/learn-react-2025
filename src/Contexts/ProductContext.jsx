import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
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
    setProducts(myList);
  };

  // Fonction pour ajouter un produit
  const addProduct = (item) => {
    setProducts([item , ...products]);
  };

  return (
    <ProductContext.Provider
      value={{
        message: "salem khnifs",
        title: "learn react❤️",
        products,
        setProducts,
        deleteProduct,
        addProduct,  // Ajout de la fonction addProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
