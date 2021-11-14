import React from "react";
import { Home } from "./pages/Home";
import GlobalStyle from "./components/GlobolStyle";
import { Route } from "react-router-dom";
import { GameDetail } from "./components/GameDitail";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/game/:id">
        <GameDetail />
      </Route>
    </div>
  );
}

export default App;
