import { Link } from "react-router-dom";
import FormRegister from "../../components/FormRegister/FormRegister"
import Header from "../../components/Header/Header";

function Register() {
  return (
    <div>
      <Header />

      <h2 className="alert alert-primary">Registro</h2>
      <FormRegister />

    </div>
  );
}

export default Register;