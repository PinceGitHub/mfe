import React from "react";
import ReactDom from "react-dom";
import App from "./App";

//Mount function to start up the app
const mount = (el) => {
  ReactDom.render(<App />, el);
};

//In development environment and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  devRoot && mount(devRoot);
}

//Export the mount function
export { mount };
