import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
// import { BrowserRouter as Router } from "react-router-dom";
import theme from "./theme";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//   <Provider store={store}>
//     <Router>
//     <ThemeProvider theme={theme}>
//       <App />
//     </ThemeProvider>
//     </Router>
//   </Provider>
//   </React.StrictMode>
// );
