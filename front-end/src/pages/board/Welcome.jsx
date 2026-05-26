import { BrowserRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Welcome.css'

const Welcome = () => {
    const navigate = useNavigate();
    return (
        
        <div className="container">
            <div className="speech">
                <p>
                    Welcome to the Workflow <br />application,<br />
                    developed by 17thedev.<br />
                    Do you have account?
                    <br />
                    <button onClick={() => navigate('/login')} className="login-btn">
                        <i className="ti-user"></i> Login or Register
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Welcome;