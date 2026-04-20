import { Route, Switch } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Favoritos from "./screen/Favoritos/Favoritos";
import Home from "./screen/Home/Home";
import Login from "./screen/Login/Login";
import Register from "./screen/Register/Register";
import NotFound from "./screen/NotFound/NotFound";
import Series from "./screen/Series/Series"
import Movies from "./screen/Movies/Movies";
import Detalle from "./screen/Detalle/Detalle";
import Resultados from "./screen/Resultados/Resultados";


function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/series" component={Series} />
        <Route path="/favorites" component={Favoritos} />
        <Route path="/movies" component={Movies} />
        <Route path="/detalle/:tipo/:id" component={Detalle} />
        <Route path="/resultados/:tipo/:query" component={Resultados} />


        <Route component={NotFound} />

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
