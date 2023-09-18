import React from 'react'
import './Contact.css'
import { motion } from 'framer-motion'
import { useFormik } from 'formik'
import * as yup from 'yup'

function Contact() {
    const schema = yup.object().shape({
        firstname: yup.string().required('First Name is required'),
        lastname: yup.string().required('Last Name is required'),
        email: yup.string().email().required('Invalid email address'),
        subject: yup.string().required('Subject is required'),
        message:yup.string().required('Your message is required')
    })
    const { values, handleBlur, handleReset, handleSubmit, handleChange,errors,touched } = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            subject: '',
            message:''
        },
        validationSchema:schema
    })
    function handleForm(e) {
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
        transition={{duration:1}}
        className='container p-0 contact'>
        <div className='row '>
            <h1 style={{fontFamily:"Rajdhani, sans-serif"}} className='col-12 mb-5 d-flex justify-content-center'>Get In Touch</h1>
        </div>
        <div className='col-12 d-flex flex-wrap flex-md-row flex-column row-gap-5'>
            <div className='col-md-6 col-12 text-center text-md-start d-flex flex-wrap'>
                <h3 className='col-12 mb-4'>Opening Hours</h3>
                <span style={{fontFamily:"Dosis, sans-serif"}} className='col-12 mb-3'>Mon - Fri: 8am - 8pm</span>
                <span style={{fontFamily:"Dosis, sans-serif"}} className='col-12 mb-3'>Saturday: 9am - 7pm</span>
                <span style={{fontFamily:"Dosis, sans-serif"}} className='col-12'>Sunday: 9am - 8pm</span>
            </div>

            <div className='col-md-6 col-12 d-flex right flex-wrap'>
                <h3 className='col-12 mb-4 text-center text-md-start'>We're here to help!</h3>
                <span style={{fontFamily:"Dosis, sans-serif"}} className='col-md-8 px-3 px-md-0 text-center text-md-start col-12 mb-3'>Fill out the form with any query on your mind and we'll get back to you as soon as possible.</span>
            </div>

            <div className='col-md-6 text-center text-md-start col-12 d-flex flex-wrap'>
                <h3 className='col-12 mb-4'>Store Location</h3>
                <span style={{fontFamily:"Dosis, sans-serif"}} className='col-12 mb-2'>500 Terry Francine Street</span>
                <span style={{fontFamily:"Dosis, sans-serif"}} className='col-12 mb-2'>San Francisco, CA 94158</span>
                <span style={{ fontFamily: "Dosis, sans-serif" }} className='col-12 mb-2'>info@mysite.com</span>
                <span style={{fontFamily:"Dosis, sans-serif"}} className='col-12'>123-456-7890</span>
            </div>

            <form onSubmit={handleForm} className='col-md-6 px-3 px-md-0 col-12 d-flex flex-wrap flex-md-row flex-column row-gap-3 justify-content-between'>
                <div className='col-md-5 col-12 d-flex flex-column'>
                    <label htmlFor='firstname' className='col-12 mb-2'>First Name</label>
                    <input
                        type='text'
                        name='firstname'
                        value={values.firstname}
                        onChange={handleChange}
                        id='firstname'
                        onBlur={handleBlur}
                    />
                    <span className='col-12' style={{ color: 'red' }}>{ touched.firstname&&errors.firstname&&errors.firstname }</span>
                </div>
                <div className='col-md-5 col-12 d-flex flex-column'>
                    <label htmlFor='lname' className='col-12 mb-2'>Last Name</label>
                    <input
                        type='text'
                        name='lastname'
                        value={values.lastname}
                        onChange={handleChange}
                        id='lname'
                        onBlur={handleBlur}

                    />
                    <span className='col-12' style={{ color: 'red' }}>{touched.lastname&&errors.lastname&&errors.lastname }</span>
                </div>
                <div className='col-md-5 col-12 d-flex flex-column'>
                    <label htmlFor='email' className='col-12 mb-2'>Email</label>
                    <input
                        type='email'
                        value={values.email}
                        onChange={handleChange}
                        name='email'
                        id='email'
                        onBlur={handleBlur}

                    />
                    <span className='col-12' style={{ color: 'red' }}>{touched.email&&errors.email&&errors.email }</span>
                </div>
                <div className='col-md-5 col-12 d-flex flex-column'>
                    <label htmlFor='subject' className='col-12 mb-2'>Subject</label>
                    <input
                        type='text'
                        value={values.subject}
                        name='subject'
                        onChange={handleChange}
                        id='subject'
                        onBlur={handleBlur}

                    />
                    <span className='col-12' style={{ color: 'red' }}>{touched.subject&&errors.subject&&errors.subject }</span>
                </div>
                <div className='col-12 d-flex flex-column'>
                    <label htmlFor='message' className='col-12 mb-2'>Message</label>
                    <textarea value={values.message}
                        onChange={handleChange}
                        name='message'
                        id='message'
                        onBlur={handleBlur}
                    ></textarea>
                    <span className='col-12' style={{ color: 'red' }}>{touched.message&&errors.message&&errors.message }</span>
                </div>
                <button type='submit' className='col-md-6 col-12 rounded py-3'>Submit</button>
            </form>
        </div>
    </motion.div>
)
}

export default Contact