import React, { Component } from 'react';
class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper teal lighten-1">
                    <a href="#" className="brand-logo">Appanamericano</a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <form>
                                <div className="input-field">
                                    <input id="search" type="search" required></input>
                                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                    <i className="material-icons">close</i>
                                </div>
                            </form>
                        </li>
                    </ul>

                </div>
            </nav>
        )
    }
}
export default Nav;