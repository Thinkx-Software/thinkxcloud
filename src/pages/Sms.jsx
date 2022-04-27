import React, { useState } from 'react';
import useCheckMobile from "../customHooks/useCheckMobile";
import { Helmet } from "react-helmet";
import HeaderMobile from '../components/Header/HeaderMobile';
import Header from '../components/Header/Header';
import HeroCard from '../components/HeroCard';
import TextComponent from '../components/TextComponent';
import Fade from 'react-reveal/Fade';
import { smsdata } from '../fakeData/smsdata';
import HostingServices from '../components/HostingServices';
import Bounce from 'react-reveal/Bounce';


function Sms() {
  const isMobile = useCheckMobile()
  const [toggleMenu, setToggleMenu] = useState(true)
  return (
    <div>
      <Helmet> <title>SMS - Cheapest Bulk SMS Api In Uganda</title>
        <meta name="description" content="We sell you sms at a very affordable price " />
      </Helmet>
      {
        isMobile ? <HeaderMobile toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
          : <Header />
      }
      <HeroCard
        registerLink={"https://sms.thinkxsoftware.com/smsdashboard/register.php"}
        loginLink={"https://sms.thinkxsoftware.com/smsdashboard/login.php"}
      />
      <Fade right cascade>
        <TextComponent type="Sms Integration" text="Who can use SMS ?" />
      </Fade>

      <div className='my-2 mb-5'>
        <HostingServices data={smsdata} />
      </div>

      <Fade left cascade>
        <TextComponent type="Seamless integration and communication" text="Intelligently connect with your customers, world-wide. We provide you with the messaging solutions that you require" />
      </Fade>
      {/*show create account */}
      <div className="m-4">
        <div class="flex md:flex-row items-center md:justify-evenly  flex-col z-5 bg-blue-500 p-4 h-24 rounded-lg">
          <div class="flex-0.5 mx-4">
            <h1 class="text-center text-2xl p-2 text-white">Create Your Free Account Right Now</h1>
          </div>
          <div class="flex-0.5 mx-4">
            <h1 className="md:ml-5 rounded-full  p-2 cursor-pointer text-center  w-48 text-gray-900 bg-gray-800
                  hover:bg-blue-700 hover:text-white">
              <a href="https://sms.thinkxsoftware.com/smsdashboard/register.php" class="text-white">Get Started </a>
            </h1>
          </div>

        </div>

      </div>
      {/*show create account */}
      {/* why choose us*/}
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
              <h3 className="text-center text-2xl font-bold text-gray-900">Smart </h3>
            </div>
            <div className="text-center">
              <p className="leading-looses text-normal font-semibold">
                A cloud-hosted, user-friendly portal and the
                wizard-driven code generation makes
                integration into your existing systems easy
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
              <h3 className="text-center text-2xl font-bold text-gray-900">Scalability </h3>
            </div>
            <div className="text-center">
              <p className="leading-looses text-normal font-semibold">
                An SMS platform that scales with you,
                allowing you to send a high volume of
                messages delivered reliably and on time
              </p>
            </div>

          </div>

        </Bounce>

        {/*second card */}
        {/*third card */}
        <Fade right cascade>
          <div className="bg-white w-4/5  m-4 px-6 py-10 text-center  rounded-lg">
            <div className="grid place-items-center p-2 ">
              <img src="https://www.datocms-assets.com/54467/1631313603-secure.svg"
                className="h-12 w-12 bg-gray-200 p-2 rounded-full object-contain"
                alt="deals" />
            </div>

            <div className="m-2 p-2">
              <h3 className="text-center text-2xl font-bold text-gray-900">Security </h3>
            </div>
            <div className="text-center">
              <p className="leading-looses text-normal font-semibold">
                Ensure that conversations between your
                business and customers remain 100% private
                with default end-to-end encryption
              </p>
            </div>

          </div>

        </Fade>

        {/*third card */}
      </div>

      {/* why choose us */}

    </div>
  )
}

export default Sms