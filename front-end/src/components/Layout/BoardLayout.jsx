import './BoardLayout.css';

import TopBar from '../TopBar';
import Sidebar from '../SideBar';

const BoardLayout = ({children}) => {
    return (
        <div className="board-layout">
            <TopBar />
            <Sidebar />
            {children}
        </div>
    )
}

export default BoardLayout;