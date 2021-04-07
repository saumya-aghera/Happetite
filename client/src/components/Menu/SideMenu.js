import React from 'react';
import './SideMenu.css'
import { slide as Menu } from 'react-burger-menu';
//import { bubble as Menu } from 'react-burger-menu';
//import { elastic as Menu } from 'react-burger-menu';
import { Link } from "react-scroll";

const SideMenu = () => {
    return (
        <Menu>
            <Link
                activeClass="active"
                to="hopeVideo"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                activeStyle={{ color: 'white'}}
                className="menu-item"
            >Hope Theory</Link>
            
            <Link
                activeClass="active"
                to="hopeBox"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                activeStyle={{ color: 'white' }}
                className="menu-item"
            >Hope Box</Link>

            <Link
                activeClass="active"
                to="hopeQuiz"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                activeStyle={{ color: 'white' }}
                className="menu-item"
            >Take this Quiz</Link>

            <Link
                activeClass="active"
                to="homeAssignment"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                activeStyle={{ color: 'white' }}
                className="menu-item"
            >Home Assignment</Link>
            <Link
                activeClass="active"
                to="worksheet"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                activeStyle={{ color: 'white' }}
                className="menu-item"
            >Worksheet</Link>
      
        </Menu>
    );
}

export default SideMenu
