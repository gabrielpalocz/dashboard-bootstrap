import React from 'react'
import { NavLink } from "react-router-dom";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import sideBarItems from '../../layout/mainLayout/sidebar/sideBarItems/index'


const Sidebar = () => {

    // This styling will be applied to a <NavLink> when the
    // route that it links to is currently selected.
    let activeStyle = {
        textDecoration: "none",
        color: 'white',
        backgroundColor: 'black'
    };
    let activeClassName = "btn btn-bd-primary d-grid border-0 rounded-3 pt-2 ";

    // This styling will be applied to a <NavLink> when the
    // route that it links to is currently not selected.
    let nonActiveStyle = {
        textDecoration: "none",
        '--bs-btn-bg': 'transparent',
        '--bs-btn-hover-bg': 'black',
        '--bs-btn-active-bg': 'black',
        '--bs-btn-color': 'black',
        '--bs-btn-hover-color': 'white'
    };  
    let nonActiveClassName = "btn btn-bd-primary d-grid border-0 rounded-3 pt-2 ";

    return (
        <>
            <div className="col-auto px-0 d-none d-md-block ">
                <div id="sidebar" className="collapse collapse-horizontal show border-none  " >
                    <div id="sidebar-nav" className="border-0 rounded-0 text-sm-start overflow-auto " style={{ minWidth: '14rem', minHeight: 'calc(100vh - 6.4rem)', maxHeight: 'calc(100vh - 6.4rem)' }}>
                        <nav className='d-grid gap-2 py-4 pe-4'>
                            {
                                sideBarItems.items.map((e) => <><h5>{e.title}</h5>
                                    <div>
                                        {e.children?.map(links => <NavLink
                                            className={({ isActive }) =>
                                                isActive ? activeClassName : nonActiveClassName
                                            }
                                            to={links.url}
                                            style={({ isActive }) =>
                                                isActive ? activeStyle : nonActiveStyle
                                            }
                                        >
                                            <div className='d-flex justify-content-start ms-2'><links.icon />&nbsp;<h6>{links.title}</h6></div>
                                        </NavLink>)}
                                    </div>
                                    <hr /></>)
                            }
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sidebar
