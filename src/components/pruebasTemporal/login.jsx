import React from 'react'
import { Link } from "react-router-dom";
import { LoginValidationSchema } from './loginForm';
import { RiLoginCircleLine } from 'react-icons/ri';

const Login = () => {

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ minWidth: "14rem", minHeight: '100vh', backgroundColor: '#ddedff' }}>
            <div className="card rounded-4 text-center" style={{ width: "24rem", minHeight: '14rem' }}>
                <div className="card-body" >
                    <div className='d-flex justify-content-center pt-3'>
                        <RiLoginCircleLine className='fs-1 me-1' />
                        <h2 className="card-title fw-bold">LOGIN</h2>
                    </div>
                    <h3 className='mt-5 fw-bold' style={{ color: '#6456ff' }}>Hello, Have a good day!</h3>
                    <h6 className='mt-3 mb-4 text-muted'>Enter your credentials to continue.</h6>
                    <LoginValidationSchema />
                    <hr className=" border border-secondary-subtle opacity-50" />
                    <Link to="/register" style={{ color: 'black', textDecoration: 'none' }}>Do not have an account?</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;