import './SideBar.css';
import { Link } from 'react-router-dom';


const SideBar = () => {
    return (
        <div id="sidebar">
            <ul className="side-items">
                <li id="home"><Link to="/dashboard"><i className="ti-home"></i> Home</Link></li>
                <li id="history"> <Link to="/history"><i className="ti-time"></i> History</Link></li>
                <li id="spaces"> <Link to="/spaces"><i className="ti-layout"></i> Spaces</Link></li>  
            </ul>
        </div>
    )
}

export default SideBar;
