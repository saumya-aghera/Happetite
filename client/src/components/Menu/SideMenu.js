import React from 'react';
import './SideMenu.css'
import { slide as Menu } from 'react-burger-menu';
//import { bubble as Menu } from 'react-burger-menu';
//import { elastic as Menu } from 'react-burger-menu';
import { Link } from "react-scroll";
import { MDBIcon } from 'mdbreact';

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
            >{menuItem.title}
            
                {menuItem.sectionComplete ?<span>
                                         <MDBIcon icon="fa fa-check-circle" style={{ fontSize: "20px", color:'green', marginLeft:'7px', marginRight:'5px'}} />
                                    </span> :null} 
           </Link>
            
        );
    })


    return (
        <Menu>
            {renderedMenu}
      
        </Menu>
    );
}

export default SideMenu
