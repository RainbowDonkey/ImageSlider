import React, { Component } from 'react';
import './App.css';

// Component imports
import Navbar from "./components/nav-bar/Navbar";
import Header from "./components/header/Header";
import ImageSlider from "./components/image-slider/ImageSlider";
import FullPageLoader from "./components/full-page-loader/FullPageLoader";
// Component imports

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        items : null //this.getItems()
    };
  }

  componentWillMount() {
    this.renderData();
  }

  // TODO: hook up to backend
  /*getItems(){
    return [
        {
            'id':'1',
            'photo':'https://images.pexels.com/photos/692103/pexels-photo-692103.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'description':'City'
        },
        {
            'id':'2',
            'photo':'https://images.pexels.com/photos/15381/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260',
            'description':'Clouds'
        },
        {
            'id':'3',
            'photo':'https://images.pexels.com/photos/787623/pexels-photo-787623.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            'description':'Beach'
        },
        {
            'id':'4',
            'photo':'https://images.pexels.com/photos/1094246/pexels-photo-1094246.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            'description':'Plants'
        },
        {
            'id':'5',
            'photo':'https://images.pexels.com/photos/1638382/pexels-photo-1638382.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            'description':'Sea'
        }
    ];
  }*/

  renderData(){
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
        .then(this.checkReponse)
        .then(response => response.json())
        .then(data => data.map(item => ({ id:item.id, photo: item.url, description: item.title })))
        .then(data => this.setState({items: data}))
        .catch(error => console.log("An error occurred: " + error));
  }

  checkReponse(response){
    if(response.ok){
      return Promise.resolve(response);
    }
    else{
      return Promise.reject(new Error(response.statusText));
    }
  }

  render() {
    return (
      React.createElement("div", {className:"main-container"}, 
        React.createElement(Navbar, null),
        this.createBody()
      )
    );
  }

  createBody(){
    return (
      this.state.items ? this.createContent() : this.createPlaceholder()
    );
  }

  createContent(){
    return (
      React.createElement("div", {className:"body"}, 
        React.createElement(Header, {name: "BNRY"}),
        React.createElement(ImageSlider, {items:this.state.items})
      )
    );
  }

  createPlaceholder(){
    return (React.createElement(FullPageLoader, null));
  }
  
}

export default App;
