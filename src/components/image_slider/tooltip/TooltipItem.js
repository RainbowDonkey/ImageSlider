import React from 'react';
import "./TooltipItem.css";

function TooltipItem(props){
    return (
        <span className={props.direction}>{props.text}</span>
    );
}

export const classTooltipTrigger = "tooltip";
export const directionLeft = "tooltiptext";
export const directionRight = "tooltiptext";
export default TooltipItem;