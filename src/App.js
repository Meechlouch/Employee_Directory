import React from "react";
import { useState, useEffect } from "react";
import EmployeeTable from "./component/EmployeeTable/EmployeeTable.js";
import "bootstrap/dist/css/bootstrap.min.css";
import TableHeader from "./component/TableHeader/TableHeader.js";
import SearchForm from "./component/SearchForm/SearchForm.js";
import API from "./utils/API";

function App() {
  const [employees, setEmployees] = useState([]);
  // const [removed, removeEmployee] = useState(employees);
  // const [sortId, sortById] = useState(employees);
  // const [sortName, sortByName] = useState(employees);

  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.getEmployees()
      .then((employees) => {
        console.log(employees);
        setEmployees(employees);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // removeEmployee(id) {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   return employees.filter((employee) => employee.id !== id);
  // }

  // function sortByName() {
  //   return employees.sort((a, b) => (a.name > b.name ? 1 : -1));
  // }

  // function sortById() {
  //   return employees.sort((a, b) => (a.id > b.id ? 1 : -1));
  // }

  return (
    <div className="container">
      <h1>Employee Directory</h1>
      <SearchForm />
      {/* <button onClick={() => props.sortByName()} className="btn btn-warning">
        SortNames
      </button>
      <button onClick={() => props.sortById()} className="btn btn-success">
        SortId
      </button> */}
      <table className="table table-striped">
        <TableHeader />
        {employees.map((employee) => (
          <EmployeeTable
            id={employee.id}
            firstName={employee.firstName}
            lastName={employee.lastName}
            email={employee.email}
            thumbnail={employee.picture}
          />
        ))}
      </table>
    </div>
  );
}

export default App;
