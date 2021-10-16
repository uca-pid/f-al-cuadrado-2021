import React from 'react';
import "./style.css";
import logoHorizontal from "../../../images/logoHorizontal.png"; 
//import configurationIcon from "../../../images/configuration.png";
import { IoSettings } from "@react-icons/all-files/io5/IoSettings"; 
import { IoMenu } from "@react-icons/all-files/io5/IoMenu"; 


const Header = ({hamburger}) => {

    return (
        <div className="menuContainer">
            <button onClick={hamburger} className="setHamburger" >
                <IoMenu className = "hamburger" color="#FFFFFF"/>
            </button>
            <img src={logoHorizontal} className="logoHorizontal"/>
        </div>
    )
}

export default Header;