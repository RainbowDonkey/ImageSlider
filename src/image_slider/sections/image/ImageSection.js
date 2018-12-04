import React from 'react';
import "./ImageSection.css";
import previous from "./previous.png";
import next from "./next.png";

let currentItem;
let previousClick;
let nextClick;

// This class was refactored for neatness
function ImageSection(props){
    currentItem = props.item;
    previousClick = props.previous;
    nextClick = props.next;
    return renderImageSection();
}

// Image section
function renderImageSection(){
    return React.createElement("div", {className:"image_section"},
        renderImageView(),
        renderImageClickEventHandler(),
        renderNavigationButtonView()
    );
}

function renderImageView(){
    return React.createElement("div", {className:"image_view_container"},
        React.createElement("img", {
            className:"image_view",
            src:currentItem.photo,
            alt:currentItem.description
        })
    );
}

function renderImageClickEventHandler(){
    return React.createElement("div", {className:"image_click_navigation_container"},
        renderImagePreviousClickTrigger(),
        renderImageNextClickTrigger()
    );
}

function renderImagePreviousClickTrigger(){
    return React.createElement("div", {className:"left", onClick: previousClick});
}

function renderImageNextClickTrigger(){
    return React.createElement("div", {className:"right", onClick: nextClick});
}

function renderNavigationButtonView(){
    return React.createElement("div", {className:"button_body"},
        React.createElement("div", {className:"button_container"}, 
            React.createElement("div", {className:"button_container_inner"},
                renderLeftNavigationButton(),
                renderRightNavigationButton()
            )
        )
    );
}

function renderLeftNavigationButton(){
    return React.createElement("div", {className:"button left", onClick: previousClick},
        React.createElement("img", {className:"button_image", src:previous, alt:"previous"})
    );
}

function renderRightNavigationButton(){
    return React.createElement("div", {className:"button right", onClick: nextClick},
        React.createElement("img", {className:"button_image", src:next, alt:"next"})
    );
}
// Image section

export default ImageSection;