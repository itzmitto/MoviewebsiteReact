import '../styling/playlist.css'; 
import Sidebar from "./sidebar";
import Topbar from "./topbar";

function Playlist() {
    return (
        <div className="layout">
            <Sidebar /> 
            <div className="vertical-divider" />

            <div className="main-page">
                <Topbar />

                <div className="rooster-page">
                    <h1>Playlist</h1>
                    <p>de settings Playlist </p>
                </div>
            </div>
        </div>
    );
}

export default Playlist;