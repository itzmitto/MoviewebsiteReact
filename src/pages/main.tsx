import '../styling/main.css'
import Sidebar from "./sidebar";
import Topbar from "./topbar";

function Main() {
  return (
    <div className="layout">
      <Sidebar /> 

      <div className="main-page">
        <Topbar />

        <div className="content">
          <h1>Dit is het begin</h1>
          <p>Welkom op je mijn school dashboard</p>
        </div>
      </div>
    </div>
  )
}

export default Main;