import '../styling/random.css'; 
import Sidebar from "./sidebar";
import Topbar from "./topbar";

function Random() {
    return (
        <div className="layout">
            <Sidebar />   
            <div className="vertical-divider" />

            <div className="main-page">
                <Topbar />

                <div className="rooster-page">
                    <h1>randomm painga</h1>
                    <p>hier dan met de database mongodB een random movie dat er in het scherm komt in een card ofzo later bedenknen </p>
                </div>
            </div>
        </div>
    );
}

export default Random;