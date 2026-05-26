import './TopBar.css'
import logo from '../assets/img/logo.jpg'


const TopBar = () => {
    return (
        <div className="top-bar">
            <img id="logo" src={logo} alt="Logo" />
            <ul className="top-items">
                
                <li className="items" id="notifications"><i className="ti-bell"></i></li>
                <li className="items" id="help"><i className="ti-help"></i></li>
                <li className="items" id="profile"><i className="ti-user"></i></li>
                <li className="items" id="settings"><i className="ti-settings"></i></li>
            </ul>
        </div>
    )
}

export default TopBar;