
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEmployees from "./Components/AddEmployees";
import EmployeeList from "./Components/EmployeeList";
import NavBar from "./Components/NavBar";
import UpdateEmployee from "./Components/UpdateEmployee";

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route index element={<EmployeeList />} />
      <Route path="/" element={<EmployeeList />} />
      <Route path="/Employees" element={<EmployeeList />} />
      <Route path="/AddEmployee" element={<AddEmployees />} />
      <Route path="/editEmployee/:id" element={<UpdateEmployee />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
