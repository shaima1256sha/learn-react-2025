import React from 'react'

const ChildOfProducts = (data) => {
  let {label,price}=data

  return (
    <div>
      <h1>{label}</h1>
      <button className="btn btn-success ">{price}</button>
    </div>
  )
}

export default ChildOfProducts