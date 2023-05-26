import { MouseEvent, useState } from "react";

function ListGroup() {
  let array = ["Kolkata", "Ranchi", "Mangalore", "Delhi", "Bangalore"];
  //array = [];
  const [activeIndex, setActiveIndex] = useState(-1);
  const [color, setColor] = useState("blue");

  const wrapperFunction = (event: MouseEvent, index: number) => {
    console.log(event);
    setActiveIndex(index);
    setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
  };
  return (
    <>
      <h1>Dynamic List</h1>
      {array.length === 0 && <p>No Item found in the list</p>}
      <ul className="list-group">
        {array.map((x, index) => (
          <li
            className={`list-group-item ${
              index === activeIndex ? "active" : ""
            }`}
            style={{ color: color }}
            key={x}
            onClick={(event) => wrapperFunction(event, index)}
          >
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
