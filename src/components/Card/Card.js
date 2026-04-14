import { Link } from "react-router-dom";
function Card(props) {
    function agregarAFavoritos(){
        let favoritos = []
        let recuperoStorage = localStorage.getItem('favoritosPelis');
        if (recuperoStorage != null) {
            favoritos =JSON.parse(recuperoStorage);
        }
        let existe = false;
        for(let i = 0; i< favoritos.lenght; i++){
            if(favoritos[i] === props.id){
                existe = true;
            }
        }
        if (existe === false){
            favoritos.push(props.id)
        }
        let favoritosTexto = JSON.stringify(favoritos);
        localStorage.setItem( 'favoritosPelis',favoritosTexto);
        console.log("guardado", favoritosTexto)

    }


    return (
        <article className="single-card-movie">
            <img src={props.foto} className="card-img-top"
                alt="..." />
            <div className="cardBody">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{props.descripcion}</p>
                <Link to="/movie.html" className="btn btn-primary">Ver más</Link>
                <button className="btn alert-primary" onClick={agregarAFavoritos}>♥️</button>
            </div>
        </article>




    );
}
export default Card;




