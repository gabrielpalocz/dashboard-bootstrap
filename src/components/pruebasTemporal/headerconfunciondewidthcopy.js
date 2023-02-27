import React from 'react'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { BiWorld } from 'react-icons/bi';
import { IconMenu2, IconBell, IconUserCircle, IconSettings } from '@tabler/icons';

const Header = () => {   

    return (
        <>
            <ul className="nav justify-content-between align-content-center sticky-top " style={{ minHeight: '5.2rem', width: '100%', backgroundColor: 'white' }}>
                <li className="nav-item">
                    <div className='d-flex align-items-center ms-3' >
                        <BiWorld className='d-none d-md-block' style={{ 'fontSize': '2.8rem' }} />
                        <span className='ms-2 d-none d-md-block' style={{ 'fontSize': '1.8rem' }}><strong>COMPANY</strong></span>
                        <div className={window.innerWidth >= 768 ? 'ms-5' : 'ms-2'} >
                            <button className="btn btn-outline-primary btn-sm border-0 rounded-3 mt-1" id='butons' type="button" data-bs-target={window.innerWidth >= 768 ? "#sidebar" : "#offcanvasNavbar"} data-bs-toggle={window.innerWidth >= 768 ? "collapse" : "offcanvas"} style={{ '--bs-btn-bg': '#eef2f6' }}>
                                <IconMenu2 />
                            </button>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <div className='d-flex'>
                        <div className="dropdown">
                            <button className="btn btn-outline-primary btn-sm border-0 rounded-3 me-4 mt-1" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ '--bs-btn-bg': '#eef2f6' }}>
                                <IconBell />
                            </button>
                            <ul className="dropdown-menu shadow-lg rounded-4 mt-2">
                                <li><h6 className="dropdown-header">Dropdown header</h6></li>
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-outline-primary btn-sm  border-0 rounded-4 me-4" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ '--bs-btn-bg': '#eef2f6' }}>
                                <div className='p-1'>
                                    <IconUserCircle />&nbsp;&nbsp;<IconSettings />
                                </div>
                            </button>
                            <ul className="dropdown-menu rounded-4 shadow-lg mt-2">
                                <li><h6 className="dropdown-header">Dropdown header</h6></li>
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Header