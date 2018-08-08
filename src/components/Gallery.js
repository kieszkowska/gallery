import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Lightbox from './Lightbox';
import Photo from'./Photo';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.location.state.title,
            photos: this.props.location.state.photos,
            lightbox: null
        };
        this.changeLightboxPhoto = this.changeLightboxPhoto.bind(this);
    }

    changeLightboxPhoto(i) {
        this.setState({
            lightbox: i
        });
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <Link to={'/'} className="link">
                        <button type="button"
                                className="close"
                                aria-label="Close"
                        >
                            <span className='h1' aria-hidden="true">&times;</span>
                        </button>
                    </Link>

                    <h2 className='col-11'>{ this.state.title }</h2>
                    { this.state.photos.map((el, i) => {
                        return (
                            <div className='col-3' key={ i } onClick={ () => this.changeLightboxPhoto(i) }>
                                <Photo file={ el } />
                            </div>
                        );
                    }) }
                </div>

                <Lightbox photos={ this.state.photos }
                          index={ this.state.lightbox }
                          handler={ this.changeLightboxPhoto }
                />
            </div>
        );
    }
}

export default Gallery;
