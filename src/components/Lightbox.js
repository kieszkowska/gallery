import React, { Component } from 'react';

class Lightbox extends Component {

    componentDidUpdate(prevProps) {
        if (prevProps.index === null && this.props.index !== null) {
            slideDown('lightbox', -100);
        } else if (prevProps.index !== null && this.props.index === null) {
            document.getElementById('lightbox-img').setAttribute('src', '/img' + prevProps.photos[prevProps.index]);
            slideUp('lightbox', 0);
        }
    }

    render() {
        // if (this.props.index !== null) {
            return (
                <div className='row' id='lightbox'>

                    <div className='vh-100 col-auto text-center d-flex flex-column justify-content-center chevron'
                         onClick={ () => this.previousPhoto() }
                    >
                        <span className="fas fa-chevron-left text-black h1">{ null }</span>
                    </div>

                    <div className='col d-flex justify-content-center align-content-center img-container'>
                        <img className='img-fluid lightbox-img' id='lightbox-img' src={ '/img' + this.props.photos[this.props.index] } alt=' ' />
                    </div>

                    <div className='vh-100 col-auto text-center d-flex flex-column justify-content-center chevron'
                         onClick={ () => this.nextPhoto() }
                    >
                        <span className="fas fa-chevron-right text-black h1">{ null }</span>
                    </div>

                    <div className='col-auto mr-4'>
                        <button type="button" className="close" aria-label="Close" onClick={ () => this.closeLightbox() }>
                            <span className='display-4' aria-hidden="true">&times;</span>
                        </button>
                    </div>

                </div>
            );
        // } else {
        //     return (null);
        // }
    }

    previousPhoto() {
        let newVal = this.props.index === 0 ? this.props.photos.length - 1 : this.props.index - 1;
        this.props.handler(newVal);
    }

    nextPhoto() {
        let newVal = this.props.index === this.props.photos.length - 1 ? 0 : this.props.index + 1;
        this.props.handler(newVal);
    }

    closeLightbox() {
        this.props.handler(null);
    }
}

function slideDown(el, h) {
    let element = document.getElementById(el);
    let top = h;
    if (top < 0) {
        top += 1;
        setTimeout(function () {
            element.style.top = top + 'vh';
            slideDown(el, top);
        }, 1)
    }
}

function slideUp(el, h) {
    let element = document.getElementById(el);
    let top = h;
    if (top > -100) {
        top -= 1;
        setTimeout(function () {
            element.style.top = top + 'vh';
            slideUp(el, top);
        }, 0.1)
    }
}

export default Lightbox;
