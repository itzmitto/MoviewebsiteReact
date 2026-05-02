import '../styling/history.css';
import Sidebar from "./sidebar";
import Topbar from "./topbar";

function History() {
    return (
        <div className="layout">
            <Sidebar />
            <div className="vertical-divider" />

            <div className="main-page">
                <Topbar />

                <div className="rooster-page">
                    <h1>Watch history</h1>
                    <p>hier komen dan alle movies die je hebt bekeken in een rij te staan </p>
                </div>
            </div>
        </div>
    );
}

export default History;