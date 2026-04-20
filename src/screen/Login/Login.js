import { Link } from "react-router-dom";
import FormLogin from "../../components/FormLogin/FormLogin"
import Header from "../../components/Header/Header";

function Login() {

    return (
        <nav>
               <Header/>
           
            <h2 className="alert alert-primary">Iniciar sesión</h2>

            <FormLogin/> 
        </nav>);
}

export default Login






