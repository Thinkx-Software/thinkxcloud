import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";

function HeroCard({text , _link , link_text, image_url}) {
  return (
    <div className="flex md:flex-row items-center md:justify-evenly m-4 flex-col z-5">
    <Fade left cascade>
        <div className="flex-0.5 mx-4">
            <p className="text-2xl md:ml-4 text-left p-2 mb-2">WE PROVIDE</p>
            <h className="md:text-7xl text-purple-800 text-4xl text-center font-bold">SMS INTEGRATION</h>
            <p className="md:my-7 md:mx-4 m-2 md:break-all font-light leading-loose">
               
                Easily engage your customers anywhere.
               Connect and verify customers seamlessly across  sms at an affordable price around Kampala
            </p>
            <div className="m-4">
                <h1 className="md:ml-5 rounded-full  p-2 cursor-pointer text-center w-48 text-gray-900 bg-gray-200
                  hover:bg-blue-700 hover:text-white">
                    <Link to="/sms">Start Now</Link>
                </h1>
            </div>

        </div>

    </Fade>

    <Fade right cascade>
        <div className="flex-0.7 mr-5">

            <img
                src="/assets/home.png"
                alt="hosting image"
                className="m-3 object-contain md:h-1/3 md:w-full ml-4"
                loading="lazy"
            />
        </div>

    </Fade>

</div>
  )
}

export default HeroCard