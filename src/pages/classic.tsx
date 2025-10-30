import { useState } from "react";

export default function Classic() {
  const [isActive, setIsActive] = useState(false);

  console.log(isActive);

  return (
    <div>
        {isActive ? <h1>Classic WEINER</h1> : <h1>A MEGA WEINER</h1>}
        <button onClick={() => setIsActive(!isActive)}>boop</button>
    </div>
  );
}