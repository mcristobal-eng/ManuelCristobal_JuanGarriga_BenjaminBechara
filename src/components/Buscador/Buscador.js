import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Buscador extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            tipo: ''
        }
    }

    
    controlarlaQuery(event) {
        this.setState({ query: event.target.value });
    }

    controlarTipo(event) {
        this.setState({ tipo: event.target.value });
    }

    evitarSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <nav>
                <form className="search-form" onSubmit={(event) => this.evitarSubmit(event)}>

                    
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={this.state.query}
                        onChange={(event) => this.controlarlaQuery(event)}
                    />

                    <input
                        type="text"
                        placeholder="pelicula o serie"
                        value={this.state.tipo}
                        onChange={(event) => this.controlarTipo(event)}
                    />

                    
                    <Link
                        to={`/resultados/${this.state.tipo}/${this.state.query}`}
                        className="btn btn-success btn-sm"
                    >
                        Buscar
                    </Link>

                </form>
            </nav>
        );
    }
}

export default Buscador;