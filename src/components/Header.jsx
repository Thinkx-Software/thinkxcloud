import React,{useState} from 'react'
import {Link} from "react-router-dom";
import {MenuIcon} from "@heroicons/react/outline"
import Icon from './Icon';
function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const onClick= ()=>{
      setShowMenu(!showMenu)
    }
    return (
        <div className=" bg-white relative  p-2 lg:px-5  shadow-md">

            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center justify-between ">
                <img src="./assets/logo1.jpeg"
                className="w-12 h-12 object-contain border-r-20"
                loading="lazy"
                />
                <div className="flex flex-col ml-2 ">
                     <h3 className=" text-blue-800 text-base">THINKX CLOUD</h3>
                     <p className="text-gray-300">Home of Code</p>
                     
                     </div>
                </div>
                
                    
                    {/*menu icon */}
                <div onClick={onClick}
                className="flex items-center cursor-pointer md:px-10 sm:h-14
                 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500">

                    <MenuIcon className={`h-8 text-gray-500 text-center sm:h7 mx-auto group-hover:text-blue-700 md:hidden uppercase`}

                    />
                </div>
                {/*menu icon */}


                <div className={`${!showMenu&&'hidden'} absolute flex flex-col bg-white-400 top-full w-full right-0 z-100 
                md:static md:w-auto  md:flex`}>
                    <ul className="md:flex-row md:flex" >
                        <li className="list-none md:mr-5  ">
                            <Link to="/vps"
                            className="flex w-full text-base uppercase cursor-pointer pt-2.5 px-25 hover:text-blue-900"
                            >
                                Shared Hosting</Link>
                        </li>
                        <li className="list-none md:mr-5">
                            <Link to="/vps"
                              className="flex w-full text-base uppercase cursor-pointer hover:text-blue-900  pt-2.5 px-25"
                            >VPS Hosting</Link>
                        </li>
                        <li className="list-none md:mr-5">
                            <Link to="/domain"
                                 className="flex w-full text-base uppercase cursor-pointer hover:text-blue-900  pt-2.5 px-25"
                            
                            >Domain</Link>
                        </li>
                        <li className="list-none md:mr-5">
                            <Link to="/aboutus"
                                className="flex w-full text-base uppercase cursor-pointer hover:text-blue-900  pt-2.5 px-25"
                            >About Us</Link>
                        </li>
                    </ul>
                </div>

                                    {/*login and register */}
                                    <div>
                         <ul className={`${!showMenu&&'hidden'} md:flex-row md:flex sm:hidden`} >
                             <li className="
                             list-none md:mr-5 rounded-full   p-2 cursor-pointer text-center w-24 text-gray-900 bg-gray-200
                              hover:bg-blue-700 hover:text-white
                    
                             ">
                                 <Link to="/login"
                                 
                                 >
                                     LOGIN</Link>
                             </li>
                             <li className=" list-none md:ml-5 rounded-full   p-2 cursor-pointer text-center w-24 text-gray-900 bg-gray-200
                              hover:bg-blue-700 hover:text-white">
                                 <Link >
                                 SIGN UP
                                 </Link>
                             </li>
                         </ul>
                    </div>
                    {/*login  and register*/}
            </div>
        </div>
    )
}
//0700734309


export default Header
