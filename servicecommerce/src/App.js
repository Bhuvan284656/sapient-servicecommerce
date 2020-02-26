import React from "react";
import "./App.css";
import "./css/styles.css";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Main from "./components/main-component";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <main>
          <Navigation></Navigation>
          <Main></Main>
        </main>
      </div>
    </div>
  );
}

export default App;
