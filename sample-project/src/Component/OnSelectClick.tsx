import { MouseEvent, useState } from "react";
interface Props {
  heading: string;
  items: string[];
  onSelectItem: (item: string) => void;
}
function OnSelectClick({ heading, items, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [color, setColor] = useState("blue");
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items is found in the list</p>}​​​​​
      <ul className="list-group">
        {items.map((x, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            style={{ color: color }}
            onClick={(event) => {
              onSelectItem(x);
              setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
              setSelectedIndex(index);
            }}
          >
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}
export default OnSelectClick;
