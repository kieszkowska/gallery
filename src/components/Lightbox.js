import React, { Component } from 'react';

class Lightbox extends Component {

    render() {
        if (this.props.index !== null) {
            return (
                <div className='row lightbox'>

                    <div className='col-12'>
                        <button type="button" className="close" aria-label="Close" onClick={ () => this.closeLightbox() }>
                            <span className='display-4' aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className='col-1 text-center' onClick={ () => this.previousPhoto() }>
                        <span className="fas fa-chevron-left text-black-50 h1"></span>
                    </div>

                    <div className='col-10 justify-content-between align-content-center'>
                        <img className='img-fluid' src={ this.props.photos[this.props.index] } alt=' ' />
                    </div>

                    <div className='col-1 text-center' onClick={ () => this.nextPhoto() }>
                        <span className="fas fa-chevron-right text-black-50 h1"></span>
                    </div>

                </div>
            );
        } else {
            return (null);
        }
    }

    previousPhoto() {
        this.props.handler(this.props.index - 1);
    }

    nextPhoto() {
        this.props.handler(this.props.index + 1);
    }

    closeLightbox() {
        this.props.handler(null);
    }
}

export default Lightbox;
