import React, { Component, Fragment } from "react";
import { render } from "react-dom";

class Botao extends Component {
  render() {
    return <a href="">Salvar</a>;
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello word!!</h1>
        <Botao />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
