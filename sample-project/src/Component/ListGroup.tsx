import { MouseEvent } from "react";

function ListGroup() {
  let array = ["Kolkata", "Ranchi", "Mangalore", "Delhi", "Bangalore"];
  //array = [];
  const handleClick = (event: MouseEvent) => console.log({ event });
  return (
    <>
      <h1>Dynamic List</h1>
      {array.length === 0 && <p>No Item found in the list</p>}
      <ul className="list-group">
        {array.map((x, index) => (
          <li className="list-group-item" key={x} onClick={handleClick}>
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
