import './ForgotPassword.css';

import AuthLayout from '../../components/Layout/AuthLayout';


const ForgotPassword = () => {
    return (
        <AuthLayout>
        <div className="forgot-password">
            <form>
                <h1>Forgot Password</h1>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Reset Password</button>
                <p className="login-link">Remembered your password? <a href="/login">Login here</a></p>
            </form>
        </div>
        </AuthLayout>
    )
}

export default ForgotPassword;