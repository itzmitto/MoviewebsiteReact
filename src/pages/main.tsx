import '../styling/main.css';
import Sidebar from "./sidebar";
import Topbar from "./topbar";

function Main() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="vertical-divider" />

      <div className="main-page">
        <Topbar />
        <div className="rooster-page">

          <div className="gridContainer">
            <div className="card1">
              <h1>Hoofdfilm</h1>
            </div>

            <h2 style={{ color: 'white', marginBottom: '10px' }}>Trending Now</h2>

            <div className="cardsContainer">
              <div className="card2"><h1>eerste film</h1></div>
              <div className="card3"><h1>2de film</h1></div>
              <div className="card4"><h1>en de andren</h1></div>
              <div className="card5"><h1>en de andren</h1></div>
              <div className="card6"><h1>en de andren</h1></div>
              <div className="card7"><h1>en de andren</h1></div>
              <div className="card8"><h1>en de andren</h1></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;


