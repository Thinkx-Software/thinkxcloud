import React from 'react'
import Fade from 'react-reveal/Fade';
//import { Link } from "react-router-dom";


function VpsCards() {
    return (
        <section className="flex flex-col lg:flex-row  items-center lg:justify-center w-full lg:px-10 py-12 ">

            <article
                className="bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-black rounded-lg mx-1">
                <h5 className="font-bold text-base">Planet</h5>
                <h3 className="pb-4 flex justify-center font-bold border-b border-gray-300">
                    <span className="text-xl mt-6 mr-1">shs</span>
                    <span className="text-5xl">25,000</span>
                    <span className="text-xl mt-6 mr-1">/month</span>
                </h3>
                <ul className="text-sm font-bold">
                    <li className="pt-4 pb-4 border-b border-gray-300 font-bold">1 CPU</li>
                    <li className="pt-3 pb-4 border-b border-gray-300 font-bold">1 GB RAM</li>
                    <li className="pt-4 pb-4 border-b border-gray-300 font-bold">25GB SSD</li>
                    <li className="pt-4 pb-4 border-b border-gray-300 font-bold">1 IP Address</li>
                    <li className="pt-4 pb-4 border-b border-gray-300 font-bold">Free SSL</li>
                    <li className="pt-4 pb-4 border-b border-gray-300 font-bold">1 TB Transfer</li>
                    <li className="pt-4 pb-4 border-b border-gray-300 font-bold">24/7 support</li>

                </ul>
                <div
                    className=" uppercase text-center m-2"
                >
                    <h1 className="md:ml-5 rounded-full  p-2 cursor-pointer text-center w-48 text-gray-900 bg-gray-200
                              hover:bg-blue-700 hover:text-white">
                        {/* <a href= "https://thinkxcloud.com/billing/cart.php?a=confproduct&i=0"
                                  target="_blank"
                                  >
                                         Check Out
                                  </a> */}
                        <a href="https://thinkxcloud.com/billing/index.php?rp=/store/vps-hosting" >
                            Check Out
                        </a>
                    </h1>
                </div>
            </article>

            <article
                class="bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg mx-1"
            >
                <h5 class="font-bold text-3xl">Star</h5>
                <h2 class="flex justify-center pb-4 font-bold border-b border-gray-200">
                    <span className="text-3xl mt-6 mr-1">shs</span
                    ><span className="text-5xl">45,000</span>
                    <span className="text-xl mt-6 mr-1">/month</span>
                </h2>
                <ul class="text-sm font-bold">
                    <li className="pt-4 pb-4 border-b border-gray-300 font-bold">1 CPU</li>
                    <li className="pt-3 pb-4 border-b border-gray-300 font-bold">2 GB RAM</li>
                    <li className="pt-4 pb-4 border-b border-gray-300 font-bold">50 GB SSD</li>
                    <li className="pt-4 pb-4 border-b border-gray-300 font-bold">1 IP Address</li>
                    <li className="pt-4 pb-4 border-b border-gray-300 font-bold">Free SSL</li>
                    <li className="pt-4 pb-4 border-b border-gray-300 font-bold">1 TB Transfer</li>
                    <li className="pt-4 pb-4 border-b border-gray-300 font-bold">24/7 support</li>
                </ul>
                <div
                    className=" uppercase text-center m-2"
                >
                    <h1 className="md:ml-5 rounded-full  p-2 cursor-pointer text-center w-48 text-gray-900 bg-gray-200
                              hover:bg-blue-700 hover:text-white">
                        {/* <a href= "https://thinkxcloud.com/billing/cart.php?a=confproduct&i=1"
                                  target="_blank"
                                  >
                                         Check Out
                                  </a> */}
                        <a href="https://thinkxcloud.com/billing/index.php?rp=/store/vps-hosting"  >
                            Check Out
                        </a>
                    </h1>
                </div>
            </article>

            <Fade left cascade>

                <article
                    className="lg:w-custom w-4/5 mb-10 px-6 py-12 lg:-mt-6 text-white text-center rounded-lg bg-gray-800 mx-1"
                    style={{ backgroundImage: "linear-gradient('90deg, #a3a8f0 0%, #696fdd 100%')" }}>
                    <h5 className="font-bold text-base ">Cluster</h5>
                    <h2
                        className="font-bold pb-4 mt-2 border-b border-gray-100 flex justify-center"
                    >
                        <span className="text-xl mt-6 mr-1">shs</span
                        ><span className="text-5xl ">70,000</span>
                        <span className="text-xl mt-6 mr-1">/month</span>
                    </h2>
                    <ul className=" text-sm font-bold">
                        <li className="pt-4 pb-4 border-b border-gray-300 font-bold">2 CPU</li>
                        <li className="pt-3 pb-4 border-b border-gray-300 font-bold">2 GB RAM</li>
                        <li className="pt-4 pb-4 border-b border-gray-300 font-bold">60 GB SSD</li>
                        <li className="pt-4 pb-4 border-b border-gray-300 font-bold">1 IP Address</li>
                        <li className="pt-4 pb-4 border-b border-gray-300 font-bold">Free SSL</li>
                        <li className="pt-4 pb-4 border-b border-gray-300 font-bold">3 TB Transfer</li>
                        <li className="pt-4 pb-4 border-b border-gray-300 font-bold">24/7 support</li>

                    </ul>
                    <div
                        className=" uppercase text-center m-2"
                    >
                        <h1 className="md:ml-5 rounded-full  p-2 cursor-pointer text-center w-48 text-gray-900 bg-gray-200
                                  hover:bg-blue-700 hover:text-white">
                            {/* <a href= "https://thinkxcloud.com/billing/cart.php?a=confproduct&i=2"
                                      target="_blank"
                                      >
                                             Check Out
                                      </a> */}
                            <a href="https://thinkxcloud.com/billing/index.php?rp=/store/vps-hosting" >
                                Check Out
                            </a>

                        </h1>
                    </div>
                </article>

            </Fade>


            <Fade right cascade>
                <article
                    className="lg:w-custom w-4/5 mb-10 px-6 py-16 lg:-mt-6 text-white text-center rounded-lg bg-gray-800 mx-1"
                    style={{ backgroundImage: "linear-gradient('90deg, #a3a8f0 0%, #696fdd 100%')" }}>
                    <h5 className="font-bold text-base ">Galaxy</h5>
                    <h2
                        className="font-bold pb-4 mt-2 border-b border-gray-100 flex justify-center"
                    >
                        <span className="text-xl mt-6 mr-1">shs</span
                        ><span className="text-5xl ">90,000</span>
                        <span className="text-xl mt-6 mr-1">/month</span>
                    </h2>
                    <ul className=" text-sm font-bold">
                        <li className="pt-4 pb-4 border-b border-gray-300 font-bold">2 CPU</li>
                        <li className="pt-3 pb-4 border-b border-gray-300 font-bold">8 GB RAM</li>
                        <li className="pt-4 pb-4 border-b border-gray-300 font-bold">80 GB SSD</li>
                        <li className="pt-4 pb-4 border-b border-gray-300 font-bold">1 IP Address</li>
                        <li className="pt-4 pb-4 border-b border-gray-300 font-bold">Free SSL</li>
                        <li className="pt-4 pb-4 border-b border-gray-300 font-bold">1 TB Transfer</li>
                        <li className="pt-4 pb-4 border-b border-gray-300 font-bold">24/7 support</li>
                    </ul>
                    <div
                        className=" uppercase text-center m-2"
                    >
                        <h1 className="md:ml-5 rounded-full  p-2 cursor-pointer text-center w-48 text-gray-900 bg-gray-200
                              hover:bg-blue-700 hover:text-white">
                            {/* <a href= "https://thinkxcloud.com/billing/cart.php?a=confproduct&i=3"
                                  target="_blank"
                                  >
                                         Check Out
                                  </a> */}
                            <a href= "https://thinkxcloud.com/billing/index.php?rp=/store/vps-hosting" >
                                Check Out
                            </a>
                        </h1>
                    </div>
                </article>

            </Fade>

        </section>

    )
}

export default VpsCards


