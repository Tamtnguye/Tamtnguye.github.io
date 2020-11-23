
import styled from 'styled-components';
import { Container } from '../../GlobalStyles';
import {Link as LinkR} from 'react-router-dom';
import { ImConnection } from "react-icons/im";

export const Nav = styled.nav`
background-color: #4654A3;
height: 80px;
width: 100%;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
font-family: 'Open Sans', sans-serif;
position: sticky;
top: 0;
z-index: 999;
margin-bottom:100px;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}

`

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;


${Container}
`;

export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
font-weight: bold;
margin-left: 24px;
align-items: center;
`;



// export const NavIcon = styled.div`
// margin-right: 0.5rem;
// background-image: url(${myLogo});
// `
export const NavIcon = styled.img`
display: flex;
border-radius: 50%;
justify-content: center;
height: 80px;
width: 90px;
-o-object-fit: contain;
object-fit: cover;
`

export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;

text-align: center;
margin-right: -22px;
@media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    
    height: 90vh;
    position: absolute;
    top: 80px;
    //click ? 0 : '-100%' means if click it, i want the value to show and if i click again i want the value to disappear
    left: ${({click}) =>(click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #2c2331;
    color: #1694cf;
}`;

export const NavItem = styled.li`
height: 95px;
font-size: 1.3rem;
font-weight: bold;
border-bottom: 2px solid transparent;

&:hover {
    border-bottom: 5px solid #e98c10;
}

@media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
        border: none;
    }
}
`;


export const NavLinks = styled(LinkR)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;
cursor: pointer;

&.active {
    border-bottom: 3px solid #e98c10;
}
@media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
        color:#101522;
        transition: all 0.3s ease;
    }
}
`;

export const NavItemBtn = styled.li`
@media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;

}
`;

export const NavBtnLink = styled(LinkR)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;

`;