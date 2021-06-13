import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import createAppStore from "./store";
import { Provider } from "react-redux";

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://11495a5cf3974960b64bcc3f829ca0f8@o844070.ingest.sentry.io/5814364",
  integrations: [new Integrations.BrowserTracing()],

  tracesSampleRate: 1.0,
});

export const store = createAppStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root"),
);

serviceWorker.unregister();
