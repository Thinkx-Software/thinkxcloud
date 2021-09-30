import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
        <h1 className="bg-red-500">
            Katende
        </h1>
    )
}

//headerelement
const HeaderStyled =  styled.header`
height: 100vh;
width: 100%;
background-color:#2B292F;
clip-path: ellipse(66% 100% at 35.28% 0%);
.header_content{
    padding: 0 10rem;
}
`
//headerelement

export default Header
