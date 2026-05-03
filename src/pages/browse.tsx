import '../styling/browse.css'  
import { useState } from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

function Browse() {
    const [search, setSearch] = useState("");
    const [genre, setGenre] = useState("");
    const [format, setFormat] = useState("");
    const [year, setYear] = useState("");
    const [sort, setSort] = useState("popularity");
    const [season, setSeason] = useState("");
    const [airingStatus, setAiringStatus] = useState("");
    const [tag, setTag] = useState("");
    const [country, setCountry] = useState(""); 
    const [source, setSource] = useState("");

    return (
        <div className="layout">
            <Sidebar />
            <div className="vertical-divider" />

            <div className="main-page">
                <Topbar />

                <div className="rooster-page">
                    <div className="Browse">
                        <h1>dit is de browser pagina</h1>
                    </div>

                    <div>
                        {/* hier is de eerste rij */}
                        <div>
                            <input
                                type="text"
                                placeholder="Search anime..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                                <option value="">Any</option>
                                <option value="action">Action</option>
                                <option value="adventure">Adventure</option>
                                <option value="comedy">Comedy</option>
                                <option value="drama">Drama</option>
                                <option value="fantasy">Fantasy</option>
                                <option value="horror">Horror</option>
                                <option value="mecha">Mecha</option>
                                <option value="mystery">Mystery</option>
                                <option value="romance">Romance</option>
                                <option value="sci-fi">Sci-Fi</option>
                                <option value="slice-of-life">Slice of Life</option>
                                <option value="sports">Sports</option>
                                <option value="supernatural">Supernatural</option>
                                <option value="thriller">Thriller</option>
                            </select>

                            <select value={format} onChange={(e) => setFormat(e.target.value)}>
                                <option value="">Any</option>
                                <option value="tv">TV</option>
                                <option value="tv_short">TV Short</option>
                                <option value="movie">Movie</option>
                                <option value="special">Special</option>
                                <option value="ova">OVA</option>
                                <option value="ona">ONA</option>
                                <option value="music">Music</option>
                            </select>

                            <select value={year} onChange={(e) => setYear(e.target.value)}>
                                <option value="">Any</option>
                                {Array.from({ length: 35 }, (_, i) => 2025 - i).map((y) => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>

                            <select value={sort} onChange={(e) => setSort(e.target.value)}>
                                <option value="popularity">Popularity</option>
                                <option value="score">Score</option>
                                <option value="trending">Trending</option>
                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>
                                <option value="title_asc">Title (A-Z)</option>
                            </select>
                        </div>

                        {/* hier is de 2de rij */}
                        <div>
                            <select value={season} onChange={(e) => setSeason(e.target.value)}>
                                <option value="">Any</option>
                                <option value="winter">Winter</option>
                                <option value="spring">Spring</option>
                                <option value="summer">Summer</option>
                                <option value="fall">Fall</option>
                            </select>

                            <select value={airingStatus} onChange={(e) => setAiringStatus(e.target.value)}>
                                <option value="">Any</option>
                                <option value="finished">Finished Airing</option>
                                <option value="airing">Currently Airing</option>
                                <option value="not_aired">Not Yet Aired</option>
                                <option value="cancelled">Cancelled</option>
                                <option value="hiatus">On Hiatus</option>
                            </select>

                            <select value={tag} onChange={(e) => setTag(e.target.value)}>
                                <option value="">Any</option>
                                <option value="isekai">Isekai</option>
                                <option value="harem">Harem</option>
                                <option value="shounen">Shounen</option>
                                <option value="shoujo">Shoujo</option>
                                <option value="seinen">Seinen</option>
                                <option value="josei">Josei</option>
                                <option value="school">School</option>
                                <option value="military">Military</option>
                                <option value="magic">Magic</option>
                            </select>

                            <select value={country} onChange={(e) => setCountry(e.target.value)}>
                                <option value="">Any</option>
                                <option value="JP">Japan</option>
                                <option value="CN">China</option>
                                <option value="KR">South Korea</option>
                                <option value="TW">Taiwan</option>
                            </select>

                            <select value={source} onChange={(e) => setSource(e.target.value)}>
                                <option value="">Any</option>
                                <option value="original">Original</option>
                                <option value="manga">Manga</option>
                                <option value="light_novel">Light Novel</option>
                                <option value="novel">Novel</option>
                                <option value="visual_novel">Visual Novel</option>
                                <option value="video_game">Video Game</option>
                                <option value="web_novel">Web Novel</option>
                                <option value="live_action">Live Action</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Browse;