import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class Botao extends Component {
  static defaultProps = {
    children: "Salvar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        <h1>Hello word!!</h1>
        <h2>{this.state.counter}</h2>
        <Botao onClick={this.handleClick()}>Enviar</Botao>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
