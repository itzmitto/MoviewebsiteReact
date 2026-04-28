import '../styling/sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
                <div className="logo-icon">M</div>
                <div>
                    <div className="logo-text">MoonMovieTv</div>
                    <div className="logo-sub">Platform</div>
                </div>
            </div>

            <hr className="sidebar-divider" />

            <nav>
                <ul>
                    <li>Home</li>
                    <li>Populaire films</li>
                    <li>Genres</li>
                    <li>Trending</li>
                    <li>Playlist</li>
                    <li>Favorieten</li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;