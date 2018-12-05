import React, {Component} from 'react';
import "./ImageSlider.css";

// Component imports
import MultiImageView from "../multi-image-view/MultiImageView";
import ImageIndexIndicator from "../image-index-indicator/ImageIndexIndicator";
import ImageDescription from "../image-description/ImageDescription";
// Component imports

// Sections
import ImageNavAreaSection from "./image-nav-area-section/ImageNavAreaSection";
import ImageNavButtonSection from "./image-nav-button-section/ImageNavButtonSection";
// Sections

const ITEM_ARRAY_OFFSET = 1;
let loadedItems;

class ImageSlider extends Component{
    constructor(props){
        super(props);
        this.state = {
            index : 0
        };
    }
    
    render (){
        loadedItems = this.props.items;

        return (
            React.createElement("div", {className:"slider_container"},
                this.createImageSection(),
                this.createInfoSection()
            )
        );
    };

    // Compositional component - section
    createImageSection(){
        return (React.createElement("div", {className:"image_section"},
            // Multi-Image-View
            React.createElement(MultiImageView, {items: this.getLoadedItems(), index: this.getSelectedItemIndex()}),
            // Image-View-Nav-Area
            React.createElement(ImageNavAreaSection, {previous: () => this.previous(), next: () => this.next()}),
            // Image-View-Nav-Button
            React.createElement(ImageNavButtonSection, {previous: () => this.previous(), next: () => this.next()})
        ));
    }

    // Compositional component - section
    createInfoSection(){
        return (React.createElement("div", {className:"info_section"},
            // Image-Index-Indicator
            this.createImageIndexIndicator(),
            // Image-Description
            React.createElement(ImageDescription, {description:this.getCurrentItem().description})
        ));
    }

    createImageIndexIndicator(){
        var rows = [];
        for (var i = 0; i < this.getItemCount(); i++) {
            rows.push(
                React.createElement(
                    ImageIndexIndicator, 
                    {
                        selectedIndex:this.getSelectedItemIndex(),
                        indicatorIndex:i,
                        seek: i => this.seek(i)
                    }
                )
            );
        }
        return React.createElement("div", {className:"indicator_container"}, rows);
    }

    // General
    getItemCount(){
        return this.getLoadedItems().length;
    }

    getLoadedItems(){
        return loadedItems;
    }

    getSelectedItemIndex(){
        return this.state.index;
    }

    getCurrentItem(){
        return this.getLoadedItems()[this.getSelectedItemIndex()];
    }

    seek(i){
        this.changeItemIndex(i);
    }

    next(){
        this.changeItemIndex(this.getNextItemIndex());
    }

    getNextItemIndex(){
        if(this.isLastImage()){
            return 0;
        }
        else{
            var temp = this.state.index;
            return ++temp;
        }
    }

    isLastImage(){
        return (this.getItemCount() - ITEM_ARRAY_OFFSET) === this.state.index;
    }

    previous(){
        this.changeItemIndex(this.getPreviousIndex());
    }

    getPreviousIndex(){
        if(this.isFirstImage()){
            return this.getItemCount() - ITEM_ARRAY_OFFSET;
        }
        else{
            var temp = this.state.index;
            return --temp;
        }
    }

    isFirstImage(){
        return this.getSelectedItemIndex() === 0;
    }

    changeItemIndex(i){
        this.setState({
            index : i
        });
    }
    // General
}

export default ImageSlider;