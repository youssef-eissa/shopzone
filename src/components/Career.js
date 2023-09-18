import React from 'react'
import Select from '../MaterialUi/Select'
import Date from '../MaterialUi/Date'
import { useFormik } from 'formik'
import * as yup from 'yup'
import './career.css'
import { motion } from 'framer-motion'

function Career() {
    const schema = yup.object().shape({
        firstName: yup.string().required("First Name Is Required"),
        lastName: yup.string().required('Last Name is Required'),
        email: yup.string().email().required('Email is required'),
        mobile: yup.string().required().matches(/^01[0125][0-9]{8}$/, 'Invalid Phone Number'),
        resume:yup.string().required('Please Enter Your Resume Link')
    })
    const {values ,handleBlur,handleChange,errors,handleSubmit,handleReset,touched } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            resume:''
        },
        validationSchema:schema
    })

    function formSubmit(e) {
        e.preventDefault()
        handleSubmit()
        if (values.email.length > 0 && values.firstname.length > 0 && values.lastname.length > 0 && values.message.length > 0 && values.subject.length > 0) {
        handleReset()
        }
    }
return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className='container careercon p-0'>
        <div className='row p-0 '>
            <div className='col-12 p-0 d-flex flex-wrap career  justify-content-center'>
                <h1 style={{ fontFamily: 'Rajdhani,sans-serif' }} className=' p-0 col-12 d-flex d-flex justify-content-center my-5'>Carrer</h1>
                <p style={{ fontFamily: 'Tulpen One,sans-serif' }} className='col-12 mt-3 mb-5 d-flex justify-content-center'>Check out our job postings & opportunities waiting for you</p>
                <form onSubmit={formSubmit} className='col-9 d-flex flex-wrap flex-md-row flex-column justify-content-around '>
                    <div className=' my-3 name col-md-5 col-12 d-flex flex-column'>
                        <label className='col-12 mb-4' >First Name</label>
                        <input
                            className='col-12'
                            type='text'
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='firstName'
                        />
                        <span className='col-12' style={{ color: 'crimson', fontSize: '20px' }}>{touched.firstName&&errors.firstName&&errors.firstName }</span>
                    </div>
                    <div className='lname my-3 col-md-5 col-12 d-flex flex-column'>
                        <label className='col-12 mb-md-4 mb-1' >Last Name</label>
                        <input
                            className='col-12'
                            type='text'
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='lastName'
                        />
                        <span className='col-12' style={{ color: 'crimson', fontSize: '20px' }}>{touched.lastName&&errors.lastName&&errors.lastName }</span>
                    </div>
                    <div className='emaill my-3 col-md-5 col-12 d-flex flex-column'>
                        <label className='col-12 mb-md-4 mb-1' >Email</label>
                        <input
                            className='col-12'
                            type='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='email'
                        />
                        <span className='col-12' style={{ color: 'crimson', fontSize: '20px' }}>{touched.email&&errors.email&&errors.email }</span>
                    </div>
                    <div className='phone my-3 col-md-5 col-12 d-flex flex-column'>
                        <label className='col-12 mb-md-4 mb-1' >Phone</label>
                        <input
                            type='text'
                            value={values.mobile}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='col-12'
                            name='mobile'
                        />
                        <span className='col-12' style={{ color: 'crimson', fontSize: '20px' }}>{touched.mobile&&errors.mobile&&errors.mobile }</span>
                    </div>
                    <div className='phone my-3 col-md-5 col-12 d-flex flex-column'>
                        <label className='col-12 mb-md-4 mb-1' >Position You Apply For</label>
                        <Select/>
                    </div>
                    <div className='phone my-3 col-md-5 col-12 d-flex flex-column '>
                        <label className='col-12 mb-md-3 mb-1' >Available Start Date</label>
                        <div className='col-12 p-0'>
                            <Date />
                        </div>
                        </div>
                    <div className='phone my-3 col-md-8 col-12 d-flex  flex-column'>
                        <label className='col-12 mb-md-4 mb-1' >Link to Resume</label>
                        <input
                            className='col-12 '
                            placeholder='Enter URL'
                            type='text'
                            value={values.resume}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='resume'
                        />
                        <span className='col-12' style={{ color: 'crimson', fontSize: '20px' }}>{touched.resume&&errors.resume&&errors.resume }</span>
                    </div>
                    <div className='col-md-3 col-12 d-flex align-items-center'>
                        <button className='col-12 sbtn rounded py-3' type='submit'>Submit</button>
                </div>
                </form>
            </div>

        </div>
    </motion.div>
)
}

export default Career