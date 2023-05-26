import { useState } from "react";

function FavColor() {
  const [color, setColor] = useState("blue");
  return (
    <div style={{ color: color, backgroundColor: "aqua" }}>
      <b>Text color will chage on button click</b>
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
export default FavColor;
