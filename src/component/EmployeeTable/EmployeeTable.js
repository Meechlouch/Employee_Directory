import React from "react";

function EmployeeTable(props) {
  return (
    <tbody>
      <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.position}</td>
        <td>{props.salary}</td>
        <td>{props.department}</td>
        <button onClick={() => props.sortByName()} className="btn btn-warning">
          SortNames
        </button>
        <button onClick={() => props.sortById()} className="btn btn-success">
          SortId
        </button>
      </tr>
    </tbody>
  );
}
export default EmployeeTable;
