import React from 'react';
import "./ImageNavButton.css"
import ic_previous from "./previous.png";
import ic_next from "./next.png";

function NavButton(props){
    return (React.createElement("div", {className:"button " + props.direction, onClick: props.onClick},
        React.createElement("img", {className:"button_image", src:props.img, alt:props.alt}),
    ));
}

export const direction_left = "left";
export const direction_right = "right";

export const icon_previous = ic_previous;
export const icon_next = ic_next;

export default NavButton;