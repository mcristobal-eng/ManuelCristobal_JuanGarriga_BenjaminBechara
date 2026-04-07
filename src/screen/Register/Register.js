import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <h2 className="alert alert-primary">Registro</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="form-group"> <label htmlFor="email">Email</label>
              <input type="email" className="form-control"id="email"placeholder="Ingresá tu email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" className="form-control" id="password" placeholder="Ingresá tu contraseña"/>
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
    </div>
  );
}

export default Register;