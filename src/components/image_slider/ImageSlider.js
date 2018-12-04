import React, {Component} from 'react';
import "./ImageSlider.css";
import previous from "./previous.png";
import next from "./next.png";

const ITEM_ARRAY_OFFSET = 1;
let index = 0;
let leftOffset = 0;

class ImageSlider extends Component{
    constructor(props){
        super(props);

        this.state = {
            items : this.getItems()
        };
    }

    // TODO: hook up to backend
    getItems(){
        return [
            {
                'photo':'https://images.pexels.com/photos/692103/pexels-photo-692103.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                'description':'City'
            },
            {
                'photo':'https://images.pexels.com/photos/15381/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'description':'Clouds'
            },
            {
                'photo':'https://images.pexels.com/photos/787623/pexels-photo-787623.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'description':'Beach'
            },
            {
                'photo':'https://images.pexels.com/photos/1094246/pexels-photo-1094246.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'description':'Plants'
            },
            {
                'photo':'https://images.pexels.com/photos/1638382/pexels-photo-1638382.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
                'description':'Sea'
            }
        ];
    }

    render(){
        return(
            React.createElement("div", {className:"main-container"}, 
                this.createDummyNav(),
                this.createBody()
            )
        );
    }

    createDummyNav(){
        return React.createElement("div", {className:"nav_container"}, 
            <ul className="topnav">
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li className="right"><a href="#about">About</a></li>
            </ul>
        );
    }

    createBody(){
        return React.createElement("div", {className:"body"}, 
            React.createElement("div", {className:"slider_container"},
                this.createDummyWebsiteHeader(),
                React.createElement("div", {className:"image_section"},
                    this.createImageSection()
                ),
                React.createElement("div", {className:"info_section"},
                    this.createInfoSection()
                )
            )
        );
    }

    createDummyWebsiteHeader(){
        return React.createElement("div", {className:"main-header"},
            React.createElement("h1",null,
                "BNRY"
            )
        );
    }

    // Image section
    createImageSection(){
        return React.createElement("div", {className:"image_section"},
            this.createImageViewContainer(),
            this.createImageClickEventHandler(),
            this.createNavigationButtonView()
        );
    }

    createImageViewContainer(){
        var rows = [];
        for (var i = 0; i < this.getItemCount(); i++) {
            rows.push(this.createImageView(this.getLoadedItems()[i]));
        }
    
        return React.createElement("div", {className:"image_view_container"},
            React.createElement("figure",{id:"slider", className:"test", style:{width:100*this.getItemCount()+"%"}}, 
                rows
            )
        );
    }

    createImageView(item){
        return React.createElement("img", {
            className:"image_view",
            src:item.photo,
            alt:item.description
        })
    }

    createImageClickEventHandler(){
        return React.createElement("div", {className:"image_click_navigation_container"},
            this.createImagePreviousClickTrigger(),
            this.createImageNextClickTrigger()
        );
    }

    createImagePreviousClickTrigger(){
        return React.createElement("div", {className:"left", onClick: () => this.previous()});
    }

    createImageNextClickTrigger(){
        return React.createElement("div", {className:"right", onClick: () => this.next()});
    }

    createNavigationButtonView(){
        return React.createElement("div", {className:"button_body"},
            React.createElement("div", {className:"button_container"}, 
                React.createElement("div", {className:"button_container_inner"},
                    this.createLeftNavigationButton(),
                    this.createRightNavigationButton()
                )
            )
        );
    }

    createLeftNavigationButton(){
        return React.createElement("div", {className:"button left tooltip", onClick: () => this.previous()},
            React.createElement("img", {className:"button_image", src:previous, alt:"previous"}),
            this.createTooltip("tooltip_previous",this.getLoadedItems()[this.getPreviousIndex()].description)
        );
    }

    createRightNavigationButton(){
        return React.createElement("div", {className:"button right tooltip", onClick: () => this.next()},
            React.createElement("img", {className:"button_image", src:next, alt:"next"}),
            this.createTooltip("tooltip_next", this.getLoadedItems()[this.getNextItemIndex()].description)
        );
    }

    createTooltip(id, text){
        return React.createElement("div", {className:"tooltip"}, 
            React.createElement("span", {id: id, className:"tooltiptext"}, text)
        );
    }
    // Image secion

    // Info section
    createInfoSection(){
        return React.createElement("div", {className:"info_section"},
            this.createNavigationIndexIndicator(),
            this.createImageDescriptionArea()
        );
    }

    createNavigationIndexIndicator(){
        var rows = [];
        for (var i = 0; i < this.getItemCount(); i++) {
            rows.push(this.createImageNavigationIndicatorItem(i));
        }
        return React.createElement("div", {id:"indicator_container", className:"indicator_container"}, rows);
    }

    createImageNavigationIndicatorItem(i){
        return React.createElement(
            "button", 
            {
                className:this.determineNavigationIndicatorItemClass(this.getSelectedItemIndex() === i),
                onClick: () => this.seek(i)
            },
            i+ITEM_ARRAY_OFFSET
        );
    }

    determineNavigationIndicatorItemClass(isSelected){
        return isSelected ? "indicator selected" : "indicator";
    }

    createImageDescriptionArea(){
        return React.createElement("div", {className:"description_container"}, 
            React.createElement("p", {id:"description", className:"description"}, this.getCurrentItem().description)
        );
    }
    // Info section

    // General 
    getItemCount(){
        return this.getItems().length;
    }

    getLoadedItems(){
        return this.state.items;
    }

    getSelectedItemIndex(){
        return index;
    }

    getCurrentItem(){
        return this.getLoadedItems()[this.getSelectedItemIndex()];
    }

    next(){
        this.changeItemIndex(this.getNextItemIndex());
        this.update();
    }

    getNextItemIndex(){
        if(this.isLastImage()){
            return 0;
        }
        else{
            var temp = index;
            return ++temp;
        }
    }

    isLastImage(){
        return (this.getItemCount() - ITEM_ARRAY_OFFSET) === index;
    }

    previous(){
        this.changeItemIndex(this.getPreviousIndex());
        this.update();
    }

    getPreviousIndex(){
        if(this.isFirstImage()){
            return this.getItemCount() - ITEM_ARRAY_OFFSET;
        }
        else{
            var temp = index;
            return --temp;
        }
    }

    isFirstImage(){
        return this.getSelectedItemIndex() === 0;
    }

    seek(i){
        this.changeItemIndex(i);
        this.update();
    }

    changeItemIndex(i){
        index = i;
    }

    update(){
        this.updateViewedImage();
        this.updateTooltips();
        this.updateIndicator();
        this.updateDescription();
    }

    updateViewedImage(){
        leftOffset = - index * 100;
        document.getElementById("slider").style.left = leftOffset + "%";
    }

    updateTooltips(){
        document.getElementById("tooltip_previous").innerHTML = this.getLoadedItems()[this.getPreviousIndex()].description;
        document.getElementById("tooltip_next").innerHTML = this.getLoadedItems()[this.getNextItemIndex()].description;
    }

    updateIndicator(){
        var container = document.getElementById("indicator_container");
        var count = container.childElementCount;
        var children = container.childNodes;

        for(var i = 0; i < count; i++){
            var child = children[i];
            child.className = this.determineNavigationIndicatorItemClass(this.getSelectedItemIndex() === i);
        }
    }

    updateDescription(){
        document.getElementById("description").innerHTML = this.getCurrentItem().description;
    }
    // General
}

export default ImageSlider;