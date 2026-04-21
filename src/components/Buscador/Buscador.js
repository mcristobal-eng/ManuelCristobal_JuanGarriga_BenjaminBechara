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

                    <div>
                        <input
                            type="text"
                            placeholder="Buscar..."
                            value={this.state.query}
                            onChange={(event) => this.controlarlaQuery(event)}
                        />

                    </div>
                    <div>
                        <input
                            type="radio"
                            name="peli"
                            id="movie"
                            placeholder="pelicula"
                            value="pelicula"
                            onChange={(event) => this.controlarTipo(event)}

                        />
                        <label htmlFor="movie">Películas</label>
                        <input
                            type="radio"
                            name="peli"
                            id="serie"
                            placeholder="serie"
                            value="serie"
                            onChange={(event) => this.controlarTipo(event)}

                        />

                        <label htmlFor="movie">Series</label>

                    </div>


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