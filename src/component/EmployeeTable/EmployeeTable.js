import React from "react";

function EmployeeTable(props) {
  return (
    <tbody>
      <tr>
        <td>{props.id}</td>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
        <td>
          <img src={props.thumbnail}></img>
        </td>
      </tr>
    </tbody>
  );
}
export default EmployeeTable;
