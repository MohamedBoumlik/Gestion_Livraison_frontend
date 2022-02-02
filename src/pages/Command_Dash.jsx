import SideBar from '../components/SideBar';
import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete } from 'react-icons/md';

function Command_Dash() {
    
    const [villeD,setVilleD] = useState('');
    const [villeA,setVilleA] = useState('');
    const [poid,setPoid] = useState('');


    // ------------------ Driver fetch ------------------

    const [data,setData] = useState([]);
    
    const getData = () =>{
        
        axios.get('http://127.0.0.1:4000/api/Command/All_Commands')
        .then(res => setData(res.data))
        .catch(err=> console.log(err))
        
    }
    
    useEffect(() => {     
        getData();
    },[])


    // ------------------ Driver insert ------------------


    const postData = () =>{

        axios.post('http://127.0.0.1:4000/api/Command/create_Command',{
            villeD : villeD,
            villeA : villeA,
            poid: poid,
        })
        .then(res=>( getData() ))
        .catch(err=>console.log(err))
        
    }

    // ------------------ Driver delete ------------------

    const delete_row = (id) => {

        if (window.confirm("Are you sure you want to delete this Command ?")){
            
            axios.delete(`http://127.0.0.1:4000/api/Command/delete_Command/${id}`)
            .then(res => getData())
            .catch(err=> console.log(err))
        }

    }
    


  return (
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
                                <label for="From" class="bg-white text-gray-600 px-1">From</label>
                            </p>
                        </div>
                        <p>
                            <input onChange={(e)=>{setVilleD(e.target.value)}} id="From" tabindex="0" value={villeD} type="text" class="py-1 px-1 outline-none block h-full w-full"/>
                        </p>
                    </div>

                    <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                        <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                            <p>
                                <label for="To" class="bg-white text-gray-600 px-1">To</label>
                            </p>
                        </div>
                        <p>
                            <input onChange={(e)=>{setVilleA(e.target.value)}} id="To" value={villeA}  tabindex="0" type="text" class="py-1 px-1 outline-none block h-full w-full"/>
                        </p>
                    </div>

                </div>

                <div class="grid lg:grid-cols-1 gap-6">

                    <div class="w-1/2 m-auto mt-5 border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                        <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                            <p>
                                <label for="Poid" class="bg-white text-gray-600 px-1">Poid</label>
                            </p>
                        </div>
                        <p>
                            <input onChange={(e)=>{setPoid(e.target.value)}} id="Poid" value={poid} tabindex="0" type="number" class="py-1 px-1 outline-none block h-full w-full"/>
                        </p>
                    </div>

                </div>
                
                <div class="border-t mt-6 pt-3 text-center">
                    <button onClick={postData} class="bg-blue-700 hover:bg-blue-400 text-white text-sm px-20 py-3 hover:text-blue-900 border rounded-full text-base" type='submit'>
                        Save
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
                                        From
                                    </th>
                                    <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 m-auto leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        To
                                    </th>
                                    <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 m-auto leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Distance
                                    </th>
                                    <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 m-auto leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Weight
                                    </th>
                                    <th class=" px-6 py-3 m-auto border-b border-gray-200 bg-gray-50 leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Status
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
                                            <div class="text-center leading-5 font-medium text-gray-900">{element.VilleD}</div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div class="text-center leading-5 font-medium text-gray-900">{element.VilleA}</div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div class="text-center leading-5 font-medium text-gray-900">{element.Distance}Km</div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                            <div class="text-center leading-5 font-medium text-gray-900">{element.Poid}Kg</div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                            <div class="text-center leading-5 font-medium text-gray-900">{element.Status}</div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                            <div class="d-lfex text-center leading-5 font-medium text-gray-900">
                                                <button class="m-1 py-3 px-5 rounded-full bg-red-500 hover:bg-red-600 text-white hover:text-black" onClick={ () => delete_row(element._id) }><MdDelete/></button>
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

export default Command_Dash;
