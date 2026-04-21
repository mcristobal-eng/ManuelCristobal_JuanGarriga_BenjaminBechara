import React, { Component } from 'react';
import Header from "../../components/Header/Header";
import Cookies from "universal-cookie";
let cookies = new Cookies();

class Detalle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pelicula: '',
            favorito: false
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


    agregarFavorito() {
        let tipo = this.props.match.params.tipo;
        let clave = tipo === 'pelicula' ? 'favoritosPelis' : 'favoritosSeries';
        let idFav = this.state.pelicula.id;

        let storage = localStorage.getItem(clave);
        if (storage != null) {
            let storageParse = JSON.parse(storage);
            storageParse.push(idFav);
            let storageString = JSON.stringify(storageParse);
            localStorage.setItem(clave, storageString);
            this.setState({ favorito: true });
        } else {
            let arrayIDs = [];
            arrayIDs.push(idFav);
            let arrayString = JSON.stringify(arrayIDs);
            localStorage.setItem(clave, arrayString);
            this.setState({ favorito: true });
        }
    }


    quitarFavorito() {
        let tipo = this.props.match.params.tipo;
        let clave = tipo === 'pelicula' ? 'favoritosPelis' : 'favoritosSeries';
        let idFav = this.state.pelicula.id;

        let storage = localStorage.getItem(clave);
        if (storage != null) {
            let storageParse = JSON.parse(storage);
            let storageFilter = storageParse.filter(id => id !== idFav);
            let storageString = JSON.stringify(storageFilter);
            localStorage.setItem(clave, storageString);
            this.setState({ favorito: false });
        }
    }

    render() {
        let tipo = this.props.match.params.tipo;
        const cookie = cookies.get("sesion");

        let titulo = tipo === 'pelicula' ? this.state.pelicula.title : this.state.pelicula.name;
        let fecha = tipo === 'pelicula' ? this.state.pelicula.release_date : this.state.pelicula.first_air_date;

        let listaGeneros = null;
        if (this.state.pelicula.genres) {
            listaGeneros = this.state.pelicula.genres.map((genero) => (
                <p>{genero.name}</p>
            ))
        }

        return (
            <div>
                <Header />
                {this.state.pelicula === '' ?
                    <h3>Cargando...</h3>
                    :
                    <div>
                        <h1>{titulo}</h1>
                        <img
                            src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}`}
                            alt={titulo}
                        />
                        <p>{this.state.pelicula.overview}</p>
                        <p>Fecha de estreno: {fecha}</p>
                        {tipo === 'pelicula' ?
                            <p>Duración: {this.state.pelicula.runtime} min</p>
                            :
                            <p></p>
                        }
                        <p>Puntuación: {this.state.pelicula.vote_average}</p>
                        <p>Géneros: {listaGeneros}</p>

                        {cookie ? (
                            <>
                                <button className={this.state.favorito === true ? "oculto" : "btn btn-primary"} onClick={() => this.agregarFavorito()}>❤️ Agregar a favoritos</button>
                                <button className={this.state.favorito === false ? "oculto" : "btn btn-primary"} onClick={() => this.quitarFavorito()}>💔 Quitar de favoritos</button>
                            </>
                        ) : (
                            <p></p>
                        )}
                    </div>
                }
            </div>
        );
    }
}


export default Detalle;