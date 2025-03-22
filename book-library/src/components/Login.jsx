import React,{useState} from 'react'
import '../App.css'
import { Link,useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");     
    const navigate = useNavigate();
      
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        const storedUser = JSON.parse(localStorage.getItem("user"));
    
        if (storedUser && storedUser.email === email && storedUser.password === password) {
          alert("Login successful!");
          navigate("/home"); 
        } else {
          setError("Invalid email or password.");
        }
      };
    
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h1 className='text-gray-600 font-bold p-8'>Login</h1>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleSubmit}>

            <div className="mb-4">
                <label className="text-sm font-medium mr-96 text-gray-700">Email</label>
                <input type="email" placeholder='Enter email' className="w-full p-2 border border-gray-300 rounded bg-slate-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mr-96 text-gray-700">Password</label>
                <input type={showPassword ? "text" : "password"} placeholder='Enter password' className="w-full p-2 border border-gray-300 rounded bg-slate-300 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <div className="mb-4 flex items-center">
                <input type="checkbox" id="showPassword" className="mr-2" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
                <label htmlFor="showPassword" className="text-sm text-gray-700">Show Password</label>
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition" > Sign in</button>
            <p className="text-center text-sm text-gray-600 mt-4">Already have an account?{" "}
          <button onClick={() => navigate("/register")} className="text-blue-500 hover:underline">Register</button></p>
        
        </form>
    </div>    
  )
}

export default Login
