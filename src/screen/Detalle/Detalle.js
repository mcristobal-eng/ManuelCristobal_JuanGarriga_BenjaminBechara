import React, { Component } from 'react';
import Header from "../../components/Header/Header";

class Detalle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pelicula: ''
        }
    }

    componentDidMount() {
        let tipo = this.props.match.params.tipo;
        let id = this.props.match.params.id;

        let tipoApi = tipo === 'pelicula' ? 'movie' : 'tv';

        fetch(`https://api.themoviedb.org/3/${tipoApi}/${id}?api_key=cae07da6b0c1e31fafaea6dc83a1d696`)
            .then(response => response.json())
            .then(data => this.setState({ pelicula: data }))
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                    <Header/>
                
                {this.state.pelicula === '' ?
                    <h3>Cargando...</h3>
                    :
                    <div>
                        <h1>{this.state.pelicula.title}</h1>
                        <img
                            src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}`}
                            alt={this.state.pelicula.title}
                        />
                        <p>{this.state.pelicula.overview}</p>
                        <p>Fecha de estreno: {this.state.pelicula.release_date}</p>
                        <p>Duración: {this.state.pelicula.runtime}</p>
                        <p>Puntuación: {this.state.pelicula.vote_average}</p>
                    </div>
                }
            </div>
        );
    }
}

export default Detalle;