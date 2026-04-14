import Card from "../../components/Card/Card";
import React, { Component } from "react";

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasFavoritas: [],
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

        return(
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
    </div>
)
    }
}

export default Favoritos;                  