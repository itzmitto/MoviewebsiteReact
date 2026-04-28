import '../styling/sidebar.css'

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
                    <li>Populaire films</li>
                    <li>Genres</li>
                    <li>Trending</li>
                    <li>Playlist</li>
                    <li>Favorieten</li>
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