import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Sidebar extends Component {
    constructor () {
        super();
        this.state = {
            active : 'home'
        };
    }

    change_active (cl) {
        this.setState({ 'active' : cl });
    }

    render () {
        const { active } = this.state;
        return (
            <aside>
                <nav>
                    <ul className="orbs-sidebar">
                        <li className={ active === 'home' ? 'active' : '' }><Link onClick={ this.change_active.bind(this, 'home') } key="home" to='/'><i className="fa fa-home"></i></Link></li>
                        <li className={ active === 'worlds' ? 'active' : '' }><Link onClick={ this.change_active.bind(this, 'worlds') }  key="worlds" to='/worlds'><i className="fa fa-superpowers"></i></Link></li>
                    </ul>
                </nav>
            </aside>
        );
    }
}
