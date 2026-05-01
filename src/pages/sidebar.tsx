import '../styling/sidebar.css'
import { Link } from 'react-router-dom'  // ← toevoegen

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
                <div className="logo-wrapper">
                    <div className="logo-icon">M</div>
                    <div>
                        <div className="logo-text">MoonMovieTv</div>
                        <div className="logo-sub">Platform</div>
                    </div>
                </div> 
            </div>

            <nav>
                <ul>
                    <li>Home</li>
                    <li><Link to="/browse">Browse Movies</Link></li> 
                    <li>Random</li>  
                    <li>Schedule</li>
                    <li>Favorieten</li>
                    <li>Playlist</li>
                </ul>
                <ul className="nav-bottom">
                    <li>History</li>
                    <li>Settings</li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;