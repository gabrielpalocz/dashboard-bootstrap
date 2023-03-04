import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Card } from '../ui-components/card.js'
import { LoginValidationSchema } from '../forms/loginForm';
import { RiLoginCircleLine } from 'react-icons/ri';


// -------------------------------[ LOGIN VIEW ]------------------------------- //

/**
 * 
 * @returns Login view
 */

const LoginCopy = () => {
    const [credentials, setCreadentials] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (credentials) {
            const c = JSON.stringify(credentials, null, 2);
            localStorage.setItem('user', c);
            alert(c);
            navigate("/dashboard/default");
        }
    }, [credentials, navigate]);

    return (
        <Card>
            <h2 className="card-title fw-bold pt-3">
                <div className='d-flex justify-content-center '>
                    <RiLoginCircleLine className='fs-1 me-1' />
                    LOGIN
                </div>
            </h2>
            <h3 className='mt-5 fw-bold' style={{ color: '#6456ff' }}>Hello, Have a good day!</h3>
            <h6 className='mt-3 mb-4 text-muted'>Enter your credentials to continue.</h6>
            <LoginValidationSchema onSubmit={(e) => setCreadentials(e)} />
            <hr className=" border border-secondary-subtle opacity-50" />
            <Link to="/authentication/register" style={{ color: 'black', textDecoration: 'none' }}>Do not have an account?</Link>
        </Card>

    )
}

export default LoginCopy;