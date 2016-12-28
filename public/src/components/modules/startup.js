import React, { Component } from 'react';
import NewWorlds from './creators/new_worlds';

export default class Startup extends Component {
    constructor () {
        super();
        this.state = {
            component : <NewWorlds />
        };
        this.renderComponent = this.renderNewComponent.bind(this);
    }

    renderNewComponent (component) {
        this.setState.component = component;
    }

    render () {
        const { component } = this.state;
        return (
            <div>
                { component }
            </div>
        );
    }
}
