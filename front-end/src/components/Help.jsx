import './Help.css'

const Help = () => {
    return (
        <div className="help">
            <div className="header">
                <h2 class = "help-title">Help</h2>
            </div>

            <div className="content">
                <a href="">Report Issue</a>
                <a href="">About 17thedev</a>
            </div>

            <div className="help-footer">
                <p>Terms of use | Privacy Policy</p>
            </div>
        </div>
    )
}

export default Help;