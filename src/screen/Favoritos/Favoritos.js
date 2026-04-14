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
render(){

    return(
        <div>
            <h2 className='alert alert-primary'> Peliculas favoritas </h2>
            <section className = 'row cards'>
                {this.state.peliculasFavoritas.map((pelicula,i) =>(

                    <Card key = {i}
                    id = {pelicula.id}
                    nombre = {pelicula.title}
                    foto = {"https://image.tmdb.org/t/p/w342" + pelicula.poster_path}
                    descripcion = {pelicula.overview}
                    />

                )
                )}

                 </section>
        </div>
    )
}

}

export default Favoritos;