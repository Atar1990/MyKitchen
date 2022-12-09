import "./App.css";
import React from "react";
import Header from "./Functional Comps/Header";
import MyKitchen from "./Classs Componenets/CCMyKitchen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MyKitchen />
      </header>
    </div>
  );
}

export default App;
