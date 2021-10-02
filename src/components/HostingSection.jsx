import React from 'react';
import Fade from 'react-reveal/Fade';
import {Link} from "react-router-dom";

function HostingSection({type, text, image}) {
    return (
        <div>
                        {/*section */}

                        <div className="flex md:flex-row items-center md:justify-between m-4 flex-col">
                <Fade left cascade>
                    <div className="flex-0.5 mx-10">
                        <p className="text-2xl md:ml-4 text-left p-2 mb-2">WE PROVIDE</p>
                        <h className="md:text-7xl text-purple-800 text-4xl text-center font-bold">{type}</h>
                        <p className="md:m-7 m-2 md:break-all font-light leading-loose">
                            {text}
                        </p>
                        <div className="m-4">
                            <h1 className="md:ml-5 rounded-full  p-2 cursor-pointer text-center w-48 text-gray-900 bg-gray-200
                              hover:bg-blue-700 hover:text-white">
                                  <Link to="/sharedhosting"> Start Hosting Now</Link>
                              </h1>
                        </div>

                    </div>

                </Fade>

                <Fade right cascade>
                    <div className="flex-0.5 ">

                        <img
                            src={image}
                            alt="not found"
                            className="m-3 object-contain md:h-1/3 md:w-full ml-4"
                            loading="lazy"
                        />
                    </div>

                </Fade>


            </div>
        </div>
    )
}

export default HostingSection
