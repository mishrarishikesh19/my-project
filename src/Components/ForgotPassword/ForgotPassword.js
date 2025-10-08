import React from "react";

const ForgotPassword = () => {
    return (
        <div className="w-full h-full">
            <div className="w-full mb-5">
                <div>Enter Your Email</div>
                <input type="text" className="w-1/2 p-2 rounded-lg border-2 border-slate-400" placeholder="Enter Email" />
            </div>
            <div className="bg-slate-800 text-white mx-auto w-2/3 p-3 rounded-lg text-center font-semibold cursor-pointer border-2 hover:bg-white hover:text-black">Send OTP</div>
        </div>
    )
}

export default ForgotPassword;