import './TopBar.css'
import logo from '../assets/img/logo.jpg'

import { Link } from 'react-router-dom';
import { useState } from 'react';

import Notification from './Notification';
import Help from './Help';
import Setting from './Setting';

const TopBar = () => {
    const [activePanel, setActivePanel] = useState(null);
    const togglePanel = (name) => {
        setActivePanel(activePanel === name ? null : name);
    }

    return (
        <div className="top-bar">
            <img id="logo" src={logo} alt="Logo" />
            <ul className="top-items">
                
                <li className="items"
                id="notifications"
                onClick={() => togglePanel('notifications')}
                ><i className="ti-bell"></i>
                <span className="pop">Notifications</span>
                </li>
                <li className="items" id="help" onClick={() => togglePanel('help')}><i className="ti-help"></i>
                <span className="pop">Help</span>
                </li>
                <li className="items" 
                id="profile"
                ><Link to="/profile"><i className="ti-user"></i></Link>
                <span className="pop">Profile</span>
                </li>
                <li className="items"
                 id="settings" 
                 onClick={() => togglePanel('settings')}>
                    <i className="ti-settings"></i>
                <span className="pop">Settings</span>
                </li>
            </ul>
            {activePanel === 'notifications' && <Notification />}
            {activePanel === 'help' && <Help />}
            {activePanel === 'settings' && <Setting />}
        </div>
    )
}

export default TopBar;