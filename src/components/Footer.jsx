import React from 'react'
import { Face } from "@heroicons/react/outline"
function Footer() {
    return (

        <div className="bg-gray-900">
            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <div className="container mx-auto px-6 lg:px-20 py-12">
                    <div className="lg:flex">
                        <div className="w-full lg:w-2/3">
                            <div className="lg:flex">
                                <div className="w-full mb-12 lg:mb-0 lg:w-1/2">
                                    <h2 style={{ fontfamily: 'Baloo Tamma 2' }}
                                        className="font-bold text-xl text-gray-100 mb-4">
                                        <a href="https://www.thinkxsoftware.com" target="_blank" className="cursor-pointer" >
                                            Thinkx Cloud</a>
                                    </h2>
                                    <p className="text-gray-400">
                                        Thinkx Cloud is the leading hosting and cloud service provider in uganda, Customer satsfaction is our goal.
                                    </p>
                                    <p className="text-gray-400">
                                        <h3 className="text-xl text-white">Address</h3>
                                        <h3> Kyaliwajala Naalya Road, 500M off Naalya Round About, Kampala </h3>
                                        <br />
                                        
                                        <span className="flex items-center ">
                                            Call: (256) 760137160
                                        </span>
                                        <span className="flex items-center ">
                                            Whatsapp:
                                            (256) 760137160
                                        </span>


                                    </p>
                                    <div className="flex mt-6">
                                        <a style={{ backgroundColor: " #3B5998" }}
                                            href="https://www.facebook.com/Thinkx-cloud-109996254751509/" target="_blank"
                                            className="flex items-center justify-center h-12 w-12 mr-1 rounded-full
                                             fab fill-current cursor-pointer
                                             text-white text-xl fa-facebook-f">

                                        </a>

                                        <a style={{ backgroundColor: "#dd4b39" }} href="mailto:info@thinkxsoftware.com" target="_blank"
                                            className="flex items-center justify-center h-12 w-12 mx-1 rounded-full cursor-pointer 
                                            fas fill-current text-white text-xl fa-envelope">

                                        </a>



                                        <a style={{ backgroundColor: "#125688" }}
                                            href="https://twitter.com/thinkxcloud" target="_blank"
                                            className="flex items-center justify-center h-12 w-12 mx-1 rounded-full fab cursor-pointer 
                                            fill-current text-white text-xl fa-twitter"></a>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 lg:flex lg:px-6 ">
                                    <div className="w-full mb-6 lg:mb-0 lg:w-1/2">
                                        <h2 style={{ fontfamily: 'Baloo Tamma 2' }}
                                            className="font-bold text-gray-100 mb-4">
                                            Useful Links</h2>
                                        <ul className="text-gray-500 text-sm ">
                                            <li className="pt-1 pb-2 list-none hover:text-white">
                                                <a href="https://www.thinkxsoftware.com" target="_blank" className="cursor-pointer" >
                                                    Home</a>
                                            </li>
                                            <li className="pt-1 pb-2 list-none hover:text-white">
                                                <a href="https://www.thinkxsoftware.com/about/" target="_blank" className="cursor-pointer" >
                                                    About Us</a>
                                            </li>
                                            <li className="pt-1 pb-2 list-none hover:text-white">
                                                <a href="https://www.thinkxsoftware.com" target="_blank" className="cursor-pointer" >
                                                    service</a>
                                            </li>
                                            <li className="pt-1 pb-2 list-none hover:text-white">Terms of Services</li>
                                            <li className="pt-1 pb-2 list-none hover:text-white">Privacy Policy</li>

                                        </ul>
                                    </div>
                                    <div className="w-full mb-6 lg:mb-0 lg:w-1/2">
                                        <h2 style={{ fontfamily: 'Baloo Tamma 2' }}
                                            className="font-bold text-gray-100 mb-4">
                                            Our sevices</h2>
                                        <ul className="text-gray-500 text-sm">
                                            <li className="pt-1 pb-2 list-none hover:text-white">
                                                <a href="https://www.thinkxsoftware.com" target="_blank" className="cursor-pointer" >
                                                    Web Development</a>
                                            </li>
                                            <li className="pt-1 pb-2 list-none hover:text-white">
                                                <a href="https://www.thinkxsoftware.com" target="_blank" className="cursor-pointer" >App Development</a>
                                            </li>
                                            <li className="pt-1 pb-2 list-none hover:text-white">
                                                <a href="https://www.thinkxsoftware.com" target="_blank" className="cursor-pointer" >Web Hosting</a>
                                            </li>
                                            <li className="pt-1 pb-2 list-none hover:text-white">
                                                <a href="https://www.thinkxsoftware.com" target="_blank" className="cursor-pointer" >SEO</a>
                                            </li>
                                            <li className="pt-1 pb-2 list-none hover:text-white">
                                                <a href="https://www.thinkxsoftware.com" target="_blank" className="cursor-pointer" ></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3">
                            <h2 style={{ fontfamily: 'Baloo Tamma 2' }} className=" font-bold text-gray-100 mb-4">
                                Our Newsletter
                            </h2>
                            <div className="text-gray-300 mb-8">
                                Subscribe our weely Newsletter to get regular updates about our blogs.
                            </div>
                            <div className="flex">
                                <input type="text" className="rounded-l px-2 focus:outline-none" />
                                <button className="text-gray-200 rounded-r hover:bg-blue-500 px-4 py-2 focus:outline-none"
                                    style={{ backgroundColor: "#dc0900" }}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ fontFamily: 'Baloo Tamma 2', backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                <div className="container mx-auto px-6 lg:px-20 py-6">
                    <div className="flex justify-center text-gray-300 mb-1">
                        © {new Date().getFullYear()}  <span className="font-bold">
                            <a href="https://www.thinkxsoftware.com" target="_blank" className="cursor-pointer" >Thinkx Software</a>
                        </span> All rights reserved.
                    </div>
                    <div className="flex font-light justify-center text-gray-500 text-sm">
                        <p>ThinkxCloud is a property of <span className="font-bold">
                            <a href="https://www.thinkxsoftware.com" target="_blank" className="cursor-pointer" >Thinkx Software</a>
                        </span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
