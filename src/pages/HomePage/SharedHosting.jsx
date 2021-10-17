import React, { useState, useEffect } from 'react'
import HostingSection from '../../components/HostingSection'
import HostingServices from '../../components/HostingServices'
import SharedCards from '../../components/SharedCards'
import TextComponent from '../../components/TextComponent'
import { sharedHostingData } from '../../fakeData/sharedHosting'
import Fade from 'react-reveal/Fade';
import HeaderMobile from '../../components/Header/HeaderMobile'
import Header from '../../components/Header/Header';
import { useMediaQuery } from "react-responsive"

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
            s
            <HostingSection type="Shared Hosting"
                text="
                     We make it  easy to lanch your site with great customer support.
                     With our prices you can always find a suitable shared web hosting package.
                     We have an opt out option with money back guarantee within 30 days no other
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
