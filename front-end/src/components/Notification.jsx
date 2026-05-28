import './Notification.css';

const Notification = () => {
    const notifications = [
        { id: 1, message: 'You have a new message from John.' },
        { id: 2, message: 'Your profile has been updated successfully.' },
        { id: 3, message: 'New comment on your post.' },
    ];
    return (
        <div className="notification">
            <h2>Notifications</h2>
            <ul className="notification-list">
            {
                notifications.map((item) => (
                    <li key={item.id}>{item.message}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default Notification;