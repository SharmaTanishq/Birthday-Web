import React, { useEffect, useState,useRef } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import { Nav,NavbarContainer,NavLogo,NavIcon,MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';
//Gsap
import {TimelineLite ,TweenMax, Power3,gsap} from 'gsap';


const Navbar = () => {
     const[click,setClick] = useState(false);
     const [scroll,setScroll] = useState(false);
    let navbar = useRef(null)
    let tl = new TimelineLite();
     const handleClick = () => setClick(!click);
     const changeNav = () =>{
         if(window.scrollY >=80){
             setScroll(true);
         } else{
             setScroll(false);
         }
     }
     useEffect(()=>{
         changeNav()
         window.addEventListener("scroll",changeNav);
         tl.from(navbar,1.5,{y: -380, ease: Power3.easeOut,opacity:0})
     }, []);
    return (
        <>
            <Nav active = {scroll} click = {click}>
                <NavbarContainer ref = {el => navbar = el} >
                    <NavLogo change={scroll} to = "/">
                        LOREM
                    </NavLogo>
                    <MobileIcon onClick = {handleClick}>
                        {click? <FaTimes/>: <FaBars/>}
                    </MobileIcon>
                    <NavMenu  onClick = {handleClick} click ={click}>
                        <NavItem>
                            <NavLinks change={scroll} to ="/">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks change={scroll} to ="/AboutYou">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks change={scroll} to ="/Us">Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks change={scroll} to ="/Gallery">Gallery</NavLinks>
                        </NavItem>

                    </NavMenu>

                  

                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
