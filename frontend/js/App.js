import React, { Component } from 'react';
import Nav from './components/Nav';
import AgregarSedeForm from './components/AgregarSedeForm';
import Publicaciones from './components/Publicaciones';
import ComentariosReportados from './components/ComentariosReportados';
import UsuariosReportados from './components/UsuariosReportados';
class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <ul className="tabs">
                                <li className="tab col s3" ><a className="teal-text text-darken-3" href="#publicaciones">Publicaciones</a></li>
                                <li className="tab col s3"><a className="active teal-text text-darken-3" href="#comentarios">comentarios reportados</a></li>
                                <li className="tab col s3"><a className="teal-text text-darken-3" href="#usuarios">usuarios reportados</a></li>
                                <li className="tab col s3"><a className="teal-text text-darken-3" href="#sede">Agregar Sede</a></li>
                            </ul>
                        </div>
                        <div id="publicaciones" className="col s12"><Publicaciones /></div>
                        <div id="comentarios" className="col s12"><ComentariosReportados /></div>
                        <div id="usuarios" className="col s12"><UsuariosReportados /></div>
                        <div id="sede" className="col s12"><AgregarSedeForm /></div>
                    </div>

                </div>
            </div>
        )
    }
}
export default App;