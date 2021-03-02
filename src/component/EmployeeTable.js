import React from "react";

function EmployeeTable(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Department</th>
        </tr>
      </thead>
      {props.name.map((item) => {
        return (
          <tbody>
            <tr>
              <td>{item.name}</td>
              <td>{item.position}</td>
              <td>{item.department}</td>
              <td>{item.salary}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
export default EmployeeTable;
