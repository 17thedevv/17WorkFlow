import './TopBar.css'
import logo from '../assets/img/logo.jpg'


const TopBar = () => {
    return (
        <div className="top-bar">
            <img id="logo" src={logo} alt="Logo" />
            <ul className="top-items">
                
                <li className="items" id="notifications">notifications</li>
                <li className="items" id="help">help</li>
                <li className="items" id="profile">profile</li>
                <li className="items" id="settings">settings</li>
            </ul>
        </div>
    )
}

export default TopBar;