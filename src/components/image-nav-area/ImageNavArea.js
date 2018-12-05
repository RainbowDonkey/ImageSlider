import React from 'react';
import "./ImageNavArea.css";

function ImageNavArea(props){
    return (React.createElement("div", {className:props.direction, onClick: props.onClick}));
}

export const direction_left = "left";
export const direction_right = "right";

export default ImageNavArea;