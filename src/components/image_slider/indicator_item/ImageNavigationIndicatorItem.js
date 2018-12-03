import React from 'react';
import './ImageNavigationIndicatorItem.css';

// This component will not keep track of it's own state - functional component
function ImageNavigationIndicatorItem(props){
    return (
        <button className={determineItemClass(props.isSelected)} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

function determineItemClass(isSelected){
    return isSelected ? "indicator selected" : "indicator";
}

export default ImageNavigationIndicatorItem;