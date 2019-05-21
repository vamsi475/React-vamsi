import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-light justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">CRUD</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/saga">Saga</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
