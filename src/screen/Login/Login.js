import { Link } from "react-router-dom";

function Login() {

    return (
        <nav>
            <h2 className="alert alert-primary">Iniciar sesión</h2>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email"className="form-control"id="email" placeholder="Ingresá tu email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" className="form-control"id="password" placeholder="Ingresá tu contraseña"/>
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
        </nav>);
}

export default Login






