import { NavLink } from "react-router-dom";
import az from '../images/logo.jpg';
import {FaShippingFast} from 'react-icons/fa';
import {FiPackage} from 'react-icons/fi';
import {GiPayMoney} from 'react-icons/gi';
import '../style/Login.css'

const SideBar = () =>{
    return(

        <div className="h-screen">

            <div >
                <img src={az} alt="delivery logo" />
            </div>

            <ul>

                <NavLink activeClassName="is-active" exact to="/Manager_Dash" className=" flex justify-center py-2 w-full rounded text-xl text-sky-400 hover:text-black hover:bg-sky-400 my-1"> 
                    <div className="flex gap-4">
                        <FaShippingFast className="text-3xl"/> Drivers
                    </div>
                </NavLink>

                <NavLink activeClassName="is-active" exact to="/Commands_Dash" className=" flex justify-center py-2 w-full rounded text-xl text-sky-400 hover:text-black hover:bg-sky-400 my-1"> 
                    <div className="flex gap-4">
                        <FiPackage className="text-3xl"/> Command
                    </div>
                </NavLink>

                <NavLink activeClassName="is-active" exact to="/Prims_Dash" className=" flex justify-center py-2 w-full rounded text-xl text-sky-400 hover:text-black hover:bg-sky-400 my-1"> 
                    <div className="flex gap-4">
                        <GiPayMoney className="text-3xl"/> Prim
                    </div>
                </NavLink>

            </ul>

        </div>
        
    )
}

export default SideBar; 