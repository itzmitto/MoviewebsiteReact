import '../styling/schedule.css'; 
import Sidebar from "./sidebar";
import Topbar from "./topbar";

function Schedule() {
    return (
        <div className="layout">
            <Sidebar />  
            <div className="vertical-divider" />

            <div className="main-page">
                <Topbar />

                <div className="schedule-page">
                    <h1>schedule pagina</h1>
                    <p>de schedule pagina  </p>
                </div>
            </div>
        </div>
    );
}

export default Schedule;