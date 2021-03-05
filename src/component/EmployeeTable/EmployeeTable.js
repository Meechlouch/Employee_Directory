import React from "react";

function EmployeeTable(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
      <td>
        <img src={props.thumbnail} alt="profile"></img>
      </td>
      <button onClick={() => props.removeEmployee(props.id)} className="btn btn-danger">
        Delete
      </button>
    </tr>
  );
}
export default EmployeeTable;
