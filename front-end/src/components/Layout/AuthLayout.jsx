import './AuthLayout.css';

import Footer from '../Footer';


const AuthLayout = ({children}) => {
    return (
        <div className="auth-layout">
            <div className="logo">

            </div>
            {children}
            <Footer />
        </div>
    )
}

export default AuthLayout;