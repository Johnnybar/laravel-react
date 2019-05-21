import React, { Component } from 'react';
import RemoveProduct from './RemoveProduct';
import EditProduct from './EditProduct';

/* Stateless component or pure component
 * { product } syntax is the object destructing
 */
const Product = ({product, allProducts, handleDelete, handleEdit}) => {


  const divStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: '65%',
      margin: '30px 10px 10px 30px'
  }



  //if the props for product is null, return Product doesn't exist
  if(!product) {
    return(<div style={divStyle}><h2>  No Product was selected </h2> </div>);
  }
  else{
  }





  //Else, display the product data
  return(
    <div style={divStyle}>
      <h2> {product.title} </h2>
      <p> {product.description} </p>
      <h3> Status {product.availability ? 'Available' : 'Out of stock'} </h3>
      <h3> Price : {product.price} </h3>
      <RemoveProduct product={product} allProducts={allProducts} handleDelete= {handleDelete}/>
      <div><button onClick={handleEdit}>Click to toggle Edit/Add</button></div>

    </div>
  )
}

export default Product ;
