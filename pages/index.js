import React, { Component } from "react";
import App from "../components/App";
import { addTodo } from "../actions";

export default class Index extends Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;

    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    reduxStore.dispatch(addTodo("Server todo"));
    return {};
  }

  render() {
    return <App />;
  }
}
