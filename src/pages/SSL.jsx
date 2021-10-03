import React from 'react'
import {Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';
import { ssldata } from '../fakeData/ssldata';
import HostingServices from '../components/HostingServices';
import TextComponent from '../components/TextComponent';
import SSLCards from '../components/SSLCards';

function SSL() {
    return (
        <div>
                     
                     <div className="flex md:flex-row items-center md:justify-evenly m-4 flex-col">
                <Fade left cascade>
                    <div className="flex-0.5 mx-4">
                        <p className="text-2xl md:ml-4 text-left p-2 mb-2">WE PROVIDE</p>
                        <h className="md:text-7xl text-purple-800 text-4xl text-center font-bold">SSL Certificates</h>
                        <p className="md:my-7 md:mx-4 m-2 md:break-all font-light leading-loose">
                        To protect your self and website visitors from hackers,SSL Certificate does a
                         great job of encrypting data during communication. All major browsers recommend 
                         ssl to the extent that they show site insecure if ssl is not installed. At Thinkx we help our customers
                         achieve privacy by offering the best SSL prices on the market.
                        </p>
                        <div className="m-4">
                            <h1 className="md:ml-5 rounded-full  p-2 cursor-pointer text-center w-48 text-gray-900 bg-gray-200
                              hover:bg-blue-700 hover:text-white">
                                  <Link to="/ssl">Get A Certificate Now</Link>
                              </h1>
                        </div>

                    </div>

                </Fade>

                <Fade right cascade>
                    <div className="flex-0.7 mr-5">

                        <img
                            src="/assets/ssl.png"
                            alt="hosting image"
                            className="m-3 object-contain md:h-1/3 md:w-full ml-4"
                            loading="lazy"
                        />
                    </div>

                </Fade>

            </div>
            <Fade right cascade>
                   <TextComponent type="SSL  Services" text="All these come alongside our shared hosting"/>
             </Fade>

             <HostingServices data={ssldata}/>

             <Fade right cascade>
                   <TextComponent type="SSL Certificates" text="Find a suitable certificate and get started"/>
             </Fade>

             <SSLCards/>
            
        </div>
    )
}

export default SSL
