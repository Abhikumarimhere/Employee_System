import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = ({employee,deleteEmployee}) => {
    const navigate=useNavigate();

    const editEmployee = (e,id) =>{
        e.preventDefault();
        console.log(id);
        navigate("/editEmployee/"+id);
    };
  return (
    <tr key={employee.employeeID}>
    <td className="text-left px-6 py-3 whitespace-nowrap">
        <div className="text-blue-500 text-sm">{employee.firstName}</div>
        </td>
        <td className="text-left px-6 py-3 whitespace-nowrap">
        <div className="text-blue-500 text-sm">{employee.lastName}</div>
        </td>
        <td className="text-left px-6 py-3 whitespace-nowrap">
        <div className="text-blue-500 text-sm">{employee.emailId}</div>
        </td>
    <td className="text-right px-6 py-3 whitespace-nowrap text-sm font-medium">
        <a 
        onClick={(e,id) => editEmployee(e,employee.employeeID)}
        className="text-indigo-500 hover:text-indigo-800 px-4 hover:cursor-pointer">Edit</a>
        <a 
        onClick={(e,id) => deleteEmployee(e, employee.employeeID)} 
        className="text-indigo-500 hover:text-indigo-800 hover:cursor-pointer">
        Delete</a>
    </td>
</tr>
  );
}

export default Employee;