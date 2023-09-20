import React from 'react'
import AboutImg from '../assets/about.jpg'
import './about.css'
import { motion } from 'framer-motion'




function About() {
return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className='container p-0'>
        <div style={{borderBottom:'2px solid #c0c0c0'}} className=' pb-5 about row d-flex flex-column'>
            <h1 style={{ fontFamily: 'Rajdhani,sans-serif' }} className=' p-0 col-12  d-flex justify-content-center my-5'>About Us</h1>
            <div className='col-12 p-0 d-flex flex-column align-items-center align-items-md-start flex-md-row'>
                <div className='col-md-6 col-11 aboutImgCon'>
                    <img alt='aboutimg' className='img-fluid' src={ AboutImg} />
                </div>
                <div className='aboutText col-md-6 col-12 text-center text-md-start d-flex  align-items-center p-md-5 p-4'>
                    <p className='m-0'>In 2013, we started <span>ShopZone</span> to disrupt the overpriced and outdated models of the fashion industry. Empowered by the people through crowdfunding, our original watch line set us apart by bringing you quality, minimalist designs at radically fair prices. Through social media we grew far beyond our Los Angeles home, becoming a global community of 1.5 million <span>ShopZone</span> owners (and counting).We're inspired by the go-getters, the innovators, the dreamers; and our designs embody this very spirit. They're built for adventuring, creating and daring to disrupt the norm.
    Above all else, we create with the dream of enlivening our ultimate mission: to inspire you to live life on your own terms.
                    </p>
                </div>
            </div>
        </div>
    </motion.div>
)
}

export default About