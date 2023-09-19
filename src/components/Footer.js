import React, { useEffect, useState } from 'react'
import './footer.css'
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import visa from '../assets/Visa.webp'
import master from '../assets/brand-mastercard@3x.webp'
import american from '../assets/american-express.webp'
import unionpay from '../assets/unionPay.webp'
import jcb from '../assets/jcb.webp'
import club from '../assets/club.webp'
import discover from '../assets/discover.webp'
import paypal from '../assets/paypal.webp'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetProducts ,productPage,allProducts} from '../features/product';
import { useGetProductsApiQuery } from '../features/apiSlice';
import { useNavigate } from 'react-router-dom';
import { urlPage } from '../features/url';


function Footer() {
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const { data ,isSuccess} = useGetProductsApiQuery()
    const [categories,setCategories]=useState([])

    function PageProduct(category) {
            const productsFiltered = data.filter(product => {
                return product.category===category
            })
        dispatch(resetProducts())
        dispatch(productPage(productsFiltered))
        navigate(`/shopzone/${category.trim()}`)
        dispatch(urlPage(category))
        window.scrollTo({behavior:'smooth',top:0})
    }
    function shopAll() {
        dispatch(resetProducts())
        dispatch(allProducts(data))
        dispatch(urlPage('allproducts'))
        navigate('/shopzone/allproducts')
        window.scrollTo({behavior:'smooth',top:0})

    }
    useEffect(() => {

        if (isSuccess) {
            const allCategories = data.map(product => {
            return product.category
        })
        const categorySet = new Set(allCategories)
        const categorySetArray=Array.from(categorySet)
        setCategories(categorySetArray)
    }
    }, [isSuccess, data])
    return (

    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration:1}}
        className='container mt-5'>
                <div className='row footer d-flex flex-column flex-md-row p-2 p-md-5'>
            <div className='col-md-3 col-12 d-flex locations flex-column mb-3 mb-md-0 theBox pb-md-0 pb-3'>
                    <h3 className='col-12 d-flex justify-content-center mb-md-5 mb-3'>Store Location</h3>
                    <span style={{ fontFamily: 'Rajdhani, sans-serif', color: 'black' }} className='col-12 d-flex justify-content-center mb-1'>500 Terry Francine Street</span>

                    <span style={{ fontFamily: 'Rajdhani, sans-serif', color: 'black' }} className='col-12 d-flex justify-content-center mb-1'>San Francisco, CA 94158</span>

                    <span style={{ fontFamily: 'Rajdhani, sans-serif', color: 'black' }} className='col-12 d-flex justify-content-center mb-1'>info@shopzone.com</span>
                    <span style={{ fontFamily: 'Rajdhani, sans-serif', color: 'black' }} className='col-12 d-flex justify-content-center mb-1'>123-456-7890</span>
                    <div className='col-12 d-flex p-0 socials justify-content-center'>
                    <span className='col-2'> <FacebookIcon/></span>
                    <span className='col-2'> <InstagramIcon/></span>
                    <span className='col-2'> <TwitterIcon/></span>
                        <span className='col-2'> <YouTubeIcon /></span>
                    </div>
                </div>
                <div className='col-md-3 col-12 d-flex shop flex-column mb-3 mb-md-0 theBox pb-md-0 pb-3'>
                    <h3 className='col-12 d-flex justify-content-center mb-md-5 mb-3'>Shop</h3>
                <span onClick={()=>shopAll()} style={{ fontFamily: 'Rajdhani, sans-serif', color: 'black',cursor:'pointer' }} className='col-12 d-flex justify-content-center link mb-2'>Shop All</span>
                    {categories.map(category => {
                        return <span  onClick={() => { PageProduct(category)}} style={{ fontFamily: 'Rajdhani, sans-serif', color: 'black',cursor:'pointer' }} key={category} className='col-12 d-flex justify-content-center link mb-2'>{category }</span>
                    })}
                </div>
                <div className='col-md-3 col-12 d-flex support flex-column mb-3 mb-md-0 theBox pb-md-0 pb-3'>
                    <h3 className='col-12 d-flex justify-content-center mb-md-5 mb-3'>Customer Support</h3>
                    <Link to='/shopzone/contact' onClick={() => window.scrollTo({top:0,behavior:'smooth'})} style={{ fontFamily: 'Rajdhani, sans-serif', color: 'black' }} className='col-12 d-flex justify-content-center link mb-2'>Contact Us</Link>
                    <Link  onClick={() =>window.scrollTo({top:0,behavior:'smooth'})} style={{ fontFamily: 'Rajdhani, sans-serif', color: 'black' }} className='col-12 d-flex justify-content-center link mb-2'>Help Center</Link>
                    <Link onClick={() =>window.scrollTo({top:0,behavior:'smooth'})} to='/shopzone/about' style={{ fontFamily: 'Rajdhani, sans-serif', color: 'black' }} className='col-12 d-flex justify-content-center link mb-2'>About Us</Link>
                    <Link to='/shopzone/career' onClick={() =>window.scrollTo({top:0,behavior:'smooth'})} style={{ fontFamily: 'Rajdhani, sans-serif', color: 'black' }} className='col-12 d-flex justify-content-center link mb-2'>Careers</Link>
                </div>
                <div className='col-md-3 col-12 d-flex policy flex-column mb-3 mb-md-0 theBox pb-md-0 pb-3'>
                    <h3 className='col-12 d-flex justify-content-center mb-md-5 mb-3 '>Policy</h3>
                    <Link style={{ fontFamily: 'Rajdhani, sans-serif', color: 'black' }} className='col-12 d-flex justify-content-center link mb-2'>Shipping & Returns </Link>
                    <Link style={{ fontFamily: 'Rajdhani, sans-serif', color: 'black' }} className='col-12 d-flex justify-content-center link mb-2'>Terms & Conditions</Link>
                    <Link style={{ fontFamily: 'Rajdhani, sans-serif', color: 'black' }} className='col-12 d-flex justify-content-center link mb-2'>Payment Methods </Link>
                    <Link style={{ fontFamily: 'Rajdhani, sans-serif', color: 'black' }} className='col-12 d-flex justify-content-center link mb-2'>FAQ</Link>
                </div>

            </div>
            <div className='row d-flex flex-column p-md-5 mt-md-5 p-3'>
                    <span className='col-12 d-flex justify-content-center mb-md-5 mb-2'>We accept the following paying methods</span>
                    <div className='col-12 d-flex justify-content-around'>
                        <div className='img-box col-1'>
                            <img alt='logo' src={ visa} className='img-fluid' />
                        </div>
                        <div className='img-box col-1'>
                            <img alt='logo' src={ master} className='img-fluid' />
                        </div>
                        <div className='img-box col-1'>
                            <img alt='logo' src={ american} className='img-fluid' />
                        </div>
                        <div className='img-box col-1'>
                            <img alt='logo' src={ unionpay} className='img-fluid' />
                        </div>
                        <div className='img-box col-1'>
                            <img alt='logo' src={ jcb} className='img-fluid' />
                        </div>
                        <div className='img-box col-1'>
                            <img alt='logo' src={ club} className='img-fluid' />
                        </div>
                        <div className='img-box col-1'>
                            <img alt='logo' src={ discover} className='img-fluid' />
                        </div>
                         <div className='img-box col-1'>
                            <img alt='logo' src={ paypal} className='img-fluid' />
                        </div>
                    </div>
                </div>
        </motion.div>
  )
}

export default Footer