import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import SideBar from "../components/SideBar";


function ManagerDash() {

    // ------------------ Driver fetch ------------------

    const [data,setData] = useState([]);

    const getData = () =>{

        axios.get('http://127.0.0.1:4000/api/Manager/fetch')
        .then(res => setData(res.data))
        .catch(err=> console.log(err))
        
    }

    useEffect(() => {
        
        getData();

    },[])

    // ------------------ Driver insert ------------------

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [vehicule,setVehicule] = useState('');
    const [id,setId] = useState('');
    const [password,setPassword] = useState('');

    const postData = () =>{

        axios.post('http://127.0.0.1:4000/api/Manager/create_Driver',{
            name: name,
            email: email,
            Vehicule: vehicule
        })
        .then(res=>( getData() ))
        .catch(err=>console.log(err))
        
    }

    // ------------------ Driver edit ------------------

    const edit_row = (id,name,email,password,vehicule) => {
        setName(name)
        setEmail(email)
        setPassword(password)
        setVehicule(vehicule)
        setId(id)
    }

    // ------------------ Driver update ------------------

    const update_row = () =>{

        axios.put(`http://127.0.0.1:4000/api/Manager/update_Driver/${id}`,{
            name: name,
            email: email,
            Vehicule: vehicule
        })
        .then(res => getData())
        .catch(err => console.log(err))
        
    }

    // ------------------ Driver delete ------------------

    const delete_row = (id) => {

        if (window.confirm("Are you sure you want to delete this Driver ?")){
        
            axios.delete(`http://127.0.0.1:4000/api/Manager/delete_Driver/${id}`)
            .then(res => getData())
            .catch(err=> console.log(err))
            
        }

    }



  return(
    <div className="grid md:grid-cols-5">
        {/* ------------------------ side Bar ------------------------ */}
    
            <SideBar/>
            
        {/* ------------------------ Content ------------------------ */}

        <div className="col-span-4 bg-sky-200 h-full">

            <div class="p-6">
                <h1 class='flex-initial text-xl italic underline decoration-cyan-400'>Manager's Dashboard</h1>
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

                    <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                        <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                            <p>
                                <label for="email" class="bg-white text-gray-600 px-1">Password</label>
                            </p>
                        </div>
                        <p>
                        <input onChange={(e)=>{setPassword(e.target.value)}} id="password" value={password} tabindex="0" type="text" class="py-1 px-1 outline-none block h-full w-full"/>
                        </p>
                    </div>

                    <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                        <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                            <p>
                                <label for="vehicule" class="bg-white text-gray-600 px-1">Vehicule</label>
                            </p>
                        </div>
                        <p>
                            <select id="vehicule" onChange={(e)=>{setVehicule(e.target.value)}} value={vehicule} class="py-1 px-1 outline-none block h-full w-full">
                                <option>Choose a vehicule</option>
                                <option value="car">Car</option>
                                <option value="PetitCamio">PetitCamio</option>
                                <option value="GrandCamio">GrandCamio</option>
                            </select>
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
                                        Vehicule
                                    </th>
                                    <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 m-auto leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="bg-white w-full">
                                {data.map(element =>

                                    <tr key={element._id}>

                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div class="text-center leading-5 font-medium text-gray-900">{element.name}</div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div class="text-center leading-5 font-medium text-gray-900">{element.email}</div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                            <div class="text-center leading-5 font-medium text-gray-900">{element.password}</div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                            <div class="text-center leading-5 font-medium text-gray-900">{element.Vehicule}</div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                            <div class="d-lfex text-center leading-5 font-medium text-gray-900">
                                                <button class="m-1 py-3 px-5 rounded-full bg-red-500 hover:bg-red-600 text-white hover:text-black" onClick={ () => delete_row(element._id) }><MdDelete/></button>
                                                <button class="m-1 py-3 px-5 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white hover:text-black"  onClick={ () => edit_row(element._id, element.name, element.email, element.password,element.Vehicule) }><FiEdit/></button>
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

    </div>
  );
}

export default ManagerDash;
