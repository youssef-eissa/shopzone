import React, { useEffect, useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import './products.css'
import { motion } from 'framer-motion';
import  { productDetails ,resetProducts} from '../features/product';
import { Link } from 'react-router-dom';
import { productArray } from '../features/singleProduct';



function Products() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const products = useSelector((state) => state.product.value)
    const productsCategory = products.map(product => {
        return product.category
    })
    const titleSet = new Set(productsCategory)
    const titleArray=Array.from(titleSet)
    useEffect(()=> {
        if (titleArray.length === 1) {
            setTitle(titleArray[0])
        }else setTitle('Shop All')
    }, [titleArray])

    function handleProduct(product) {
        dispatch(resetProducts())
        dispatch(productDetails(product))
        dispatch(productArray(product))
    }
return (
    <motion.div
        id='products'
    initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration:2}}
        className='container p-0'>
        <div className='row d-flex products flex-wrap p-5 justify-content-center row-gap-2 '>
            <h1  style={{textTransform:'capitalize',fontFamily:'Rajdhani,sans-serif'}} className='mb-5 col-12 d-flex justify-content-center'>{title}</h1>
            {products.length>0&&products.map(product => {
                return <Link key={product.title} to='/shopzone/product' onClick={() => {handleProduct(product)}} style={{textDecoration:'none',color:'black'}} className='col-md-4 col-12 d-flex flex-wrap productContainer align-items-center rounded p-5 justify-content-center'>
                    <div className='productImgBox mb-3 col-8'>
                        <img alt='product-img' src={ `${product.image}`} className='img-fluid' />
                    </div>
                    <div className='d-flex col-12 flex-wrap'>
                        <span className='col-12 my-3 d-flex justify-content-start'>{product.title}</span>
                        <span className='col-12 ' style={{color:'#8A2BE2'}}> <span style={{color:'black'}}>Price: </span>${ product.price}</span>
                    </div>
                </Link>
            })}
        </div>
</motion.div>
)
}

export default Products