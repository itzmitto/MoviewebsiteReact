function Topbar() {
  return (
    <div className="topbar">
      <input 
        type="text" 
        placeholder="Search everything..." 
        className="search"
      />
      <div className="profile">
        <span>🔔</span>
        <img 
          src="https://i.pravatar.cc/40" 
          alt="profile" 
        />
      </div>
    </div>
  );
}

export default Topbar;