import { useEffect, useState } from "react";
import EmployeeList from "./EmployeeList";

const DropDownList = () => {
  const [category, setCatagorey] = useState("");
  //   useEffect(() => {
  //     console.log("Read data from Api");
  //   }, []);
  return (
    <div>
      <select
        className="product select"
        onChange={(e) => setCatagorey(e.target.value)}
      >
        <option value=""></option>
        <option value="Kumar">Kumar</option>
        <option value="Raj">Raj</option>
        <option value="Ranjan">Ranjan</option>
      </select>
      <EmployeeList category={category}></EmployeeList>
    </div>
  );
};
export default DropDownList;
