import React from 'react'
import sideBarItems from '../../layout/mainLayout/sidebar/sideBarItems/index'
import { NavLink } from "react-router-dom";

export const SideBarButtons = () => {

    // This styling will be applied to a <NavLink> when the
    // route that it links to is currently selected.
    let activeStyle = {
        textDecoration: "none",
        color: '#1070fd',
        backgroundColor: '#eef2f6',
        '--bs-btn-active-bg': ''
    };
    let activeClassName = "btn btn-bd-primary d-grid border-0 rounded-3 pt-2 fw-bolder my-2 ms-1";

    // This styling will be applied to a <NavLink> when the
    // route that it links to is currently not selected.
    let nonActiveStyle = {
        textDecoration: "none",
        '--bs-btn-bg': 'transparent',
        '--bs-btn-hover-bg': '#1070fd',
        '--bs-btn-color': '#6c757d',
        '--bs-btn-hover-color': 'white',
        '--bs-btn-active-bg': '#1070fd',
        '--bs-btn-active-color': 'white'
    };
    let nonActiveClassName = "btn btn-bd-primary d-grid border-0 rounded-3 pt-2 my-2 ms-1";

    return (
        <>
            {React.Children.toArray(
                sideBarItems.items.map((group, indexP) => <><h5 key={`h5--${indexP}`} >{group.title}</h5>
                    <div key={`divg--${indexP}`}>
                        {group.children?.map((links, indexH) => links.type === 'collapse' ?

                            <>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-bd-primary border-0 rounded-3 pt-2 my-2 ms-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" style={nonActiveStyle}>
                                        <div className='d-flex justify-content-start ms-1' key={`divl--${indexH}`}>
                                            <links.icon key={`icon--${indexH}`} />&nbsp;<span key={`span--${indexH}`}>{links.title}</span>
                                        </div>
                                    </button>
                                </div>

                                <div class="collapse" id="collapseExample">
                                    <div class="card card-body border-0">
                                        {links.children?.map((colap, indexC) =>

                                            <NavLink
                                                key={`colap--${indexC}`}
                                                className={({ isActive }) =>
                                                    isActive ? activeClassName : nonActiveClassName
                                                }
                                                to={colap.url}
                                                style={({ isActive }) =>
                                                    isActive ? activeStyle : nonActiveStyle
                                                }
                                            >
                                                <div className='d-flex justify-content-start ms-1' key={`divl--${indexC}`}>
                                                    <span key={`span--${indexC}`}>{colap.title}</span>
                                                </div>
                                            </NavLink>

                                        )}
                                    </div>
                                </div></>


                            :
                            <NavLink
                                key={`link--${indexH}`}
                                className={({ isActive }) =>
                                    isActive ? activeClassName : nonActiveClassName
                                }
                                to={links.url}
                                style={({ isActive }) =>
                                    isActive ? activeStyle : nonActiveStyle
                                }
                            >
                                <div className='d-flex justify-content-start ms-1' key={`divl--${indexH}`}>
                                    <links.icon key={`icon--${indexH}`} />&nbsp;<span key={`span--${indexH}`}>{links.title}</span>
                                </div>
                            </NavLink>)}
                    </div>
                    <hr key={`hr--${indexP}`} /></>)
            )}
        </>
    )
}
