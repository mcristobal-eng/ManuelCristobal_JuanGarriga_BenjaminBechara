import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { withRouter } from "react-router-dom"
let cookies = new Cookies()



class Header extends Component {
    constructor(props) {
        super(props)
    this.state={
        sesion : cookies.get("sesion")
    }

    }

    logout() {
        cookies.remove("sesion")
        this.props.history.push("/Login")
        this.setState({sesion:null})
    }

    render() {
        return (

            <div class="container">
                <h1>UdeSA Movies </h1>
                <nav>

                    <ul className="nav nav-tabs my-4">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="movies">
                                Películas
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/series">
                                Series
                            </Link>
                        </li>

                        {this.state.sesion == null ? (
                            <>
                                <li className="nav-item ms-auto">
                                <Link className="nav-link" to="/register">
                                        Registro
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                </li>
                            </>)
                            : (
                                <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/favorites">
                                        Favoritas
                                    </Link>
                                </li>
                                <li className="nav-item" onClick={()=>this.logout()}>
                                        Log Out
                                </li>
                                </>
                            )
                        }





                    </ul>
                </nav>
            </div>);
    }
}


export default withRouter(Header)

