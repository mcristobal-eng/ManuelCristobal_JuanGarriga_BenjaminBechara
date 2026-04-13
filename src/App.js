import { Route, Switch } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Buscador from "./components/Buscador/Buscador";
import Favoritos from "./screen/Favoritos/Favoritos";
import Home from "./screen/Home/Home";
import Login from "./screen/Login/Login";
import Register from "./screen/Register/Register";
import NotFound from "./screen/NotFound/NotFound";
import Serie from "./screen/Serie/Serie"


function App() {
  return (
    <div >
      <Header />

      <Buscador />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/series" component={Serie} />
        <Route path="/favorites" component={Favoritos} />
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
