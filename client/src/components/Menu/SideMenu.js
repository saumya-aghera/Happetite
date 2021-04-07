import React from 'react';
import './SideMenu.css'
import { slide as Menu } from 'react-burger-menu';
//import { bubble as Menu } from 'react-burger-menu';
//import { elastic as Menu } from 'react-burger-menu';
import { Link } from "react-scroll";

const SideMenu = ({ menu }) => {
    

    const renderedMenu = menu.map((menuItem) => {

        
        return (

            <Link
                activeClass="active"
                to={menuItem.id}
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                activeStyle={{ color: 'white' }}
                className="menu-item"
            >{menuItem.title}</Link>
            
        );
    })


    return (
        <Menu>
            {renderedMenu}
      
        </Menu>
    );
}

export default SideMenu
