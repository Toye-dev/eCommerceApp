import React from "react";
import { AppContext } from './AppContext';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { Link } from "react-router-dom";

const NavDrop = () => {
    const { navDrop, handleNavHide } = useContext(AppContext)


    return (
        <>
        <div className={`navDrop ${navDrop ? 'active' : ""}`}>
            <Link   
                to="/" 
                onClick={handleNavHide}
                style={{textDecoration: 'none', color: '#dcc7b2ee'}}
            >
                <div className="menuItem">                
                    <span className="text">HOME</span>
                    <span className="underline">********</span>
                </div>
            </Link>

            <Link 
                to="about"
                onClick={handleNavHide}
                style={{textDecoration: 'none', color: '#dcc7b2ee'}}
            >
                <div className="menuItem">
                    <span className="text">ABOUT</span>
                    <span className="underline">*********</span>             
                </div>
            </Link>

            <Link 
                to="workshop" 
                onClick={handleNavHide}
                style={{textDecoration: 'none', color: '#dcc7b2ee'}}
            >
                <div className="menuItem">
                    <span className="text">WORKSHOPS</span>
                    <span className="underline">******************</span>
                </div>
            </Link>
            
            <div className="instagramwrap">
                <div className="menuItem">
                    <a 
                        href="https://www.instagram.com/tomiescakes/"  
                        target="_blank" 
                        rel="noopener noreferrer" >
                        <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '40px', color: '#342f26' }} />
                    </a>
                    <span className="underline"></span>
                </div>
            </div>

            <div className="contactwrap">
                <div className="menuItem number">
                    <span className="contact">
                        <a href="tel:09033935376" style={{textDecoration: 'none', color: '#dcc7b2fc'}}><span className="tel">tel: </span>
                            +234 903 393 5376
                        </a>
                    </span>
                    <span className="underline">*********</span>
                </div>
            </div>

    
        </div>
        </>
    );
}

export default  NavDrop;