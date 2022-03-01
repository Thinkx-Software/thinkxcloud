import React from 'react';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

function ChooseUs() {
    return (
        <div>
            <Bounce right cascade>
                <div className="m-4">
                    <h2 className="text-gray-900 text-center font-bold md:text-7xl text-2xl">Why Choose Us</h2>
                </div>
            </Bounce>

            {/*3 cards */}
            <div className="m-2 flex md:flex-row flex-col ">
                {/*first card */}
                <Fade left cascade>
                    <div className="bg-white w-4/5  m-4 px-6 py-10 text-center  rounded-lg">
                        <div className="grid place-items-center p-2">
                            <img src="https://static.live.templately.com/2021/04/3bea6674-icon-4.png"
                                className="h-12 w-12 bg-gray-200 p-2 rounded-full object-contain"
                                alt="deals" />
                        </div>

                        <div className="m-2 p-2">
                            <h3 className="text-center text-2xl font-bold text-gray-900">Best Pricing Deals </h3>
                        </div>
                        <div className="text-center">
                            <p className="leading-looses text-normal font-semibold">
                                We provide the best hosting price.
                                With our prices you can always find a suitable package, We have an opt out option with
                                money back guarantee within 30 days no other
                            </p>
                        </div>

                    </div>
                </Fade>

                {/*first card */}
                {/*second card */}
                <Bounce left cascade>
                    <div className="bg-white w-4/5  m-4 px-6 py-10 text-center  rounded-lg">
                        <div className="grid place-items-center p-2">
                            <img src="https://static.live.templately.com/2021/04/4d0a20b4-icon-5.png"
                                className="h-12 w-12 bg-gray-200 p-2 rounded-full object-contain"
                                alt="deals" />
                        </div>

                        <div className="m-2 p-2">
                            <h3 className="text-center text-2xl font-bold text-gray-900">Super Easy to Use </h3>
                        </div>
                        <div className="text-center">
                            <p className="leading-looses text-normal font-semibold">
                                Within a few clicks, you can set up your website
                                hosting and environment easily.
                            </p>
                        </div>

                    </div>

                </Bounce>

                {/*second card */}
                {/*third card */}
                <Fade right cascade>
                    <div className="bg-white w-4/5  m-4 px-6 py-10 text-center  rounded-lg">
                        <div className="grid place-items-center p-2 ">
                            <img src="https://static.live.templately.com/2021/04/90bd151e-icon-6.png"
                                className="h-12 w-12 bg-gray-200 p-2 rounded-full object-contain"
                                alt="deals" />
                        </div>

                        <div className="m-2 p-2">
                            <h3 className="text-center text-2xl font-bold text-gray-900">Customer Support </h3>
                        </div>
                        <div className="text-center">
                            <p className="leading-looses text-normal font-semibold">
                                We support all our customers 24/7,
                                so they can manage their websites smoothly.
                            </p>
                        </div>

                    </div>

                </Fade>

                {/*third card */}
            </div>
            {/*3 cards */}
        </div>
    )
}

export default ChooseUs
