import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Picker from "./components/Picker";
import Contacts from "./components/Contacts";
import Works from "./components/Works";
import About from "./components/About";
import "./App.scss";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isWindowMobile = window.innerWidth <= 768; // Пороговое значение для мобильных устройств (может быть другим)
      setIsMobile(isWindowMobile);
    };

    // Определение ширины окна при загрузке страницы
    handleResize();

    // Слушатель события изменения размера окна
    window.addEventListener("resize", handleResize);

    // Отмена подписки на событие при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Пустой массив зависимостей для вызова useEffect только при монтировании

  return (
    <div className="App">
      {isMobile ? (
        <div className="mobile-message">
          <p>Unfortunately this application is built </p>
          <p>only for Wide Screens (PC, tablet)</p>
          <br />
          <p>Open this link from PC please</p>
        </div>
      ) : (
        <BrowserRouter basename="/fortnite-site">
          <Routes>
            <Route path="/" element={<Picker />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/works"
              element={
                <React.Fragment>
                  <Works />
                </React.Fragment>
              }
            />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
