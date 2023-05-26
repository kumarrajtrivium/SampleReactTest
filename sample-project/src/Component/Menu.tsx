import { MouseEvent } from "react";

function Menu() {
  let array = ["Home", "Contact"];
  //array = [];
  const handleClick = (event: MouseEvent) => console.log({ event });
  return (
    <>
      <h1>Dynamic List</h1>
      {array.length === 0 && <p>No Menu</p>}
      <ul className="list-group">
        {array.map((x, index) => (
          <li className="list-group-item" key={x} onClick={handleClick}>
            <a href={x}>{x}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Menu;
