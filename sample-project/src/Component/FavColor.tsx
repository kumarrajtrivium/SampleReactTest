import { useState } from "react";

function FacColor() {
  const [color, setColor] = useState("blue");
  return (
    <div style={{ color: color, backgroundColor: "Red" }}>
      Text color will chage on button click
      <button
        onClick={() =>
          setColor("#" + Math.floor(Math.random() * 16777215).toString(16))
        }
      >
        Change Color
      </button>
    </div>
  );
}
export default FacColor;
