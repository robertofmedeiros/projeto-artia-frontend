import React, { Component } from 'react';
import Projeto from '../../pages/projeto';
import Atividade from '../../pages/atividade';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class Rotas extends Component {

    render() {
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={Projeto} />
                    <Route path="/projeto" exact component={Projeto} />
                    <Route path="/atividade" exact component={Atividade} />
                </Switch>
            </Router>
        )
    }
}

export default Rotas;