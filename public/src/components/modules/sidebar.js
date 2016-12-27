import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Sidebar extends Component {
    constructor () {
        super();
        this.state = {
            active : 1
        };
        this.switch_active = this.switch_active.bind(this);
    }

    switch_active (con) {
        console.log(con);
    }

    render () {
        return (
            <aside>
                <nav>
                    <ul className="orbs-sidebar">
                        <li onClick={ this.switch_active(this) }><Link to='/'><i className="fa fa-home"></i></Link></li>
                        <li onClick={ this.switch_active(this) }><Link to='/worlds'><i className="fa fa-superpowers"></i></Link></li>
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
