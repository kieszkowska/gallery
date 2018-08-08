import React, { Component } from 'react';
import { Link } from "react-router-dom";

let food = [
    '/img/food/1.jpg', '/img/food/2.jpg', '/img/food/3.jpg', '/img/food/4.jpg', '/img/food/5.jpg', '/img/food/6.jpg',
    '/img/food/7.jpg', '/img/food/8.jpg', '/img/food/9.jpg',
];
let interior = [
    './img/interior/1.jpg', './img/interior/2.jpg', './img/interior/3.jpg', './img/interior/4.jpg',
    './img/interior/5.jpg', './img/interior/6.jpg', './img/interior/7.jpg', './img/interior/8.jpg',
    './img/interior/9.jpg', './img/interior/10.jpg',
];
let landscape = [
    './img/landscape/1.jpg', './img/landscape/2.jpg', './img/landscape/3.jpg', './img/landscape/4.jpg',
    './img/landscape/5.jpg', './img/landscape/6.jpg', './img/landscape/7.jpg', './img/landscape/8.jpg',
    './img/landscape/9.jpg', './img/landscape/10.jpg', './img/landscape/11.jpg', './img/landscape/12.jpg',
];
let portraits = [
    './img/portraits/1.jpg', './img/portraits/2.jpg', './img/portraits/3.jpg', './img/portraits/4.jpg',
    './img/portraits/5.jpg', './img/portraits/6.jpg', './img/portraits/7.jpg', './img/portraits/8.jpg',
    './img/portraits/9.jpg', './img/portraits/10.jpg',
];
let galleries = [food, interior, landscape, portraits];

class Album extends Component {
    constructor(props) {
        super(props);
        this.galleries = {
            titles: ['Food', 'Interior', 'Landscape', 'Portraits'],
            photos: galleries
        };
    }

    render() {
        return (
            <div className='row'>
                { this.galleries.titles.map((el, i) => {
                    return (
                        <div className='col-12 col-sm-6 col-md-4 col-lg-3 albumCover' key={ i }>
                            <Link to={{ pathname: '/gallery', state: { photos: this.galleries.photos[i], title: el } }} className="link">
                                <img className='img-fluid cover'
                                     src={ process.env.PUBLIC_URL + this.galleries.photos[i][0] }
                                     alt={ el + ' cover'}
                                />
                            </Link>
                            <span className='p-2'>{ el }</span>
                        </div>
                    );
                }) }
            </div>
        );
    }
}

export default Album;
