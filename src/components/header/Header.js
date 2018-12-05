import React from 'react';
import "./Header.css";

function Header(props){
    return (React.createElement("div", {className:"main-header"},
        React.createElement("h1",null,
            props.name
        )
    ));
}

export default Header;