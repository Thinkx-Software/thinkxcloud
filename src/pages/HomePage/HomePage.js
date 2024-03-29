import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import SharedCards from "../../components/SharedCards";
import { Link } from "react-router-dom";
import ChooseUs from '../../components/ChooseUs';
import WorkingSection from '../../components/WorkingSection';
import Header from '../../components/Header/Header';
import HeaderMobile from '../../components/Header/HeaderMobile';
import useCheckMobile from "../../customHooks/useCheckMobile"


function Homepage() {
    const isMobile = useCheckMobile()
    const [toggleMenu, setToggleMenu] = useState(true)

    return (
        <div >
            {
                isMobile ? <HeaderMobile toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
                    : <Header />
            }

            {/*section */}

            <div className="flex md:flex-row items-center md:justify-between m-4 flex-col">
                <Fade left cascade>
                    <div className="flex-0.5 mx-10">
                        <p className="text-2xl md:ml-4 text-left p-2 mb-2">WE PROVIDE</p>
                        <h className="md:text-7xl text-purple-800 text-4xl text-center font-bold">Best Hosting Solutions</h>
                        <p className="md:m-7 m-2 md:break-all font-light leading-loose">
                            We make it  easy to lanch your site with great customer support.
                            With our prices you can always find a suitable package,
                            We have an opt out option with money back guarantee within 30 days no other
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
                            src="/assets/home.png"
                            alt="not found"
                            className="m-3 object-contain md:h-1/3 md:w-full ml-4"
                            loading="lazy"
                        />
                    </div>

                </Fade>


            </div>
            {/*section */}

            {/*why choose us */}
            <ChooseUs />
            {/*why choose us */}

            {/*pricing */}
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-3xl text-primary-normal font-bold">
                    <Link to="/sharedhosting"> Start Hosting Now</Link>
                </h2>
                <p className="text-base">Find a suitable package and get started</p>

            </div>

            <SharedCards />

            <WorkingSection />

            {/*pricing */}

            {/*vps */}
            {/* <Rotate top right cascade>
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl text-primary-normal font-bold">VPS Hosting</h2>
                    <p className="text-base">Get started with VPS hosting at affordable price</p>

                </div>

            </Rotate> */}
            {/* <VpsCards /> */}

            {/*vps */}

        </div>
    )
}

export default Homepage
