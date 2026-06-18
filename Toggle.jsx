import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <button onClick={()=>setToggle(!toggle)}>
       {toggle?"Hide":"Show"}Para
     </button>
     {toggle && <h1>"This a a toggleable Paragraph"</h1>}
    </div>
  );
};

export default Toggle;
