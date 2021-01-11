import React from "react";
import Main from "../template/Main";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
  <Main
    icon="home"
    title="Início"
    subtitle="Segundo projeto do capítulo de React"
  >
    <div className="display-4">bem vindo</div>
    <hr />
    <p className="mb-0">
      Sistema para exemplificar a construção de um cadastro desenvolvido em
      React.
    </p>
  </Main>
);
