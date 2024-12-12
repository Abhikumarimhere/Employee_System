import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeServices from '../Services/EmployeeServices';

const UpdateEmployee = () => {
    const {id}=useParams();
    const [employee, setEmployee] = useState({
        id:id,
        firstName:"",
        lastName:"",
        emailId:"",
    });
    const handleChange = (e) =>{
        const value = e.target.value;
        setEmployee({...employee,[e.target.name]:value})
    }
    useEffect(() => {
      const fetchData= async ()=>{
        try{
            const response=await EmployeeServices.getEmployeeById(id);
            setEmployee(response.data);

        }catch(error){
            console.log(error);
        }
      }
      fetchData();
    }, []);
    const navigate=useNavigate();
    const updateEmployee = (e) =>{
        e.preventDefault();
        EmployeeServices.updateEmployeeById(id,employee)
        .then((response) => {
            navigate("/Employees");
        }).catch((error) => {
            console.log(error);
        })
    };
    
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Update Employee</h1>
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
                onClick={updateEmployee} 
                className="mt-4 rounded text-white font-semibold bg-green-400 hover:bg-green-800 px-6 py-2
               border-x-2 border-y-2 border-yellow-200 cursor-pointer">
                    Update</button>
                <button 
                onClick={() => navigate("/Employees")}
                className=" m-20 mt-4 rounded text-white font-semibold bg-red-500 hover:bg-red-800 px-6 py-2
                cursor-pointer">
                    Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default UpdateEmployee;