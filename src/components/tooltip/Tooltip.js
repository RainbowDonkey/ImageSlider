import React from 'react';
import "./Tooltip.css";

function Tooltip(props){
    return (React.createElement("div", {className:"tooltip"}, 
        React.createElement("span", {className:"tooltiptext"}, props.text)
    ));
}

export default Tooltip;