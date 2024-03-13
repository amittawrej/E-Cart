import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {remove} from '../store/cartSlice';

const Cart = () => {
const addedProducts=useSelector((state)=>state.cart);
const dispatch=useDispatch();


const handleDelete=(productId)=>{
  // console.log(product);
  dispatch(remove(productId));
}

  return (
    <div>
      <h3 className='heading'>Cart</h3>
      <div className="cartWrapper">
        {
          addedProducts.map((product)=>{
            return (
              <div className="cartCard" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h4>{product.title}</h4>
                <p>Price: {product.price}$</p>
                <button className='btn' onClick={()=>handleDelete(product.id)}>Remove</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cart