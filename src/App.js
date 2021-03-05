import React from "react";
import { useState, useEffect } from "react";
import EmployeeTable from "./component/EmployeeTable/EmployeeTable.js";
import "bootstrap/dist/css/bootstrap.min.css";
import TableHeader from "./component/TableHeader/TableHeader.js";
import SearchForm from "./component/SearchForm/SearchForm.js";
import API from "./utils/API";

function App() {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.getEmployees()
      .then((allEmployees) => {
        setFilter(allEmployees);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const removeEmployee = (id) => {
    let removed = filter.filter((employee) => employee.id !== id);
    setFilter(removed);
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
      <SearchForm employees={filter} empFilter={setFilter} />
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
