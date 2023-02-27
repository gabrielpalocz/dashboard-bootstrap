import React, {useState} from 'react'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import useWindowDimensions from '../../../utils/hook/screenSize'
import { BsFillBellFill } from 'react-icons/bs';
import { FaUserCog } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import { IconMenu2, IconLayoutSidebarLeftExpand, IconLayoutSidebarLeftCollapse } from '@tabler/icons';



const Header = () => {
    const { width } = useWindowDimensions()
    const [isOpen, setIsOpen ] = useState(false);

    return (
        <>
            <ul className="nav justify-content-between align-content-center sticky-top " style={{ minHeight: '5.2rem', width: '100%', backgroundColor: 'white' }}>
                <li className="nav-item">
                    <div className='d-flex align-items-center ms-3' >
                        <BiWorld className='d-none d-md-block' style={{ 'font-size': '2.8rem' }} />
                        <h className='ms-2 d-none d-md-block' style={{ 'font-size': '1.8rem' }}><strong>COMPANY</strong></h>
                        <div className={width >= 768 ? 'ms-5' : 'ms-2'} >
                            <button className="btn btn-outline-secondary btn-sm border-0 rounded-3 " id='butons' type="button" onClick={() => width >= 768 ? setIsOpen(!isOpen) : null} data-bs-target={width >= 768 ? "#sidebar" : "#offcanvasNavbar"} data-bs-toggle={width >= 768 ? "collapse" : "offcanvas"} style={{'--bs-btn-bg': '#eef2f6'}}>
                            {
                                width >= 768 ? isOpen ?  <IconLayoutSidebarLeftExpand style={{ width: '40px', height: '40px' }}/> : <IconLayoutSidebarLeftCollapse style={{ width: '40px', height: '40px' }}/> : <IconLayoutSidebarLeftExpand style={{ width: '40px', height: '40px' }}/>
                            }                           
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
        </>
    )
}

export default Header