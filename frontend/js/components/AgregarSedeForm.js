import React, { Component } from 'react';

class AgregarSedeForm extends Component {

    constructor() {
        super();
        this.state = {
            nombre: '',
            sedes: []
        }
    }

    componentDidMount() {
        this.fetchSedes();
    }

    fetchSedes() {
        fetch('/api/sedes').then(res => res.json()).then(data => {
            this.setState({ sedes: data });
        });
    }

    obtenerCambio(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    AgregarSede(e) {
        fetch('/api/sedes', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(data => {

                M.toast({ html: 'Sede Agregado' });
                this.setState({ nombre: '' });
                this.fetchSedes();
            })
            .catch(err => console.log(err));
        e.preventDefault();
    }

    eliminarSede(id) {
        if (confirm('estas seguro que quieres eliminar esta sede?')) {
            fetch('/api/sedes/' + id, {
                method: 'DELETE',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(data => {
                M.toast({ html: 'Sede eliminado' });
                this.fetchSedes();
            });
        }
    }

    render() {
        return (
            <div className="section">
                <div className="row">
                    <div className="col s8 push-s2">
                        <button className="waves-effect waves-light btn modal-trigger" data-target="modal1">Agregar Sede</button>
                        <div id="modal1" className="modal">
                            <div className="modal-content">
                                <form onSubmit={this.AgregarSede.bind(this)}>
                                    <div className="input-field col s12">
                                        <input type="text" name="nombre" value={this.state.nombre} placeholder="Nombre de la sede" onChange={this.obtenerCambio.bind(this)}></input>
                                    </div>

                                    <div className="row">
                                        <div className="col s4 push-s8">
                                            <button type="submit" className="btn modal-close waves-effect waves-green">Agregar</button>
                                            <button className="btn modal-close waves-effect waves-green" style={{margin:'10px'}}>Cancelar</button>
                                        </div>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>

                        <table className="striped responsive-table">
                            <thead>
                                <tr>
                                    <th>
                                        Nombre
                                        </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.sedes.map(sede => {
                                        return (
                                            <tr key={sede._id}>
                                                <td>
                                                    {sede.nombre}
                                                </td>
                                                <td>
                                                    <button className="btn teal lighten-1 btnPropio" onClick={() => this.eliminarSede(sede._id)}><i className="material-icons">delete</i></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default AgregarSedeForm;