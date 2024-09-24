import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Relatorio from "./Relatorio";
import Signin from "./Signin";
import Signup from "./Signup";
import Despesa from "./Despesa";
import Receita from "./Receita";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Relatorios</Link>
          </li>
          <li>
            <Link to="/despesa">Despesas</Link>
          </li>
          <li>
            <Link to="/receita">Receitas</Link>
          </li>
          <li>
            <Link to="/signin">Entrar</Link>
          </li>
          <li>
            <Link to="/signup">Cadastrar</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Relatorio />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/despesa">
            <Despesa />
          </Route>
          <Route path="/receita">
            <Receita />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}