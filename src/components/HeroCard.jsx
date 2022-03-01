import React from 'react';
import Fade from 'react-reveal/Fade';

function HeroCard({text , registerLink , loginLink}) {
  return (
    <div className="flex md:flex-row items-center md:justify-evenly m-4 flex-col z-5">
    <Fade left cascade>
        <div className="flex-0.5 mx-4">
            <p className="text-2xl md:ml-4 text-left p-2 mb-2">WE PROVIDE</p>
            <h className="md:text-7xl text-purple-800 text-4xl text-center font-bold">SMS INTEGRATION</h>
            <p className="md:my-7 md:mx-4 m-2 md:break-all font-light leading-loose">
               
            Send and receive text messages globally using our SMS Platform as well our SMS  APIs.
            Enabling you to get your messages to the right customers, at the
           right time.
            </p>
            <div className="m-4">
                <h1 className="md:ml-5 rounded-full  p-2 cursor-pointer text-center  w-48 text-gray-900 bg-blue-700
                  hover:bg-blue-500 hover:text-white">
                    <a href={registerLink} class="text-white">Get Started. Its Free </a>
                </h1>
            </div>
            {/* <div className="m-4">
                <h1 className="md:ml-5 rounded-full  p-2 cursor-pointer text-center w-48 text-gray-900 bg-gray-200
                  hover:bg-blue-700 hover:text-white">
                    <a href={loginLink}>Sign In</a>
                </h1>
            </div> */}

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