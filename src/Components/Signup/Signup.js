import React,{useState} from "react";
import './signUp.css';
import Modal from "../Modal/modal";
const Signup = () => {

  const [ForgotPassword, setForgotPassword] = useState(false);

  const handleClose = ()=>{
    setForgotPassword(prev=>!prev);
  }

  return (
    
     <div className="w-full md:w-1/2 max-w-4xl">
    <div className=" customsignup w-full md:w-1/2 max-w-3xl h-[70vh] overflow-y-auto bg-black/70 p-6 md:p-8 rounded-2xl shadow-lg ">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
        Register your Gym
      </h2>
      <form className="space-y-4 md:space-y-5">
        {/* Email */}
        <div>
          <label className="block text-lg font-medium text-gray-200 mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

         <div>
          <label className="block text-lg font-medium text-gray-200 mb-2">
           Enter GYM Name
          </label>
          <input
            type="text"
            placeholder="Enter your GYM Name"
            className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        {/* Full Name */}
        <div>
          <label className="block text-lg  font-medium text-gray-200 mb-2">
            Enter Username 
          </label>
          <input
            type="text"
            placeholder="Enter your Full Name"
            className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
         
       
        {/* Password */}
        <div>
          <label className="block text-lg font-medium text-gray-200 mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        
        <input type="file"  name="role"/>
                    <img src="https://t4.ftcdn.net/jpg/00/99/82/15/360_F_99821575_nVEHTBXzUnTcLIKN6yOymAWAnFwEybGb.jpg" alt="gym" className="h-[200px] w-[250px]"/>
        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300"
        >
          Register
        </button>
        <button
  type="button" // Changed from submit to button
  className="w-full py-3 mt-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition duration-300"
  onClick={()=>handleClose()}>Forgot Password</button>
      {ForgotPassword && <Modal header="Forgot Password" handleClose={handleClose} content={<ForgotPassword />}/>}
      </form>
    </div>
  </div>
   
  );
};

export default Signup;














//   const ForgotPasswordcontent = () =>{
//     return (
//       <div>
//         This content is coming from parent component
//       </div>
//     );
//  }