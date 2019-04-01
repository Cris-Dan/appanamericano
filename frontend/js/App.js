import React, { Component } from 'react';
import Nav from './components/Nav';
import AgregarDistritoForm from './components/AgregarDistritoForm';
class App extends Component {
    render() {
        return (
            <div>
                <Nav />

                <div className="container">
                    <AgregarDistritoForm />
                </div>
            </div>
        )
    }
}
export default App;