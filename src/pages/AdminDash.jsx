import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function AdminDash() {

    // ------------------ fetch ------------------

    const [data,setData] = useState([]);

    const getData = () =>{

        axios.get('http://127.0.0.1:4000/api/Admin_General/fetch')
        .then(res => setData(res.data))
        .catch(err=> console.log(err))
        
    }

    useEffect(() => {
        
        getData();

    },[])

    // ------------------ insert ------------------

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [id,setId] = useState('');
    const [password,setPassword] = useState('');
    let navigate = useNavigate();

    const postData = () =>{

        axios.post('http://127.0.0.1:4000/api/Admin_General/create_Manager',{
            name: name,
            email: email
        })
        .then(res=>( getData() ))
        .catch(err=>console.log(err))
        
    }

    // ------------------ edit ------------------

    const edit_row = (id,name,email,password) => {
        setName(name)
        setEmail(email)
        setPassword(password)
        setId(id)
    }

    // ------------------ update ------------------

    const update_row = () =>{

        axios.put(`http://127.0.0.1:4000/api/Admin_General/update_Manager/${id}`,{
            name: name,
            email: email,
            password: password
        })
        .then(res => getData())
        .catch(err => console.log(err))
        
    }

    // ------------------ delete ------------------

    const delete_row = (id) => {
        
        if (window.confirm("Are you sure you want to delete this Manager ?")){
        
            axios.delete(`http://127.0.0.1:4000/api/Admin_General/delete_Manager/${id}`)
            .then(res => getData())
            .catch(err=> console.log(err))

        }

    }

    // ------------------ Logout ------------------

   
    const logout = () => {


        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate("/adminLogin", { replace: true });
      
    }


  return (

    <div className="bg-sky-200 h-100">

        <div class="p-6">

            <h1 class='flex-initial text-xl italic underline decoration-cyan-400'>Admin's Dashboard</h1>
            <div className='flex flex-row-reverse'>
                <button className='text-red-600 text-3xl' onClick={() => logout() }><AiOutlinePoweroff/></button>
            </div>

        </div>

        {/* --------------------------- Form ---------------------- */}

        <div class="bg-white shadow rounded-lg p-6 mx-5">
            
            <div class="grid lg:grid-cols-2 gap-6">
                <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                   <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                        <p>
                            <label for="name" class="bg-white text-gray-600 px-1">Name</label>
                        </p>
                    </div>
                    <p>
                        <input onChange={(e)=>{setName(e.target.value)}} id="name"  tabindex="0" value={name} type="text" class="py-1 px-1 outline-none block h-full w-full"/>
                    </p>
                </div>
                <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                    <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                        <p>
                            <label for="email" class="bg-white text-gray-600 px-1">Email </label>
                        </p>
                    </div>
                    <p>
                        <input onChange={(e)=>{setEmail(e.target.value)}} id="email" value={email}  tabindex="0" type="email" class="py-1 px-1 outline-none block h-full w-full"/>
                    </p>
                </div>
            </div>
            <div class="grid lg:grid-cols-1 gap-6">
                <div class="w-1/2 m-auto mt-5 border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                    <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                        <p>
                            <label for="password" class="bg-white text-gray-600 px-1">Password</label>
                        </p>
                    </div>
                    <p>
                        <input onChange={(e)=>{setPassword(e.target.value)}} id="password"  value={password} tabindex="0" type="text" class="py-1 px-1 outline-none block h-full w-full"/>
                    </p>
                </div>
            </div>

            <div class="border-t mt-6 pt-3 text-center">
                <button onClick={postData} class="bg-blue-700 hover:bg-blue-400 text-white text-sm px-20 py-3 hover:text-blue-900 border rounded-full text-base" type='submit'>
                    Save
                </button>
                <button onClick={update_row} class="bg-blue-700 hover:bg-blue-400 text-white text-sm px-20 py-3 hover:text-blue-900 border rounded-full text-base" type='submit'>
                    Update
                </button>
            </div>
            
        </div>

        {/* ---------------------- table ----------------------  */}

        <div class="mt-8"></div>
        <div class="flex flex-col w-full mt-8">
            <div class='px-5'>
                <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table class="w-full">
                        <thead>
                            <tr>
                                <th class=" px-6 py-3 m-auto border-b border-gray-200 bg-gray-50 leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    ID
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 m-auto leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>

                                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 m-auto leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 m-auto leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Password
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 m-auto leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody class="bg-white w-full">
                            {data.map((element , index) =>

                                <tr key={index}>
                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

                                        <div class="m-auto">
                                            <div class="text-center leading-5 font-medium text-gray-900">{element._id}
                                            </div>
                                        </div>

                                    </td>

                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div class="text-center leading-5 font-medium text-gray-900">{element.name}</div>
                                    </td>

                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div class="text-center leading-5 font-medium text-gray-900">{element.email}</div>
                                    </td>

                                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                        <div class="text-center leading-5 font-medium text-gray-900">{element.password}</div>
                                    </td>

                                    <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                        <div class="d-lfex text-center leading-5 font-medium text-gray-900">
                                            <button class="m-1 py-3 px-5 rounded-full bg-red-500 hover:bg-red-600 text-white hover:text-black" onClick={ () => delete_row(element._id) }><MdDelete/></button>
                                            <button class="m-1 py-3 px-5 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white hover:text-black"  onClick={ () => edit_row(element._id, element.name, element.email, element.password) }><FiEdit/></button>
                                        </div>
                                            
                                    </td>
                                </tr>

                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>

  );
}

export default AdminDash;
