import { BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";

import Picker from "./components/Picker";
import Container from "./components/Contacts";

import './App.scss';



function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={
                          <Picker/>
                  }>
                  </Route>
                  <Route path="/about" element={
                      <h1>123</h1>
                  }>
                  </Route>
                  <Route path="/contacts" element={
                      <React.Fragment>
                          <Container/>
                          <div className="contacts"/>
                      </React.Fragment>

                  }>
                  </Route>
              </Routes>
              <div className="App-footer">
                  <h3>Выберите игровой режим</h3>
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;

