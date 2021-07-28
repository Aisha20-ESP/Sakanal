//import logo from './logo.png';
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
//import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState } from "react";
import { Button } from "reactstrap";

function App() {
  const [tc, setTc] = useState(12);
  return (
    <div className="App">
      <Header />
      <Landing />

      <header className="App-header">
        <form>
          <div className="form-group">
            <span>{tc}</span>
            <label for="exampleInputEmail1">Nom d'utilisateur</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              Veuillez enter votre nom d'utilisateur
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary" className="buton">
            Envoyer
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
// vérifier le mail  : delsie@cloudport.tech
