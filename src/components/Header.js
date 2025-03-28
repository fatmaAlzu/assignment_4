import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className = "header">
            <h1 className = "logo">LMS</h1>
            <nav>
                <ul className = "nav-links">
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to = "/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;