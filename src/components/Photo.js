import React, { Component } from 'react';

class Photo extends Component {

    constructor(props) {
        super(props);
        this.fullSizeImg = null;
    }

    componentDidMount() {
        const loaderImg = new Image();
        loaderImg.src = this.props.srcLoaded;
        loaderImg.onload = () => {
            if (this.fullSizeImg !== null) {
                this.fullSizeImg.setAttribute('style', `background-image: url('${this.props.srcLoaded}')`);
                this.fullSizeImg.classList.add('image-fade-in');
            }
        }
    };

    render() {
        return (
            <div className="image-container">
                <div className="image-loaded" ref={ imageLoaded => this.fullSizeImg = imageLoaded }>
                </div>
                <div className="image-preload" style={{ backgroundImage: `url('${this.props.srcPreload}')` }}>
                </div>
            </div>
        )
    }
}

export default Photo;
