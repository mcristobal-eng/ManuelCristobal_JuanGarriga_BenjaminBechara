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
            favoritosParseado.map((id) => {
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
                favoritosParseado.map((id) => {
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
    eliminarFavoritos(id, tipo) {
        let clave = "";
        if (tipo === 'pelicula') {
            clave = 'favoritosPelis';
        } else {
            clave = 'favoritosSeries';
        }

        let favoritos = JSON.parse(localStorage.getItem(clave))
        let nuevoArray = []
        for (let i = 0; i < favoritos.length; i++) {
            if (favoritos[i] !== id) {
                nuevoArray.push(favoritos[i]);

            }
        }
        localStorage.setItem(clave, JSON.stringify(nuevoArray));
        let itemsActualizadas = [];
        if (tipo === 'pelicula') {
            for (let i = 0; i < this.state.peliculasFavoritas.length; i++) {
                if (this.state.peliculasFavoritas[i].id !== id) {
                    itemsActualizadas.push(this.state.peliculasFavoritas[i]);
                }
            }
            this.setState({
                peliculasFavoritas: itemsActualizadas
            });
        } else {
            for (let i = 0; i < this.state.seriesFavoritas.length; i++) {
                if (this.state.seriesFavoritas[i].id !== id) {
                    itemsActualizadas.push(this.state.seriesFavoritas[i]);
                }
            }
            this.setState({
                seriesFavoritas: itemsActualizadas
            });

        }
    }

    render() {

        return (
            <div>
                <h2 className='alert alert-primary'>Peliculas favoritas</h2>

                <section className='row cards'>
                    {this.state.peliculasFavoritas.map((pelicula, i) => (
                        <Card
                            key={i}
                            id={pelicula.id}
                            nombre={pelicula.title}
                            foto={"https://image.tmdb.org/t/p/w342" + pelicula.poster_path}
                            descripcion={pelicula.overview}
                            eliminar={() => this.eliminarFavoritos(pelicula.id, 'pelicula')}
                        />
                    ))}
                </section>
                <h2 className='alert alert-warning'>Series favoritas</h2>

                <section className='row cards'>

                    {this.state.seriesFavoritas.map((tv, i) => (



                        <Card
                            key={i}
                            id={tv.id}
                            nombre={tv.name}
                            foto={"https://image.tmdb.org/t/p/w342" + tv.poster_path}
                            descripcion={tv.overview}
                            eliminar={() => this.eliminarFavoritos(tv.id, 'serie')}




                        />



                    ))}

                </section>
            </div>
        )
    }
}

export default Favoritos;                  