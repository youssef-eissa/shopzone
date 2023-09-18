import React from 'react'
import './cart.css'
import { useSelector,useDispatch } from 'react-redux'
import { productQuantityInc, productQuantityDec,deleteProduct,allPrice } from '../features/cart'
import CustomDeleteIconChips from '../MaterialUi/delete'

function Cart() {
    const dispatch=useDispatch()
    const products = useSelector(state => state.cart.value)
    function quantityInc(product) {
        dispatch(productQuantityInc({ ...product, quantity: product.quantity + 1 }))
    }
    function quantityDec(product) {
        dispatch(productQuantityDec({ ...product, quantity: product.quantity - 1 }))
    }
    return (
    <div className='container cart'>
        <div className='row p-3 p-md-0 d-flex flex-md-row flex-column justify-content-between'>
            <div className='col-md-8 col-12 d-flex p-0 flex-wrap'>
                <h3 className='col-12 p-3' style={{ fontFamily: 'Tulpen One, cursive', fontSize: '30px' }}>My cart</h3>
                <div className='col-12 mt-5 '>
                    {products.array.map(product => {
                        return <div key={product.id} className='col-12 mb-5  flex-column flex-md-row d-flex justify-content-md-around justify-content-center align-items-center'>
                            <div className='col-md-1 col-5  d-flex align-items-center'>
                                <img alt='img' className='img-fluid' src={`${product.image}`} />
                            </div>
                            <div className='col-md-5 col-12 d-flex flex-column'>
                                <span className='col-12 text-center text-md-start mt-3 mt-md-0' style={{ fontFamily: 'Rajdhani , cursive', fontSize: '20px' }}>{product.title}</span>
                                <span className='col-12 text-center text-md-start mt-3 mt-md-0' style={{ fontFamily: 'Rajdhani , cursive', fontSize: '20px' }}>${product.price}</span>

                            </div>
                            <div className='col-md-2 col-5 my-3 my-md-0 d-flex justify-content-center'>
                                <div className='col-10 d-flex align-self-start overflow-hidden rounded  increment'>
                                    <button onClick={() => { quantityDec(product); dispatch(allPrice())}} className='col-4 text-center'>-</button>
                                    <span style={{ fontFamily: 'Rajdhani , cursive', fontSize: '20px' }} className='col-4 text-center'>{product.quantity }</span>
                                    <button onClick={() => { quantityInc(product); dispatch(allPrice())}} className='col-4 text-center'>+</button>
                                </div>
                            </div>
                            <div style={{ fontFamily: 'Rajdhani , cursive', fontSize: '20px' }} className='col-md-2 col-12 d-flex justify-content-center'>Total Price ${(product.quantity * product.price).toFixed(2)}</div>
                            <div onClick={() => { dispatch(deleteProduct(product)) }} className='col-1 d-flex align-items-start justify-content-end'><CustomDeleteIconChips /></div>
                    </div>
                })}
                </div>
                </div>
                <div className='col-md-3 col-12 '>
                    <h3 className='col-12 p-3 orderSummary' style={{ fontFamily: 'Tulpen One, cursive', fontSize: '30px' }}>Order Summary</h3>
                    <div className='col-12 d-flex mt-3'>
                        <div style={{ fontFamily: 'Rajdhani , cursive', fontSize: '20px' }} className='col-6 d-flex'>
                            Subtotal
                        </div>
                        <div style={{ fontFamily: 'Rajdhani , cursive', fontSize: '20px' }} className='col-6 d-flex'>
                            {products.allPrice.toFixed(2)}
                        </div>
                    </div>
                </div>
        </div>
    </div>
)
}

export default Cart