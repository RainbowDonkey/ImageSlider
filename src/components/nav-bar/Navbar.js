import React from 'react';
import "./Navbar.css";

// TODO: take li items in as props
function Header(props){
    return (React.createElement("div", {className:"nav_container"}, 
        <ul className="topnav">
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className="right"><a href="#about">About</a></li>
        </ul>
    ));
}

export default Header;