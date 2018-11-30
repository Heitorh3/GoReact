import React, { Component, Fragment } from "react";
import { render } from "react-dom";

class Botao extends Component {
  render() {
    return (
      <a href="" onClick={this.handleClick()}>
        {this.props.title}
      </a>
    );
  }
}

class App extends Component {
  handleClick() {
    alert("Botão clicado");
  }
  render() {
    return (
      <Fragment>
        <h1>Hello word!!</h1>
        <Botao title="enviar" onClick={this.handleClick()} />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
