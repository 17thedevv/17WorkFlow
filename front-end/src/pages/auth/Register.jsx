import './Register.css';

import { useState } from 'react';

import AuthLayout from '../../components/Layout/AuthLayout';


const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };
    return (
        <AuthLayout>
        <div className="register">
           <form className="register-form" onSubmit={handleSubmit}>
                <h1>Register Here</h1>
                <input type="text"
                 placeholder="Enter your username" 
                 value={username} 
                 onChange={(e) => setUsername(e.target.value)} />

                <input type="email"
                 placeholder="Enter your email" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)} />

                <input type="password"
                 placeholder="Enter your password"
                  value={password}
                   onChange={(e) => setPassword(e.target.value)} />

                <input type="password"
                 placeholder="Confirm your password" 
                 value={confirmPassword} 
                 onChange={(e) => setConfirmPassword(e.target.value)} />

                <button type="submit">
                    Register
                </button>
            </form> 
        </div>
        </AuthLayout>
    )
}

export default Register;