import './SideBar.css';

const SideBar = () => {
    return (
        <div id="sidebar">
            <ul className="side-items">
                <li id="history"><i className="ti-time"></i> History</li>
                <li id="spaces"><i className="ti-layout"></i> Spaces</li>
            </ul>
        </div>
    )
}

export default SideBar;
