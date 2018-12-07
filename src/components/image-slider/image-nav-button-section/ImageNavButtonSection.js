import React from 'react';
import "./ImageNavButtonSection.css";
import ImageNavButton, {direction_left, direction_right, icon_previous, icon_next} from "../../image-nav-button/ImageNavButton";
import Tooltip from "../../tooltip/Tooltip";

function ImageNavButtonView(props){
    return (React.createElement("div", {className:"button_body"},
        React.createElement("div", {className:"button_container"}, 
            React.createElement("div", {className:"button_container_inner"},
                createLeftNavigationButton(props),
                createRightNavigationButton(props)
            )
        )
    ));
}

function createLeftNavigationButton(props){
    return createBtn(props.previousDesc, direction_left, icon_previous, "previous", props.previous);
}

function createRightNavigationButton(props){
    return createBtn(props.nextDesc, direction_right, icon_next, "next", props.next);
}

function createBtn(text, direction, icon, alt, click){
    return (
        React.createElement("div", {className:"button_tooltip_wrapper " + direction},
            React.createElement(ImageNavButton, {direction:direction, img:icon, alt: alt, onClick: click, tooltip: React.createElement(Tooltip, {text:text})}),
        )
    );
}

export default ImageNavButtonView;