import { Link } from "react-router-dom";
function Card(props) {


    return (
        <article className="single-card-movie">
            <img src={props.foto} className="card-img-top"
                alt="..." />
            <div className="cardBody">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{props.descripcion}</p>
                <Link to="/movie.html" className="btn btn-primary">Ver más</Link>
                <Link to="" className="btn alert-primary">♥️</Link>
            </div>
        </article>




    );
}
export default Card;




