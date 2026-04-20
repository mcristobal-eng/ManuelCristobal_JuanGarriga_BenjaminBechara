import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import Header from "../../components/Header/Header";

class Resultados extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resultados: []
        }
    }

    componentDidMount() {   
        // Tranfomé los datos para que la api sea leida correctamente, preguntar a lucas si está bien
        let tipo = this.props.match.params.tipo;
        let query = this.props.match.params.query;
        let tipoApi = tipo === 'pelicula' ? 'movie' : 'tv';   // aca yo puse, si tipo vale pelicula, tipo api vale movie, si no vale tv
 

        fetch('https://api.themoviedb.org/3/search/' + tipoApi + '?api_key=cae07da6b0c1e31fafaea6dc83a1d696&query=' + query)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                this.setState({ resultados: data.results });
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        let tipo = this.props.match.params.tipo;
        let resultados = this.state.resultados;
        let cards = resultados.map(function (item) {
            let nombre = tipo === 'pelicula' ? item.title : item.name;
            let foto = 'https://image.tmdb.org/t/p/w342/' + item.poster_path;
            return <Card key={item.id} id={item.id} tipo={tipo} nombre={nombre} foto={foto} descripcion={item.overview} />;
        });
        return (
            <div>
                {resultados.length === 0 ? <h3>Cargando...</h3> : <div>{cards}</div>}
            </div>
        );
    }
}

export default Resultados;