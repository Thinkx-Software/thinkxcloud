import React from 'react'
import StatusCard from './StatusCard'


function HostingServices({data}) {
    return (
         <div>
             <div className="flex flex-wrap relative z-5 ">
            {
                data.map((item, index)=><StatusCard
                key={index}
                 color={item?.color}  icon={item?.icon} title={item?.title} children={item?.children}/>)
            }
        </div>
         

         </div>
        
    )
}

export default HostingServices