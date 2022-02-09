import React, { useState} from 'react'
import HostingSection from '../components/HostingSection'
import HostingServices from '../components/HostingServices'
import TextComponent from '../components/TextComponent'
import VpsCards from '../components/VpsCards'
import Fade from 'react-reveal/Fade';
import { vpsdata } from '../fakeData/vpsdata'
import HeaderMobile from '../components/Header/HeaderMobile'
import Header from '../components/Header/Header'
import {Helmet} from "react-helmet";
import useCheckMobile from "../customHooks/useCheckMobile"


function VPSHosting() {
    const isMobile = useCheckMobile()


    //add clickable buttons
    const [toggleMenu, setToggleMenu] = useState(true)
    return (
        <div>
                         <Helmet> <title>VPS - thinkxcloud.com</title>
      <meta name="description" content="host your app or website on our vps that is reliable" />
    </Helmet>
            {
                isMobile ? <HeaderMobile toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
                    : <Header />
            }

            <HostingSection type="VPS Hosting"
                text="
                     We make it  easy to lanch your site with great customer support.
                     With our prices you can always find a suitable vps web hosting package.
                     We have an opt out option with money back guarantee within 30 days no other
                     "
                image="/assets/vps.png"
            />
            <Fade left cascade>
                <TextComponent type="VPS Hosting Services" text="All these come alongside our vps hosting" />
            </Fade>
            <HostingServices data={vpsdata} />
            <Fade right cascade>
                <TextComponent type="VPS Hosting" text="Find a suitable package and get started" />
            </Fade>
            <VpsCards />
        </div>
    )
}

export default VPSHosting
