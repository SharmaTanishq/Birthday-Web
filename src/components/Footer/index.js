import React from 'react'
import './footer.css'
import { FaSnapchatGhost,FaInstagram,FaFacebookSquare,FaGooglePlusSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <>  
            <div className = "footer-container">
                <div className ="footer-wrap">
                    <div className = 'footer-content-wrapper'>
                        <div className = "footer-content-top">
                            <div className ="logo-holder">
                            LOREM
                            </div>
                            <div className = "links-holder" >
                                <a href ="#">Home</a>
                                <a href ="#">About</a>
                                <a href ="#">Us</a>
                                <a href ="#">Gallery</a>

                            </div>
                            <div className = "icon-holder">
                               
                                <div className = "logo">
                                <svg width="0" height="0">
                                  
                                </svg>
                                    <FaSnapchatGhost />
                                </div>
                                <div className = "logo">
                                    <FaInstagram />
                                </div>
                                <div className = "logo">
                                    <FaFacebookSquare />
                                </div>
                                <div className = "logo">
                                    <FaGooglePlusSquare />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Footer
