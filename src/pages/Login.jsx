import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    let navigate = useNavigate();



    const login = () =>{

        axios.post('http://127.0.0.1:4000/api/Admin_General/',{

            email: email,
            password: password

        })
        .then(res => {

            let token = res.data.token;
            let role = res.data.role;
            
            if (role === 'admin' ) {
                localStorage.setItem("token", token);
                navigate("/Admin_Dash", { replace: true });
            }

        })
        .catch(err =>console.log(err))
        
    }
    

  return (

    <div class="font-sans">

        <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
            <div class="relative sm:max-w-sm w-full">
                <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                    <label for="" class="block mt-3 text-sm text-gray-700 text-center font-semibold">
                        Login
                    </label>
                    <div class="mt-10">
                                    
                        <div>
                            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter your email" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                        </div>
            
                        <div class="mt-7 mb-7">                
                            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>                           
                        </div>

                        <div class="flex mt-16 items-center text-center">
                            <hr class="border-gray-300 border-1 w-full rounded-md"/>
                            <label class="block font-medium text-sm text-gray-600 w-full">
                                Safi delivery
                            </label>
                            <hr class="border-gray-300 border-1 w-full rounded-md"/>
                        </div>
            
                        <div class="mt-7">
                            <button onClick={login} class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                Login
                            </button>
                        </div>
        
                    </div>
                </div>
            </div>
        </div>
    
    </div>
)
};

export default Login;