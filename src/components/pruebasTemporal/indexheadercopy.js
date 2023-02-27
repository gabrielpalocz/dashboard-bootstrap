import React, {useEffect, useState } from 'react'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { BsFillBellFill } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaUserCog } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import { IconMenu2 } from '@tabler/icons';



const Header = () => {
    const [width, setWidth]   = useState(window.innerWidth);
const [height, setHeight] = useState(window.innerHeight);
const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
}


useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
}, []);


    return (
        <><div>
            <ul className="nav justify-content-between align-content-center sticky-top " style={{ minHeight: '5.2rem', width: '100%', backgroundColor: 'white' }}>
                <li className="nav-item">
                    <div className='d-flex align-items-center ms-3' >
                        <BiWorld className='d-none d-md-block' style={{ 'font-size': '2.8rem' }} />
                        <h className='ms-2 d-none d-md-block' style={{ 'font-size': '2rem' }}>COMPANY</h>
                        <div className={'ms-5 d-none d-md-block'}  >
                            <button className="btn btn-outline-secondary btn-sm  rounded-3 " type="button" data-bs-target="#sidebar" data-bs-toggle="collapse">
                                <IconMenu2 />
                            </button>
                        </div>
                        <div className={'ms-2 d-block d-md-none'}  >
                            <button className="btn btn-outline-secondary btn-sm  rounded-3  " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                                <IconMenu2 />
                            </button>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <div >
                        <button className="btn btn-outline-primary rounded-3 me-4" type="button"><BsFillBellFill /></button>
                        <button className="btn btn-outline-primary rounded-3 me-4" type="button"><FaUserCog /></button>
                    </div>
                </li>
            </ul>
            {width}
            {height}
        </div></>
    )
}

export default Header