import React from 'react'
import { BsFillBellFill } from 'react-icons/bs';

const Header = () => {
    return (
        <><div>
            <nav className="navbar bg-body-tertiary" style={{ minHeight: '5.2rem' }}>
                <div className="container-fluid">
                    <a className="navbar-brand  ms-3" href="#">COMPANY</a>
                    <div className='d-flex flex-nowrap'>

                        <button className="navbar-toggler order-1 order-lg-0 ms-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon">1</span>
                        </button>
                        <button className="navbar-toggler order-0 order-lg-0 ms-3" type="button" data-bs-target="#sidebar" data-bs-toggle="collapse">
                            <span className="navbar-toggler-icon">2</span>
                        </button>
                        <div>
                            <button className="btn btn-outline-success me-4" type="button"><BsFillBellFill/></button>
                            <button className="btn btn-outline-success" type="button">user</button>
                        </div>
                    </div>

                </div>
            </nav>
        </div></>
    )
}

export default Header