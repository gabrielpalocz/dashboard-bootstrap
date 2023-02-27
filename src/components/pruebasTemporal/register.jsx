import React from 'react'
import { Link } from "react-router-dom";
import { RegisterValidationSchema } from './registerForm';
import { BsPencilSquare } from 'react-icons/bs';

const Register = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ minWidth: "14rem", minHeight: '100vh', backgroundColor: '#ddedff' }}>
            <div className="card rounded-4 text-center" style={{ width: "24rem", minHeight: '14rem' }}>
                <div className="card-body">
                    <div className='d-flex justify-content-center pt-3'>
                        <BsPencilSquare className='fs-1 me-2' />
                        <h2 className="card-title fw-bold">REGISTER</h2>
                    </div>
                    <h3 className='mt-5 fw-bold' style={{ color: '#6456ff' }}>Hello, please fill in!</h3>
                    <h6 className='mt-3 mb-4 text-muted'>Enter your credentials to continue.</h6>
                    <RegisterValidationSchema />
                    <hr className=" border border-secondary-subtle opacity-50" />
                    <Link to="/login" style={{ color: 'black', textDecoration: 'none' }}>Already have an account?</Link>
                </div>
            </div>
            <div className="modal fade" id="registerFormModal" aria-labelledby="registerFormModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="registerFormModalLabel">Terms & Condition</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;