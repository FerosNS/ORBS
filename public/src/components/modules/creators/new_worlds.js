import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NewWorlds extends Component {

    constructor () {
        super();
        this.state = {};
    }

    // Database call
    get_starter_forums () {
        return [
            <div key="forum-1" className="content"><span className="forum-title"><Link to='/user/{:id}'><i className="fa fa-user-circle"></i></Link> <Link to="/world/:{id}">Title 1</Link></span><span className="forum-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>,
            <div key="forum-2" className="content"><span className="forum-title"><Link to='/user/{:id}'><i className="fa fa-user-circle"></i></Link> <Link to="/world/:{id}">Title 2</Link></span><span className="forum-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>,
            <div key="forum-3" className="content"><span className="forum-title"><Link to='/user/{:id}'><i className="fa fa-user-circle"></i></Link> <Link to="/world/:{id}">Title 3</Link></span><span className="forum-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>,
            <div key="forum-4" className="content"><span className="forum-title"><Link to='/user/{:id}'><i className="fa fa-user-circle"></i></Link> <Link to="/world/:{id}">Title 4</Link></span><span className="forum-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>,
            <div key="forum-5" className="content"><span className="forum-title"><Link to='/user/{:id}'><i className="fa fa-user-circle"></i></Link> <Link to="/world/:{id}">Title 5</Link></span><span className="forum-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>,
            <div key="forum-6" className="content"><span className="forum-title"><Link to='/user/{:id}'><i className="fa fa-user-circle"></i></Link> <Link to="/world/:{id}">Title 6</Link></span><span className="forum-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>,
            <div key="forum-7" className="content"><span className="forum-title"><Link to='/user/{:id}'><i className="fa fa-user-circle"></i></Link> <Link to="/world/:{id}">Title 7</Link></span><span className="forum-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>,
            <div key="forum-8" className="content"><span className="forum-title"><Link to='/user/{:id}'><i className="fa fa-user-circle"></i></Link> <Link to="/world/:{id}">Title 8</Link></span><span className="forum-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></div>
        ];
    }

    render () {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="title">Today's New Worlds</h2>
                        <hr />
                        { this.get_starter_forums() }
                    </div>
                </div>
            </div>
        );
    }
}
