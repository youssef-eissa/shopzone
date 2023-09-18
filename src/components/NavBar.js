import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { motion } from 'framer-motion';
import { useSelector,useDispatch } from 'react-redux';
import { useGetProductsApiQuery } from '../features/apiSlice';
import { Link,useNavigate } from 'react-router-dom';
import { resetProducts, productPage} from '../features/product';
import { urlPage, } from '../features/url';
import { filteredProducts, resetFilters } from '../features/filteredProducts';
import TemporaryDrawer from '../MaterialUi/offcanvas';
import { productArray } from '../features/singleProduct';
import Menu from '../MaterialUi/menu';




function NavBar() {
    const filtered = useSelector((state) => state.filteredProducts.value)
    const navRef=useRef(null)
    const [lastScroll,setLastScroll]=useState(0)
    const navigate=useNavigate()
    const [categories,setCategories]=useState([])
    const resultsRef=useRef(null)
    const dispatch=useDispatch()
    const [results, setResults] = useState('')
    const user = useSelector((state) => state.user.value)
    const { data, isSuccess } = useGetProductsApiQuery()


    function handleResults(resultedProduct) {
        const productsArray = data.filter(product => {
        return product.title.toLowerCase().includes(resultedProduct.toLowerCase())
        })
        if (results.length > 0) {
        dispatch(filteredProducts(productsArray))
        } else dispatch(resetFilters())
    }


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

    function handleScroll() {
        const scroll = window.scrollY
        if (scroll > lastScroll+200 ) {
            navRef.current.style.transform = 'translateY(-100%)'
            setLastScroll(scroll)
        } else if (lastScroll>scroll+200 || scroll===0) {
            navRef.current.style.transform = 'translateY(0)'
            setLastScroll(scroll)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return ()=>window.removeEventListener('scroll',handleScroll)
    })
    function handleProduct(product) {
        dispatch(resetProducts())
        dispatch(resetFilters())
        dispatch(productArray(product))
        setResults('')
        window.scrollTo({top:0,behavior:'smooth'})
    }

return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration:1}}
        className='navBar container-fluid p-0 '
        ref={navRef}>
        <div className='row p-0'>
            <div style={{ backgroundColor: "black" }} className='freeShip col-12 p-3 d-flex flex-md-row flex-column'>

            <span className='col-md-6 d-flex mb-3 mb-md-0 justify-content-center d-md-block col-12 ps-3' >
                <CardGiftcardIcon sx={{marginRight:"10px"}}/>
                Free Shipping for orders over $50</span>
            <div className='col-md-6 col-12 d-flex justify-content-center mt-1 flex-wrap'>
                <Link to='/shopzone/about' onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className='col-3 shipLink d-flex justify-content-center'>About Us</Link>
                <Link to='/shopzone/contact' onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className='col-3 shipLink d-flex justify-content-center'>Contact</Link>
                <Link  className='col-3 shipLink d-flex justify-content-center'>Help Center</Link>
                <Link  to='tel:123-456-7890'className='col-md-3 col-5 shipLink d-flex justify-content-center'>Call Us:  123-456-7890 </Link>
            </div>
        </div>
        </div>
        <div className='row p-0 align-items-center logoandlinks px-4 d-flex justify-content-between mt-2  '>
            <div className='LogoandSearch d-flex justify-content-between col-md-3 col-8'>
                <Link onClick={() => { dispatch(resetProducts()); dispatch(resetFilters()); setResults(''); window.scrollTo({top:0,behavior:'smooth'})}} to='/shopzone/home' className='col-12 logo' style={{ fontFamily: "Black Ops One, cursive", color: "coral" }}>ShopZone</Link>
            </div>
            <div className='col-9 d-md-flex d-none align-items-center justify-content-between userInfo p-0'>
            <nav  className='col-8 mt-1  py-2 d-flex'>
            {categories.map(category => {
                return <div key={category} style={{cursor:'pointer'}} onClick={()=>PageProduct(category)} className='col-3 link text-center p-2'>
                    {category }
                </div>
            })}
            </nav>
                <div className='col-3 d-flex justify-content-center'>
                <div className='col-7 d-flex flex-content-center align-items-center'>
                    <div className='col-3 d-flex justify-content-center'>
                    <AccountCircleIcon fontSize='large' sx={{ color: 'gray' }} />
                        </div>
                        <div className='col-9 fw-bold d-flex align-items-center'>{user.name }</div>
                </div>
                    <div className='col-5 d-flex justify-content-center'>
                    <span className='col-12 d-flex justify-content-start'><TemporaryDrawer /></span>
                </div>
                </div>
            </div>
            <div className=' menuB col-4 d-md-none d-flex'>
                <span className='col-6 d-flex justify-content-center'>
                <Menu/>
                </span>
                    <span className='col-6 d-flex justify-content-center align-items-center'><TemporaryDrawer /></span>

            </div>
        </div>

        <div style={{ backgroundColor: 'whitesmoke' }} className='row py-3 align-items-center d-flex flex-column justify-content-center'>

            <div className='col-md-6 col-11 searchContainer  h-100 d-flex'>
                <input
                ref={resultsRef}
                className='col-9 py-md-3 py-2'
                value={results}
                onChange={(e) => {
                setResults(e.target.value); handleResults(results)
                }}
                type='text'
                />
                <div style={{cursor:'pointer'}} onClick={()=>resultsRef.current.focus()} className=' search col-3 d-flex justify-content-center align-items-center'>
                <SearchIcon sx={{color:"white"}} fontSize='large'/>
                </div>
                </div>
                <div className={`results p-4 p-md-0 rounded ${results.length > 0 ? 'mt-3 col-md-6 col-12 d-flex flex-column':'d-none'}`}>{filtered.map(product => {
                return <Link to='/shopzone/product' onClick={()=>handleProduct(product)} key={product.id} style={{backgroundColor:"white",textDecoration:'none'}} className='col-12 p-2 mb-3 rounded d-flex justify-content-around'>
                <div className='img-box col-1 d-flex justify-content-center align-items-center'>
                <img alt='product-img' src={`${product.image}`} className='img-fluid' />
                </div>
                <div className='col-7 p-3 align-items-center justify-content-center d-flex '>
                {product.title}</div>
                <div style={{color:'black'}} className='col-2 d-flex justify-content-center align-items-center'>${product.price }</div>
                    </Link>
}) }</div>

        </div>
        </motion.div>

)
}

export default NavBar
