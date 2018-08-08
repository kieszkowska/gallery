import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Album from './components/Album';
import Gallery from "./components/Gallery";

class App extends Component {
    render() {
        return (
            <div className="App container">
                <Header />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={ Album } />
                        <Route path="/gallery" component={ Gallery } />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
