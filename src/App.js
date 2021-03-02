import employeeList from "./employeeList.json";
import EmployeeTable from "./component/EmployeeTable";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <EmployeeTable name={employeeList} />
    </div>
  );
}

export default App;
