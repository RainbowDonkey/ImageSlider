import React from 'react';
import "./ImageNavigationButton.css";
import previous from "./previous.png";
import next from "./next.png";

function ImageNavigationButton(props){
    return(
        <div className={props.class} onClick={props.onClick}>
            <img className="button_image" src={props.icon} alt={props.alt}/>
            {props.elementToAdd}
        </div>
    );
}

export const iconPrevious = previous;
export const iconNext = next;

export const altPrevious = "previous";
export const altNext = "next";

export const classPrevious = "button left";
export const classNext = "button right";

export default ImageNavigationButton;