function Sidebar() {
    return (
        <div className="sidebar">
            <h2 className="logo">MoonMovieTv</h2>

            <hr className="divider" />

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