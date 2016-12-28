import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Suggested extends Component {
    //Database call
    get_popular_orbs () {
        return [
            <li key="option1" className="orbs-panel-option"><i className="fa fa-user"></i>World 1</li>,
            <li key="option2" className="orbs-panel-option"><i className="fa fa-user"></i>World 2</li>,
            <li key="option3" className="orbs-panel-option"><i className="fa fa-user"></i>World 3</li>,
            <li key="option4" className="orbs-panel-option"><i className="fa fa-user"></i>World 4</li>
        ];
    }

    render () {
        return (
            <div className="orbs-nav-panel">
                <h4>Popular Orbs</h4>
                <hr />
                <ul className="orbs-panel-options">
                    { this.get_popular_orbs() }
                </ul>
            </div>
        );
    }
}
