import React, {useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LoginLayout from '../LoginLayout';
import logo from "../../assets/link-agora-logo-variation-4.png";
import forgotPasswordResponse from './Response/ForgotPasswordProcess';

const ForgotPassword = () => {   


    const handlePasswordResetRequestClick = async () => {  

        const user_email = document.querySelector('input[name="email"]').value; 
        forgotPasswordResponse(user_email); // Sending the user email to the backend to verify if the account exists. 

        window.location.href = "/password/reset/sent" 

    } 

    return (
        <LoginLayout>
            <div>
                <section className="bg-black h-screen">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-76 h-44 m-4">
                    <img src={logo} className="h-full" alt="Logo" />
                    </div>
                    <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="flex items-center justify-center text-md font-bold leading-tight tracking-tight text-white md:text-lg">
                        Enter your email to reset your password
                        </h1>
                        <div className='mt-8'>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 text-white">Your email</label>
                            <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-black border-2 border-[#2A805D] text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="name@bmf.com"
                            required
                            />
                        </div>
                    
                        
                        {/* Embed the Link within the button */}
                        <button
                            type="submit"
                            className="w-full text-white bg-[#8A2623] hover:bg-[#01663E]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"  
                            onClick={handlePasswordResetRequestClick}
                        > 
                            Send Password Reset Email  
                        </button>
                        <p className="text-sm font-light text-gray-500 text-white">
                            Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </div>
                    </div>
                </div>
                </section>
            </div>
        </LoginLayout>
    );
};

export default ForgotPassword; 