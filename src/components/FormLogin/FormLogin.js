import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom"
import Cookies from "universal-cookie"
let cookies = new Cookies()

class FormLogin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    evitarSubmit = (event) => {
        event.preventDefault()

        const usersStorage = localStorage.getItem("users")

        if (usersStorage == null) {
            alert("Las credenciales ingresadas son invalidas")
            return
        }

        const usersParseado = JSON.parse(usersStorage)

        const usersFiltrado = []

        for (let i = 0; i < usersParseado.length; i++) {
            if (usersParseado[i].email == this.state.email) {
                usersFiltrado.push(usersParseado[i])
            }
        }

        if (usersFiltrado.length == 0) {
            alert("Credenciales incorrectas")
            return
        }

        if (usersFiltrado[0].password != this.state.password) {
            alert("Credenciales incorrectas")
            return
        }

        cookies.set("sesion", true)
        sessionStorage.setItem("usuarioEnSesion", JSON.stringify({ sesionActiva: true }))
        this.props.history.push("/")
    }

    controlarEmail(event) {
        this.setState({ email: event.target.value })
    }
    controlarPassword(event) {
        this.setState({ password: event.target.value })
    }


    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={(event) => this.evitarSubmit(event)}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Ingresá tu email" onChange={(event) => this.controlarEmail(event)} value={this.state.email} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" className="form-control" id="password" placeholder="Ingresá tu contraseña" onChange={(event) => this.controlarPassword(event)} value={this.state.password} />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">
                            Iniciar sesión
                        </button>
                    </form>

                    <p className="mt-3 text-center">
                        ¿No tenés cuenta? <Link to="/register">Registrarse</Link>
                    </p>
                </div>
            </div>
        )
    }

}

export default withRouter(FormLogin)