import './Profile.css'
import AuthLayout from '../../components/Layout/AuthLayout';


const Profile = () => {
    const user = {
        name: 'Johnny Joestar',
        username: 'jojo7',
        email: 'gyro@example.com',
        avatar: '/path/to/avatar.jpg',
        password: "gyro",
        phone: '123-456-7890',
    }
    return (
        <AuthLayout>
        <div className="profile">
            <div className="info">
                <div className="profile">
                    <img src={user.avatar} alt="Avatar" className="avatar" />
                </div>
                <div className="details">
                    
                </div>
            </div>
            <div className="change-password">

            </div>
        </div>
        </AuthLayout>
    )
}

export default Profile;