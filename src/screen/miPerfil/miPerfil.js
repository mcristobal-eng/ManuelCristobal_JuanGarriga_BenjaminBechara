import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom"
import Cookies from "universal-cookie"
let cookies = new Cookies()

class miPerfil extends Component {

constructor(props) {
    super(props)

}  
        
    logout(){
        Cookies.remove("user-auth-cookie")
    }

}

export default withRouter(miPerfil)