import './Home.css'
import { motion } from 'framer-motion'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import land1 from '../assets/landing1.jpeg'
import land2 from '../assets/landing2.jpeg'
import land3 from '../assets/landing3.webp'
import land4 from '../assets/landing4.jpeg'
import land5 from '../assets/landing5.avif'
import { useEffect, useState } from 'react';
import sale1 from '../assets/sale1.jpeg'
import sale2 from '../assets/sale2.jpeg'
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import cat1 from '../assets/menCat.png'
import cat2 from '../assets/womenCat.png'
import cat3 from '../assets/mobCat.png'
import cat4 from '../assets/womenCategory.png'
import { useGetProductsApiQuery } from '../features/apiSlice';
import  { resetProducts, productPage } from '../features/product';
import { useDispatch } from 'react-redux';
import { urlPage } from '../features/url';
import { useNavigate } from 'react-router-dom';
import { allProducts } from '../features/product';




function Home() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [newsletter,setNewsletter]=useState('')
    const { data } = useGetProductsApiQuery()
    const landsArray = [land1, land2, land3, land4, land5]
    const [currentImg,setCurrentImg]=useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        const randomNum = Math.floor(Math.random() * landsArray.length)
            setCurrentImg(randomNum)
        }, 3000)
        return ()=> clearInterval(interval)
    })
    function menProduct() {
            const productsFiltered = data.filter(product => {
                return product.category==="men's clothing"
            })
        dispatch(resetProducts())
        dispatch(productPage(productsFiltered))
        dispatch(urlPage("men'sproducts"))
        navigate("/shopzone/men'sproducts")
        window.scrollTo({top:0,behavior:'smooth'})

    }
    function jewlery() {
            const productsFiltered = data.filter(product => {
                return product.category==="jewelery"
            })
        dispatch(resetProducts())
        dispatch(productPage(productsFiltered))
        dispatch(urlPage('jewelery'))
        navigate('/shopzone/jewelery')
        window.scrollTo({top:0,behavior:'smooth'})
    }
    function electronics() {
            const productsFiltered = data.filter(product => {
                return product.category==="electronics"
            })
        dispatch(resetProducts())
        dispatch(productPage(productsFiltered))
        dispatch(urlPage('electronics'))
        navigate('/shopzone/electronics')
        window.scrollTo({top:0,behavior:'smooth'})
    }
    function womenproduct() {
            const productsFiltered = data.filter(product => {
                return product.category==="women's clothing"
            })
        dispatch(resetProducts())
        dispatch(productPage(productsFiltered))
        dispatch(urlPage('womenproduct'))
        navigate('/shopzone/womenproduct')
        window.scrollTo({top:0,behavior:'smooth'})
    }
    function shopAll() {
        dispatch(resetProducts())
        dispatch(allProducts(data))
        dispatch(urlPage('allproducts'))
        navigate('/shopzone/allproducts')
        window.scrollTo({top:0,behavior:'smooth'})
    }
return (
    <motion.div
    initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration:2,type:'spring'}}
        className='container-fluid home p-0'>
        <div className='container p-0 '>
            <div  className='headBox overflow-hidden row d-flex justify-content-center align-items-center position-relative p-0 '>
                <div className='col-12 position-absolute z-2 overlay w-100 h-100 p-0' style={{ backgroundColor: "rgb(0,0,0,0.5)" }}></div>

                <div className='col-12 position-absolute z-1 overlay w-100 h-100 p-0'>
                    <img alt='background' src={ landsArray[currentImg]} className='img-fluid h-100 w-100' />
                </div>
                <div className='col-md-6 col-12 d-flex z-3 position-relative justify-content-center p-0 flex-wrap'>
                    <span className='col-12 text-center' style={{ color: 'white' }}>Over 500,000 Satisfied Customers</span>
                    <h1 style={{ color: 'white' }} className='col-12 text-center'>Shop More With <span style={{ fontFamily: "Black Ops One, cursive", color: "coral" }}>ShopZone</span></h1>
                    <span style={{cursor:'pointer'}} onClick={()=>shopAll()} className='shopBtn col-md-4 col-8 text-center rounded py-2'>Shop Now</span>
                </div>

            </div>
            <div className='row d-flex p-4 p-md-0 flex-column flex-md-row sales justify-content-between mt-5'>
                    <div className=' leftSale col-md-5 col-12 d-flex p-0 rounded '>
                        <div style={{color:'white'}} className='text p-3 col-6 d-flex flex-column justify-content-center'>
                            <span className='col-12 mb-4'>Holiday's Deals</span>
                        <h1 className='col-7 mb-4'>Up to 30% off</h1>
                        <span className='col-12 mb-4'>Select Men's Clothes Brands</span>
                        <span style={{cursor:'pointer'}}  onClick={()=>menProduct()} className='col-6 rounded leftShopBtn d-flex justify-content-center align-self-center py-3'>Shop</span>
                    </div>
                    <div className='imgg col-6 rounded overflow-hidden h-100'>
                        <img alt='saleImg' className='img-fluid h-100' src={ sale1} />
                    </div>
                </div>
                <div className=' rightSale col-md-5 col-12 mt-md-0 mt-3 d-flex p-0 rounded '>
                        <div style={{color:'white'}} className='text p-3 col-6 d-flex flex-column justify-content-center'>
                            <span className='col-12 mb-4'>Just In</span>
                        <h1 className='col-12 mb-4'>Let your style shine</h1>
                        <span className='col-12 mb-4'>Top Jewelries Brands</span>
                        <span style={{cursor:'pointer'}} onClick={()=>jewlery()} className='col-6 rounded rightShopBtn d-flex justify-content-center align-self-center py-3'>Shop</span>
                    </div>
                    <div className='imgg col-6 rounded overflow-hidden h-100'>
                        <img alt='saleImg' className='img-fluid h-100' src={ sale2} />
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:"white"}} className='row p-5 mt-5 d-flex flex-md-row flex-column benefits '>
                <div className='col-md-3 col-12 mb-3 mb-md-0 pb-3 pb-md-0 d-flex benBox align-items-center '>
                    <div className='col-2'>
                    <DeliveryDiningOutlinedIcon fontSize='large' />
                    </div>
                    <span className='col-10 benText'>Curb-side pickup</span>
                </div>
                <div className='col-md-3 col-12 mb-3 mb-md-0 pb-3 pb-md-0 d-flex benBox align-items-center '>
                    <div className='col-2'>
                    <CardGiftcardIcon fontSize='large' />
                    </div>
                    <span className='col-10 benText'>Free shipping on orders over $50</span>
                </div>

                <div className='col-md-3 col-12 mb-3 mb-md-0 pb-3 pb-md-0 d-flex benBox align-items-center '>
                    <div className='col-2'>
                    <AttachMoneyOutlinedIcon fontSize='large' />
                    </div>
                    <span className='col-10 benText'>Low prices guaranteed</span>
                </div>
                <div className='col-md-3 col-12 mb-3 mb-md-0 pb-3 pb-md-0 d-flex benBox align-items-center '>
                    <div className='col-2'>
                    <AccessTimeIcon fontSize='large' />
                    </div>
                    <span className='col-10 benText'>Available to you 24/7</span>
                </div>
            </div>
            <div style={{backgroundColor:'white'}} className='row p-0 mt-5 p-5 byCat'>
                <h1 style={{fontFamily:'Oswald, sans-serif'}} className='d-flex col-12 justify-content-center mb-5'>Shop by Category</h1>
                <div className='col-12  d-flex flex-md-row flex-wrap flex-column justify-content-center'>
                    <div onClick={()=>menProduct()} className='col-md-5 col-12 mb-5 d-flex flex-column align-items-center catBox  justify-content-center'>
                        <div className='col-10 img-circle p-4  overflow-hidden'>
                        <img alt='mens' className='img-fluid h-100 w-100 ' src={cat1} />
                        </div>
                        <h3 className='col-12 justify-content-center d-flex'>Men's Clothing</h3>
                    </div>

                    <div onClick={()=>jewlery()} className='col-md-5 col-12 mb-5 d-flex flex-column align-items-center catBox  justify-content-center'>
                        <div className='col-10 img-circle p-4  overflow-hidden'>
                        <img alt='mens' className='img-fluid h-100 w-100 ' src={cat2} /> 
                        </div>
                        <h3 className='col-12 justify-content-center d-flex'>Jewelery</h3>
                    </div>
                    <div onClick={()=>electronics()} className='col-md-5 col-12 d-flex flex-column align-items-center catBox  justify-content-center'>
                        <div className='col-10 img-circle p-4  overlow-hidden'>
                        <img alt='mens' className='img-fluid h-100 w-100 ' src={cat3} /> 
                        </div>
                        <h3 className='col-12 justify-content-center d-flex'>Electronics</h3>
                    </div>
                    <div onClick={()=>womenproduct()} className='col-md-5 col-12 d-flex flex-column align-items-center catBox  justify-content-center'>
                        <div className='col-10 img-circle p-4  overflow-hidden'>
                        <img alt='mens' className='img-fluid h-100 w-100 ' src={cat4} /> 
                        </div>
                        <h3 className='col-12 justify-content-center d-flex'>Women's Clothing</h3>
                </div>
                </div>

            </div>
            <div className='row mt-5 p-0'>
                <div style={{backgroundColor:'#8A2BE2',color:'white'}} className='col-12 newsletter p-3 d-flex align-content-center justify-content-center flex-wrap'>
                    <h1 className='col-12 d-flex justify-content-center'>Newsletter</h1>
                    <span className='col-12 d-flex text-center mt-3 mt-md-0 justify-content-center '>Sign up to receive updates on new arrivals and special offers</span>
                    <form className='col-md-9 col-12 d-flex  justify-content-center flex-wrap my-3'>
                        <label style={{fontFamily:'Oswald, sans-serif'}} className='col-md-9 col-7 mb-3'>Email *</label>
                        <input
                            className='col-md-9 col-10  py-3 ps-3'
                            value={newsletter}
                            onChange={(e) => setNewsletter(e.target.value)}
                            type='email'
                            placeholder='Enter Your Email...'
                        />
                        <input
                            type='submit'
                            value='Subscribe'
                            className='col-md-3 col-10 mt-4 mt-md-0 py-md-0 py-3 d-md-block d-flex  d-flex justify-content-center'
                        />
                    </form>
                </div>
                
            </div>
        </div>
       
        
    </motion.div>

)
}


export default Home
