import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Photo from'./Photo';

let food = [
    '/food/1.jpg', '/food/2.jpg', '/food/3.jpg', '/food/4.jpg', '/food/5.jpg', '/food/6.jpg', '/food/7.jpg',
    '/food/8.jpg', '/food/9.jpg',
];
let interior = [
    '/interior/1.jpg', '/interior/2.jpg', '/interior/3.jpg', '/interior/4.jpg', '/interior/5.jpg', '/interior/6.jpg',
    '/interior/7.jpg', '/interior/8.jpg', '/interior/9.jpg', '/interior/10.jpg',
];
let landscape = [
    '/landscape/1.jpg', '/landscape/2.jpg', '/landscape/3.jpg', '/landscape/4.jpg', '/landscape/5.jpg',
    '/landscape/6.jpg', '/landscape/7.jpg', '/landscape/8.jpg', '/landscape/9.jpg', '/landscape/10.jpg',
    '/landscape/11.jpg', '/landscape/12.jpg',
];
let portraits = [
    '/portraits/1.jpg', '/portraits/2.jpg', '/portraits/3.jpg', '/portraits/4.jpg', '/portraits/5.jpg',
    '/portraits/6.jpg', '/portraits/7.jpg', '/portraits/8.jpg', '/portraits/9.jpg', '/portraits/10.jpg',
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
                                <Photo srcPreload={ '/img/small' + this.galleries.photos[i][0] }
                                       srcLoaded={ '/img' + this.galleries.photos[i][0] }
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
