import React from "react";
import { useState, useEffect } from "react";
import EmployeeTable from "./component/EmployeeTable/EmployeeTable.js";
import "bootstrap/dist/css/bootstrap.min.css";
import TableHeader from "./component/TableHeader/TableHeader.js";
import SearchForm from "./component/SearchForm/SearchForm.js";
import API from "./utils/API";

function App() {
  const [employees, setEmployees] = useState([]);
  const [sortedNames, setSortName] = useState([]);
  const [sortedIDs, setById] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.getEmployees()
      .then((allEmployees) => {
        setEmployees(allEmployees);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // removeEmployee(id) {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   return employees.filter((employee) => employee.id !== id);
  // }

  const sortNames = () => {
    let sortedNames = employees.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
    console.log(sortedNames);
    setSortName({
      firstName: sortedNames,
    });
  };

  const sortById = () => {
    let sortedIDs = employees.sort((a, b) => (a.id > b.id ? 1 : -1));
    console.log(sortedIDs);
    setById({ sortedIDs });
  };

  return (
    <div className="container">
      <h1>Employee Directory</h1>
      <SearchForm />
      {
        <button onClick={sortById} className="btn btn-success">
          SortId
        </button>
      }
      {
        <button onClick={sortNames} className="btn btn-warning">
          Order Names
        </button>
      }
      <table className="table table-striped">
        <TableHeader />
        <tbody>
          {employees.map((employee) => (
            <EmployeeTable
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
