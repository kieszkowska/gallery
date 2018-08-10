import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './components/Header';
import Album from './components/Album';
import Gallery from "./components/Gallery";

class App extends Component {

    render() {
        const currentKey = window.location.pathname.split('/')[1] || '/';
        const timeout = { enter: 500, exit: 300 };
        return (
            <div className="App container">
                <Header />
                <TransitionGroup component="main" className="page-main">
                    <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
                        <section className="page-main-inner">
                            <Switch location={window.location}>
                                <Route exact path="/" component={ Album } />
                                <Route path="/gallery" component={ Gallery } />
                                <Route render={() => <h4>404 Not Found</h4>} />
                            </Switch>
                        </section>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default App;
