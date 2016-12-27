import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
    render () {

        const INFO = {
            title : "Welcome! Select a world to join or start creating your own!"
        }
        
        return (
            <header className="row">
                <div className="col-sm-3">
                    <div className="brand">
                        <Link to="/">ORBS</Link>
                    </div>
                </div>
                <div className="col-sm-6">
                    { INFO.title }
                </div>
                <div className="col-sm-3">
                    <div className="pull-right"><a href="#"><i className='fa fa-user-o'></i></a></div>
                </div>
            </header>
        )
    }
}
