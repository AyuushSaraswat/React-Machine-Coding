import React, { useState } from "react";

const Checkbox = () => {
  const [agree, setAgree] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        checked={agree}
        onChange={(e) => setAgree(e.target.checked)}
      />
      <p>Agreed: {agree ? "Yes" : "No"}</p>
    </div>
  );
};

export default Checkbox;

