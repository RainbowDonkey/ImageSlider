import React from 'react';
import "./InfoSection.css";

let itemCount;
let selectedIndex;
let currentSelectedItem;
let func_updateIndex;

function InfoSection(props){
    itemCount = props.count;
    selectedIndex = props.index;
    currentSelectedItem = props.item;
    func_updateIndex = props.setIndex;
    return renderInfoSection();
}

// Info section
function renderInfoSection(){
    return React.createElement("div", {className:"info_section"},
        renderNavigationIndexIndicator(),
        renderImageDescriptionArea()
    );
}

function renderNavigationIndexIndicator(){
    var rows = [];
    for (var i = 0; i < itemCount; i++) {
        rows.push(renderImageNavigationIndicatorItem(i));
    }
    return React.createElement("div", {className:"indicator_container"}, rows);
}

function renderImageNavigationIndicatorItem(i){
    return React.createElement(
        "button", 
        {
            className:determineNavigationIndicatorItemClass(selectedIndex === i),
            onClick: () => func_updateIndex(i)
        },
        i
    );
}

function determineNavigationIndicatorItemClass(isSelected){
    return isSelected ? "indicator selected" : "indicator";
}

function renderImageDescriptionArea(){
    return React.createElement("div", {className:"description_container"}, 
        React.createElement("p", {className:"description"}, currentSelectedItem.description)
    );
}
// Info section

export default InfoSection;