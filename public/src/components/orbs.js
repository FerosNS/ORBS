import React, { Component } from 'react';
import Header from './modules/header';
import Sidebar from './modules/sidebar';
import Startup from './modules/creators/startup';

export default class ORBS extends Component {

    render () {
        return (
            <div id="orbs-container" className="container-fluid">
                <Header />
                <Sidebar />
                <div className="orbs-nav-container">
                    { this.props.children }
                </div>
                <div id="main" className="orbs-main-container">
                    <Startup />
                </div>
            </div>
        );
    }
}
