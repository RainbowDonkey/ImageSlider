import React from 'react';
import ImageNavigationIndicatorItem from "../indicator_item/ImageNavigationIndicatorItem";
import './ImageNavigationIndicator.css';

// This component will not keep track of it's own state - functional component
function ImageNavigationIndicator(props){
    return (
        createIndicatorItems(props)
    );
}

function createIndicatorItems(props){
    var rows = [];
    for (var i = 0; i < props.count; i++) {
        rows.push(renderImageNavigationIndicatorItem(props, i));
    }
    return <div className="indicator_container">{rows}</div>;
}

function renderImageNavigationIndicatorItem(props, i){
    return (
        <ImageNavigationIndicatorItem
            value = {i + 1}
            isSelected = {isSelectedItem(props, i)}
            onClick={() => navigate(props, i)}
        />
      );
}

function isSelectedItem(props, i){
    return props.selectedIndex === i
}

function navigate(props, buttonIndex){
    props.onClick(buttonIndex);
}

export default ImageNavigationIndicator;