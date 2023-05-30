import React, { useEffect, useState } from "react";
interface Props {
  category: string;
}
const EmployeeList = ({ category }: Props) => {
  useEffect(() => {
    console.log("Read data from API " + category);
  }, [category]);
  return (
    <div>
      <p>Employee List {category}</p>
    </div>
  );
};
export default EmployeeList;
