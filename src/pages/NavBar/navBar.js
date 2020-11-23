import React, {useState, useEffect} from 'react';
//import 'bootstrap/dis/css/bootstrap.min.css';
import {NavDropdown} from "react-bootstrap";
import { FaBars, FaTimes} from "react-icons/fa";
import { IconContext} from "react-icons/lib";
import myLogo from '../../assets/logo1.png';
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink,
    
} from './navbar.element';


const NavBar = () => {

const [click, setClick] = useState(false);
const [button, setButton] = useState(true);
const closeMobileMenu = () => setClick(false);
const handleClick = () => setClick(!click);

const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false)
    } else {
        setButton(true)
    }
}


useEffect(() => {
    showButton()
}, [])

window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav> 
            <NavbarContainer>
                <NavLogo to="/" onClick={closeMobileMenu}>
                    <NavIcon src={myLogo}/>
                
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                
                <NavItem>
                    <NavLinks to="/">Home</NavLinks>
                       
                    </NavItem>
                    
                    <NavItem>
                    <NavLinks to="/about">About</NavLinks>
                       
                    </NavItem>
                    <NavItem>
                       <NavDropdown title="dropdown" id="basic-nav-dropdown" style={{
                           
                       }}>
                           <NavDropdown.Item href="/projectOne"> project1</NavDropdown.Item>
                           <NavDropdown.Item href="#action1"> project2</NavDropdown.Item>
                           <NavDropdown.Item href="#action1"> project3</NavDropdown.Item>
                       </NavDropdown>
                       
                    </NavItem>
                    
                    
                    
                    
                    </NavMenu>
                
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    );
};

export default NavBar;



