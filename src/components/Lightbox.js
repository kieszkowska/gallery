import React, { Component } from 'react';

class Lightbox extends Component {

    render() {
        if (this.props.index !== null) {
            return (
                <div className='row lightbox'>

                    <div className='vh-100 col-auto text-center d-flex flex-column justify-content-center chevron'
                         onClick={ () => this.previousPhoto() }
                    >
                        <span className="fas fa-chevron-left text-black h1">{ null }</span>
                    </div>

                    <div className='vh-100 col justify-content-between align-content-center d-flex justify-content-center align-content-center img-container'>
                        <img className='img-fluid lightbox-img' src={ this.props.photos[this.props.index] } alt=' ' />
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
        } else {
            return (null);
        }
    }

    previousPhoto() {
        let newVal = this.props.index === 0 ? this.props.photos.length - 1 : this.props.index - 1;
        console.log(newVal);
        this.props.handler(newVal);
    }

    nextPhoto() {
        let newVal = this.props.index === this.props.photos.length - 1 ? 0 : this.props.index + 1;
        console.log(newVal);
        this.props.handler(newVal);
    }

    closeLightbox() {
        this.props.handler(null);
    }
}

export default Lightbox;
