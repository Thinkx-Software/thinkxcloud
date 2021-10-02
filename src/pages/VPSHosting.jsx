import React from 'react'
import HostingSection from '../components/HostingSection'
import HostingServices from '../components/HostingServices'
import TextComponent from '../components/TextComponent'
import VpsCards from '../components/VpsCards'
import Fade from 'react-reveal/Fade';
import { vpsdata } from '../fakeData/vpsdata'

function VPSHosting() {
    return (
        <div>
            
            <HostingSection type="VPS Hosting" 
                     text="
                     We make it  easy to lanch your site with great customer support.
                     With our prices you can always find a suitable vps web hosting package.
                     We have an opt out option with money back guarantee within 30 days no other
                     "
                     image="/assets/vps-Hosting.png"
                    />
                    <Fade left cascade>
                   <TextComponent type="VPS Hosting Services" text="All these come alongside our vps hosting"/>
             </Fade>
             <HostingServices data={vpsdata}/>
             <Fade right cascade>
                   <TextComponent type="VPS Hosting" text="Find a suitable package and get started"/>
             </Fade>
             <VpsCards/>
        </div>
    )
}

export default VPSHosting
