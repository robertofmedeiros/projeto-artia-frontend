import React, { Component } from 'react';
import Projeto from '../../pages/componenteSolar';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class Rotas extends Component {

    render() {
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={Projeto} />
                    <Route path="/componente" exact component={Projeto} />
                </Switch>
            </Router>
        )
    }
}

export default Rotas;