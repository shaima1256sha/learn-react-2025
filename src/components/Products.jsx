import React from 'react'
import Counter from './Counter'
import ChildOfProducts from './ChildOfProducts'

const Products = () => {

  let title = "Learn React"
  let showList =true
  let products = [
    {
      id:1,
      label:"IPad",
      price:2300
    },
    {
      id:2,
      label:"IPhone",
      price:2500
    },
    {
      id:3,
      label:"Laptop",
      price:2700
    },
  ]
  return (
    <div>
      <h1>{title}</h1>
      <Counter/>
      {showList ? (
          <div>
          {products.map((product) => (
          <div  key={product.id}>
          <ChildOfProducts label={product.label} price={product.price}/>
          </div>
          ))}
        </div>
      ):null}
    
      
    </div>
  )
}

export default Products