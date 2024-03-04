import styled from "styled-components";
import { colors } from "../../styles/global";



export const SideBarWrapper = styled.div`

position: fixed;
top: 0;
left: 0;
width:250px;
height: 100vh;
display:block;
z-index: 2 ;
transition: transform 0.3s ease-in-out;


ul {
    flex: 1 1 0%;
}

li{
    display:flex;
    list-style: none;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    padding: 10px;
    height:80px;
    width:25vh;
}

`;

export const SideBarHeader = styled.div`  
background-color: ${colors.glass};
height: 100vh;
overflow:hidden;
`

export const ContaierButton = styled.div `
display:flex;
justify-content: center;
align-items: center;
height: 100vh;

.glow-on-hover {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: #000
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}

`

