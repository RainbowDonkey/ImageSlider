import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ImageSlider from './image_slider/ImageSlider';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ImageSlider/>, document.getElementById('root'));
serviceWorker.register();
