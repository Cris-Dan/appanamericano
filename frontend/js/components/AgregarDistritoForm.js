import React, { Component } from 'react';

class AgregarDistritoForm extends Component {

    constructor() {
        super();
        this.state = {
            nombre: '',
            distritos: []
        }
    }

    componentDidMount() {
        this.fetchDistritos();
    }

    fetchDistritos() {
        fetch('/api/distritos').then(res => res.json()).then(data => {
            this.setState({ distritos: data });
        });
    }

    obtenerCambio(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    AgregarDistrito(e) {
        fetch('/api/distritos', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(data => {

                M.toast({ html: 'Distrito Agregado' });
                this.setState({ nombre: '' });
                this.fetchDistritos();
            })
            .catch(err => console.log(err));
        e.preventDefault();
    }

    eliminarDistrito(id) {
        if (confirm('estas seguro que quieres eliminar este distrito?')) {
            fetch('/api/distritos/' + id, {
                method: 'DELETE',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(data => {
                M.toast({ html: 'Distrito eliminado' });
                this.fetchDistritos();
            });
        }
    }

    render() {
        return (
            <div className="section">
                <div className="row">
                    <div className="col s8 push-s2">
                        <button className="waves-effect waves-light btn modal-trigger" data-target="modal1">Agregar Distrito</button>
                        <div id="modal1" className="modal">
                            <div className="modal-content">
                                <form onSubmit={this.AgregarDistrito.bind(this)}>
                                    <div className="input-field col s12">
                                        <input type="text" name="nombre" value={this.state.nombre} placeholder="Nombre del Distrito" onChange={this.obtenerCambio.bind(this)}></input>
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
                                    this.state.distritos.map(distrito => {
                                        return (
                                            <tr key={distrito._id}>
                                                <td>
                                                    {distrito.nombre}
                                                </td>
                                                <td>
                                                    <button className="btn teal lighten-1 btnPropio" onClick={() => this.eliminarDistrito(distrito._id)}><i className="material-icons">delete</i></button>
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
export default AgregarDistritoForm;