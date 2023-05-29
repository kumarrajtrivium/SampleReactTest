import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
const Employee = () => {
  const navigate = useNavigate();
  const goDetails = () => {
    navigate("/details/e001");
  };
  let employess = [
    {
      code: "e001",
      name: "Tom",
      gender: "Male",
      anualSalary: 5500,
      dateofBirth: "25/6/1988",
    },
    {
      code: "e002",
      name: "Sam",
      gender: "Male",
      anualSalary: 6700,
      dateofBirth: "25/11/1980",
    },
    {
      code: "e003",
      name: "Ravi",
      gender: "Male",
      anualSalary: 8900,
      dateofBirth: "27/11/1980",
    },
    {
      code: "e001",
      name: "Kaveri",
      gender: "Female",
      anualSalary: 9000,
      dateofBirth: "9/6/1991",
    },
  ];

  return (
    <>
      <tbody>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Salry</th>
          <th>DOB</th>
        </tr>
        {employess.map((item, index) => (
          <tr key={index}>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.gender}</td>
            <td>{item.anualSalary}</td>
            <td>{item.dateofBirth}</td>
            <td>
              <button onClick={goDetails}>Details</button>
            </td>
          </tr>
        ))}
      </tbody>
      <button onClick={() => navigate("/user/")}> Add User</button>
    </>
  );
};

export default Employee;
