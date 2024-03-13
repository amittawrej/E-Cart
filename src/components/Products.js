import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from "../store/cartSlice";
import { fetchProducts, STATUS } from '../store/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);

  const { data: products, status } = useSelector((state) => state.product)

  useEffect(() => {

    dispatch(fetchProducts());

    // const fetchProducts = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products')
    //   const data = await res.json();
    //   // console.log(data);
    //   setProducts(data);
    // }
    // fetchProducts();
  }, [dispatch])

  const handleAdd = (product) => {
    dispatch(add(product));
  }

  if (status === STATUS.LOADING) {
    return <h3>Loading...</h3>
  }

  if(status ===STATUS.ERROR){
    return <h3>Something Went Wrong</h3>
  }
  return (

    <div className='productsWrapper'>{
      products.map(product => {
        return (
          <div key={product.id} className='card' >
            <img src={product.image} alt={product.name} />
            <h4>{product.title}</h4>
            <div className='priceBtn'>
              <h5>Price: {product.price}$</h5>
              <button onClick={() => handleAdd(product)} className='btn'>Add to Cart</button>
            </div>
          </div>
        )
      })
    }</div>
  )
}

export default Products