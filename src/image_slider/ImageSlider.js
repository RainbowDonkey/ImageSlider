import React, { Component } from 'react';
import "./ImageSlider.css";
import ImageSection from "./sections/image/ImageSection";
import InfoSection from "./sections/info/InfoSection"

const ITEM_ARRAY_OFFSET = 1;

class ImageSlider extends Component{
    constructor(props){
        super(props);

        this.state = {
            index : 0,

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

    // Render
    render(){
        return(
            React.createElement("div", {className:"body"}, 
                React.createElement("div", {className:"slider_container"},
                    React.createElement(ImageSection, {
                        item: this.getCurrentItem(),
                        previous: () => this.previous(),
                        next: () => this.next()
                    }),
                    React.createElement(InfoSection, {
                        count:this.getItemCount(),
                        index:this.getSelectedItemIndex(),
                        item: this.getCurrentItem(),
                        setIndex: i => this.changeItemIndex(i)
                    })
                )
            )
        );
    }
    // Render

    // General methods
    getItemCount(){
        return this.getItems().length;
    }

    getLoadedItems(){
        return this.state.items;
    }

    getSelectedItemIndex(){
        return this.state.index;
    }

    getCurrentItem(){
        return this.getLoadedItems()[this.getSelectedItemIndex()];
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
    // General methods
}

export default ImageSlider;