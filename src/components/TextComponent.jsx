import React from 'react'

function TextComponent({type, text}) {
    return (
        <div className="m-3">
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-3xl text-primary-normal font-bold">{type}</h2>
                <p className="text-base">{text}</p>

            </div>
            
        </div>
    )
}

export default TextComponent
