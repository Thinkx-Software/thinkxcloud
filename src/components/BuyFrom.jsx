import React from 'react';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


function BuyFrom() {
    return (
        <div>
            <Bounce right cascade>
            <div className="m-4">
                 <h2 className="text-blueGray-800 p-4 rounded-full text-center font-bold md:text-7xl text-2xl">Who To Buy From</h2>
             </div>
            </Bounce>

                    {/*second card */}
                    <Bounce left cascade>
                    <div className="bg-white  text-black  m-4 px-6 py-10  rounded-lg grid  place-items-center ">
                        <div className="flex items-center justify-center p-2">
                        <img src="/assets/thinkx.jpeg" 
                          className=" bg-gray-200 p-2 rounded-full object-contain"
                          width="150px"
                          height="150px"
                          style={{
                            marginTop:"-40px"
                          }}
                        alt="deals" />
                        </div> 

                        <div className="m-2 p-2">
                            <h3 className="text-center text-2xl font-bold text-black">Thinkx Software </h3>
                        </div>
                        <div className="text-center">
                        <p className="text-black">
                    <h3 className="text-xl text-black">Address</h3>
                    <h3 className='text-black'>
                      {" "}
                      Kyaliwajala Naalya Road, 500M off Naalya Round About,
                      Kampala{" "}
                    </h3>
                    <br />

                    <span className="flex items-center text-black  my-4">
                    <h6 className="text-xl text-black mr-3 ">Call :</h6>  {"   "}
                    
                    +256(0)393255008 / +256702813986
                    </span>


                  </p>
                  {/*icon address */}
                  <div className="flex mt-6 items-center justify-center">
                    <a
                      style={{ backgroundColor: " #3B5998" }}
                      href="https://www.facebook.com/Thinkx-software/"
                      target="_blank"
                      className="flex items-center justify-center h-12 w-12 mr-1 rounded-full
                                             fab fill-current cursor-pointer
                                             text-white text-xl fa-facebook-f mr-2"
                    ></a>

                    <a
                      style={{ backgroundColor: "#dd4b39" }}
                      href="mailto:info@thinkxsoftware.com"
                      target="_blank"
                      className="flex items-center justify-center h-12 w-12 mx-1 rounded-full cursor-pointer 
                                            fas fill-current text-white text-xl fa-envelope"
                    ></a>

                    <a
                      style={{ backgroundColor: "#125688" }}
                      href="https://twitter.com/thinkxsoftware"
                      target="_blank"
                      className="flex items-center justify-center h-12 w-12 mx-1 rounded-full fab cursor-pointer 
                                            fill-current text-white text-xl fa-twitter mr-2 ml-2"
                    ></a>
                    <a
                        style={{ backgroundColor: "#4CCA5A" }}
                        href="https://wa.me/256772093837"
                        target="_blank"
                        className="flex items-center justify-center h-12 w-12 mx-1 rounded-full fab cursor-pointer 
                                            fill-current text-white text-xl fa-whatsapp ml-2"
                      ></a>
                  </div>
                  {/*icon address */}
                        </div>

                    </div>

                    </Bounce>

                    {/*second card */}
                    
        </div>
    )
}

export default BuyFrom
