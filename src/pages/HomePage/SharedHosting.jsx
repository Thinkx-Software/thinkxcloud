import React, { useState, useEffect } from 'react'
import HostingSection from '../../components/HostingSection'
import HostingServices from '../../components/HostingServices'
import SharedCards from '../../components/SharedCards'
import TextComponent from '../../components/TextComponent'
import { sharedHostingData } from '../../fakeData/sharedHosting'
import Fade from 'react-reveal/Fade';
import HeaderMobile from '../../components/Header/HeaderMobile'
import Header from '../../components/Header/Header';
import { useMediaQuery } from "react-responsive";
import {Helmet} from "react-helmet";

function SharedHosting() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })

    useEffect(() => {
        if (isTabletOrMobile || isTabletOrMobileDevice) {
            setIsMobile(true)
        }
        else {
            setIsMobile(false)
        }


    }, [isDesktopOrLaptop, isBigScreen, isTabletOrMobileDevice, isTabletOrMobile])

    //create mobile view
    const [isMobile, setIsMobile] = useState(false)

    //add clickable buttons
    const [toggleMenu, setToggleMenu] = useState(true)
    return (
        <div>
                        <Helmet> <title>Shared Hosting - The Ultimate web hosting company In Uganda</title>
      <meta name="description" content="From as low as UGX 30,000 a year host with us" />
    </Helmet>
    <Helmet>
    <meta name="keywords" content="Most reliable web hosting, Secure Web hosting In uganda, Kampala best web hosting"></meta>

    </Helmet>
    <Helmet>
    <meta name="keywords" content=""></meta>

    </Helmet>
            {
                isMobile ? <HeaderMobile toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
                    : <Header />
            }
            <HostingSection type="Shared Hosting"
                text="
                     We make it  easy to launch your website with great customer support.
                     With our prices you can always find a suitable shared web hosting package.
                     We have an opt out option with money back guarantee within 30 days
                     "
                image="/assets/shared.jpg"
            />
            <Fade left cascade>
                <TextComponent type="Shared Hosting Services" text="All these come alongside our shared hosting" />
            </Fade>
            <HostingServices data={sharedHostingData} />
            <Fade right cascade>
                <TextComponent type="Shared Hosting" text="Find a suitable package and get started" />
            </Fade>

            <SharedCards />
        </div>
    )
}

export default SharedHosting
