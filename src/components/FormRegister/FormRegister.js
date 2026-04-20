import React, { Component } from "react"
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom"

class FormRegister extends Component {
constructor(props) {
    super(props)

    this.state = {
        email: "",
        password: ""
    }
}
// Cambie a la funcion arrow por que cuando queria hacer la redireccion 
// de screen con el  this.props.history.push() el node pensaba que el this era del estado
evitarSubmit = (event) => {
    event.preventDefault()

    const usuarioACrear = {
        email: this.state.email,
        password: this.state.password,
        createdAt: Date.now()
    }


    if (!usuarioACrear.email.includes("@")) {
        alert("Email mal formateado")
        return
    }

    if (usuarioACrear.password.length < 6) {
        alert("La extension del password debe tener un minimo de 6 caracteres")
        return
    }

    const userStorage = localStorage.getItem("users")
    if (userStorage != null) {
        const usersParseado = JSON.parse(userStorage)
        const usersFiltrado = []
        for(let i=0;i<usersParseado.length;i++){
            if(usersParseado[i].email == usuarioACrear.email){
                usersFiltrado.push(usersParseado[i])
            }
        }
        if (usersFiltrado.length > 0){
            alert("Ya exsiste un usuario con el email ingresado")
            return
        }
        else {
            usersParseado.push(usuarioACrear)
            const userEnJson = JSON.stringify(usersParseado)
            localStorage.setItem("users", userEnJson)
        }
    }
    else {
        const usersInicial = [usuarioACrear]
        const userEnJson = JSON.stringify(usersInicial)
        localStorage.setItem("users", userEnJson)
    }
    this.props.history.push("/Login")
}

controlarEmail(event){
    this.setState({email: event.target.value})
}
controlarPassword(event){
    this.setState({password: event.target.value})
}

    render(){
        return(
        <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={(event)=>this.evitarSubmit(event)}>
            <div className="form-group"> 
              <label htmlFor="email">Email</label>
              <input className="form-control"id="email"placeholder="Ingresá tu email" onChange={(event) => this.controlarEmail(event)} value={this.state.email} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" className="form-control" id="password" placeholder="Ingresá tu contraseña" onChange={(event) => this.controlarPassword(event)} value={this.state.password}/>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Registrarse
            </button>
          </form>

          <p className="mt-3 text-center">
            ¿Ya tenés cuenta? <Link to="/login">Iniciar sesión</Link>
          </p>
        </div>
      </div>
        )
    }

}

export default withRouter(FormRegister)