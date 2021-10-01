import React from 'react'

function Icon(Name, active) {
    return (
        <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 
        rounded-xl active:border-b-2 active:border-blue-500">
            <Name className={`h-5 text-gray-500 text-center sm:h7 mx-auto group-hover:text-blue-700 ${active && 'text-blue-500'}`}/>
        </div>
    )
}

export default Icon
