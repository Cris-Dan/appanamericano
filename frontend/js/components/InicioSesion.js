import React, { Component } from 'react';

class InicioSesion extends Component {

    constructor() {
        super();
        this.state = {
            usuario_admin: '',
            password_admin: ''
        }
    }

    ComprobarUsuario(e) {

    }

    obtenerCambio(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (<div>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#modal" class="modal-trigger">Iniciar Sesion</a></li>
            </ul>
            <div id="modal" className="modal">
                <div className="modal-content">
                    <form onSubmit={this.ComprobarUsuario.bind(this)}>
                        <div className="input-field">
                            <i className="material-icons prefix teal-text text-darken-2">person</i>
                            <input type="text" id="usuario_admin" name="usuario_admin" value={this.state.usuario_admin} onChange={this.obtenerCambio.bind(this)}></input>
                            <label htmlFor="usuario_admin">Username</label>
                        </div>
                        <br></br>
                        <div className="input-field">
                            <i className="material-icons prefix teal-text text-darken-2">lock</i>
                            <input type="text" id="password_admin" name="password_admin" value={this.state.password_admin} onChange={this.obtenerCambio.bind(this)}></input>
                            <label htmlFor="password_admin">Password</label>
                        </div>
                        <br></br>
                        <input type="submit" value="Login" className="btn btn-large"></input>
                    </form>
                </div>
            </div>
        </div>)
    }

}

export default InicioSesion;