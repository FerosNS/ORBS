import React, { Component } from 'react';

export default class Header extends Component {
    render () {
        return (
            <header className="row">
                <div className="col-sm-3">
                    <div className="brand">
                        ORBS
                    </div>
                </div>
                <div className="col-sm-6">
                    lorem ipsum
                </div>
                <div className="col-sm-3">
                    Profile
                </div>
            </header>
        )
    }
}
