import React from 'react'
import { IconUserCircle, IconSettings, IconLogout, IconMoon } from '@tabler/icons';

const UserSettings = () => {
    return (
        <div className="dropdown" >
            <button className="btn btn-outline-primary btn-sm  border-0 rounded-4 me-4" type="button" data-bs-toggle="dropdown" title="Configuraciones" aria-expanded="false" style={{ '--bs-btn-bg': '#eef2f6' }}>
                <div className='p-1' >
                    <IconUserCircle />&nbsp;&nbsp;<IconSettings />
                </div>
            </button>
            <ul className="dropdown-menu rounded-4 shadow mt-2">
                <li><h6 className="dropdown-header">User Settings</h6></li>
                <li>
                    <span className="dropdown-item-text" type="button">
                        <div className="form-check form-switch form-check-reverse">
                            <label className="form-check-label" htmlFor="darkModeSwitch"><IconMoon />&nbsp;&nbsp;Dark Mode</label>
                            <input className="form-check-input shadow-none" type="checkbox" id="darkModeSwitch" />
                        </div>
                    </span>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item" type="button"><IconSettings />&nbsp;&nbsp;Account Settings</button></li>
                <li><button className="dropdown-item" type="button">&nbsp;<IconLogout />&nbsp;&nbsp;Logout</button></li>
            </ul>
        </div>
    )
}

export default UserSettings