import React, {useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LoginLayout from '../LoginLayout';
import logo from "../../assets/link-agora-logo-variation-4.png";
import loginUserResponse from './Response/LoginProcess';

const Login = () => {  


  // When the user wants to login. 
  const handleSignInClick = async () => { 

    const user_email = document.querySelector('input[name="email"]').value;
    const user_password = document.querySelector('input[name="password"]').value; 

    const user_login = await loginUserResponse(user_email, user_password);  

    // Checking if the user is authenticated before logging in. 
    if(user_login.authenticated) {
        window.location.href = "/"
        alert("User can now log in.")
    } else {
        alert("Email or password is not correct. ")
    }
    
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
                  Sign in to your account
                </h1>
                  <div className='mt-8'>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-black border-2 border-[#2A805D] text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="name@bmf.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-black border-2 border-[#2A805D] text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                      </div>
                    </div>
                    <a href="#" className="text-sm font-medium text-white hover:underline">Forgot password?</a>
                  </div>
                  {/* Embed the Link within the button */}
                  <button
                    type="submit"
                    className="w-full text-white bg-[#8A2623] hover:bg-[#01663E]  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" 
                    onClick={handleSignInClick}
                  > 

                    Sign in  

                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
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

export default Login;
