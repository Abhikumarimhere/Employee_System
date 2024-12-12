import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeServices from '../Services/EmployeeServices';
import { useEffect } from 'react';
import Employee from './Employee';

const EmployeeList = () => {
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async() =>{
            setLoading(true);
            try{
                const response=await EmployeeServices.getEmployees();
                setEmployees(response.data);
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);
    const deleteEmployee = (e,id) =>{
        e.preventDefault();
        EmployeeServices.deleteEmployee(id).then((res)=>{
            if(employees){
                setEmployees((prevElement)=>{
                    return prevElement.filter((employee)=>employee.employeeID!==id);
                });
            }
        });
    };
    const navigate=useNavigate();
  return (
  <div className="container mx-auto my-8">
  <div className="h-12">
    <button 
    onClick={() => navigate("/AddEmployee")}
    className="rounded bg-blue-400 hover:bg-blue-700 text-white font-semibold px-8 py-2" >Add Employees</button>
  </div>
  <div className="flex shadow border-b">
    <table className="min-w-full">
        <thead className="bg-gray-50">
            <tr>
                <th className="text-left font-medium text-gray-700 tracking-wider py-3 px-6 uppercase">
                    First Name</th>
                <th className="text-left font-medium text-gray-700 tracking-wider py-3 px-6 uppercase">
                    Last Name</th>
                <th className="text-left font-medium text-gray-700 tracking-wider py-3 px-6 uppercase">
                    Email</th>
                <th className="text-right font-medium text-gray-700 tracking-wider py-3 px-6 uppercase">
                    Actions</th>
            </tr>
        </thead>
        {!loading && (
        <tbody className="bg-white">
            {employees.map((employee)=>(
                <Employee employee={employee} 
                deleteEmployee={deleteEmployee} key={employee.employeeID}></Employee>
            ))}
        </tbody>
    )}
    </table>
  </div>
  </div>
  );
}

export default EmployeeList;