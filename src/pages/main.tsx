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

          {/* hier is 1ste rij */}

          <div className="gridContainer">
            <div className="card1">
              <h1>Hoofdfilm</h1>
            </div>

            {/* hier is de 2de rij */}

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
          {/* hier is de 3de rij */}
          <div className="anime-section">
            <div className="anime-tabs">
              <button className="anime-tab active">This Season</button>
              <button className="anime-tab">All Time Popular</button>
              <button className="anime-tab">Top Rated</button>
            </div>
 <div className="anime-browse-layout">
              <div className="anime-grid">
                {[...Array(14)].map((_, i) => (
                  <div className="anime-card" key={i}>
                    <div className="anime-thumb">
                      <span className="anime-rating">⭐ 8.{i % 9}</span>
                    </div>
                    <div className="anime-meta">
                      <span className="anime-type">TV Show</span>
                      <span className="anime-year">2026</span>
                    </div>
                    <div className="anime-dot-title">
                      <span className="anime-dot"></span>
                      <span className="anime-title">Anime Titel {i + 1}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="anime-sidebar-right">
                <div className="recent-comments">
                  <h3>Recent Comments</h3>
                  {[
                    { show: "Naruto", comment: "lorem ", user: "light_", time: "27m ago" },
                    { show: "Witch Hat Atelier",comment: "lorem", user: "zorosenpai", time: "33m ago" },
                    { show: "Mob Psycho 100 II",  comment: "lorem", user: "aquinas", time: "33m ago" },
                    { show: "Kuroko's Basketball",comment: "lorem", user: "shayskiehere1", time: "34m ago" },
                  ].map((c, i) => (
                    <div className="comment-card" key={i}>
                      <div className="comment-header">
                        <span className="comment-show">{c.show}</span>
                     
    </div>
           



  );
}

export default Main;

