import Header from "../../components/Header/Header";
import React, { Component } from 'react';
import Card from '../../components/Card/Card';

class Series extends Component {

    constructor(props) {
        super(props)
        this.state = {
            series: [],
            pagina: 1

        };
    }

    componentDidMount() {

        fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=cae07da6b0c1e31fafaea6dc83a1d696')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    series: data.results.filter((peli, i) => i < 5)
                });
            })

            .catch(error => console.log(error));
    }

    cargarMas() {

        let paginaSiguiente = this.state.pagina + 1;

        fetch('https://api.themoviedb.org/3/tv/on_the_air?api_key=cae07da6b0c1e31fafaea6dc83a1d696&page=' + paginaSiguiente)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    series: this.state.series.concat(data.results),
                    pagina: paginaSiguiente
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        console.log(this.state);
        return (
            <>
                 <Header/>

                <h2 className="alert alert-primary">Todas las Series </h2>
                <form className="filter-form px-0 mb-3" action="" method="get">
                    <input type="text" name="filter" id="" placeholder="Buscar dentro de la lista" />
                </form>

                <button className="btn btn-info" onClick={() => this.cargarMas()}>
                    Cargar más
                </button>
                <section className="row cards" id="single-card-tv">


                    {
                        this.state.series.length > 0 ? (
                            this.state.series.map((pelicula) => (
                                <Card
                                    key={pelicula.id}
                                    id={pelicula.id}
                                    tipo = "serie"     
                                    nombre={pelicula.name}
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

export default Series;


