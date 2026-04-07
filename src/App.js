import { BrowserRouter, Routes, Route } from "react-router-dom"; // Preguntar a lucas si esto está bien importado en app. 

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Buscador from "./components/Buscador/Buscador";
import Home from "./screen/Home/Home";
import Login from "./screen/Login/Login";
import Register from "./screen/Register/Register";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import NotFound from "./screen/NotFound/NotFound";




function App() {
  return (
    <BrowserRouter>  
    <div >
      <Header />
      <Buscador />
       <Switch> 
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" component={Login } />
        <Route path="/register" component={Register} />


        <Route component={NotFound} />

        // aca hay que importar la pag not found, al final. 
      </Switch>

      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
