import { BrowserRouter, Route, Routes, Link,useLocation} from "react-router-dom";
import React,{useState} from "react";

import Picker from "./components/Picker";
import Contacts from "./components/Contacts";
import Works from "./components/Works";
import About from "./components/About";

import './App.scss';

function App() {

  return (
      <div className="App">
          <BrowserRouter basename="/fortnite-site">
              <Routes>
                  <Route path="/" element={
                          <Picker/>
                  }>
                  </Route>

                  <Route path="/about" element={
                      <About/>
                  }>
                  </Route>

                  <Route path="/works" element={
                      <React.Fragment>
                          <Works/>
                      </React.Fragment>
                  }>
                  </Route>

                  <Route path="/contacts" element={
                          <Contacts/>
                  }>
                  </Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;

