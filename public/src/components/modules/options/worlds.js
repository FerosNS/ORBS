import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Worlds extends Component {

    //Database call
    get_user_orbs () {
        return [
            <li key="option1" className="orbs-panel-option"><i className="fa fa-frown-o"></i>You have not created any Orbs yet!</li>
        ];
    }
    
    render () {
        return (
            <div className="orbs-nav-panel">
                <h4>Your Orbs</h4>
                <ul className="orbs-panel-options">
                    { this.get_user_orbs() }
                </ul>
            </div>
        );
    }
}
