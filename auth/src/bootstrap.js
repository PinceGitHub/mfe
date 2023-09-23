import React from "react";
import ReactDom from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";

import App from "./App";

//Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  onNavigate && history.listen(onNavigate);

  ReactDom.render(<App history={history} onSignIn={onSignIn} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      pathname !== nextPathname && history.push(nextPathname);
    },
  };
};

//In development environment and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");

  devRoot &&
    mount(devRoot, {
      defaultHistory: createBrowserHistory(),
    });
}

//Export the mount function
export { mount };
