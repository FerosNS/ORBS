import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Sidebar extends Component {

    switch_active () {
        console.log(this);
    }

    render () {
        return (
            <aside>
                <nav>
                    <ul className="orbs-sidebar">
                        <li className="active" onClick={ this.switch_active() }><Link to='/'><i className="fa fa-home"></i></Link></li>
                        <li onClick={ this.switch_active() }><Link to='/worlds'><i className="fa fa-superpowers"></i></Link></li>
                    </ul>
                </nav>
            </aside>
        );
    }

    componentWillUpdate () {
        
    }

    componentWillMount() {

    }

}
