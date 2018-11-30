import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import propTypes from "prop-types";

class Botao extends Component {
  static defaultProps = {
    children: "Salvar"
  };

  static prototypes = {
    onClick: propTypes.func.isRequired,
    children: propTypes.string
  };

  render() {
    return <a href="">{this.props.children}</a>;
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
        <Botao
          onClick={() => {
            alert("Botão 1");
          }}
        />
        <br />
        <Botao onClick={this.handleClick()}>Enviar</Botao>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
