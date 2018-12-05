import React from 'react';
import "./ImageIndexIndicatorItem.css";

const ITEM_ARRAY_OFFSET = 1;

function ImageIndexIndicator(props){
    return (React.createElement(
        "button", 
        {
            className:determineNavigationIndicatorItemClass(props.selectedIndex === props.indicatorIndex),
            onClick: () => props.seek(props.indicatorIndex)
        },
        props.indicatorIndex+ITEM_ARRAY_OFFSET
    ));
}

function determineNavigationIndicatorItemClass(isSelected){
    return isSelected ? "indicator selected" : "indicator";
}

export default ImageIndexIndicator;