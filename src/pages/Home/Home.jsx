import React from 'react'
import '../../App.css';
import Login from '../../Components/Login/Login';
import Signup from '../../Components/Signup/Signup';
import Modal from '../../Components/Modal/modal';

const Home = () => {
  return (
    <div className="home w-full h-[100vh] flex flex-col ">
      {/* Top Banner */}
      <div className="border-b-2 border-slate-800 bg-slate-800 text-white font-semibold text-4xl p-5 ">
        <h1>Welcome to Gym Management System</h1>
      </div>
      
       <div className="bg-[url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=action-athlete-barbell-841130.jpg&fm=jpg')] bg-cover bg-no-repeat bg-center h-[100%] flex items-center justify-center"
>

      {/* Background Section */}
     <div className="flex-1 bg-center flex flex-col md:flex-row items-center justify-center text-white text-lg px-4 md:px-6 gap-64">
  {/* Login Section */}

    <Login />
  {/* Signup Section */}
 
    <Signup />
    {ForgotPassword && <Modal handleClose={handleClose} />}
 
     </div>
</div>
    </div>
  )
}

export default Home;
