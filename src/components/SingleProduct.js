import React, {  useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import './singleproduct.css'
import { carts, allPrice } from '../features/cart';
import { motion } from 'framer-motion';


function SingleProduct() {
    const products = useSelector(state => state.cart.value)
    const [itemQuantity,setQuantity]=useState(products.quantity)
    const theProduct = useSelector(state => state.singleProduct.value)
    const dispatch = useDispatch()

    function handleCart(product) {
        dispatch(carts({ ...product, quantity: itemQuantity }));
        window.scrollTo({top:0,behavior:'smooth'})

    }
    function handleChange(e) {
        setQuantity(parseInt(e.target.value))
    }

return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration:1}}
        className='container singleProduct p-0'>
        <div className='row p-0 d-flex flex-md-row flex-column justify-content-center '>
            <div className='left d-flex flex-wrap col-md-5 col-12 justify-content-md-start justify-content-center'>
                <div className='col-10 imgCon p-5'>
                    <img alt='img' src={`${theProduct.array.image}`} className='img-fluid' />
                </div>
                <p style={{fontFamily:"Dosis, sans-serif"}} className='col-12 p-5'>{theProduct.array.description }</p>
            </div>
            <div className='right col-md-5 col-12 d-flex flex-column'>
                <h1 className='col-12 text-center text-md-start'>{theProduct.array.title}</h1>
                <span style={{ fontFamily: "Dosis, sans-serif", fontSize: '20px' }} className='col-12 mt-4 text-center text-md-start'>Price: $<span>{theProduct.array.price}</span></span>
                <div className='col-12 mt-4 d-flex justify-content-center justify-content-md-start quantity flex-wrap'>
                <span style={{ fontFamily: "Dosis, sans-serif" }} className='col-12 text-center text-md-start'>Quantity</span>
                <input
                    type='number'
                    name='quantity'
                    value={itemQuantity}
                        className='col-2 py-1 rounded'
                        onChange={(e) => handleChange(e)}
                        min={1}
                />
                </div>
                <button onClick={() => { handleCart(theProduct.array); dispatch(allPrice());}} className='col-6 d-flex justify-content-center rounded py-3 mx-auto my-4'>Add to cart</button>
            </div>
        </div>
    </motion.div>
)
}

export default SingleProduct