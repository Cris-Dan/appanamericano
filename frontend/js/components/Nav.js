import React, { Component } from 'react';
import InicioSesion from './InicioSesion';
class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper teal lighten-1">
                    <a href="#" className="brand-logo">Appanamericano</a>
                    <InicioSesion/>
                </div>
            </nav>
        )
    }
}
export default Nav;