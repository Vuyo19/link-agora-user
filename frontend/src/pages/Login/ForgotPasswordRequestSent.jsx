import React from 'react';
import LoginLayout from '../LoginLayout';
import logo from "../../assets/link-agora-logo-variation-4.png";  

{/* Notifying the User that an email has been to their inbox to start recovering their account. */}
const ForgotPasswordRequestSent = () => {

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
                                    An email has been sent to your inbox with instructions on how to reset your password. Please check your email and follow the provided link to reset your password.
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </LoginLayout>
    ) 
}

export default ForgotPasswordRequestSent; 