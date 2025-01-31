import '@styles/Error.css'
import { Link } from 'react-router-dom';

function DefaultError() {
    return (
        <>
        <div className="error-container">
            <h1 className="error">404 ERROR</h1>
            <p>The page that you enter doesn&apos;t exist or It is in maintanance, please wait or <Link to="/" className="link">click here</Link></p>
        </div>
        </>
    )
}

export default DefaultError;