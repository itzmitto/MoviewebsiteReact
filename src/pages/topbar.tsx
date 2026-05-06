import '../styling/topbar.css'

function Topbar() {
    return (
        <div className="topbar">
            <input
                type="text"
                placeholder="Search everything..."
                className="search"
            />
            <div className="profile">
                
            </div>
        </div>
    );
}

export default Topbar;