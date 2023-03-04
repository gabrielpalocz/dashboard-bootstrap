import React from 'react'
import sideBarItems from '../sideBarItems/index'
import SideBarLink from './sideBarLinks';
import SideBarCollapse from './sideBarCollapse';


// ----------------------------------[ SIDEBAR MENU BUTTONS ]------------------------------- //

/**
 * 
 * @returns the sidebar menu buttons  
 */

export const SideBarButtons = () => {

    return (
        <>
            {React.Children.toArray(
                sideBarItems.items.map((group, indexP) => <><h5 key={`h5--${indexP}`} >{group.title}</h5>
                    <div key={`divg--${indexP}`}>
                        {group.children?.map((item, indexH) => {
                            switch (item.type) {
                                case 'collapse':
                                    return <SideBarCollapse keyCol={indexH} collapse={item} key={`ItemCol--${indexH}`} />;
                                default:
                                    return <SideBarLink keyIt={`Item--${indexH}`} items={item} key={`ItemH--${indexH}`} />;
                            }
                        })}
                    </div>
                    <hr key={`hr--${indexP}`} /></>)
            )}
        </>
    )
}
