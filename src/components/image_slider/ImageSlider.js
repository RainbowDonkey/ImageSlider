import React, { Component } from 'react';
import ImageViewer from "./image/ImageViewer";
import ImageNavigationButton, {iconPrevious, iconNext, altPrevious, altNext, classPrevious, classNext} from "./button/ImageNavigationButton";
import TooltopItem, {classTooltipTrigger, directionLeft,directionRight} from "./tooltip/TooltipItem"
import ImageNavigationIndicator from "./indicator/ImageNavigationIndicator";
import "./ImageSlider.css";

const ITEM_ARRAY_OFFSET = 1;

class ImageSlider extends Component{
    constructor(props){
        super(props);

        this.state = {
            index : 0,

            items : [
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
            ]
        };
    }

    render(){
        return(
            <div className="body">
                <div className="slider_container">
                    <div className="image_section">
                        {this.renderImageViewer()}
                        <div className="button_body">
                            <div className="button_container">
                                <div className="button_container_inner">
                                    {
                                        this.renderNavigationButtonWithToolTip(
                                            iconPrevious,
                                            altPrevious,
                                            classPrevious,
                                            () => this.previous(),
                                            this.renderNavigationButtonTooltip(
                                                this.state.items[this.getPreviousIndex()].description,
                                                directionRight
                                            )
                                        )
                                    }

                                    {
                                        this.renderNavigationButtonWithToolTip(
                                            iconNext, 
                                            altNext, 
                                            classNext, 
                                            () => this.next(), 
                                            this.renderNavigationButtonTooltip(
                                                this.state.items[this.getNextItemIndex()].description,
                                                directionLeft
                                            )
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info_section">
                        {this.renderItemNavigationIndicator(this.getItemCount())}
                        {this.renderImageDescriptionArea()}
                    </div>
                </div>
            </div>
        );
    }

    renderImageViewer(){
        return <ImageViewer 
        item={this.getSelectedItem()}
        next={() => this.next()}
        previous={() => this.previous()}/>
    }

    getSelectedItem(){
        return this.state.items[this.state.index]
    }

    renderNavigationButtonWithToolTip(icon, alt, c, onClick, tooltip){
        return <ImageNavigationButton 
        icon={icon} 
        alt={alt}
        class={c + " " + classTooltipTrigger}
        onClick={onClick}
        elementToAdd={tooltip}/>
    }

    renderNavigationButton(icon, alt, c, onClick){
        return <ImageNavigationButton 
        icon={icon} 
        alt={alt}
        class={c}
        onClick={onClick}/>
    }

    renderNavigationButtonTooltip(text, direction){
        return <TooltopItem 
        text={text}
        direction={direction}/>
    }

    renderItemNavigationIndicator(count){
        return <ImageNavigationIndicator 
        count={count} 
        selectedIndex = {this.state.index}
        onClick={i => this.changeItemIndex(i)} />;
    }

    renderImageDescriptionArea(){
        // TODO: own class ?
        return <div className="description_container">
            <p className="description">{this.state.items[this.state.index].description}</p>
        </div>
    }

    getSelectedIndex(){
        return this.state.index;
    }

    getItemCount(){
        return this.state.items.length;
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
        return this.getSelectedIndex() === 0;
    }

    changeItemIndex(i){
        this.setState({
            index : i
        });
    }
}

export default ImageSlider;