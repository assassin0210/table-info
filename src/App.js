import React from "react";
import { Home } from "./pages/Home";
import GlobalStyle from "./components/GlobolStyle";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path={["/game/:id", "/"]} render={() => <Home />} />
    </div>
  );
}

export default App;
