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
import DespesaForm from "./Despesa/form";
import ReceitaForm from "./Receita/form";
import './index.css';

export default function App() {
  const token = localStorage.getItem('token');
  console.log("TOKEEN: ", token);

  function signout() {
    localStorage.removeItem("token");
    window.location.href = "/signin";
  }

  return (
    <Router>
      <div>
        {token ? (
          <nav>
            <ul className="nav-list">
              <li>
                <Link to="/">Relatórios</Link>
              </li>
              <li>
                <Link to="/despesa">Despesas</Link>
              </li>
              <li>
                <Link to="/receita">Receitas</Link>
              </li>
              <li>
                <Link to="/despesa-form">Criar Despesa</Link>
              </li>
              <li>
                <Link to="/receita-form">Criar Receita</Link>
              </li>
              <li>
                <a href="#" onClick={signout}>Sair</a>
              </li>
            </ul>
          </nav>
        ) : (
          <nav>
            <ul className="nav-list">
              <li>
                <Link to="/signin">Entrar</Link>
              </li>
              <li>
                <Link to="/signup">Cadastrar</Link>
              </li>
            </ul>
          </nav>
        )}


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
          <Route path="/despesa-form">
            <DespesaForm />
          </Route>
          <Route path="/receita">
            <Receita />
          </Route>
          <Route path="/receita-form">
            <ReceitaForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}