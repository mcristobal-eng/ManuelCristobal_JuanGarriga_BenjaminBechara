import React, { Component } from 'react';
import Card from "../Card/Card";




class Peliculas extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nowPlaying: [],
            popular: []
        };
    }
    componentDidMount() {

        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=cae07da6b0c1e31fafaea6dc83a1d696')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    nowPlaying: data.results.filter((peli, i) => i < 6)
                });
            })
            .catch(error => console.log(error));

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=cae07da6b0c1e31fafaea6dc83a1d696')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    popular: data.results.filter((peli, i) => i < 4)
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        console.log(this.state);
        return (
            <>

                <h2 className="alert alert-primary">Popular movies this week</h2>
                <section className="cards" id="movies">
                    {
                        this.state.popular.length > 0 ? (
                            this.state.popular.map((pelicula) => (
                                <Card
                                    key={pelicula.id}
                                    id={pelicula.id}
                                    nombre={pelicula.title}
                                    foto={"https://image.tmdb.org/t/p/w342" + pelicula.poster_path}
                                    descripcion={pelicula.overview}
                                />
                            ))
                        ) : (
                            <p>Cargando...</p>
                        )
                    }
                </section>
                <h2 className="alert alert-primary">Movies now playing</h2>
                <section className="row cards" id="now-playing">
                    {
                        this.state.nowPlaying.length > 0 ? (
                            this.state.nowPlaying.map((pelicula) => (
                                <Card
                                    key={pelicula.id}
                                    id={pelicula.id}
                                    nombre={pelicula.title}
                                    foto={"https://image.tmdb.org/t/p/w342" + pelicula.poster_path}
                                    descripcion={pelicula.overview}
                                />
                            ))
                        ) : (
                            <p>Cargando...</p>
                        )
                    }
                </section>
            </>
        );
    }





}

export default Peliculas;
