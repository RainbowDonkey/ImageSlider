import React from 'react';
import "./FullPageLoader.css";

function FullPageLoader(){
    return (
        React.createElement("div", {id:"loader-wrapper"}, 
            React.createElement("div", {id:"loader"}),

            React.createElement("div", {className:"loader-section section-left"}),
            React.createElement("div", {className:"loader-section section-right"}),
        )
    );
}

export default FullPageLoader;