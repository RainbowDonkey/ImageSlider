import React from 'react';
import "./ImageIndexIndicator.css";
import ImageIndexIndicatorItem from "../../image-index-indicator-item/ImageIndexIndicatorItem";

function ImageIndexIndicator(props){
    var rows = [];
    for (var i = 0; i < props.count; i++) {
        rows.push(
            React.createElement(
                ImageIndexIndicatorItem, 
                {
                    key:i,
                    selectedIndex:props.index,
                    indicatorIndex:i,
                    seek: props.seek
                }
            )
        );
    }
    return (React.createElement("div", {className:"indicator_container"}, rows));
}

export default ImageIndexIndicator;