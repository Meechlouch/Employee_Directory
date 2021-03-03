import React, { Component } from "react";
import employeeList from "./employeeList.json";
import EmployeeTable from "./component/EmployeeTable/EmployeeTable.js";
import "bootstrap/dist/css/bootstrap.min.css";
import TableHeader from "./component/TableHeader/TableHeader.js";
import SearchForm from "./component/SearchForm/SearchForm.js";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employeeList,
  };

  removeEmployee = (id) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employeeList = this.state.employeeList.filter((employee) => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employeeList });
  };

  sortByName = () => {
    let employees = this.state.employeeList.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.setState({ employees });
  };

  sortById = () => {
    let employee = this.state.employeeList.sort((a, b) => (a.id > b.id ? 1 : -1));
    this.setState({ employee });
  };

  render() {
    return (
      <div className="container">
        <h1>Employee Directory</h1>
        <SearchForm />
        <table className="table table-striped">
          <TableHeader />
          {this.state.employeeList.map((employee) => (
            <EmployeeTable
              sortById={this.sortById}
              sortByName={this.sortByName}
              removeEmployee={this.removeEmployee}
              id={employee.id}
              name={employee.name}
              position={employee.position}
              salary={employee.salary}
              department={employee.department}
            />
          ))}
        </table>
      </div>
    );
  }
}

export default App;
