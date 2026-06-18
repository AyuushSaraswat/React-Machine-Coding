import React, { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const sidebarStyle = {
    height: "100vh",
    background: "#111",
    color: "#fff",
    overflow: "hidden",
    transition: "0.3s",
    position: "relative",
    width: open ? "200px" : "0px",
    padding: open ? "20px" : "0px",
  };

  const liStyle = {
    margin: "10px 0",
    cursor: "pointer",
  };

  return (
    <div style={{ display: "flex" }}>

      {/* Sidebar */}
      <div style={sidebarStyle}>
        
        {open && (
          <span
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: "10px",
              right: "15px",
              cursor: "pointer",
            }}
          >
            ❌
          </span>
        )}

        <h2 style={{ marginBottom: "20px" }}>MyApp</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {["Home", "Profile", "Settings", "Logout"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

      </div>

      {/* Main */}
      <div style={{ flex: 1, padding: "20px" }}>
        {!open && (
          <button
            onClick={() => setOpen(true)}
            style={{ fontSize: "20px", cursor: "pointer" }}
          >
            ☰
          </button>
        )}
        <h1>Main Content</h1>
      </div>

    </div>
  );
}




