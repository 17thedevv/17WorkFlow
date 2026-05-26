import './Login.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username, password });
    }
    return (
        <div className="login">      
            <form onSubmit={handleSubmit}>
                <h1>Login Here</h1>
                <input type="text" 
                placeholder="Username" 
                value={username}
                 onChange={(e) => setUsername(e.target.value)}/>

                <input type="password"
                 placeholder="Password"
                  value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   />

                <Link to="/forgot-password" className="link">
                Forgot Password?
                </Link>

                <button type="submit">
                    Login
                </button>

                <Link to="/register" className="link">
                Don't have an account?
                Register here
                </Link>
            </form>
        </div>
    )
}

export default Login;