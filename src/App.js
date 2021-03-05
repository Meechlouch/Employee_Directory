import React from "react";
import { useState, useEffect } from "react";
import EmployeeTable from "./component/EmployeeTable/EmployeeTable.js";
import "bootstrap/dist/css/bootstrap.min.css";
import TableHeader from "./component/TableHeader/TableHeader.js";
import SearchForm from "./component/SearchForm/SearchForm.js";
import API from "./utils/API";

function App() {
  const [employees, setEmployees] = useState([]);
  const [filter, setFilter] = useState([]);
  // const [s, setSortName] = useState([]);
  // const [, setById] = useState([]);
  const [removeEmp, setRemoveEmp] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.getEmployees()
      .then((allEmployees) => {
        setEmployees(allEmployees);
        setFilter(allEmployees);
        setRemoveEmp(allEmployees);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const removeEmployee = (id) => {
    console.log(`This is the ${id}`);
    console.log(employees.filter((employee) => employee.id !== id));
    const empRemoved = employees.filter((employee) => employee.id !== id);
    setRemoveEmp(empRemoved);
  };

  const sortNames = () => {
    let tempEmp = [...filter];
    tempEmp.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
    console.log(tempEmp);
    setFilter(tempEmp);
  };

  const sortById = () => {
    let tempIds = [...filter];
    tempIds.sort((a, b) => (a.id > b.id ? 1 : -1));
    console.log(tempIds);
    setFilter(tempIds);
  };

  return (
    <div className="container">
      <h1>Employee Directory</h1>
      <SearchForm employees={employees} empFilter={setFilter} />
      <button onClick={sortById} className="btn btn-success">
        SortId
      </button>

      <button onClick={sortNames} className="btn btn-warning">
        Order Names
      </button>

      <table className="table table-striped">
        <TableHeader />
        <tbody>
          {filter.map((employee) => (
            <EmployeeTable
              removeEmployee={removeEmployee}
              key={employee.id}
              id={employee.id}
              firstName={employee.firstName}
              lastName={employee.lastName}
              email={employee.email}
              thumbnail={employee.picture}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
