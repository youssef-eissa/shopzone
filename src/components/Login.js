import React, { useEffect, useState } from 'react'
import './login.css'
import img1 from '../assets/1437673.jpg'
import img2 from '../assets/318707.jpg'
import img3 from '../assets/kids-4583785_1280.jpg'
import img4 from '../assets/pexels-andrea-piacquadio-842811.jpg'
import img5 from '../assets/pngtree-asian-guy-in-glasses-in-a-city-picture-image_2646149.jpg'
import { motion } from 'framer-motion'
import {  useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import {  useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { loginName,login } from '../features/user'
import { useGetUsersApiQuery } from '../features/apiSlice'


function Login() {
const navigate=useNavigate()

    const { data} = useGetUsersApiQuery()
    const dispatch = useDispatch()
    const schema = yup.object().shape({
    username: yup.string().required().matches(),
    password:yup.string().required()
    })
    const { values,errors,handleSubmit,handleChange,setErrors,handleBlur,touched} = useFormik({
        initialValues: {
            username: '',
            password:''
        },
        validationSchema: schema,
    })


    const [background, setbackground] = useState(img1)
    const [current,setCurrent]=useState(0)
    useEffect(() => {
        const imgArray=[img1, img2, img3, img4, img5]
        const interval = setInterval(() => {
        const randomNum = Math.floor(Math.random() * imgArray.length)
            setCurrent(randomNum)
            setbackground(imgArray[current])
        }, 2000)
        return ()=>clearInterval(interval)
    })
    function LoginUser(username, password) {
    try {
        const currentUser = data.filter(User => {
            return User.username===username
            })
            if (currentUser[0].username===username&&currentUser[0].password===password) {
                dispatch(login())
                dispatch(loginName(currentUser[0].name.firstname))
                navigate('/shopzone/home', {
                    replace:true
                })

            }

    } catch (error) {

        setErrors({username:'requireddsa'})
    }
    }

    function handleForm(e) {
        e.preventDefault()
        handleSubmit(LoginUser(values.username, values.password))
        navigate('/shopzone/home')
    }
    function guestLogin() {
                dispatch(login())

        navigate('/shopzone/home')
    dispatch(loginName('Guest'))
    }
return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration:2}}
        style={{ fontFamily: 'Tulpen One, cursive' }} className='row'>
        <div className='col-12 position-relative login p-0 vh-100 d-flex '>
            <div className='col-12 position-absolute z-2 overlay w-100 h-100' style={{ backgroundColor: "rgb(0,0,0,0.5)" }}></div>
            <div className='col-12 position-absolute z-1 overlay w-100 h-100'>
                <img alt='background' src={ background} className='img-fluid h-100 w-100' />
            </div>
            <div className='col-12 d-flex flex-column h-100 justify-content-center align-items-center position-relative z-3'>
            <h1 style={{color:"white"}} className='col-12 justify-content-center mt-3  mb-auto  d-flex'>Welcome To<span className='ms-2' style={{fontFamily: "Black Ops One, cursive", color:"coral"}}>ShopZone</span></h1>
                <form  onSubmit={handleForm} className='col-md-4 col-9 mb-auto d-flex flex-column'>
                    <h1 className='col-12 text-center' style={{color:"white"}}>Account Login</h1>
                    <input
                    value={values.username}
                        onChange={handleChange}
                        className={`col-12 rounded p-3 `}
                        placeholder='Username'
                        name='username'
                        onBlur={handleBlur}

                    />
                    <span style={{ color: 'crimson', fontSize: '30px' }} className='mb-4'>{touched.username&&errors.username &&errors.username }</span>
                    <input
                        value={values.password}
                        onChange={handleChange}
                        className={`col-12 rounded p-3 `}
                        placeholder='Password'
                        type='password'
                        autoComplete='true'
                        name='password'
                        onBlur={handleBlur}
                    />
                    <span style={{ color: 'crimson', fontSize: '30px' }} className='col-12'>{touched.password&&errors.password && errors.password}</span>
                    <button type='submit' className='col-6 mx-auto button d-flex justify-content-center rounded mt-3'>Login</button>
                    <span onClick={()=>guestLogin()} style={{ color: 'white', fontSize: '30px', backgroundColor: "#00BFFF", cursor: "pointer" }} className='d-flex justify-content-center col-6 mx-auto rounded mt-3'>Login as Guest</span>
                </form>

            </div>
        </div>
    </motion.div>
)
}

export default Login