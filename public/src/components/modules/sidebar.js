import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Sidebar extends Component {
    render () {
        return (
            <aside>
                <nav>
                    <ul>
                        <li className="active"><Link to='/'><i className="fa fa-home"></i></Link></li>
                    </ul>
                </nav>
            </aside>
        );
    }
}
