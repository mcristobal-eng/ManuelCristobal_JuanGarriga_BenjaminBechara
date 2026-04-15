import Card from "../../components/Card/Card";
import React, { Component } from "react";
import TvShows from "../../components/TvShows/TvShows";

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasFavoritas: [],
            seriesFavoritas: [],
        };
        
    }
    componentDidMount() {
        let favoritosPelis = localStorage.getItem('favoritosPelis')
        if (favoritosPelis != null) {
            let favoritosParseado = JSON.parse(favoritosPelis);
            favoritosParseado.forEach((id) => {
                fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=cae07da6b0c1e31fafaea6dc83a1d696")
                    .then(response => response.json())
                    .then(data => {
                        let copia = this.state.peliculasFavoritas;
                        copia.push(data);
                        this.setState({
                            peliculasFavoritas: copia
                        });
                    })
                    .catch(error => console.log(error));


            });
        }

        let favoritosSeries = localStorage.getItem('favoritosSeries')
        if (favoritosSeries != null) {
            let favoritosParseado = JSON.parse(favoritosSeries);
            favoritosParseado.forEach((id) => {
                fetch("https://api.themoviedb.org/3/tv/" + id + "?api_key=cae07da6b0c1e31fafaea6dc83a1d696")
                    .then(response => response.json())
                    .then(data => {
                        let copia = this.state.seriesFavoritas;
                        copia.push(data);
                        this.setState({
                            seriesFavoritas: copia
                        });
                    })
                    .catch(error => console.log(error));


            });
        }
    }
    eliminarFavoritos(id) {
        let favoritos = JSON.parse(localStorage.getItem('favoritosPelis'))
        let nuevoArray = []
        for (let i = 0; i < favoritos.length; i++) {
            if (favoritos[i] !== id) {
                nuevoArray.push(favoritos[i]);

            }
        }
        localStorage.setItem('favoritosPelis', JSON.stringify(nuevoArray));
        let pelisActualizadas = [];
        for (let i = 0; i < this.state.peliculasFavoritas.length; i++) {
            if (this.state.peliculasFavoritas[i].id !== id) {
                pelisActualizadas.push(this.state.peliculasFavoritas[i]);
            }
        }
        this.setState({
            peliculasFavoritas: pelisActualizadas
        });


    }

    render() {

        return (
            <div>
                <h2 className='alert alert-primary'>Peliculas favoritas</h2>

                <section className='row cards'>
                    {this.state.peliculasFavoritas.map((pelicula, i) => (
                        <div key={i}>

                            <Card
                                id={pelicula.id}
                                nombre={pelicula.title}
                                foto={"https://image.tmdb.org/t/p/w342" + pelicula.poster_path}
                                descripcion={pelicula.overview}
                            />

                            <button onClick={() => this.eliminarFavoritos(pelicula.id)}>
                                Eliminar
                            </button>

                        </div>
                    ))}
                </section>
                <h2 className='alert alert-warning'>Series favoritas</h2>

                <section className='row cards'>

                    {this.state.seriesFavoritas.map((tv, i) => (

                        <div key={i}>

                            <Card
                                id={tv.id}
                                nombre={tv.name}
                                foto={"https://image.tmdb.org/t/p/w342" + tv.poster_path}
                                descripcion={tv.overview}
                            />

                        </div>

                    ))}

                </section>
            </div>
        )
    }
}

export default Favoritos;                  