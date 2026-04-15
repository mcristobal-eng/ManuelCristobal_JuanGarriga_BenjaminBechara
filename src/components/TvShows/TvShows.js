import React, { Component } from 'react';
import Card from "../Card/Card";



const API = "cae07da6b0c1e31fafaea6dc83a1d696"

class TvShows extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todayTv: [],
            weekTv: []
        };
    }
    componentDidMount() {

        fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=cae07da6b0c1e31fafaea6dc83a1d696')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    todayTv: data.results.filter((tv, i) => i < 6)
                });
            })
            
            .catch(error => console.log(error));

        fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=cae07da6b0c1e31fafaea6dc83a1d696')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    weekTv: data.results.filter((tv, i) => i < 5)
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        console.log(this.state);
        return (
            <>

                <h2 className="alert alert-primary">Popular TV Shows this week</h2>
                <section className="row cards" id="tv-show">
                    {
                        this.state.weekTv.length > 0 ? (
                            this.state.weekTv.map((pelicula) => (
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
                <h2 className="alert alert-primary">Tv shows airing Today </h2>
                <section className="row cards" id="on-air-today">
                    {
                        this.state.todayTv.length > 0 ? (
                            this.state.todayTv.map((pelicula) => (
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

export default TvShows;
