import React,{useState} from 'react';
import useCheckMobile from "../customHooks/useCheckMobile";
import {Helmet} from "react-helmet";
import HeaderMobile from '../components/Header/HeaderMobile';
import Header from '../components/Header/Header';
import HeroCard from '../components/HeroCard';
import TextComponent from '../components/TextComponent';
import Fade from 'react-reveal/Fade';
import { smsdata } from '../fakeData/smsdata';
import HostingServices from '../components/HostingServices';
import BuyFrom  from "../components/BuyFrom";

function Sms() {
    const isMobile = useCheckMobile()
    const [toggleMenu, setToggleMenu] = useState(true)
  return (
    <div>
          <Helmet> <title>SMS - thinkxcloud.com</title>
      <meta name="description" content="We sell you sms at a very affordable price " />
    </Helmet>
            {
                isMobile ? <HeaderMobile toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
                    : <Header />
            }
            <HeroCard/>
            <Fade right cascade>
                <TextComponent type="Sms Integration" text="Who can use SMS ?" />
            </Fade>
            <div className='my-2 mb-5'>
            <HostingServices data={smsdata} />

            </div>

            {/*buy from */}
            <BuyFrom/>

            {/*buy from */}



    </div>
  )
}

export default Sms