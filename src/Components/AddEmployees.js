import React, { useState } from 'react'
import EmployeeServices from '../Services/EmployeeServices';
import { useNavigate } from 'react-router-dom';

const AddEmployees = () => {
    const [employee, setEmployee] = useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:"",
    });
    const handleChange = (e) =>{
        const value = e.target.value;
        setEmployee({...employee,[e.target.name]:value});
    }
const navigate=useNavigate();
    const saveEmployee = (e) =>{
        e.preventDefault();
        EmployeeServices.saveEmployee(employee)
        .then((response) => {
            console.log(response);
            navigate("/Employees");
        })
        .catch((error) => {
            console.log(error);
        });
    }


    const Reset = (e) =>{
        e.preventDefault();
        setEmployee({
            id:"",
            firstName:"",
            lastName:"",
            emailId:"",
        });
    };
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add New Employee</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal" >First Name</label>
                    <input type="text"
                            name="firstName"
                            value={employee.firstName}
                            onChange={(e) => handleChange(e)}
                     className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal" >Last Name</label>
                    <input type="text"
                            name="lastName"
                            value={employee.lastName}
                            onChange={(e) => handleChange(e)}
                    className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal" >Email ID</label>
                    <input type="email" 
                            name="emailId"
                            value={employee.emailId}
                            onChange={(e) => handleChange(e)}
                    className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
                <button
                onClick={saveEmployee} 
                className="mt-4 rounded text-white font-semibold bg-green-400 hover:bg-green-800 px-6 py-2
               border-x-2 border-y-2 border-yellow-200 cursor-pointer">
                    Save</button>
                <button 
                onClick={Reset}
                className=" m-20 mt-4 rounded text-white font-semibold bg-red-500 hover:bg-red-800 px-6 py-2
                cursor-pointer">
                    Clear</button>
            </div>
        </div>
    </div>
  )
}

export default AddEmployees;