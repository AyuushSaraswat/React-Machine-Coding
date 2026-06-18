import { useState } from "react";

export default function ProgressBar() {
  
  const [progress, setProgress] = useState(0);

  const increase = () => setProgress((p) => Math.min(p + 10, 100));
  const decrease = () => setProgress((p) => Math.max(p - 10, 0));

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      {/* Bar Style */}
      <div
        style={{
          width: 300,
          height: 20,
          border: "1px solid #000",
          borderRadius: 10,
          overflow: "hidden",
          margin: "10px auto",
        }}
      >
        {/* Fill bar */}
        <div
          style={{
            height: "100%",
            background: "green",
            transition: "width 0.3s",
            width: `${progress}%`,
          }}
        />
      </div>

      <p>{progress}%</p>

      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}
