import React from 'react';
import "./ImageDescription.css";

function ImageDescription(props){
    return (React.createElement("div", {className:"description_container"}, 
        React.createElement("p", {id:"description", className:"description"}, props.description)
    ));
}

export default ImageDescription;