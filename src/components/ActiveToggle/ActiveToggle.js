import { useState } from "react";
import "./ActiveToggle.css";

function ActiveToggle() {
  const [active, setActive] = useState(false);

  return (
    <main>
      <div className={`box ${active ? "box--active" : ""}`} />
      <button type="button" onClick={() => setActive(!active)}>
        {active ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}

export default ActiveToggle;