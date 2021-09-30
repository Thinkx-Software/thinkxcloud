import {createGlobalStyle} from "styled-components"
const GlobalStyle =  createGlobalStyle`
:root{
    --primary-color:#fff;
    --text-color:#rgb(61,65,68);
    --icon-color:#fff;
    --accent-color:rgb(21,37,89);
}
*{
    margin:0;
    padding:0;
    list-style: none;
    box-sizing:border-box;

}
body{
    background-color:var(---primary-color);
}
`
export default GlobalStyle;