import React from 'react'
import { Link } from 'react-router-dom'
import helpImg from '../assets/helpCenter.jpeg'
import './helpcenter.css'
import { motion } from 'framer-motion'



function HelpCenter() {
return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration:1}}
        className='row overflow-hidden helpcenter mt-5 d-flex flex-md-row  flex-column-reverse p-0'>
                    <div style={{backgroundColor:'black',color:'white'}} className='col-md-6 col-12 p-5 d-flex flex-wrap helpcenterLeft justify-content-center justify-content-md-start'>
                        <h1 className='col-md-9 col-12 mb-5 '>Need Help? Check Out Our Help Center</h1>
                        <span className='col-md-10 col-12 mb-5'>We want you to have the simplest buying experince possible. But we know you might have a few questions. Contact us for details about purchasing, shipping, checking order status, returns and more.</span>
                        <Link className='helpcenterBtn col-md-5 col-10 d-flex justify-content-center align-items-center mt-4 py-md-2 py-3 '>Go to Help Center</Link>
            </div>
            <div className='right col-md-6 col-12 mb-4 mb-md-0 p-0'>
                <img alt='helpImg' src={ helpImg} className='img-fluid h-100'  />
            </div>
        </motion.div>
)
}

export default HelpCenter