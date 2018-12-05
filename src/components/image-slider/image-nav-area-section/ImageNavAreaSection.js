import React from 'react';
import "./ImageNavAreaSection.css";
import ImageNavArea, {direction_left, direction_right} from "../../image-nav-area/ImageNavArea";

function ImageNavAreaSection(props){
    return (
        React.createElement("div", {className:"image_click_navigation_container"},
            createImagePreviousClickTrigger(props),
            createImageNextClickTrigger(props)
        )
    );
}

function createImagePreviousClickTrigger(props){
    return (
        React.createElement(ImageNavArea, {direction: direction_left, onClick: props.previous})
    );
}

function createImageNextClickTrigger(props){
    return (
        React.createElement(ImageNavArea, {direction: direction_right, onClick: props.next})
    );
}

export default ImageNavAreaSection;