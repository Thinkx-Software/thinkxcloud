import React from 'react'
import HostingSection from '../../components/HostingSection'
import HostingServices from '../../components/HostingServices'
import SharedCards from '../../components/SharedCards'
import TextComponent from '../../components/TextComponent'
import { sharedHostingData } from '../../fakeData/sharedHosting'
import Fade from 'react-reveal/Fade';

function SharedHosting() {
    return (
        <div>
            <HostingSection type="Shared Hosting" 
                     text="
                     We make it  easy to lanch your site with great customer support.
                     With our prices you can always find a suitable shared web hosting package.
                     We have an opt out option with money back guarantee within 30 days no other
                     "
                     image="/assets/shared.jpg"
                    />
                    <Fade left cascade>
                   <TextComponent type="Shared Hosting Services" text="All these come alongside our shared hosting"/>
             </Fade>
             <HostingServices data={sharedHostingData}/>
             <Fade right cascade>
                   <TextComponent type="Shared Hosting" text="Find a suitable package and get started"/>
             </Fade>

                    <SharedCards/>
        </div>
    )
}

export default SharedHosting
