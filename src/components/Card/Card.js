import { Link } from "react-router-dom";
import Cookies from "universal-cookie"; 
let cookies = new Cookies();

function Card(props) {
    let botonEliminar =null;
    if (props.eliminar) {
        botonEliminar = <button onClick={props.eliminar}>Eliminar</button>;}
    let botonCorazon =null;
    if (cookies.get("sesion")){
            botonCorazon = <button className="btn alert-primary" onClick={agregarAFavoritos}>♥️</button>
        }
    
    function agregarAFavoritos() {
        let clave = "";
        if (props.tipo === 'pelicula') {
            clave = 'favoritosPelis';
        } else {
            clave = 'favoritosSeries';
        }

        let favoritos = []
        let recuperoStorage = localStorage.getItem(clave);

        if (recuperoStorage != null) {
            favoritos = JSON.parse(recuperoStorage);
        }
       if (favoritos.includes(props.id) === false) {
        favoritos.push(props.id);
    }

    let favoritosTexto = JSON.stringify(favoritos);
    localStorage.setItem(clave, favoritosTexto);

    }


    return (
        <article className="single-card-movie">
            <img src={props.foto} className="card-img-top"
                alt="..." />
            <div className="cardBody">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{props.descripcion}</p>
                <Link to={`/detalle/${props.tipo}/${props.id}`} className="btn btn-primary">
                    Ver más
                </Link>
                {botonCorazon}
                {botonEliminar}
            </div>
        </article>




    );
}

export default Card;




