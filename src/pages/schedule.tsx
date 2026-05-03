import '../styling/schedule.css'; 
import Sidebar from "./sidebar";
import Topbar from "./topbar";

function schedule() {
    return (
        <div className="layout">
            <Sidebar /> 
            <div className="vertical-divider" />

            <div className="main-page">
                <Topbar />

                <div className="rooster-page">
                    <h1>schedule pagina</h1>
                    <p>de schedule pagina  </p>
                </div>
            </div>
        </div>
    );
}

export default schedule;