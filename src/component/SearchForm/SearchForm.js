import React, { useState } from "react";
import "./style.css";

function SearchForm(props) {
  const [state, setState] = useState();

  const handleInputChange = (event) => {
    setState(event.target.value);
    console.log(state);
    let lowerCase = event.target.value.toLowerCase();
    console.log(lowerCase);
    let newArr = props.employees.filter((employee) => employee.firstName.toLowerCase().indexOf(lowerCase) !== -1);
    console.log(newArr);
    props.empFilter(newArr);
  };

  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <div>
      <form className="form">
        <input name="fullName" onChange={(event) => handleInputChange(event)} type="text" placeholder="Full Name" />
      </form>
    </div>
  );
}

export default SearchForm;
