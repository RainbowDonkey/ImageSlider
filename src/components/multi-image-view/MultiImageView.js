import React, {Component} from 'react';
import "./MultiImageView.css";

function MultiImageView(props){
    var rows = [];

    for (var i = 0; i < props.items.length; i++) {
        rows.push(createImageView(props.items[i]));
    }

    return React.createElement("div", {className:"image_view_container"},
        React.createElement("figure",{id:"slider", className:"test", style:{width:calculateWidth(props.items.length), left:calculateLeftOffset(props.index)}}, 
            rows
        )
    );
}

function createImageView(item){
    return React.createElement("img", {
        className:"image_view",
        key:item.id,
        src:item.photo,
        alt:item.description
    })
}

function calculateWidth(count){
    return 100*count+"%"
}

function calculateLeftOffset(selectedIndex){
    var leftOffset = - selectedIndex * 100;
    //document.getElementById("slider").style.left = leftOffset + "%";
    return leftOffset + "%";
}

export default MultiImageView;