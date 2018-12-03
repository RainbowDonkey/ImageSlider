import React from 'react';
import "./ImageViewer.css"

// This component will not keep track of it's own state - functional component
function ImageViewer(props){
    return(
        <div className="image_view_container">
            <img className="image_view" src={props.item.photo} alt={props.item.description}/>
            {renderImageClickHandler(props)}
        </div>
        
    );
}

function renderImageClickHandler(props){
    // TODO: own class
    return <div id="image_click_navigation_container" className="ripple">
        <div id="left" onClick={props.previous}/>
        <div id="right" onClick={props.next}/>
    </div>
}

export default ImageViewer;