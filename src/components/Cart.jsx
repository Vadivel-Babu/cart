
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react';
import { CartContext } from '../Context/Cartcontext';
const Cart = () => {
  
  const {cart,removeItem,addQuantity,decreaseQuantity} = useContext(CartContext);

  const totalAmount = cart.reduce((acc,curr) => acc + (curr.quantity * curr.price)  ,0)
  const subTotal = cart.reduce((acc,curr) => acc +  curr.price  ,0)

  if(cart.length === 0){
    return <h1 className='head'>No Item in cart</h1>
  }

  return (
    <>
    <div className="container flex-3">
      {cart.map((product) => (
      <div className="cards" key={product.id}>
        <div className="content-1">
          <img src={product.img} alt={product.name} className="img" />
          <div className="wrapper">
          <h3 className="title">{product.category}</h3>
          <h2 className="title">{product.brand}</h2>
          <h1 className="description">
            {product.name}
          </h1>
          </div>
        </div>
        <div className="content-2">
          <div className="wrap">
           <div className="quantity">
            <Button variant="dark" size="sm" onClick={() => decreaseQuantity(product.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
              </svg>
            </Button>
            <span>{product.quantity}</span>
            <Button variant="dark" size="sm" onClick={() => addQuantity(product.id)} >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
              </svg>
            </Button>
          </div>
          <span>${product.price}</span>
          </div>
          <Button variant="outline-danger" size="sm" onClick={() => removeItem(product.id)}>Remove</Button>
        </div>
      </div>      

      ))}
    </div>
    <div className="amount">
    <hr />
    <div className="subtotal">
      <div className="sub">
        <p>SUBTOTAL:</p>
        <span>${subTotal}</span>
      </div>
      <div className="sub">
        <p>SHIPPING:</p>
        <span>FREE</span>
      </div>
    </div>
    <hr />
    <div className="sub">
      <p>TOTAL:</p>
      <span>${totalAmount}</span>
    </div>
    </div>
    </>
  )
}

export default Cart