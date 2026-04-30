import '../styling/main.css'
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

            <div className="cardsContainer">
              <div className="card1">
                <h1>1</h1>
              </div>

              <div className="card2">
                <h1>2</h1>
              </div>

              <div className="card3">
                <h1>3</h1>
              </div>

              <div className="card4">
                <h1>4</h1>
              </div>

              <div className="card5">
                <h1>5</h1>
              </div>

              <div className="card6">
                <h1>6</h1>
              </div>

              <div className="card7">
                <h1>7</h1>
              </div>

              <div className="card8">
                <h1>8</h1>
              </div>

              <div className="card9">
                <h1>9</h1>
              </div>

              <div className="card10">
                <h1>10</h1>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;






