const ForgotPassword = () => {
    return (
        <div className="forgot-password">
            <h1>Forgot Password</h1>
            <form>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Reset Password</button>
                <p>Remembered your password? <a href="/login">Login here</a></p>
            </form>
        </div>
    )
}

export default ForgotPassword;