import React from "react";

function EmployeeTable(props) {
  return (
    <tbody>
      <tr>
        <td>{props.name}</td>
        <td>{props.position}</td>
        <td>{props.salary}</td>
        <td>{props.department}</td>
        <button onClick={() => props.sortByName()} className="btn btn-warning">
          SortNames
        </button>
        <button onClick={() => props.removeEmployee(props.id)} className="btn btn-danger">
          Delete
        </button>
      </tr>
    </tbody>
  );
}
export default EmployeeTable;
