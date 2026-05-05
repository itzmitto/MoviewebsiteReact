import '../styling/Favorieten.css'; 
import Sidebar from "./sidebar";
import Topbar from "./topbar";

function Favorieten() {
    return (
        <div className="layout">
            <Sidebar /> 
            <div className="vertical-divider" />

            <div className="main-page">
                <Topbar />

                <div className="rooster-page">
                    <h1>Favorieten</h1>
                    <p>de settings Favo rietenFavor ietenFavoriete nFavorieten </p>
                </div>
            </div>
        </div>
    );
}

export default Favorieten;