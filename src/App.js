import React, { Component } from 'react';
import Album from './components/Album';

class App extends Component {
    render() {
        return (
            <div className="App container">
                <h1 className='my-5'>Gallery</h1>
                <Album />
            </div>
        );
    }
}

export default App;
