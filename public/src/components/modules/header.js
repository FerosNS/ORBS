import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
    constructor () {
        super();
        this.state = {
            show_profile : false
        };

    }

    show_profile () {
        this.state.show_profile ?
        this.setState({ show_profile : false }) :
        this.setState({ show_profile : true });
    }

    render () {
        const INFO = {
            title : "Welcome! Select a world to join or start creating your own!"
        }
        const { show_profile } = this.state;

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
                    <div className="pull-right"><a href="#" onClick={ this.show_profile.bind(this)} ><i className='fa fa-user-o'></i></a></div>
                    <div className={ !show_profile ?  'hidden' : 'profile'}>
                        <span className="profile-tab"><Link to='/account'>Account Information</Link></span>
                        <span className="profile-tab"><Link to='/settings'>Settings</Link></span>
                        <hr className="rev" />
                        <span className="profile-tab"><Link to='/logout'><i className="fa fa-power-off"></i> Sign out</Link></span>
                    </div>
                </div>
            </header>
        )
    }
}
